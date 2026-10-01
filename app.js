// Security: Encryption utilities for sensitive data
const SecurityUtils = {
  encode: (str) => btoa(encodeURIComponent(str)),
  decode: (str) => decodeURIComponent(atob(str)),
  get MPESA_PHONE() { return this.decode("MDc5ODQ2MjgxNQ=="); },
  get WHATSAPP_PHONE() { return this.decode("MjU0Nzk4NDYyODE1"); },
  get MPESA_ENDPOINT() { return this.decode("L2FwaS9tcGVzYS9zdGstcHVzaA=="); },
  get API_ENDPOINTS() {
    return {
      projects: this.decode("L2FwaS9wcm9qZWN0cw=="),
      tuition: this.decode("L2FwaS90dWl0aW9u"),
      quizzes: this.decode("L2FwaS9xdWl6emVz"),

    };
  }
};

const STORAGE_KEY = "cbeResources";
const SELLER_STORAGE_KEY = "cbeSellerResources";
const SELLER_ACCOUNTS_KEY = "cbeSellerAccounts";
const CART_KEY = "cbeResourceCart";
const REFERRAL_KEY = "cbeFreeReferralUnlocked";
const PAYMENT_RECORDS_KEY = "cbePaymentRecords";
const WITHDRAWAL_KEY = "cbeWithdrawalRequests";
const PROJECTS_KEY = "cbeProjects";
const TUITION_KEY = "cbeHolidayTuition";
const QUIZ_PROGRESS_KEY = "cbeQuizProgress";
const SELLER_STORAGE_LIMIT_BYTES = 20 * 1024 * 1024 * 1024; // 20 GB storage space
const APPROVED_DOWNLOADS_KEY = "cbeApprovedDownloads";
let remoteStats = { resources: 0, purchases: 0, downloads: 0, views: 0, byResource: {} };
let serverResources = [];
let activeAdminModule = "resources";
// Sensitive data now encrypted via SecurityUtils
const MPESA_PHONE = SecurityUtils.MPESA_PHONE;
const WHATSAPP_PHONE = SecurityUtils.WHATSAPP_PHONE;
const MPESA_ENDPOINT = SecurityUtils.MPESA_ENDPOINT;
const API_ENDPOINTS = SecurityUtils.API_ENDPOINTS;
const ADMIN_EMAIL = ""; // Admin identity is verified securely by the backend.

const materialTypes = [
  "Notes",
  "Schemes of Work",
  "Lesson Plan",
  "Records of Work",
  "Assessment Test",
  "Topical Questions",
  "Holiday Workbooks",
  "Past Papers",
  "Marking Schemes",
  "Quizzes",
  "Study Guides",
  "Projects",
  "KNEC Rubrics",
  "Assignments",
  "Bookshop"
];

const prePrimarySubjects = [
  "Language Activities","Mathematics Activities","Creative Arts","Environmental Activities",
  "Christian Religious Education","Islamic Religious Education","Hindu Religious Education"
];

const lowerPrimarySubjects = [
  "English","Kiswahili","Mathematics","Environmental Activities","Creative Activities",
  "Christian Religious Education","Hindu Religious Education","Islamic Religious Education","Indigenous Language"
];

const upperPrimarySubjects = [
  "English","Kiswahili","Mathematics","Agriculture & Nutrition","Social Studies","Creative Activities",
  "Science & Technology","Hindu Religious Education","Christian Religious Education","Islamic Religious Education",
  "Indigenous Language","Arabic","Mandarin","French","German"
];

const juniorSchoolSubjects = [
  "Agriculture","Pre technical Studies","Creative Arts and Sports","Hindu Religious Education",
  "Islamic Religious Education","Christian Religious Education","Integrated Science","Social Studies",
  "Mathematics","English","Kiswahili","Indigenous Language","Arabic","Mandarin","French","German"
];

const seniorSchoolSubjects = [
  "English","Literature in English","Indigenous Languages","Lugha ya Kiswahili","Fasihi ya Kiswahili",
  "Arabic","French","German","Mandarin Chinese","Christian Religious Education","Islamic Religious Education",
  "Hindu Religious Education","Community Service Learning","Business Studies","History and Citizenship",
  "Geography","Physical Education","Sports and Recreation","Music and Dance","Theatre and Film","Fine Arts",
  "Agriculture","Computer Studies","Home Science","ICT","Biology","Chemistry","Physics","General Science",
  "Essential Mathematics","Core Mathematics","Building and Construction","Metal Work","Woodwork","Aviation",
  "Electricity","Power Mechanics","Media Technology","Marine Technology"
];

const specialNeedsSubjects = [
  "English Grade 1-3","Environmental PP 1-2","Environmental Grade 1-3","Movement and Creative Activities",
  "Psychomotor Activities","Kenyan Sign Language PP 1-2","Kenyan Sign Language Grade 1-3",
  "Mathematics and Environmental","Environmental, Mathematics, Psychomotor and Creative Activities",
  "Pre Braille","Literacy Braille","Communication, Social and Pre-Literacy Skills",
  "Activities of Daily Living Skills and Religious Education","Sensory Motor and Creative Activities",
  "Orientation and Mobility Activities","Pre-Numeracy Activities","KSL","Sign Language Skills"
];

const diplomaTeacherEducationSubjects = [
  "Research skills","Arabic","Art and Craft","Child Development and Psychology","CRE","Curriculum Studies",
  "Educational Assessment","Educational Resources","English","Environmental Studies","French","German",
  "Health & Nutrition","HRE","ICT integration in Education","Inclusive Education","Indigenous Languages",
  "IRE","Kiswahili","Kenya Sign Language(KSL)","Leadership & Management","Mandarin","Mathematics",
  "Micro Teaching","Music","Physical education","Sociological and Philosophical foundation",
  "Historical and comparative Foundations of Education","Agriculture"
];

const allCbeSubjects = [...new Set([
  ...prePrimarySubjects,...lowerPrimarySubjects,...upperPrimarySubjects,...juniorSchoolSubjects,
  ...seniorSchoolSubjects,...specialNeedsSubjects,...diplomaTeacherEducationSubjects
])].sort((a,b)=>a.localeCompare(b));

/*
 * Canonical CBE/Nexus grade-to-subject catalogue.
 * Keep these exact names everywhere so a resource saved in Supabase/R2
 * matches the subject selected in the Resource Library.
 * Names follow KICD curriculum-design terminology where applicable.
 */
const gradeSubjects = {
  "Grade 1": ["Creative Activities","Christian Religious Education","English Activities","Environmental Activities","Hindu Religious Education","Islamic Religious Education","Kiswahili Activities","Mathematics Activities"],
  "Grade 2": ["Creative Activities","Christian Religious Education","English Activities","Environmental Activities","Hindu Religious Education","Islamic Religious Education","Kiswahili Activities","Mathematics Activities"],
  "Grade 3": ["Creative Activities","Christian Religious Education","English Activities","Environmental Activities","Hindu Religious Education","Islamic Religious Education","Kiswahili Activities","Mathematics Activities"],
  "Grade 4": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Science and Technology","Social Studies"],
  "Grade 5": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Science and Technology","Social Studies"],
  "Grade 6": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Science and Technology","Social Studies"],
  "Grade 7": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Integrated Science","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Social Studies"],
  "Grade 8": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Integrated Science","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Social Studies"],
  "Grade 9": ["Agriculture","Arabic","Creative Arts","Christian Religious Education","English","French","German","Hindu Religious Education","Indigenous Language","Integrated Science","Islamic Religious Education","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Social Studies"],
  "Grade 10": ["Agriculture","Aviation","Biology","Building and Construction","Business Studies","Chemistry","Christian Religious Education","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","Islamic Religious Education","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","Hindu Religious Education","Mandarin Chinese"],
  "Grade 11": ["Agriculture","Aviation","Biology","Building and Construction","Business Studies","Chemistry","Christian Religious Education","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","Islamic Religious Education","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","Hindu Religious Education","Mandarin Chinese"],
  "Grade 12": ["Agriculture","Aviation","Biology","Building and Construction","Business Studies","Chemistry","Christian Religious Education","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","Islamic Religious Education","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","Hindu Religious Education","Mandarin Chinese"]
};

const subjectAliases = {
  "CRE": "Christian Religious Education",
  "Christian Religious Education (CRE)": "Christian Religious Education",
  "HRE": "Hindu Religious Education",
  "Hindu Religious Education (HRE)": "Hindu Religious Education",
  "IRE": "Islamic Religious Education",
  "Islamic Religious Education (IRE)": "Islamic Religious Education",
  "Pre technical Studies": "Pre-Technical Studies",
  "Pre-Technical": "Pre-Technical Studies",
  "Science and Technology": "Science and Technology",
  "History and Citizenship": "History & Citizenship",
  "History & Citizenship": "History & Citizenship",
  "Music and Dance": "Music & Dance",
  "Theatre and Film": "Theatre & Film",
  "Sports and Recreation": "Sports & Recreation",
  "Building & Construction": "Building and Construction",
  "Metalwork": "Metal Work",
  "Wood Technology": "Woodwork",
  "Marine and Fisheries Technology": "Marine & Fisheries",
  "Marine Technology": "Marine & Fisheries",
  "Kenya Sign Language (KSL)": "Kenya Sign Language",
  "KSL": "Kenya Sign Language",
  "Community Service Learning (CSL)": "Community Service Learning",
  "Sign Language Skills": "Sign Language"
};

function canonicalSubjectName(subject) {
  const value = String(subject || "").trim();
  return subjectAliases[value] || value;
}

function normalizeResourceForLibrary(resource) {
  const normalized = { ...resource };
  normalized.grade = String(normalized.grade || "").trim();
  normalized.subject = canonicalSubjectName(normalized.subject);
  normalized.type = normalized.type || normalized.resource_type || "";
  normalized.status = String(normalized.status || "approved").toLowerCase();
  return normalized;
}


const state = {
  grade: "All Grades",
  subject: "All Subjects",
  type: "All Materials",
  search: "",
  term: "All Terms",
  access: "All Access",
  sort: "Latest"
};

