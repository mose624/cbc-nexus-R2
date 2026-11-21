"use strict";
const crypto = require("crypto");

const API_BASE = "https://api.intasend.com/api/v1";

function getConfig() {
  const publishableKey = String(process.env.INTASEND_PUBLISHABLE_KEY || "").trim();
  const secretKey = String(process.env.INTASEND_SECRET_KEY || "").trim();
  const webhookChallenge = String(process.env.INTASEND_WEBHOOK_CHALLENGE || "").trim();
  if (!publishableKey || !secretKey) {
    throw new Error("IntaSend is not configured. Add INTASEND_PUBLISHABLE_KEY and INTASEND_SECRET_KEY in the server environment.");
  }
  return { publishableKey, secretKey, webhookChallenge };
}

async function readJsonResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.detail || data?.message || data?.error || "IntaSend request failed.";
    throw new Error(String(message).slice(0, 300));
  }
  return data;
}

async function createCheckout({ email, amount, currency = "USD", apiRef, redirectUrl, firstName, lastName, phoneNumber }) {
  const config = getConfig();
  const normalizedEmail = String(email || "").trim().toLowerCase();
  const value = Math.round(Number(amount) * 100) / 100;
  const reference = String(apiRef || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) throw new Error("A valid customer email is required.");
  if (!Number.isFinite(value) || value < 2.00) throw new Error("IntaSend checkout requires a minimum payment of USD 2.00.");
  if (String(currency).toUpperCase() !== "USD") throw new Error("CBE Nexus international checkout must use USD.");
  if (!reference || reference.length > 100) throw new Error("A valid unique payment reference is required.");
  const body = {
    amount: value,
    currency: "USD",
    email: normalizedEmail,
    api_ref: reference,
    unique_api_ref: true,
    redirect_url: String(redirectUrl || "")
  };
  if (firstName) body.first_name = String(firstName).slice(0, 80);
  if (lastName) body.last_name = String(lastName).slice(0, 80);
  if (phoneNumber) body.phone_number = String(phoneNumber).slice(0, 30);
  const response = await fetch(API_BASE + "/checkout/", {
    method: "POST",
    headers: {
      "X-IntaSend-Public-API-Key": config.publishableKey,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(15000)
  });
  const data = await readJsonResponse(response);
  const checkoutId = String(data.id || data.checkout_id || "").trim();
  const checkoutUrl = String(data.url || data.checkout_url || "").trim();
  if (!checkoutId || !/^https:\/\//i.test(checkoutUrl)) {
    throw new Error("IntaSend did not return a valid hosted checkout URL and checkout ID.");
  }
  return { checkoutId, checkoutUrl, apiRef: reference, amount: value, currency: "USD" };
}

async function getPaymentStatus(checkoutId, identifierType = "checkout_id") {
  const config = getConfig();
  const id = String(checkoutId || "").trim();
  if (!id) throw new Error("An IntaSend checkout ID is required for payment verification.");
  const response = await fetch(API_BASE + "/payment/status/", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + config.secretKey,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(identifierType === "invoice_id" ? { invoice_id: id } : { checkout_id: id }),
    signal: AbortSignal.timeout(12000)
  });
  const data = await readJsonResponse(response);
  return data.invoice || data;
}

function matchesExpectedPayment(invoice, expected) {
  const state = String(invoice?.state || invoice?.status || "").toUpperCase();
  const apiRef = String(invoice?.api_ref || invoice?.api_reference || "");
  const currency = String(invoice?.currency || "").toUpperCase();
  const amount = Number(invoice?.value ?? invoice?.amount);
  return state === "COMPLETE" &&
    apiRef === String(expected.apiRef) &&
    currency === "USD" &&
    Number.isFinite(amount) &&
    Math.round(amount * 100) === Math.round(Number(expected.amount) * 100);
}

function challengeMatches(received) {
  const expected = getConfig().webhookChallenge;
  const actual = String(received || "");
  if (!expected || !actual) return false;
  const a = Buffer.from(expected);
  const b = Buffer.from(actual);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

module.exports = { createCheckout, getPaymentStatus, matchesExpectedPayment, challengeMatches };
