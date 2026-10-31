import { proxyToRender } from "../../_proxy.js";

export async function onRequest(context) {
  return proxyToRender(context.request);
}