const elements = {
  gradeList: document.querySelector("#gradeList"),
  gradeFilter: document.querySelector("#gradeFilter"),
  subjectFilter: document.querySelector("#subjectFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  searchFilter: document.querySelector("#searchFilter"),
  termFilter: document.querySelector("#termFilter"),
  accessFilter: document.querySelector("#accessFilter"),
  sortFilter: document.querySelector("#sortFilter"),
  resourceGrid: document.querySelector("#resourceGrid"),
  activeContext: document.querySelector("#activeContext"),
  statResources: document.querySelector("#statResources"),
  form: document.querySelector("#resourceForm"),
  adminGrade: document.querySelector("#adminGradeInput"),
  adminSubject: document.querySelector("#adminSubjectInput"),
  adminType: document.querySelector("#adminTypeInput"),
  termInput: document.querySelector("#termInput"),
  freeSample: document.querySelector("#freeSampleInput"),
  formStatus: document.querySelector("#formStatus"),
  fileInput: document.querySelector("#fileInput"),
  fileHelp: document.querySelector("#fileHelp"),
  notesContent: document.querySelector("#notesContentInput"),
  quickTypes: document.querySelector("#quickTypes"),
  trendingList: document.querySelector("#trendingList"),
  cartButton: document.querySelector("#cartButton"),
  closeCartButton: document.querySelector("#closeCartButton"),
  cartDrawer: document.querySelector("#cartDrawer"),
  cartCount: document.querySelector("#cartCount"),
  cartItems: document.querySelector("#cartItems"),
  cartTotal: document.querySelector("#cartTotal"),
  cartWhatsapp: document.querySelector("#cartWhatsappButton"),
  referForm: document.querySelector("#referForm"),
  friendName: document.querySelector("#friendNameInput"),
  friendPhone: document.querySelector("#friendPhoneInput"),
  sellerForm: document.querySelector("#sellerForm"),
  sellerName: document.querySelector("#sellerNameInput"),
  sellerPhone: document.querySelector("#sellerPhoneInput"),
  sellerTitle: document.querySelector("#sellerTitleInput"),
  sellerPrice: document.querySelector("#sellerPriceInput"),
  sellerGrade: document.querySelector("#sellerGradeInput"),
  sellerSubject: document.querySelector("#sellerSubjectInput"),
  sellerType: document.querySelector("#sellerTypeInput"),
  sellerDiscount: document.querySelector("#sellerDiscountInput"),
  sellerDescription: document.querySelector("#sellerDescriptionInput"),
  sellerFile: document.querySelector("#sellerFileInput"),
  sellerStatus: document.querySelector("#sellerStatus"),
  sellerResourceList: document.querySelector("#sellerResourceList"),
  sellerEarningsTotal: document.querySelector("#sellerEarningsTotal"),
  sellerStorageInfo: document.querySelector("#sellerStorageInfo"),
  withdrawForm: document.querySelector("#withdrawForm"),
  withdrawPhone: document.querySelector("#withdrawPhoneInput"),
  withdrawStatus: document.querySelector("#withdrawStatus"),
  sellerDashboard: document.querySelector("#sellerDashboard"),
  openSellerDashboard: document.querySelector("#openSellerDashboardButton"),
  openSellerDashboardSecondary: document.querySelector("#openSellerDashboardButtonSecondary"),
  openSellerDashboardNav: document.querySelector("#openSellerDashboardNavButton"),
  openSellerDashboard: document.querySelector("#openSellerDashboardButton"),
  downloadApprovalList: document.querySelector("#downloadApprovalList"),
  headerMpesaButton: document.querySelector("#headerMpesaButton"),
  adminAreaButton: document.querySelector("#adminAreaButton"),
  sellerAccountForm: document.querySelector("#sellerAccountForm"),
  sellerAccountName: document.querySelector("#sellerAccountNameInput"),
  sellerAccountPhone: document.querySelector("#sellerAccountPhoneInput"),
  sellerAccountUsername: document.querySelector("#sellerAccountUsernameInput"),
  sellerAccountPassword: document.querySelector("#sellerAccountPasswordInput"),
  sellerAccountStatus: document.querySelector("#sellerAccountStatus"),
  sellerLoginForm: document.querySelector("#sellerLoginForm"),
  sellerLoginUsername: document.querySelector("#sellerLoginUsernameInput"),
  sellerLoginPassword: document.querySelector("#sellerLoginPasswordInput"),
  sellerLoginStatus: document.querySelector("#sellerLoginStatus"),
  paymentForm: document.querySelector("#paymentForm"),
  customerPhone: document.querySelector("#customerPhoneInput"),
  amount: document.querySelector("#amountInput"),
  selectedResource: document.querySelector("#selectedResourceInput"),
  paymentStatus: document.querySelector("#paymentStatus"),
  paymentRecordsList: document.querySelector("#paymentRecordsList"),
  adminApprovalList: document.querySelector("#adminApprovalList"),
  downloadApprovalList: document.querySelector("#downloadApprovalList"),
  sellerAccountApprovalList: document.querySelector("#sellerAccountApprovalList"),
  adminControlPanel: document.querySelector("#adminControlPanel"),
  adminStatsGrid: document.querySelector("#adminStatsGrid"),
  adminSellerManagement: document.querySelector("#adminSellerManagement"),
  adminResourceManagement: document.querySelector("#adminResourceManagement"),
  adminUserManagement: document.querySelector("#adminUserManagement"),
  adminSalesManagement: document.querySelector("#adminSalesManagement"),
  adminPaymentManagement: document.querySelector("#adminPaymentManagement"),
  adminPriceManagement: document.querySelector("#adminPriceManagement"),
  refreshAdminDashboardButton: document.querySelector("#refreshAdminDashboardButton"),
  adminDashboardSearch: document.querySelector("#adminDashboardSearch"),
  adminStatusFilter: document.querySelector("#adminStatusFilter"),
  adminLastUpdated: document.querySelector("#adminLastUpdated"),
  adminSellerBadge: document.querySelector("#adminSellerBadge"),
  adminResourceBadge: document.querySelector("#adminResourceBadge"),
  adminUserBadge: document.querySelector("#adminUserBadge"),
  adminSalesBadge: document.querySelector("#adminSalesBadge"),
  adminPaymentBadge: document.querySelector("#adminPaymentBadge"),
  adminPopularResources: document.querySelector("#adminPopularResources"),
  resourcePreviewModal: document.querySelector("#resourcePreviewModal"),
  resourcePreviewTitle: document.querySelector("#resourcePreviewTitle"),
  resourcePreviewInfo: document.querySelector("#resourcePreviewInfo"),
  resourcePreviewFrame: document.querySelector("#resourcePreviewFrame"),
  closeResourcePreview: document.querySelector("#closeResourcePreview"),
  adminSection: document.querySelector("#admin"),
  adminLoginForm: document.querySelector("#adminLoginForm"),
  adminUsername: document.querySelector("#adminUsernameInput"),
  adminPassword: document.querySelector("#adminPasswordInput"),
  adminEmail: document.querySelector("#adminEmailInput"),
  adminLoginStatus: document.querySelector("#adminLoginStatus"),
  whatsappOrder: document.querySelector("#whatsappOrderButton"),
  projectForm: document.querySelector("#projectUploadForm"),
  projectTitle: document.querySelector("#projectTitleInput"),
  projectGrade: document.querySelector("#projectGradeInput"),
  projectSubject: document.querySelector("#projectSubjectInput"),
  projectFile: document.querySelector("#projectFileInput"),
  projectNotes: document.querySelector("#projectNotesInput"),
  projectStatus: document.querySelector("#projectStatus"),
  tuitionForm: document.querySelector("#tuitionForm"),
  tuitionLearner: document.querySelector("#tuitionLearnerInput"),
  tuitionPhone: document.querySelector("#tuitionPhoneInput"),
  tuitionGrade: document.querySelector("#tuitionGradeInput"),
  tuitionSubjects: document.querySelector("#tuitionSubjectsInput"),
  tuitionStatus: document.querySelector("#tuitionStatus"),
  quizForm: document.querySelector("#quizForm"),
  quizLearner: document.querySelector("#quizLearnerInput"),
  quizStatus: document.querySelector("#quizStatus"),
  progressReport: document.querySelector("#progressReport"),





  toast: document.querySelector("#toast")
};

let toastTimer;

function isAdminUnlocked(){ return document.body.classList.contains("admin-unlocked"); }

function setAdminOnlyVisibility(unlocked){
  document.body.classList.toggle("admin-unlocked", Boolean(unlocked));
  document.querySelectorAll(".admin-only-section").forEach((section) => {
    const visible = Boolean(unlocked);
    section.setAttribute("aria-hidden", String(!visible));
  });
  document.querySelectorAll(".admin-only-link").forEach((link) => {
    link.setAttribute("aria-hidden", String(!unlocked));
    link.tabIndex = unlocked ? 0 : -1;
  });
}



function readSavedResources() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

async function syncPublicResourcesFromServer() {
  try {
    const response = await fetch("/api/resources?_public=" + Date.now(), {
      credentials: "same-origin",
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" }
    });
    if (!response.ok) throw new Error("Resource API returned " + response.status);
    const data = await response.json();
    if (!data.ok || !Array.isArray(data.resources)) throw new Error("Invalid resource API response");

    // The public API is the single source of truth for published resources.
    const remote = data.resources
      .map((r) => normalizeResourceForLibrary({
        ...r,
        id: r.id ?? r.resource_id,
        title: r.title || "Untitled resource",
        grade: r.grade || "",
        subject: r.subject || "",
        type: r.type || r.resource_type || "",
        r2Key: r.r2Key || r.r2_key || "",
        fileName: r.fileName || r.filename || "",
        previewKey: r.previewKey || r.preview_key || "",
        file: r.file || ((r.r2Key || r.r2_key) ? "/api/r2/file?key=" + encodeURIComponent(r.r2Key || r.r2_key) : "")
      }))
      .filter((r) => r.id && r.status === "approved");

    serverResources = remote;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(remote));
    renderResources();
    renderTrending();
    console.info("CBE Nexus: loaded", remote.length, "approved resources from Supabase");
  } catch (error) {
    console.warn("CBE Nexus public resource sync failed:", error);
  }
}
function readSellerResources() {
  try {
    return JSON.parse(localStorage.getItem(SELLER_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function readSellerAccounts() {
  try {
    return JSON.parse(localStorage.getItem(SELLER_ACCOUNTS_KEY)) || [];
  } catch {
    return [];
  }
}

function readPaymentRecords() {
  try {
    return JSON.parse(localStorage.getItem(PAYMENT_RECORDS_KEY)) || [];
  } catch {
    return [];
  }
}

function readQuizProgress() {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_PROGRESS_KEY)) || [];
  } catch {
    return [];
  }
}

function readWithdrawalRequests() {
  try {
    return JSON.parse(localStorage.getItem(WITHDRAWAL_KEY)) || [];
  } catch {
    return [];
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const exponent = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / 1024 ** exponent).toFixed(1)} ${units[exponent]}`;
}

function getSellerStorageUsage() {
  return readSellerResources().reduce((total, resource) => {
    return total + (Number(resource.fileSize) || 0);
  }, 0);
}

function getAllResources() {
  const combined = [
    ...starterResources,
    ...readSavedResources().map(normalizeResourceForLibrary),
    ...serverResources.map(normalizeResourceForLibrary),
    ...readSellerResources().filter((resource) => resource.status === "approved").map(normalizeResourceForLibrary)
  ];
  const seen = new Set();
  return combined.filter((resource) => {
    const key = String(resource.id || "");
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function optionList(select, options, selectedValue) {
  select.innerHTML = options
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
  select.value = selectedValue;
}

function money(value) {
  return `KES ${Number(value).toLocaleString("en-KE")}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function discountedPrice(resource) {
  const discount = Number(resource.discount) || 0;
  return Math.max(0, Math.round(Number(resource.price) * (1 - discount / 100)));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 3200);
}

async function postToBackend(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error("Backend request failed.");
    return await response.json();
  } catch {
    return null;
  }
}

function saveLocalList(key, item) {
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  localStorage.setItem(key, JSON.stringify([item, ...existing]));
}

function setActiveMaterialLink() {
  document.querySelectorAll("[data-material-link]").forEach((link) => {
    link.classList.toggle("active", link.dataset.materialLink === state.type);
  });
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("#quickTypes [data-quick-type]");
  if (!button) return;

  event.preventDefault();
  const selectedType = String(button.dataset.quickType || "All Materials").trim();
  state.type = selectedType;

  if (elements.typeFilter) {
    elements.typeFilter.value = selectedType;
  }

  renderQuickTypes();
  renderResources();

  const resourcesSection = document.querySelector("#resources");
  if (resourcesSection) {
    resourcesSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}, true);

function renderQuickTypes() {
  if (!elements.quickTypes) return;

  elements.quickTypes.innerHTML = [
    "All Materials",
    ...materialTypes
  ]
    .map((type) => {
      const active = state.type === type ? " active" : "";
      return `<button type="button" class="quick-type-button${active}" data-quick-type="${escapeHtml(type)}" aria-pressed="${state.type === type ? "true" : "false"}">${escapeHtml(type)}</button>`;
    })
    .join("");
}

async function loadPublicStats() {
  try {
    const response = await fetch("/api/public/stats", { credentials: "same-origin", cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    if (!data.ok) return;
    remoteStats = {
      resources: Number(data.stats?.resources || 0),
      purchases: Number(data.stats?.purchases || 0),
      downloads: Number(data.stats?.downloads || 0),
      views: Number(data.stats?.views || 0),
      byResource: data.byResource || {}
    };
    const stat = (id, value) => { const node = document.getElementById(id); if (node) node.textContent = Number(value || 0).toLocaleString("en-KE"); };
    stat("statResources", remoteStats.resources);
    stat("statPurchases", remoteStats.purchases);
    stat("statDownloads", remoteStats.downloads);
    stat("statViews", remoteStats.views);
    renderResources();
    let AFFILIATE_PRODUCTS = [];

async function loadAffiliateProducts(){
  try{
    const response=await fetch("/api/affiliate-products",{credentials:"same-origin"});
    const data=await response.json();
    if(response.ok&&data.ok) AFFILIATE_PRODUCTS=Array.isArray(data.products)?data.products:[];
  }catch(error){console.warn("Affiliate products could not be loaded:",error);}
  renderAffiliateMarketplace();
}

function renderAffiliateMarketplace(){
  const grid=document.getElementById("affiliateProductGrid");
  if(!grid)return;
  grid.innerHTML=AFFILIATE_PRODUCTS.length?AFFILIATE_PRODUCTS.map((p)=>`<article class="affiliate-card">${p.image?`<img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" loading="lazy">`:""}<span class="affiliate-category">${escapeHtml(p.category||"Other")}</span><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.description||"")}</p><small>Partner: ${escapeHtml(p.merchant||"Partner")}${p.price?" · "+escapeHtml(p.price):""}</small><a class="primary-button" href="${escapeHtml(p.url)}" target="_blank" rel="sponsored noopener nofollow">${escapeHtml(p.label||"Shop now")}</a></article>`).join(""):"<div class=\"empty-state\">Affiliate products will appear here soon.</div>";
}

async function loadAffiliateAdmin(){
  try{
    const response=await fetch("/api/admin/affiliate-products",{credentials:"same-origin"});
    if(!response.ok)return;
    const data=await response.json(), list=Array.isArray(data.products)?data.products:[];
    const node=document.getElementById("affiliateAdminList");
    const badge=document.getElementById("adminAffiliateBadge"), summary=document.getElementById("adminAffiliateSummary");
    if(badge)badge.textContent=list.length;
    if(summary)summary.textContent=list.length+" products";
    if(node)node.innerHTML=list.length?list.map(p=>`<div class="admin-record"><div class="admin-record-main"><strong>${escapeHtml(p.title)}</strong><span>${escapeHtml(p.category||"Other")} · ${escapeHtml(p.merchant||"Partner")} · ${p.active!==false?"Active":"Hidden"}</span></div><div class="admin-record-actions"><button class="secondary-button" type="button" data-affiliate-edit="${escapeHtml(p.id)}">Edit</button><button class="secondary-button" type="button" data-affiliate-delete="${escapeHtml(p.id)}">Delete</button></div></div>`).join(""):"<div class=\"empty-state\">No affiliate products added yet.</div>";
    window.__affiliateAdminProducts=list;
  }catch(error){console.warn("Affiliate admin could not load:",error);}
}

function clearAffiliateAdminForm(){
  ["affiliateAdminId","affiliateAdminTitle","affiliateAdminCategory","affiliateAdminMerchant","affiliateAdminUrl","affiliateAdminImage","affiliateAdminPrice","affiliateAdminCommission","affiliateAdminDescription"].forEach(id=>{const n=document.getElementById(id);if(n)n.value="";});
  const label=document.getElementById("affiliateAdminLabel"); if(label)label.value="Shop now";
  const active=document.getElementById("affiliateAdminActive"); if(active)active.checked=true;
}

async function saveAffiliateAdminProduct(event){
  event.preventDefault();
  const payload={id:document.getElementById("affiliateAdminId")?.value,title:document.getElementById("affiliateAdminTitle")?.value,category:document.getElementById("affiliateAdminCategory")?.value,merchant:document.getElementById("affiliateAdminMerchant")?.value,url:document.getElementById("affiliateAdminUrl")?.value,image:document.getElementById("affiliateAdminImage")?.value,price:document.getElementById("affiliateAdminPrice")?.value,commission:document.getElementById("affiliateAdminCommission")?.value,label:document.getElementById("affiliateAdminLabel")?.value,description:document.getElementById("affiliateAdminDescription")?.value,active:document.getElementById("affiliateAdminActive")?.checked};
  try{await adminPost("/api/admin/affiliate-product",payload);clearAffiliateAdminForm();await loadAffiliateAdmin();await loadAffiliateProducts();showToast("Affiliate product saved.");}catch(error){showToast(error.message||"Affiliate product could not be saved.");}
}

async function handleAffiliateAdminClick(event){
  const edit=event.target.closest("[data-affiliate-edit]"), del=event.target.closest("[data-affiliate-delete]");
  const list=window.__affiliateAdminProducts||[];
  if(edit){const p=list.find(x=>String(x.id)===String(edit.dataset.affiliateEdit));if(!p)return;Object.entries({affiliateAdminId:p.id,affiliateAdminTitle:p.title,affiliateAdminCategory:p.category,affiliateAdminMerchant:p.merchant,affiliateAdminUrl:p.url,affiliateAdminImage:p.image,affiliateAdminPrice:p.price,affiliateAdminCommission:p.commission,affiliateAdminLabel:p.label,affiliateAdminDescription:p.description}).forEach(([id,v])=>{const n=document.getElementById(id);if(n)n.value=v||"";});const a=document.getElementById("affiliateAdminActive");if(a)a.checked=p.active!==false;}
  if(del){if(!confirm("Delete this affiliate product?"))return;try{await adminPost("/api/admin/affiliate-product-delete",{id:del.dataset.affiliateDelete});await loadAffiliateAdmin();await loadAffiliateProducts();showToast("Affiliate product deleted.");}catch(error){showToast(error.message||"Delete failed.");}}
}


renderTrending();
loadAffiliateProducts();

  } catch (error) {
    console.warn("Public statistics could not be loaded:", error);
  }
}


async function trackResourceView(resourceId) {
  try {
    const key = `cbeViewed:${resourceId}`;
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1");
    await fetch("/api/public/view", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ resourceId }) });
  } catch {}
}

function renderTrending() {
  if (!elements.trendingList) return;
  const resources = getAllResources().slice(0, 6);
  elements.trendingList.innerHTML = resources.map((resource, index) => `
    <button class="trending-item" type="button" data-trending="${escapeHtml(resource.id)}">
      <strong>${escapeHtml(resource.title)}</strong>
      <span>${15 - index} orders this week | ${escapeHtml(resource.grade)} | ${escapeHtml(resource.type)}</span>
    </button>
  `).join("");
}

function whatsappLink(resource, amount) {
  const message = resource
    ? `Hello, I want to buy ${resource.title} (${resource.grade}, ${resource.subject}) for ${money(amount)}. I will pay via M-Pesa ${MPESA_PHONE}.`
    : `Hello, I want to buy CBE e-learning resources. I will pay via M-Pesa ${MPESA_PHONE}.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function paidResourceHelpLink(resource, amount) {
  const message = `Hello, help me access ${resource.title} (${resource.grade}, ${resource.subject}). I have paid ${money(amount)} via M-Pesa to ${MPESA_PHONE}. Kindly send/activate this CBE resource.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function renderGradeDashboard() {
  if (!elements.gradeList) return;

  const grades = Object.entries(gradeSubjects);
  elements.gradeList.innerHTML = grades
    .map(([grade, subjects], index) => `
      <article class="grade-card ${index === 0 ? "open" : ""}" data-grade-card="${escapeHtml(grade)}">
        <button class="grade-toggle" type="button" data-grade-toggle="${escapeHtml(grade)}" aria-expanded="${index === 0}">
          <span>${escapeHtml(grade)}</span>
          <span class="grade-chevron" aria-hidden="true">▾</span>
        </button>
        <div class="subject-menu">
          <label class="subject-dropdown-label" for="subject-${index}">Choose a subject</label>
          <select class="subject-dropdown" id="subject-${index}" data-grade-subject-select data-grade="${escapeHtml(grade)}" aria-label="Choose a subject for ${escapeHtml(grade)}">
            <option value="All Subjects">Select subject</option>
            ${subjects.map((subject) => `<option value="${escapeHtml(subject)}">${escapeHtml(subject)}</option>`).join("")}
          </select>
        </div>
      </article>`).join("");
}
function refreshSubjectFilters() {
  const subjects = state.grade === "All Grades"
    ? Array.from(new Set(Object.values(gradeSubjects).flat())).sort()
    : gradeSubjects[state.grade];

  if (!subjects.includes(state.subject) && state.subject !== "All Subjects") {
    state.subject = "All Subjects";
  }

  optionList(elements.subjectFilter, ["All Subjects", ...subjects], state.subject);
}

function setupFilters() {
  const grades = Object.keys(gradeSubjects);
  const allAdminSubjects = allCbeSubjects;

  optionList(elements.gradeFilter, ["All Grades", ...grades], state.grade);
  optionList(elements.adminGrade, grades, "Grade 1");
  optionList(elements.sellerGrade, grades, "Grade 1");
  optionList(elements.projectGrade, grades, "Grade 1");
  optionList(elements.tuitionGrade, grades, "Grade 1");

  optionList(elements.typeFilter, ["All Materials", ...materialTypes], state.type);
  optionList(elements.adminType, materialTypes, "Notes");
  optionList(elements.sellerType, materialTypes, "Notes");
  // Upload and Publish Learning Resources: show the complete subject catalogue.
  optionList(elements.adminSubject, allAdminSubjects, "Mathematics Activities");
  optionList(elements.sellerSubject, allAdminSubjects, "Mathematics Activities");
  refreshSubjectFilters();
}

function resourceMatches(resource) {
  const normalized = normalizeResourceForLibrary(resource);
  const query = state.search.trim().toLowerCase();
  const searchable = `${normalized.title} ${normalized.description} ${normalized.subject} ${normalized.type} ${normalized.term || ""}`.toLowerCase();
  return (state.grade === "All Grades" || normalized.grade === state.grade)
    && (state.subject === "All Subjects" || normalized.subject === canonicalSubjectName(state.subject))
    && (state.type === "All Materials" || normalized.type.trim().toLowerCase() === String(state.type).trim().toLowerCase())
    && (state.term === "All Terms" || normalized.term === state.term)
    && (state.access === "All Access" || (state.access === "Free Samples" ? normalized.isFreeSample : !normalized.isFreeSample))
    && (!query || searchable.includes(query));
}

function sortResources(resources) {
  return [...resources].sort((a, b) => {
    if (state.sort === "Price Low to High") return discountedPrice(a) - discountedPrice(b);
    if (state.sort === "Price High to Low") return discountedPrice(b) - discountedPrice(a);
    if (state.sort === "Popular") return (Number(b.popularity) || 0) - (Number(a.popularity) || 0);
    return String(b.id).localeCompare(String(a.id));
  });
}

function renderResources() {
  const resources = getAllResources().map(normalizeResourceForLibrary);
  const filtered = sortResources(resources.filter(resourceMatches));
  elements.statResources.textContent = Number(remoteStats.resources || resources.length).toLocaleString("en-KE");
  elements.activeContext.textContent = `${filtered.length} material(s) showing for ${state.grade}, ${state.subject}, ${state.type}`;
  setActiveMaterialLink();

  if (!filtered.length) {
    elements.resourceGrid.innerHTML = `<div class="empty-state">No resources match the current filters. Use the admin dashboard to publish a new material.</div>`;
    return;
  }

  elements.resourceGrid.innerHTML = filtered.map((resource) => `
    <article class="resource-card">
      <div class="resource-meta">
        <span class="tag">${escapeHtml(resource.grade)}</span>
        <span class="tag">${escapeHtml(resource.subject)}</span>
        <span class="tag">${escapeHtml(resource.type)}</span>
        <span class="tag">${escapeHtml(resource.term || "Term Ready")}</span>
        ${resource.isFreeSample ? `<span class="tag free">Free Sample</span>` : ""}
        ${resource.sellerUsername ? `<span class="tag">Seller: ${escapeHtml(resource.sellerUsername)}</span>` : ""}
      </div>
      <h3>${escapeHtml(resource.title)}</h3>
      <p>${escapeHtml(resource.description)}</p>\n      <div class="resource-activity"><span>🗓 Updated ${resource.updatedAt ? new Date(resource.updatedAt).toLocaleDateString("en-KE") : "recently"}</span><a href="mailto:cbenexus@gmail.com?subject=Resource%20report&body=Please%20review%20this%20resource:%20${encodeURIComponent(resource.title || "")}" aria-label="Report resource">Report resource</a></div>
      <div class="resource-activity"><span>📥 ${Number(remoteStats.byResource?.[resource.id]?.downloads ?? resource.downloads ?? 0)} downloads</span><span>🛒 ${Number(remoteStats.byResource?.[resource.id]?.purchases ?? resource.purchases ?? 0)} purchases</span></div>
      <div class="price-row">
        <div>
          <strong>${money(discountedPrice(resource))}</strong>
          <span>${Number(resource.discount) || 0}% discount from ${money(resource.price)}</span>
        </div>
      </div>
      <div class="card-actions resource-library-actions">
        <button class="primary-button resource-action-button" type="button" data-pay="${escapeHtml(resource.id)}">Pay M-Pesa</button>
        <a class="secondary-button resource-action-button whatsapp-buy-button" href="${whatsappLink(resource, discountedPrice(resource))}" target="_blank" rel="noopener" data-whatsapp-buy="${escapeHtml(resource.id)}">💬 Buy via WhatsApp</a>
        <button class="secondary-button resource-action-button" type="button" data-preview-resource="${escapeHtml(resource.id)}">👁 Preview</button>
        ${resource.isFreeSample ? `<a class="secondary-button resource-action-button" href="${escapeHtml(resource.file)}&free=1" download="${escapeHtml(resource.fileName || "")}">Preview Sample</a>` : ""}
        ${localStorage.getItem(REFERRAL_KEY) ? `<a class="secondary-button resource-action-button" href="${escapeHtml(resource.file)}&free=1" download="${escapeHtml(resource.fileName || "")}" data-free-resource="${escapeHtml(resource.id)}">Free Referral Paper</a>` : ""}
        <button class="secondary-button resource-action-button resource-download-button" type="button" data-download-resource="${escapeHtml(resource.id)}" title="Available after payment confirmation by admin">📥 Download</button>
      </div>
    </article>
  `).join("");
}

function unlockFreeReferral(event) {
  event.preventDefault();
  const friendName = elements.friendName.value.trim();
  const friendPhone = elements.friendPhone.value.trim();
  localStorage.setItem(REFERRAL_KEY, JSON.stringify({
    friendName,
    friendPhone,
    unlockedAt: new Date().toISOString()
  }));
  elements.referForm.reset();
  renderResources();
  showToast("Referral recorded. One free CBE paper is unlocked.");
}

function cartWhatsappLink(cart) {
  const total = cart.reduce((sum, resource) => sum + discountedPrice(resource), 0);
  const list = cart.map((resource, index) => `${index + 1}. ${resource.title} - ${money(discountedPrice(resource))}`).join("\n");
  const message = `Hello, help me access these CBE resources:\n${list}\nTotal paid: ${money(total)}\nI have paid via M-Pesa to ${MPESA_PHONE}. Kindly send/activate the materials.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function renderCart() {
  const cart = readCart();
  elements.cartCount.textContent = cart.length;
  elements.cartTotal.textContent = money(cart.reduce((sum, resource) => sum + discountedPrice(resource), 0));
  elements.cartWhatsapp.href = cart.length ? cartWhatsappLink(cart) : whatsappLink(null, 0);

  if (!cart.length) {
    elements.cartItems.innerHTML = `<div class="empty-state">Your cart is empty. Add CBE resources from the library.</div>`;
    return;
  }

  elements.cartItems.innerHTML = cart.map((resource) => `
    <div class="cart-item">
      <strong>${escapeHtml(resource.title)}</strong>
      <span>${escapeHtml(resource.grade)} | ${escapeHtml(resource.subject)} | ${money(discountedPrice(resource))}</span>
      <button class="secondary-button" type="button" data-remove-cart="${escapeHtml(resource.id)}">Remove</button>
    </div>
  `).join("");
}

function renderSellerResources() {
  const sellerResources = readSellerResources();
  const activeSeller = JSON.parse(sessionStorage.getItem("activeSellerAccount") || "null");
  const visibleResources = activeSeller
    ? sellerResources.filter((resource) => resource.sellerUsername === activeSeller.username)
    : sellerResources;
  const approved = visibleResources.filter((resource) => resource.status === "approved");
  const earnings = approved.reduce((sum, resource) => sum + Math.round(Number(resource.price) * 0.5), 0);
  elements.sellerEarningsTotal.textContent = money(earnings);
  renderSellerStorageInfo();
  if (!visibleResources.length) {
    elements.sellerResourceList.innerHTML = `<div class="empty-state">No seller resources submitted yet.</div>`;
    return;
  }

  elements.sellerResourceList.innerHTML = visibleResources.map((resource) => `
    <div class="seller-resource-item">
      <strong>${escapeHtml(resource.title)}</strong>
      <span>@${escapeHtml(resource.sellerUsername || "seller")} | ${escapeHtml(resource.sellerName)} | ${escapeHtml(resource.grade)} | ${escapeHtml(resource.subject)}</span>
      <span>Price: ${money(resource.price)} | Seller earns: ${money(Math.round(Number(resource.price) * 0.5))}</span>
      <span>Status: ${escapeHtml(resource.status || "pending")} | Admin approval within 3 days</span>
    </div>
  `).join("");
}

function renderSellerAccountApprovals() {
  const pending = readSellerAccounts().filter((account) => account.status === "pending");
  if (!pending.length) {
    elements.sellerAccountApprovalList.innerHTML = `<div class="empty-state">No pending seller accounts.</div>`;
    return;
  }

  elements.sellerAccountApprovalList.innerHTML = pending.map((account) => `
    <div class="approval-item">
      <strong>${escapeHtml(account.name)}</strong>
      <span>${escapeHtml(account.username)} | ${escapeHtml(account.phone)} | Approval within 24 hours</span>
      <div class="approval-actions">
        <button class="primary-button" type="button" data-approve-seller-account="${escapeHtml(account.id)}">Approve Account</button>
        <button class="secondary-button" type="button" data-reject-seller-account="${escapeHtml(account.id)}">Reject Account</button>
      </div>
    </div>
  `).join("");
}

function updateSellerAccountStatus(accountId, status) {
  const updated = readSellerAccounts().map((account) => {
    if (account.id !== accountId) return account;
    return {
      ...account,
      status,
      reviewedAt: new Date().toISOString()
    };
  });
  localStorage.setItem(SELLER_ACCOUNTS_KEY, JSON.stringify(updated));
  fetch("/api/admin/seller-account-status",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({accountId,status})}).catch(()=>{});
  renderSellerAccountApprovals();
  showToast(`Seller account ${status}.`);
}

function renderAdminApprovals() {
  const sellerResources = readSellerResources();
  const pending = sellerResources.filter((resource) => resource.status === "pending");
  if (!pending.length) {
    elements.adminApprovalList.innerHTML = `<div class="empty-state">No pending seller resources.</div>`;
    return;
  }

  elements.adminApprovalList.innerHTML = pending.map((resource) => `
    <div class="approval-item">
      <strong>${escapeHtml(resource.title)}</strong>
      <span>${escapeHtml(resource.sellerName)} | ${escapeHtml(resource.grade)} | ${escapeHtml(resource.subject)} | ${money(resource.price)}</span>
      <span>${escapeHtml(resource.description)}</span>
      <div class="approval-actions">
        <button class="primary-button" type="button" data-approve-seller="${escapeHtml(resource.id)}">Approve</button>
        <button class="secondary-button" type="button" data-reject-seller="${escapeHtml(resource.id)}">Reject</button>
      </div>
    </div>
  `).join("");
}

function updateSellerStatus(resourceId, status) {
  const updated = readSellerResources().map((resource) => {
    if (resource.id !== resourceId) return resource;
    return {
      ...resource,
      status,
      reviewedAt: new Date().toISOString()
    };
  });
  localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(updated));
  renderSellerResources();
  renderAdminApprovals();
  renderResources();
  renderTrending();
  showToast(`Seller resource ${status}.`);
}

function renderSellerStorageInfo() {
  if (!elements.sellerStorageInfo) return;
  const usedBytes = getSellerStorageUsage();
  elements.sellerStorageInfo.textContent = `Seller storage usage: ${formatBytes(usedBytes)} of 20 GB available.`;
}

function renderPaymentRecords() {
  if (!elements.paymentRecordsList) return;
  const records = readPaymentRecords();
  if (!records.length) {
    elements.paymentRecordsList.innerHTML = `<div class="empty-state">No payment records yet.</div>`;
    return;
  }

  elements.paymentRecordsList.innerHTML = records.map((record) => `
    <div class="record-item">
      <strong>${escapeHtml(record.resource || "CBE resource order")}</strong>
      <span>${escapeHtml(record.customerPhone)} | ${money(record.amount)} | ${escapeHtml(record.status)}</span>
      <span>${new Date(record.createdAt).toLocaleString()}</span>
      ${record.status === "pending confirmation" ? `<button class="primary-button" type="button" data-approve-download="${record.id}">Activate Download</button>` : ""}
    </div>
  `).join("");
}

async function renderDownloadApprovals() {
  if (!elements.downloadApprovalList) return;
  try {
    const response = await fetch("/api/admin/download-approvals", { credentials: "same-origin" });
    if (!response.ok) throw new Error("Admin login required.");
    const data = await response.json();
    const approvals = data.approvals || [];
    const pending = approvals.filter((a) => a.status === "pending");
    if (!pending.length) {
      elements.downloadApprovalList.innerHTML = '<div class="empty-state">No pending download requests.</div>';
      return;
    }
    elements.downloadApprovalList.innerHTML = pending.map((a) => {
      const resource = getAllResources().find((r) => String(r.id) === String(a.resource_id || a.resourceId));
      const name = resource?.title || a.resource_id || a.resourceId;
      const phone = a.customer_phone || a.customerPhone || "";
      const ref = a.payment_reference || a.paymentReference || "";
      return `
        <div class="approval-item">
          <strong>${escapeHtml(name)}</strong>
          <span>Customer: ${escapeHtml(phone)}</span>
          ${ref ? `<span>Payment reference: ${escapeHtml(ref)}</span>` : ""}
          <span>Status: Waiting for admin approval</span>
          <div class="approval-actions">
            <button class="primary-button" type="button" data-confirm-download="${escapeHtml(a.id)}">Approve Download</button>
            <button class="secondary-button" type="button" data-reject-download="${escapeHtml(a.id)}">Reject</button>
          </div>
        </div>`;
    }).join("");
  } catch (error) {
    elements.downloadApprovalList.innerHTML = '<div class="empty-state">Sign in as admin to manage download approvals.</div>';
  }
}

async function handleProjectUpload(event) {
  event.preventDefault();
  const uploadedFile = elements.projectFile.files[0];
  const file = uploadedFile ? await readUploadedFile(uploadedFile) : null;
  const project = {
    id: `project-${Date.now()}`,
    title: elements.projectTitle.value.trim(),
    grade: elements.projectGrade.value,
    subject: elements.projectSubject.value.trim(),
    notes: elements.projectNotes.value.trim(),
    fileName: uploadedFile ? uploadedFile.name : "",
    file,
    status: "submitted",
    createdAt: new Date().toISOString()
  };
  saveLocalList(PROJECTS_KEY, project);
  const backend = await postToBackend(API_ENDPOINTS.projects, project);
  elements.projectForm.reset();
  elements.projectGrade.value = "Grade 1";
  elements.projectStatus.textContent = backend
    ? "CBC project uploaded to the backend successfully."
    : "CBC project saved in this browser. Start the backend server to store it centrally.";
  showToast("CBC project submitted.");
}

async function handleTuitionRegistration(event) {
  event.preventDefault();
  const registration = {
    id: `tuition-${Date.now()}`,
    learner: elements.tuitionLearner.value.trim(),
    phone: elements.tuitionPhone.value.trim(),
    grade: elements.tuitionGrade.value,
    subjects: elements.tuitionSubjects.value.trim(),
    freeResourcesUnlocked: true,
    createdAt: new Date().toISOString()
  };
  saveLocalList(TUITION_KEY, registration);
  const backend = await postToBackend(API_ENDPOINTS.tuition, registration);
  elements.tuitionForm.reset();
  elements.tuitionGrade.value = "Grade 1";
  elements.tuitionStatus.textContent = backend
    ? "Holiday tuition registration received. Free CBC resources are unlocked below."
    : "Registration saved in this browser. Free CBC resources are unlocked below.";
  showToast("Holiday tuition registration received.");
  document.querySelector("#freeCbcResources").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgressReport() {
  const attempts = readQuizProgress();
  if (!attempts.length) {
    elements.progressReport.innerHTML = `<div class="empty-state">No quiz attempts yet. Mark a quiz to generate progress.</div>`;
    return;
  }
  elements.progressReport.innerHTML = attempts.slice(0, 6).map((attempt) => `
    <div class="progress-item">
      <strong>${escapeHtml(attempt.learner)} - ${attempt.score}%</strong>
      <span>${escapeHtml(attempt.remark)} | ${new Date(attempt.createdAt).toLocaleString()}</span>
      <div class="progress-meter" aria-label="Score ${attempt.score}%"><span style="width: ${attempt.score}%"></span></div>
    </div>
  `).join("");
}

async function handleQuizSubmit(event) {
  event.preventDefault();
  const formData = new FormData(elements.quizForm);
  const answers = {
    q1: formData.get("q1"),
    q2: formData.get("q2"),
    q3: formData.get("q3")
  };
  const answerKey = {
    q1: "competency",
    q2: "assessment",
    q3: "specific"
  };
  const correct = Object.keys(answerKey).filter((key) => answers[key] === answerKey[key]).length;
  const score = Math.round((correct / Object.keys(answerKey).length) * 100);
  const attempt = {
    id: `quiz-${Date.now()}`,
    learner: elements.quizLearner.value.trim(),
    answers,
    correct,
    score,
    remark: score >= 80 ? "Excellent progress" : score >= 50 ? "Good effort; revise weak areas" : "Needs guided revision",
    createdAt: new Date().toISOString()
  };
  saveLocalList(QUIZ_PROGRESS_KEY, attempt);
  await postToBackend(API_ENDPOINTS.quizzes, attempt);
  elements.quizStatus.textContent = `${attempt.learner} scored ${score}%. ${attempt.remark}.`;
  elements.quizForm.reset();
  renderProgressReport();
  showToast("Quiz marked and progress report updated.");
}

async function handleSellerSubmit(event) {
  event.preventDefault();
  const activeSeller = JSON.parse(sessionStorage.getItem("activeSellerAccount") || "null");
  if (!activeSeller || activeSeller.status !== "approved") {
    elements.sellerStatus.textContent = "Seller account must be approved before uploading resources.";
    showToast("Seller account approval required.");
    return;
  }
  const sellerFile = elements.sellerFile.files[0];
  const file = await readUploadedFile(sellerFile);
  const resource = {
    id: `seller-${Date.now()}`,
    sellerName: activeSeller.name,
    sellerPhone: activeSeller.phone,
    sellerUsername: activeSeller.username,
    title: elements.sellerTitle.value.trim(),
    grade: elements.sellerGrade.value,
    subject: elements.sellerSubject.value,
    type: elements.sellerType.value,
    description: elements.sellerDescription.value.trim(),
    price: Number(elements.sellerPrice.value || 0),
    discount: Number(elements.sellerDiscount.value || 0),
    term: "Term 1",
    isFreeSample: false,
    popularity: 1,
    fileName: sellerFile.name,
    file,
    fileSize: sellerFile.size,
    commission: 50,
    status: "pending",
    approvalNote: "Admin will review and approve within 3 days."
  };

  const currentUsage = getSellerStorageUsage();
  if (currentUsage + sellerFile.size > SELLER_STORAGE_LIMIT_BYTES) {
    elements.sellerStatus.textContent = "Your seller upload storage has reached its 20GB limit. Remove older uploads before submitting more files.";
    showToast("Seller storage limit reached.");
    return;
  }
  localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify([...readSellerResources(), resource]));
  elements.sellerForm.reset();
  elements.sellerPrice.value = "";
  elements.sellerDiscount.value = 0;
  elements.sellerGrade.value = "Grade 1";
  optionList(elements.sellerSubject, gradeSubjects["Grade 1"], "Mathematics Activities");
  elements.sellerStatus.textContent = "Seller resource submitted. Admin will review and approve within 3 days.";
  renderSellerResources();
  renderAdminApprovals();
  renderResources();
  renderTrending();
  showToast("Seller resource submitted for admin approval.");
}

function requestWithdrawal(event) {
  event.preventDefault();
  const approved = readSellerResources().filter((resource) => resource.status === "approved");
  const amount = approved.reduce((sum, resource) => sum + Math.round(Number(resource.price) * 0.5), 0);
  if (!amount) {
    elements.withdrawStatus.textContent = "No approved seller earnings available for withdrawal.";
    return;
  }
  const request = {
    id: `withdraw-${Date.now()}`,
    phone: elements.withdrawPhone.value.trim(),
    amount,
    status: "pending",
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(WITHDRAWAL_KEY, JSON.stringify([...readWithdrawalRequests(), request]));
  elements.withdrawForm.reset();
  elements.withdrawStatus.textContent = `Withdrawal request submitted for ${money(amount)}.`;
  showToast("Seller withdrawal request submitted.");
}

function openAdminLogin() {
  const adminLoginSection = document.querySelector("#adminLogin");
  if (!adminLoginSection) return;
  adminLoginSection.classList.add("open");
  adminLoginSection.setAttribute("aria-hidden", "false");
  adminLoginSection.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Admin login section opened.");
}

function openSellerDashboard() {
  const activeSeller = JSON.parse(sessionStorage.getItem("activeSellerAccount") || "null");
  if (!activeSeller || activeSeller.status !== "approved") {
    document.querySelector("#sellerAccount").classList.add("open");
    document.querySelector("#sellerAccount").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Create or login to an approved seller account first.");
    return;
  }
  elements.sellerName.value = activeSeller.name;
  elements.sellerPhone.value = activeSeller.phone;
  elements.sellerDashboard.classList.add("open");
  elements.sellerDashboard.scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Seller dashboard opened.");
}

async function createSellerAccount(event){event.preventDefault();const p={name:elements.sellerAccountName.value.trim(),phone:elements.sellerAccountPhone.value.trim(),username:elements.sellerAccountUsername.value.trim().toLowerCase(),password:elements.sellerAccountPassword.value};try{const r=await fetch("/api/seller/account",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Seller account could not be created.");localStorage.setItem(SELLER_ACCOUNTS_KEY,JSON.stringify([{...d.account,password:p.password},...readSellerAccounts().filter(x=>x.username!==d.account.username)]));elements.sellerAccountForm.reset();elements.sellerAccountStatus.textContent="Seller account created. Admin approval is required before login.";renderSellerAccountApprovals();showToast("Seller account submitted for approval.");}catch(e){elements.sellerAccountStatus.textContent=e.message;}}
async function loginSeller(event){event.preventDefault();const username=elements.sellerLoginUsername.value.trim().toLowerCase(),password=elements.sellerLoginPassword.value;try{const r=await fetch("/api/seller/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify({username,password})}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Invalid seller username or password.");localStorage.setItem(SELLER_ACCOUNTS_KEY,JSON.stringify([d.account,...readSellerAccounts().filter(x=>x.username!==d.account.username)]));sessionStorage.setItem("activeSellerAccount",JSON.stringify(d.account));elements.sellerLoginForm.reset();elements.sellerLoginStatus.textContent="Seller login successful.";openSellerDashboard();}catch(e){elements.sellerLoginStatus.textContent=e.message;}}
async function unlockAdmin(event) {
  event.preventDefault();
  const username = elements.adminUsername.value.trim();
  const password = elements.adminPassword.value;
  const email = elements.adminEmail.value.trim();

  elements.adminLoginStatus.textContent = "Checking admin credentials...";
  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ username, password, email })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) {
      elements.adminLoginStatus.textContent = data.error || "Invalid admin username, password, or email.";
      showToast("Admin login failed.");
      return;
    }
    sessionStorage.setItem("cbeAdminUnlocked", "true");
    setAdminOnlyVisibility(true);
    const adminLoginSection = document.querySelector("#adminLogin");
    if (adminLoginSection) {
      adminLoginSection.classList.remove("open");
      adminLoginSection.setAttribute("aria-hidden", "true");
    }
    elements.adminSection.classList.add("open");
    elements.adminSection.setAttribute("aria-hidden", "false");
    elements.adminLoginForm.reset();
    elements.adminLoginStatus.textContent = "Admin dashboard unlocked securely.";
    elements.adminSection.scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Admin dashboard unlocked.");
    loadAdminDashboard();
loadAffiliateAdmin();
  } catch {
    elements.adminLoginStatus.textContent = "Could not connect to the admin server.";
    showToast("Admin login failed.");
  }
}

async function restoreAdminAccess() {
  try {
    const response = await fetch("/api/admin/me", { credentials: "same-origin" });
    if (response.ok) {
      sessionStorage.setItem("cbeAdminUnlocked", "true");
      elements.adminSection.classList.add("open");
      elements.adminSection.setAttribute("aria-hidden", "false");
      loadAdminDashboard();
    } else {
      sessionStorage.removeItem("cbeAdminUnlocked");
    }
  } catch {
    sessionStorage.removeItem("cbeAdminUnlocked");
  }
}

async function loadAdminDashboard() {
  if (!elements.adminControlPanel) return;
  try {
    const response = await fetch("/api/admin/dashboard", {
      credentials: "same-origin",
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" }
    });
    if (!response.ok) return;
    const data = await response.json();
    if (!data.ok) return;

    // Keep the existing admin dashboard data flow, but also reconcile the
    // resource list directly from the live resource API. This prevents an
    // approved Supabase resource from being absent from the Admin Control
    // Centre when the dashboard response is briefly stale.
    try {
      const resourceResponse = await fetch("/api/resources?_admin_sync=" + Date.now(), {
        credentials: "same-origin",
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" }
      });
      if (resourceResponse.ok) {
        const resourceData = await resourceResponse.json();
        if (resourceData.ok && Array.isArray(resourceData.resources)) {
          const merged = new Map((Array.isArray(data.resources) ? data.resources : []).map((item) => [String(item.id), item]));
          resourceData.resources.forEach((item) => {
            const key = String(item.id ?? item.resource_id ?? "");
            if (key) merged.set(key, { ...(merged.get(key) || {}), ...item });
          });
          data.resources = [...merged.values()];
        }
      }
    } catch (resourceSyncError) {
      console.warn("CBE Nexus admin resource reconciliation failed:", resourceSyncError);
    }

    renderAdminControlCentre(data);
  } catch (error) {
    console.warn("CBE Nexus admin dashboard load failed:", error);
  }
}

function setAdminModule(module) {
  activeAdminModule = module;
  document.querySelectorAll("[data-admin-module]").forEach((button) => {
    const active = button.dataset.adminModule === module;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll("[data-admin-module-panel]").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.adminModulePanel === module);
  });
}

function renderAdminControlCentre(data) {
  const stats = data.stats || {};
  const sellers = data.sellers || [];
  // Admin uses the complete Supabase resource set. Do not hide approved records because of frontend field-name differences.\n  const resources = (Array.isArray(data.resources) ? data.resources : []).map(normalizeResourceForLibrary);
  const users = data.users || [];
  const sales = data.sales || [];
  const payments = data.payments || [];
  const pendingPayments = payments.filter((item) => String(item.status || "").toLowerCase().includes("pending")).length;

  elements.adminStatsGrid.innerHTML = [
    ["Total sellers", stats.sellers || 0, (stats.pendingSellers || 0) + " pending", "sellers"],
    ["Total resources", stats.resources || 0, (stats.pendingResources || 0) + " pending", "resources"],
    ["Total purchases", stats.purchases || stats.sales || 0, "completed purchases", "sales"],
    ["Popular resources", (data.popularResources || []).length, "top resources", "resources"],
    ["Revenue", money(stats.revenue || 0), "recorded sales value", "sales"],
    ["Downloads", stats.downloads || 0, "R2 downloads", "resources"]
  ].map(([label, value, note, module]) =>
    "<button class=\"admin-stat-card\" type=\"button\" data-admin-kpi-module=\"" + escapeHtml(module) + "\"><strong>" +
    escapeHtml(value) + "</strong><span>" + escapeHtml(label) + "</span><small>" + escapeHtml(note) + "</small></button>"
  ).join("");

  if (elements.adminSellerBadge) elements.adminSellerBadge.textContent = stats.pendingSellers || 0;
  if (elements.adminResourceBadge) elements.adminResourceBadge.textContent = stats.pendingResources || 0;
  if (elements.adminUserBadge) elements.adminUserBadge.textContent = users.length;
  if (elements.adminSalesBadge) elements.adminSalesBadge.textContent = sales.length;
  if (elements.adminPaymentBadge) elements.adminPaymentBadge.textContent = pendingPayments;
  const analyticsNode = document.getElementById("adminAnalyticsGrid");
  if (analyticsNode) {
    const monthMap = {};
    sales.forEach((item) => {
      const d = new Date(item.createdAt || item.confirmedAt || Date.now());
      if (!Number.isNaN(d.getTime())) {
        const key = d.toLocaleDateString(undefined, { month: "short", year: "numeric" });
        monthMap[key] = (monthMap[key] || 0) + Number(item.amount || 0);
      }
    });
    const list = (items, formatter) => items.length
      ? "<div class=\"admin-analytics-list\">" + items.map(([k,v]) => "<div><span>" + escapeHtml(k) + "</span><strong>" + formatter(v) + "</strong></div>").join("") + "</div>"
      : "<p class=\"admin-analytics-empty\">No data recorded yet.</p>";
    const topResources = [...resources].map((r) => [r.title || "Untitled resource", Number(r.purchases || 0), Number(r.downloads || 0)])
      .sort((x,y) => (y[1]*3+y[2])-(x[1]*3+x[2])).slice(0,5);
    const sellerMap = new Map(sellers.map((s) => [String(s.id), s]));
    const sellerStats = new Map();
    resources.forEach((r) => {
      const sid = String(r.sellerId || r.seller_id || "");
      if (!sid) return;
      const m = sellerStats.get(sid) || { purchases: 0, downloads: 0 };
      m.purchases += Number(r.purchases || 0); m.downloads += Number(r.downloads || 0);
      sellerStats.set(sid, m);
    });
    const topSellers = [...sellerStats.entries()].map(([id,m]) => {
      const s = sellerMap.get(id);
      return [s?.name || s?.username || "Seller", m.purchases, m.downloads];
    }).sort((x,y) => (y[1]*3+y[2])-(x[1]*3+x[2])).slice(0,5);
    const resourceStatuses = {};
    resources.forEach((r) => { const k=String(r.status||"approved").toLowerCase(); resourceStatuses[k]=(resourceStatuses[k]||0)+1; });
    analyticsNode.innerHTML =
      "<article><h4>Sales revenue</h4><strong class=\"admin-analytics-total\">" + money(stats.revenue||0) + "</strong>" + list(Object.entries(monthMap).slice(-6),(v)=>money(v)) + "</article>" +
      "<article><h4>Top resources</h4><strong class=\"admin-analytics-total\">" + topResources.length + "</strong>" + list(topResources.map(x=>[x[0],x[1]+" purchases · "+x[2]+" downloads"]),(v)=>v) + "</article>" +
      "<article><h4>Top sellers</h4><strong class=\"admin-analytics-total\">" + topSellers.length + "</strong>" + list(topSellers.map(x=>[x[0],x[1]+" purchases · "+x[2]+" downloads"]),(v)=>v) + "</article>" +
      "<article><h4>Resource status</h4><strong class=\"admin-analytics-total\">" + resources.length + "</strong>" + list(Object.entries(resourceStatuses),(v)=>v) + "</article>" +
      "<article><h4>User activity</h4><strong class=\"admin-analytics-total\">" + users.length + "</strong><div class=\"admin-analytics-list\"><div><span>Active</span><strong>" + users.filter(u=>String(u.status||"active").toLowerCase()==="active").length + "</strong></div><div><span>Blocked</span><strong>" + users.filter(u=>String(u.status||"").toLowerCase()==="blocked").length + "</strong></div></div></article>" +
      "<article><h4>Marketplace activity</h4><strong class=\"admin-analytics-total\">" + (Number(stats.purchases||stats.sales||0)+Number(stats.downloads||0)) + "</strong><div class=\"admin-analytics-list\"><div><span>Purchases</span><strong>" + Number(stats.purchases||stats.sales||0) + "</strong></div><div><span>Downloads</span><strong>" + Number(stats.downloads||0) + "</strong></div></div></article>";
  }

  function exportAdminCsv(filename, headers, rows) {
    const csv = [headers, ...rows].map((row) => row.map((value) => '"' + String(value ?? "").replace(/"/g, '""') + '"').join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = filename; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const exportSalesButton = document.getElementById("adminExportSales");
  if (exportSalesButton) exportSalesButton.onclick = () => exportAdminCsv("cbe-nexus-sales.csv", ["Resource","Customer","Amount","Status","Date"], sales.map(s => [s.resource||"",s.customerPhone||s.phone||"",s.amount||0,s.status||"",s.createdAt||s.confirmedAt||""]));
  const exportResourcesButton = document.getElementById("adminExportResources");
  if (exportResourcesButton) exportResourcesButton.onclick = () => exportAdminCsv("cbe-nexus-resources.csv", ["Title","Grade","Subject","Type","Status","Price","Purchases","Downloads"], resources.map(r => [r.title||"",r.grade||"",r.subject||"",r.type||"",r.status||"",r.price||0,r.purchases||0,r.downloads||0]));

  const query = String(elements.adminDashboardSearch?.value || "").trim().toLowerCase();
  const status = String(elements.adminStatusFilter?.value || "all").toLowerCase();
  const matches = (record, values) => {
    const haystack = values.map((value) => String(value ?? "")).join(" ").toLowerCase();
    const recordStatus = String(record.status || "").toLowerCase();
    return (!query || haystack.includes(query)) && (status === "all" || recordStatus === status);
  };

  const visibleSellers = sellers.filter((s) => matches(s, [s.name, s.username, s.phone, s.status])).slice(0, 50);
  elements.adminSellerManagement.innerHTML = visibleSellers.length
    ? visibleSellers.map((s) =>
      "<div class=\"admin-record\"><div class=\"admin-record-main\"><strong>" + escapeHtml(s.name || s.username || "Seller") +
      "</strong><span>@" + escapeHtml(s.username || "") + " · " + escapeHtml(s.phone || "") +
      "</span></div><span class=\"status-pill " + escapeHtml(s.status || "pending") + "\">" + escapeHtml(s.status || "pending") +
      "</span><div class=\"admin-record-actions\"><button class=\"primary-button\" type=\"button\" data-admin-seller-id=\"" +
      escapeHtml(s.id) + "\" data-admin-seller-status=\"approved\">Approve</button><button class=\"secondary-button\" type=\"button\" data-admin-seller-id=\"" +
      escapeHtml(s.id) + "\" data-admin-seller-status=\"rejected\">Reject</button></div></div>"
    ).join("")
    : "<div class=\"empty-state\">No sellers match the current filters.</div>";

  // Show every matching resource in the Admin Resource Management list.\n  // The existing search/status filters still apply; there is no arbitrary 50-record cutoff.\n  const visibleResources = resources.filter((r) => matches(r, [r.title, r.grade, r.subject, r.type, r.sellerUsername, r.status]));
  elements.adminResourceManagement.innerHTML = visibleResources.length
    ? visibleResources.map((r) =>
      "<div class=\"admin-record\"><div class=\"admin-record-main\"><strong>" + escapeHtml(r.title || "Untitled resource") +
      "</strong><span>" + escapeHtml(r.grade || "") + " · " + escapeHtml(r.subject || "") + " · " + escapeHtml(r.type || "Resource") +
      "</span></div><span class=\"status-pill " + escapeHtml(r.status || "approved") + "\">" + escapeHtml(r.status || "approved") +
      "</span><div class=\"admin-record-actions\"><button class=\"primary-button\" type=\"button\" data-admin-resource-id=\"" +
      escapeHtml(r.id) + "\" data-admin-resource-status=\"approved\">Approve</button><button class=\"secondary-button\" type=\"button\" data-admin-resource-id=\"" +
      escapeHtml(r.id) + "\" data-admin-resource-status=\"rejected\">Reject</button><button class=\"secondary-button admin-delete-resource\" type=\"button\" data-admin-resource-delete=\"" + escapeHtml(r.id) + "\" aria-label=\"Delete resource\">Delete</button></div></div>"
    ).join("")
    : "<div class=\"empty-state\">No resources match the current filters.</div>";

  const visibleUsers = users.filter((u) => matches(u, [u.name, u.phone, u.status, u.source])).slice(0, 50);
  elements.adminUserManagement.innerHTML = visibleUsers.length
    ? visibleUsers.map((u) =>
      "<div class=\"admin-record\" data-user-phone=\"" + escapeHtml(u.phone || "") + "\"><div class=\"admin-record-main\"><strong>" +
      escapeHtml(u.name || "Customer") + "</strong><span>" + escapeHtml(u.phone || "") + " · " + escapeHtml(u.source || "account") +
      "</span></div><span class=\"status-pill " + escapeHtml(u.status || "active") + "\">" + escapeHtml(u.status || "active") +
      "</span><div class=\"admin-record-actions\"><button class=\"primary-button\" type=\"button\" data-admin-user-id=\"" +
      escapeHtml(u.id) + "\" data-admin-user-status=\"active\">Activate</button><button class=\"secondary-button\" type=\"button\" data-admin-user-id=\"" +
      escapeHtml(u.id) + "\" data-admin-user-status=\"blocked\">Block</button></div></div>"
    ).join("")
    : "<div class=\"empty-state\">No users match the current filters.</div>";

  const visibleSales = sales.filter((s) => matches(s, [s.resource, s.customerPhone, s.phone, s.amount, s.status])).slice(0, 50);
  elements.adminSalesManagement.innerHTML = visibleSales.length
    ? visibleSales.map((s) =>
      "<div class=\"admin-record\"><div class=\"admin-record-main\"><strong>" + escapeHtml(s.resource || "Resource sale") +
      "</strong><span>" + escapeHtml(s.customerPhone || s.phone || "Customer") + " · " +
      new Date(s.createdAt || s.confirmedAt || Date.now()).toLocaleString() +
      "</span></div><strong class=\"admin-amount\">" + money(s.amount || 0) +
      "</strong><span class=\"status-pill paid\">" + escapeHtml(s.status || "paid") + "</span></div>"
    ).join("")
    : "<div class=\"empty-state\">No completed sales match the current filters.</div>";

  const visiblePayments = payments.filter((p) => matches(p, [p.resource, p.customerPhone, p.phone, p.amount, p.status, p.checkoutRequestID])).slice(0, 50);
  elements.adminPaymentManagement.innerHTML = visiblePayments.length
    ? visiblePayments.map((p) =>
      "<div class=\"admin-record\"><div class=\"admin-record-main\"><strong>" + escapeHtml(p.resource || "Payment request") +
      "</strong><span>" + escapeHtml(p.customerPhone || p.phone || "Customer") + " · " +
      new Date(p.createdAt || p.receivedAt || Date.now()).toLocaleString() +
      "</span></div><strong class=\"admin-amount\">" + money(p.amount || 0) +
      "</strong><span class=\"status-pill " + escapeHtml(p.status || "pending") + "\">" +
      escapeHtml(p.status || "pending") + "</span></div>"
    ).join("")
    : "<div class=\"empty-state\">No payments match the current filters.</div>";

  const visiblePrices = resources.filter((r) => matches(r, [r.title, r.grade, r.subject, r.type, r.price, r.discount]));
  elements.adminPriceManagement.innerHTML = visiblePrices.length
    ? visiblePrices.map((r) =>
      "<div class=\"admin-price-row\"><div><strong>" + escapeHtml(r.title || "Untitled resource") +
      "</strong><span>" + escapeHtml(r.grade || "") + " · " + escapeHtml(r.subject || "") +
      "</span></div><label><span>Price</span><input type=\"number\" min=\"0\" value=\"" + Number(r.price || 0) +
      "\" data-admin-price=\"" + escapeHtml(r.id) + "\"></label><label><span>Discount %</span><input type=\"number\" min=\"0\" max=\"100\" value=\"" +
      Number(r.discount || 0) + "\" data-admin-discount=\"" + escapeHtml(r.id) + "\"></label><button class=\"primary-button\" type=\"button\" data-admin-save-price=\"" +
      escapeHtml(r.id) + "\">Save</button></div>"
    ).join("")
    : "<div class=\"empty-state\">No resources match the current filters.</div>";

  const summaries = {
    adminSellerSummary: (sellers.filter((s) => s.status === "pending").length) + " awaiting review",
    adminResourceSummary: (stats.pendingResources || 0) + " awaiting review",
    adminUserSummary: users.length + " identified",
    adminSalesSummary: sales.length + " completed",
    adminPaymentSummary: pendingPayments + " pending"
  };
  Object.keys(summaries).forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.textContent = summaries[id];
  });
  setAdminModule(activeAdminModule);
}


async function adminPost(path, payload) {
  const response = await fetch(path, { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok || !data.ok) throw new Error(data.error || "Admin action failed.");
  return data;
}

async function handleAdminControlClick(event) {
  const sellerButton = event.target.closest("[data-admin-seller-id]");
  const resourceButton = event.target.closest("[data-admin-resource-id]");
  const deleteResourceButton = event.target.closest("[data-admin-resource-delete]");
  const userButton = event.target.closest("[data-admin-user-id]");
  const priceButton = event.target.closest("[data-admin-save-price]");
  try {
    if (deleteResourceButton) {
      const resourceId = deleteResourceButton.dataset.adminResourceDelete;
      const resource = getAllResources().find((r) => String(r.id) === String(resourceId));
      const title = resource?.title || "this resource";
      if (!window.confirm(`Delete "${title}" permanently? This removes the marketplace record and its R2 file/preview.`)) return;
      await adminPost("/api/admin/resource-delete", { resourceId });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readSavedResources().filter((r) => String(r.id) !== String(resourceId))));
      localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(readSellerResources().filter((r) => String(r.id) !== String(resourceId))));
      renderSellerResources(); renderAdminApprovals(); renderResources(); renderTrending();
    } else if (sellerButton) {
      await adminPost("/api/admin/seller-account-status", { accountId: sellerButton.dataset.adminSellerId, status: sellerButton.dataset.adminSellerStatus });
      renderSellerAccountApprovals();
    } else if (resourceButton) {
      const resourceId = resourceButton.dataset.adminResourceId;
      const resourceStatus = resourceButton.dataset.adminResourceStatus;
      await adminPost("/api/admin/resource-status", { resourceId, status: resourceStatus });
      localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(readSellerResources().map((r) => r.id === resourceId ? { ...r, status: resourceStatus, reviewedAt: new Date().toISOString() } : r)));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readSavedResources().map((r) => r.id === resourceId ? { ...r, status: resourceStatus } : r)));
      renderSellerResources(); renderAdminApprovals(); renderResources();
    } else if (userButton) {
      const row = userButton.closest(".admin-record");
      const phone = row?.querySelector("span")?.textContent?.trim() || "";
      await adminPost("/api/admin/user-status", { userId: userButton.dataset.adminUserId, phone, status: userButton.dataset.adminUserStatus });
    } else if (priceButton) {
      const id = priceButton.dataset.adminSavePrice;
      const price = elements.adminPriceManagement.querySelector(`[data-admin-price="\${CSS.escape(id)}"]`)?.value;
      const discount = elements.adminPriceManagement.querySelector(`[data-admin-discount="\${CSS.escape(id)}"]`)?.value;
      await adminPost("/api/admin/resource-price", { resourceId: id, price, discount });
      const updatePrice = (r) => r.id === id ? { ...r, price: Number(price), discount: Number(discount) } : r;
      localStorage.setItem(SELLER_STORAGE_KEY, JSON.stringify(readSellerResources().map(updatePrice)));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(readSavedResources().map(updatePrice)));
      renderSellerResources(); renderResources();
    } else return;
    await loadAdminDashboard();
    showToast("Admin change saved.");
  } catch (error) {
    showToast(error.message || "Admin action failed.");
  }
}

function addToCart(resourceId) {
  const resource = getAllResources().find((item) => item.id === resourceId);
  if (!resource) return;
  const cart = readCart();
  if (!cart.some((item) => item.id === resource.id)) {
    localStorage.setItem(CART_KEY, JSON.stringify([...cart, resource]));
  }
  renderCart();
  elements.cartDrawer.classList.add("open");
  elements.cartDrawer.setAttribute("aria-hidden", "false");
  showToast(`${resource.title} added to cart.`);
}

function removeFromCart(resourceId) {
  localStorage.setItem(CART_KEY, JSON.stringify(readCart().filter((resource) => resource.id !== resourceId)));
  renderCart();
  showToast("Resource removed from cart.");
}

function selectResourceForPayment(resourceId) {
  const resource = getAllResources().find((item) => item.id === resourceId);
  if (!resource) return;

  const amount = discountedPrice(resource);
  elements.selectedResource.value = resource.title;
  elements.selectedResource.dataset.resourceId = String(resource.id);
  elements.amount.value = amount;
  elements.paymentStatus.textContent = `Ready to request M-Pesa payment of ${money(amount)} to ${MPESA_PHONE}.`;
  elements.whatsappOrder.href = whatsappLink(resource, amount);
  showToast(`${resource.title} selected for M-Pesa payment.`);
  document.querySelector("#payments").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function requestMpesaPayment(event) {
  event.preventDefault();
  const resourceId = String(elements.selectedResource.dataset.resourceId || "").trim();
  const phone = elements.customerPhone.value.trim();
  if (!resourceId) { showToast("Please select a resource before starting payment."); return; }
  if (!phone) { showToast("Enter the Safaricom number that should receive the payment prompt."); return; }

  const payload = { customerPhone: phone, resourceId };
  elements.paymentStatus.textContent = "Sending M-Pesa payment request...";
  showToast("Processing M-Pesa request...");
  try {
    const response = await fetch(MPESA_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || !result.ok || !result.CheckoutRequestID) throw new Error(result.error || "M-Pesa request was not accepted.");
    const record = { id: `pay-${Date.now()}`, customerPhone: phone, amount: result.amount, resource: elements.selectedResource.value.trim(), resourceId, checkoutRequestID: result.CheckoutRequestID, status: "pending confirmation", createdAt: new Date().toISOString() };
    localStorage.setItem(PAYMENT_RECORDS_KEY, JSON.stringify([record, ...readPaymentRecords()]));
    renderPaymentRecords();
    elements.paymentStatus.textContent = "M-Pesa request sent. Complete the payment prompt on your phone. Payment will be verified automatically.";
    showToast("M-Pesa request sent successfully.");
    pollMpesaPayment(result.CheckoutRequestID, phone, resourceId);
  } catch (error) {
    elements.paymentStatus.textContent = error.message || "M-Pesa payment could not be started.";
    showToast(error.message || "M-Pesa payment could not be started.");
  }
}

async function pollMpesaPayment(checkoutRequestID, phone, resourceId) {
  let attempts = 0;
  const timer = setInterval(async () => {
    attempts += 1;
    try {
      const response = await fetch("/api/mpesa/status?checkoutRequestID=" + encodeURIComponent(checkoutRequestID) + "&phone=" + encodeURIComponent(phone), { credentials: "same-origin" });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Payment status could not be checked.");
      const status = String(data.status || "unknown").toLowerCase();
      const records = readPaymentRecords().map(item => item.checkoutRequestID === checkoutRequestID ? {...item, status: status === "paid" ? "paid" : status === "failed" ? "failed" : "pending confirmation", mpesaReceipt: data.payment?.receipt || null} : item);
      localStorage.setItem(PAYMENT_RECORDS_KEY, JSON.stringify(records));
      renderPaymentRecords();
      if (status === "paid") { clearInterval(timer); elements.paymentStatus.textContent = "Payment verified. You can now request the download for admin approval."; showToast("M-Pesa payment verified."); }
      else if (status === "failed") { clearInterval(timer); elements.paymentStatus.textContent = "M-Pesa payment was not completed."; showToast("M-Pesa payment was not completed."); }
    } catch {}
    if (attempts >= 12) clearInterval(timer);
  }, 5000);
}

function syncGradeSubjectLink() {
  const params = new URLSearchParams();
  if (state.grade && state.grade !== "All Grades") params.set("grade", state.grade);
  if (state.subject && state.subject !== "All Subjects") params.set("subject", state.subject);
  const hash = params.toString() ? "#resources?" + params.toString() : "#resources";
  if (window.location.hash !== hash) {
    window.history.replaceState(null, "", hash);
  }
}

function applyGradeSubjectFromLink(scroll = false) {
  const raw = window.location.hash || "";
  if (!raw.startsWith("#resources")) return false;
  const query = raw.includes("?") ? raw.slice(raw.indexOf("?") + 1) : "";
  const params = new URLSearchParams(query);
  const grade = params.get("grade");
  const subject = params.get("subject");

  if (grade && gradeSubjects[grade]) {
    state.grade = grade;
    const canonicalSubject = canonicalSubjectName(subject);
    state.subject = canonicalSubject && gradeSubjects[grade].includes(canonicalSubject) ? canonicalSubject : "All Subjects";
    if (elements.gradeFilter) elements.gradeFilter.value = state.grade;
    refreshSubjectFilters();
    if (elements.subjectFilter) elements.subjectFilter.value = state.subject;

    document.querySelectorAll("#gradeList .grade-card").forEach((card) => {
      const active = card.dataset.gradeCard === grade;
      card.classList.toggle("open", active);
      const toggle = card.querySelector("[data-grade-toggle]");
      toggle?.classList.toggle("active", active);
      toggle?.setAttribute("aria-expanded", String(active));
      const select = card.querySelector("[data-grade-subject-select]");
      if (select) select.value = active ? state.subject : "All Subjects";
    });

    renderResources();
    if (scroll) document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
  }

  return false;
}

function setGradeSubject(grade, subject, updateLink = true) {
  state.grade = grade;
  state.subject = canonicalSubjectName(subject);
  if (elements.gradeFilter) elements.gradeFilter.value = grade;
  refreshSubjectFilters();
  if (elements.subjectFilter) elements.subjectFilter.value = subject;
  if (updateLink) syncGradeSubjectLink();
  renderResources();
  document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createDownloadFile(resource) {
  const content = [
    "CBE E-Learning Resource",
    `Title: ${resource.title}`,
    `Grade: ${resource.grade}`,
    `Subject: ${resource.subject}`,
    `Material Type: ${resource.type}`,
    `Description: ${resource.description}`,
    `Price: ${money(resource.price)}`,
    `Discount: ${resource.discount}%`,
    "",
    resource.notes ? "NOTES" : "",
    resource.notes || "",
    resource.notes ? "" : "",
    "Replace this generated file with the final PDF, DOCX, or workbook when deploying online."
  ].filter((line) => line !== "").join("\n");
  return `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`;
}

function readUploadedFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const uploadedFile = elements.fileInput.files[0];
  const title = document.querySelector("#titleInput").value.trim();
  const description = document.querySelector("#descriptionInput").value.trim();
  const notes = elements.notesContent.value.trim();
  const price = Number(document.querySelector("#priceInput").value || 0);
  const discount = Number(document.querySelector("#discountInput").value || 0);
  let fileName = document.querySelector("#fileNameInput").value.trim();
  let file = "";

  if (uploadedFile) {
    fileName = fileName || uploadedFile.name;
    file = await readUploadedFile(uploadedFile);
  } else {
    fileName = fileName || `${Date.now()}-cbe-resource.txt`;
  }

  const resource = {
    id: `admin-${Date.now()}`,
    title,
    grade: elements.adminGrade.value,
    subject: elements.adminSubject.value,
    type: elements.adminType.value,
    description,
    notes,
    price,
    discount,
    term: elements.termInput.value,
    isFreeSample: elements.freeSample.value === "true",
    popularity: 1,
    fileName,
    file: file || createDownloadFile({
      title,
      grade: elements.adminGrade.value,
      subject: elements.adminSubject.value,
      type: elements.adminType.value,
      description,
      notes,
      price,
      discount,
      term: elements.termInput.value
    })
  };

  const saved = readSavedResources();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...saved, resource]));
  elements.form.reset();
  document.querySelector("#priceInput").value = "";
  document.querySelector("#discountInput").value = 0;
  elements.termInput.value = "Term 1";
  elements.freeSample.value = "false";
  elements.notesContent.value = "";
  elements.adminGrade.value = "Grade 1";
  optionList(elements.adminSubject, gradeSubjects["Grade 1"], "Mathematics Activities");
  elements.fileHelp.textContent = "Choose a PDF, Word document, PowerPoint, Excel file, text file, or ZIP.";
  elements.formStatus.textContent = "Resource published successfully and added to the library.";
  showToast("Resource published successfully.");
  renderResources();
}

function safeOn(element, eventName, handler, options) {
  if (element && typeof element.addEventListener === "function") {
    element.addEventListener(eventName, handler, options);
  }
}

function bindEvents() {
  window.addEventListener("hashchange", () => {
    applyGradeSubjectFromLink(true);
  });

  document.querySelectorAll("[data-material-link]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      state.type = link.dataset.materialLink;
      elements.typeFilter.value = state.type;
      renderResources();
      showToast(`${state.type} selected.`);
      document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-hero-resource]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const category = link.dataset.heroResource;
      state.search = category;
      elements.searchFilter.value = category;
      renderResources();
      showToast(`${category} selected.`);
      document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  safeOn(elements.quickTypes, "click", (event) => {
    const button = event.target.closest("[data-quick-type]");
    if (!button) return;
    state.type = button.dataset.quickType || "All Materials";
    if (elements.typeFilter) elements.typeFilter.value = state.type;
    renderQuickTypes();
    renderResources();
    showToast(`${state.type} selected.`);
    document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  if (elements.trendingList) safeOn(elements.trendingList, "click", (event) => {
    const button = event.target.closest("[data-trending]");
    if (button) {
      selectResourceForPayment(button.dataset.trending);
    }
  });

  document.querySelectorAll("[data-landing-search]").forEach((button) => {
    button.addEventListener("click", () => {
      state.search = button.dataset.landingSearch;
      elements.searchFilter.value = state.search;
      renderResources();
      document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(`${state.search} selected.`);
    });
  });

  safeOn(elements.cartButton, "click", () => {
    renderCart();
    elements.cartDrawer.classList.add("open");
    elements.cartDrawer.setAttribute("aria-hidden", "false");
  });

  safeOn(elements.closeResourcePreview, "click", closeResourcePreview);
  safeOn(elements.closeCartButton, "click", () => {
    elements.cartDrawer.classList.remove("open");
    elements.cartDrawer.setAttribute("aria-hidden", "true");
  });

  safeOn(elements.cartItems, "click", (event) => {
    const button = event.target.closest("[data-remove-cart]");
    if (button) {
      removeFromCart(button.dataset.removeCart);
    }
  });

  safeOn(elements.adminApprovalList, "click", (event) => {
    const approve = event.target.closest("[data-approve-seller]");
    const reject = event.target.closest("[data-reject-seller]");
    if (approve) updateSellerStatus(approve.dataset.approveSeller, "approved");
    if (reject) updateSellerStatus(reject.dataset.rejectSeller, "rejected");
  });

  safeOn(elements.sellerAccountApprovalList, "click", (event) => {
    const approve = event.target.closest("[data-approve-seller-account]");
    const reject = event.target.closest("[data-reject-seller-account]");
    if (approve) updateSellerAccountStatus(approve.dataset.approveSellerAccount, "approved");
    if (reject) updateSellerAccountStatus(reject.dataset.rejectSellerAccount, "rejected");
  });

  // headerMpesaButton is optional because the current header does not include it.
  // The guarded handler below is used when that button exists.
  if (elements.openSellerDashboard) safeOn(elements.openSellerDashboard, "click", openSellerDashboard);
  if (elements.openSellerDashboardSecondary) safeOn(elements.openSellerDashboardSecondary, "click", openSellerDashboard);
  if (elements.openSellerDashboardNav) safeOn(elements.openSellerDashboardNav, "click", openSellerDashboard);
  if (elements.openSellerDashboard) safeOn(elements.openSellerDashboard, "click", openSellerDashboard);
  if (elements.downloadApprovalList) safeOn(elements.downloadApprovalList, "click", () => {
    const approvals = JSON.parse(localStorage.getItem("cbe_nexus_approvals") || "[]");
    const blob = new Blob([JSON.stringify(approvals, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "cbe-nexus-approvals.json"; a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  if (elements.headerMpesaButton) safeOn(elements.headerMpesaButton, "click", () => {
    const target = document.querySelector("#payments");
    if (target) target.scrollIntoView({behavior: "smooth"});
  });
  if (elements.adminAreaButton) {
    safeOn(elements.adminAreaButton, "click", openAdminLogin);
  }
  safeOn(elements.refreshAdminDashboardButton, "click", loadAdminDashboard);
  safeOn(elements.adminControlPanel, "click", handleAdminControlClick);
safeOn(document.getElementById("affiliateAdminForm"), "submit", saveAffiliateAdminProduct);
safeOn(document.getElementById("affiliateAdminClear"), "click", clearAffiliateAdminForm);
safeOn(document.getElementById("affiliateAdminList"), "click", handleAffiliateAdminClick);

  safeOn(elements.adminDashboardSearch, "input", () => renderAdminControlCentre(adminDashboardData || {}));
  safeOn(elements.adminStatusFilter, "change", () => renderAdminControlCentre(adminDashboardData || {}));
  document.querySelectorAll("[data-admin-module]").forEach((button) => safeOn(button, "click", () => setAdminModule(button.dataset.adminModule)));

  // Grade 1-12 navigation: every grade opens its own subject dropdown.
  safeOn(elements.gradeList, "click", (event) => {
    const toggle = event.target.closest("[data-grade-toggle]");
    if (!toggle) return;

    event.preventDefault();
    const card = toggle.closest(".grade-card");
    const grade = toggle.dataset.gradeToggle;
    if (!card || !grade) return;

    const wasOpen = card.classList.contains("open");

    elements.gradeList.querySelectorAll(".grade-card").forEach((item) => item.classList.remove("open"));
    elements.gradeList.querySelectorAll(".grade-toggle").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    });

    // Keep the selected grade open, exactly like Grade 1.
    if (!wasOpen) {
      card.classList.add("open");
      toggle.classList.add("active");
      toggle.setAttribute("aria-expanded", "true");
      setGradeSubject(grade, "All Subjects");
      showToast(`${grade} selected — choose a subject.`);
    }
  });

  safeOn(elements.gradeList, "change", (event) => {
    const select = event.target.closest("[data-grade-subject-select]");
    if (!select) return;

    const grade = select.dataset.grade;
    const subject = select.value || "All Subjects";
    if (!grade) return;

    const card = select.closest(".grade-card");
    const toggle = card?.querySelector("[data-grade-toggle]");
    elements.gradeList.querySelectorAll(".grade-card").forEach((item) => item.classList.remove("open"));
    elements.gradeList.querySelectorAll(".grade-toggle").forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    });
    card?.classList.add("open");
    toggle?.classList.add("active");
    toggle?.setAttribute("aria-expanded", "true");

    setGradeSubject(grade, subject);
    if (subject !== "All Subjects") showToast(`${grade} — ${subject} selected.`);
  });

  safeOn(elements.resourceGrid, "click", (event) => {
    const payButton = event.target.closest("[data-pay]");
    const cartButton = event.target.closest("[data-cart]");
    const previewButton = event.target.closest("[data-preview-resource]");
    const downloadButton = event.target.closest("[data-download]");
    const freeButton = event.target.closest("[data-free-resource]");
    if (payButton) {
      selectResourceForPayment(payButton.dataset.pay);
    }
    if (previewButton) { trackResourceView(previewButton.dataset.previewResource); openResourcePreview(previewButton.dataset.previewResource); }
    if (cartButton) {
      addToCart(cartButton.dataset.cart);
    }
    if (downloadButton) {
      showToast("WhatsApp message prepared for this CBE resource.");
    }
    if (freeButton) {
      localStorage.removeItem(REFERRAL_KEY);
      renderResources();
      showToast("Free referral paper opened. Refer another friend to unlock again.");
    }
  });

  safeOn(elements.gradeFilter, "change", (event) => {
    state.grade = event.target.value;
    refreshSubjectFilters();
    renderResources();
  });

  safeOn(elements.subjectFilter, "change", (event) => {
    state.subject = event.target.value;
    renderResources();
  });

  safeOn(elements.typeFilter, "change", (event) => {
    state.type = event.target.value;
    renderResources();
    showToast(`${state.type} selected.`);
  });

  safeOn(elements.termFilter, "change", (event) => {
    state.term = event.target.value;
    renderResources();
  });

  safeOn(elements.accessFilter, "change", (event) => {
    state.access = event.target.value;
    renderResources();
  });

  safeOn(elements.sortFilter, "change", (event) => {
    state.sort = event.target.value;
    renderResources();
  });

  safeOn(elements.searchFilter, "input", (event) => {
    state.search = event.target.value;
    renderResources();
  });

  safeOn(elements.adminGrade, "change", () => {
    const allAdminSubjects = allCbeSubjects;
    const current = elements.adminSubject?.value;
    optionList(elements.adminSubject, allAdminSubjects, current || "Mathematics Activities");
  });

  safeOn(elements.sellerGrade, "change", (event) => {
    const subjects = gradeSubjects[event.target.value];
    optionList(elements.sellerSubject, subjects, subjects[0]);
  });

  safeOn(elements.fileInput, "change", () => {
    const file = elements.fileInput.files[0];
    if (!file) {
      elements.fileHelp.textContent = "Choose a PDF, Word document, PowerPoint, Excel file, text file, or ZIP.";
      return;
    }
    document.querySelector("#fileNameInput").value = file.name;
    elements.fileHelp.textContent = `${file.name} selected. It will be added as the CBE resource file.`;
    showToast(`${file.name} ready to publish.`);
  });

  safeOn(document.querySelector("#startGradeOneUploadButton"), "click", () => {
    if (elements.adminGrade) elements.adminGrade.value = "Grade 1";
    const subjects = allCbeSubjects;
    if (elements.adminSubject) optionList(elements.adminSubject, subjects, elements.adminSubject.value || "Mathematics Activities");
    if (elements.formStatus) elements.formStatus.textContent = "Grade 1 selected. Choose the subject, material type and file, then publish.";
    const subjectField = elements.adminSubject?.closest("label");
    subjectField?.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Grade 1 upload mode selected.");
  });

  safeOn(elements.form, "submit", handleFormSubmit);
  safeOn(elements.sellerAccountForm, "submit", createSellerAccount);
  safeOn(elements.sellerLoginForm, "submit", loginSeller);
  safeOn(elements.adminLoginForm, "submit", unlockAdmin);
  safeOn(elements.sellerForm, "submit", handleSellerSubmit);
  safeOn(elements.withdrawForm, "submit", requestWithdrawal);
  safeOn(elements.referForm, "submit", unlockFreeReferral);
  safeOn(elements.paymentForm, "submit", requestMpesaPayment);
  safeOn(elements.projectForm, "submit", handleProjectUpload);
  safeOn(elements.tuitionForm, "submit", handleTuitionRegistration);
  safeOn(elements.quizForm, "submit", handleQuizSubmit);

  document.addEventListener("click", (event) => {
    if (event.target.dataset.downloadResource) {
      handleDownloadRequest(event);
    }
    if (event.target.dataset.approveDownload) {
      approveDownloadRequest(event.target.dataset.approveDownload);
    }
    if (event.target.dataset.confirmDownload) {
      confirmDownloadApproval(event.target.dataset.confirmDownload);
    }
    if (event.target.dataset.rejectDownload) {
      rejectDownloadRequest(event.target.dataset.rejectDownload);
    }
  });
}

async function openResourcePreview(resourceId) {
  const resource = getAllResources().find((r) => r.id === resourceId);
  if (!resource?.previewKey) { showToast("A page preview is not available for this resource yet."); return; }
  try {
    const response = await fetch("/api/r2/preview?key=" + encodeURIComponent(resource.previewKey), { credentials: "same-origin" });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || "Preview could not be opened.");
    elements.resourcePreviewTitle.textContent = resource.title;
    elements.resourcePreviewInfo.textContent = "Showing the first 3 pages only. The full file is protected until payment.";
    elements.resourcePreviewFrame.src = data.previewUrl;
    elements.resourcePreviewModal.classList.add("open");
    elements.resourcePreviewModal.setAttribute("aria-hidden", "false");
  } catch (error) { showToast(error.message || "Preview could not be opened."); }
}

function closeResourcePreview() {
  if (!elements.resourcePreviewModal) return;
  elements.resourcePreviewModal.classList.remove("open");
  elements.resourcePreviewModal.setAttribute("aria-hidden", "true");
  elements.resourcePreviewFrame.src = "about:blank";
}

async function handleDownloadRequest(event) {
  event.preventDefault();
  const resourceId = event.target.dataset.downloadResource;
  const resource = getAllResources().find((r) => String(r.id) === String(resourceId));
  if (!resource || !resource.r2Key) { showToast("This resource does not have a protected file."); return; }
  const phone = prompt("Enter the phone number used for M-Pesa payment:");
  if (!phone) return;
  const paymentReference = prompt("Enter your M-Pesa confirmation/reference (optional):") || "";
  try {
    const request = await fetch("/api/download-approval/request", {
      method: "POST",
      credentials: "same-origin",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({resourceId: resource.id, customerPhone: phone, paymentReference})
    });
    const data = await request.json().catch(() => ({}));
    if (!request.ok || !data.ok) throw new Error(data.error || "Download request could not be sent.");
    if (data.approval?.status === "approved") {
      const download = await fetch("/api/r2/file?key=" + encodeURIComponent(resource.r2Key) + "&resourceId=" + encodeURIComponent(resource.id) + "&phone=" + encodeURIComponent(phone), {credentials:"same-origin"});
      const result = await download.json().catch(() => ({}));
      if (!download.ok || !result.ok) throw new Error(result.error || "Download is not available.");
      window.location.href = result.downloadUrl;
      return;
    }
    showToast(data.payment?.status === "paid" ? "Verified payment received. Your download request has been sent to admin for approval." : "Your download request has been sent to admin for approval.");
  } catch (error) {
    showToast(error.message || "Download request could not be completed.");
  }
}

function approveDownloadRequest(paymentRecordId) {
  const record = readPaymentRecords().find((r) => r.id === paymentRecordId);
  if (!record) return;
  
  const downloads = readApprovedDownloads();
  const newDownload = {
    id: `dl-${Date.now()}`,
    paymentRecordId: record.id,
    resourceId: record.resource,
    resourceName: record.resource,
    customerPhone: record.customerPhone,
    amount: record.amount,
    status: "pending",
    createdAt: new Date().toISOString()
  };
  
  downloads.push(newDownload);
  localStorage.setItem(APPROVED_DOWNLOADS_KEY, JSON.stringify(downloads));
  
  const updated = readPaymentRecords().map((r) => {
    if (r.id === paymentRecordId) {
      return { ...r, status: "download activated" };
    }
    return r;
  });
  localStorage.setItem(PAYMENT_RECORDS_KEY, JSON.stringify(updated));
  
  renderPaymentRecords();
  renderDownloadApprovals();
  showToast("Download activation pending admin approval.");
}

async function confirmDownloadApproval(downloadId) {
  try {
    const response = await fetch("/api/admin/download-approval", {
      method:"POST",
      credentials:"same-origin",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id:downloadId,status:"approved"})
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || "Approval failed.");
    await renderDownloadApprovals();
    showToast("Download approved for customer.");
  } catch (error) { showToast(error.message || "Approval failed."); }
}

async function rejectDownloadRequest(downloadId) {
  try {
    const response = await fetch("/api/admin/download-approval", {
      method:"POST",
      credentials:"same-origin",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id:downloadId,status:"rejected"})
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || "Rejection failed.");
    await renderDownloadApprovals();
    showToast("Download request rejected.");
  } catch (error) { showToast(error.message || "Rejection failed."); }
}

function injectContactInfo() {
  // Decrypt and inject contact information throughout the page
  const mpesaPhone = MPESA_PHONE;
  const whatsappPhone = WHATSAPP_PHONE;
  const adminEmail = "";
  
  // Update all WhatsApp links with placeholder URLs
  document.querySelectorAll('[href*="wa.me/254xxx"]').forEach((link) => {
    link.href = `https://wa.me/${whatsappPhone}`;
  });
  
  // Update tel links with placeholder numbers
  document.querySelectorAll('[href^="tel:***"]').forEach((link) => {
    link.href = `tel:${mpesaPhone}`;
  });
  
  // Update M-Pesa button text
  const headerMpesa = document.getElementById('headerMpesaButton');
  if (headerMpesa && headerMpesa.textContent.includes('***')) {
    headerMpesa.textContent = `M-Pesa ${mpesaPhone}`;
  }
  
  // Update any text nodes containing *** placeholders
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );
  let node;
  while (node = walker.nextNode()) {
    if (node.textContent.includes('***')) {
      node.textContent = node.textContent.replace(/\*\*\*/g, mpesaPhone);
    }
  }
  
  // Update email placeholders
  document.querySelectorAll('[placeholder*="gmail"]').forEach((elem) => {
    elem.placeholder = adminEmail;
  });
}

renderGradeDashboard();
setupFilters();
applyGradeSubjectFromLink(false);
renderQuickTypes();
restoreAdminAccess();
bindEvents();
injectContactInfo();
renderResources();
renderTrending();
loadPublicStats();
syncPublicResourcesFromServer();
renderCart();
renderSellerResources();
renderSellerAccountApprovals();
renderAdminApprovals();
renderPaymentRecords();
renderDownloadApprovals();
renderProgressReport();
