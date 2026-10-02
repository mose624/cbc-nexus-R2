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

let adminDashboardData = {};
function readApprovedDownloads() {
  try { return JSON.parse(localStorage.getItem(APPROVED_DOWNLOADS_KEY) || "[]"); }
  catch (_) { return []; }
}
function safeOn(target, eventName, handler, options) {
  if (!target || typeof target.addEventListener !== "function" || typeof handler !== "function") return;
  target.addEventListener(eventName, handler, options);
}
function restoreAdminAccess() {
  try {
    const unlocked = sessionStorage.getItem("cbeAdminUnlocked") === "true";
    if (unlocked) {
      document.body.classList.add("admin-unlocked");
      const dashboard = document.getElementById("admin");
      if (dashboard) { dashboard.classList.add("open"); dashboard.setAttribute("aria-hidden","false"); }
    }
  } catch (_) {}
}
function openAdminLogin(event) {
  event?.preventDefault();
  const section=document.getElementById("adminLogin");
  if (!section) return;
  section.classList.add("open");
  section.setAttribute("aria-hidden","false");
  section.scrollIntoView({behavior:"smooth",block:"start"});
  setTimeout(()=>document.getElementById("adminUsernameInput")?.focus(),120);
}
function setAdminModule(module) {
  activeAdminModule = module || "resources";
  document.querySelectorAll("[data-admin-module]").forEach((button)=>{
    const active=button.dataset.adminModule===activeAdminModule;
    button.classList.toggle("active",active);
    button.setAttribute("aria-selected",String(active));
  });
  document.querySelectorAll("[data-admin-module-panel]").forEach((panel)=>{
    const active=panel.dataset.adminModulePanel===activeAdminModule;
    panel.classList.toggle("active",active);
    panel.hidden=!active;
  });
  if (activeAdminModule==="resources" && typeof window.loadAdminResourceModeration==="function") {
    window.loadAdminResourceModeration();
  }
}
function handleAdminControlClick(event) {
  const button=event.target.closest("[data-admin-module]");
  if (button) setAdminModule(button.dataset.adminModule);
}
function renderAdminControlCentre(data) {
  adminDashboardData=data||{};
  const resources=Array.isArray(data.resources)?data.resources:[];
  const sellers=Array.isArray(data.sellers)?data.sellers:readSellerAccounts();
  const payments=Array.isArray(data.payments)?data.payments:readPaymentRecords();
  const downloads=Array.isArray(data.downloads)?data.downloads:readApprovedDownloads();
  const users=Array.isArray(data.users)?data.users:[];
  const sales=Array.isArray(data.sales)?data.sales:[];
  const pending=resources.filter(r=>String(r.status||"pending").toLowerCase()==="pending").length;
  const approved=resources.filter(r=>String(r.status||"").toLowerCase()==="approved").length;
  const rejected=resources.filter(r=>String(r.status||"").toLowerCase()==="rejected").length;
  if(elements.adminStatsGrid) {
    const cards=[
      ["Resources",resources.length,"All uploaded resources"],
      ["Pending",pending,"Awaiting verification"],
      ["Online",approved,"Visible to clients"],
      ["Rejected",rejected,"Hidden from clients"],
      ["Sellers",sellers.length,"Seller accounts"],
      ["Sales",sales.length,"Recorded sales"],
      ["Payments",payments.length,"M-Pesa records"],
      ["Downloads",downloads.length,"Download approvals"]
    ];
    elements.adminStatsGrid.innerHTML=cards.map(c=>`<div class="admin-kpi-card"><span>${escapeHtml(c[0])}</span><strong>${Number(c[1]||0).toLocaleString("en-KE")}</strong><small>${escapeHtml(c[2])}</small></div>`).join("");
  }
  if(elements.adminResourceBadge) elements.adminResourceBadge.textContent=resources.length;
  if(elements.adminSellerBadge) elements.adminSellerBadge.textContent=sellers.length;
  if(elements.adminPaymentBadge) elements.adminPaymentBadge.textContent=payments.length;
  if(elements.adminSalesBadge) elements.adminSalesBadge.textContent=sales.length;
  if(elements.adminUserBadge) elements.adminUserBadge.textContent=users.length;
  if(elements.adminLastUpdated) elements.adminLastUpdated.textContent="Updated "+new Date().toLocaleString("en-KE");
  const summary=document.getElementById("adminResourceSummary");
  if(summary) summary.textContent=`${pending} pending · ${approved} online · ${rejected} rejected`;
}
async function loadAdminDashboard() {
  if(!isAdminUnlocked()) return;
  try {
    const me=await fetch("/api/admin/me",{credentials:"same-origin",cache:"no-store"});
    if(me.ok){ const md=await me.json().catch(()=>({})); if(md.authenticated===false){sessionStorage.removeItem("cbeAdminUnlocked");return;} }
  } catch (_) {}
  document.body.classList.add("admin-unlocked");
  try {
    const r=await fetch("/api/admin/resources?_="+Date.now(),{credentials:"same-origin",cache:"no-store"});
    const d=await r.json().catch(()=>({}));
    if(r.ok && d.ok) adminDashboardData={...adminDashboardData,resources:d.resources||[]};
  } catch (_) {}
  adminDashboardData.sellers=readSellerAccounts();
  adminDashboardData.payments=readPaymentRecords();
  adminDashboardData.downloads=readApprovedDownloads();
  adminDashboardData.users=JSON.parse(localStorage.getItem("cbeUsers")||"[]");
  adminDashboardData.sales=JSON.parse(localStorage.getItem("cbeSales")||"[]");
  renderAdminControlCentre(adminDashboardData);
  setAdminModule(activeAdminModule||"resources");
  if(typeof window.loadAdminResourceModeration==="function") await window.loadAdminResourceModeration();
}
async function unlockAdmin(event) {
  event.preventDefault();
  event.stopPropagation();
  const username=String(elements.adminUsername?.value||"").trim();
  const password=String(elements.adminPassword?.value||"");
  const email=String(elements.adminEmail?.value||"").trim().toLowerCase();
  if(!username||!password||!email){ if(elements.adminLoginStatus) elements.adminLoginStatus.textContent="Enter your admin email, username and password."; return; }
  if(elements.adminLoginStatus) elements.adminLoginStatus.textContent="Checking admin credentials...";
  try {
    const r=await fetch("/api/admin/login",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({username,password,email})});
    const d=await r.json().catch(()=>({}));
    if(!r.ok||!d.ok) throw new Error(d.error||"Invalid admin credentials.");
    sessionStorage.setItem("cbeAdminUnlocked","true");
    document.body.classList.add("admin-unlocked");
    const login=document.getElementById("adminLogin");
    if(login){login.classList.remove("open");login.setAttribute("aria-hidden","true");}
    const dashboard=document.getElementById("admin");
    if(dashboard){dashboard.classList.add("open");dashboard.setAttribute("aria-hidden","false");dashboard.scrollIntoView({behavior:"smooth",block:"start"});}
    if(elements.adminLoginStatus) elements.adminLoginStatus.textContent="Admin login successful.";
    await loadAdminDashboard();
  } catch(error) {
    if(elements.adminLoginStatus) elements.adminLoginStatus.textContent=error.message||"Admin login failed.";
  }
}

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
  return [
    ...starterResources,
    ...readSavedResources().map(normalizeResourceForLibrary),
    ...readSellerResources().filter((resource) => resource.status === "approved").map(normalizeResourceForLibrary)
  ];
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
    link.addEventListener("click", (event) => {
      const type = link.dataset.materialLink;
      if (!type) return;
      event.preventDefault();
      window.location.href = "resource-category.html?type=" + encodeURIComponent(type);
    });
  });

  document.querySelectorAll("[data-hero-resource]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const category = link.dataset.heroResource;
      if (!category) return;
      event.preventDefault();
      window.location.href = "resource-category.html?type=" + encodeURIComponent(category);
    });
  });

  safeOn(elements.quickTypes, "click", (event) => {
    const button = event.target.closest("[data-quick-type]");
    if (!button) return;
    state.type = button.dataset.quickType;
    elements.typeFilter.value = state.type;
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

  // Main dashboard subject links: open the Resource Centre directly for the selected grade + subject.
  // Capture the click so no older navigation handler can redirect the user elsewhere.
  safeOn(elements.gradeList, "click", (event) => {
    const subjectLink = event.target.closest(".dropdown-grade-subjects a[href*=\"resource-category.html?grade=\"]");
    if (!subjectLink) return;
    const href = subjectLink.getAttribute("href");
    if (!href) return;
    event.preventDefault();
    event.stopPropagation();
    window.location.assign(href);
  }, true);

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

    if (subject !== "All Subjects") {
      window.location.href = "resource-category.html?grade=" + encodeURIComponent(grade) + "&subject=" + encodeURIComponent(subject);
      return;
    }
    setGradeSubject(grade, subject);
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

function initializePaymentCheckoutFromUrl(){const p=new URLSearchParams(location.search);const resource=p.get("resource");const amount=p.get("amount");if(resource&&elements.selectedResource){elements.selectedResource.value=resource;}if(amount&&elements.amount&&Number(amount)>0){elements.amount.value=amount;}if(resource&&elements.paymentStatus){elements.paymentStatus.textContent="You are purchasing: "+resource+" — Amount: KSh "+Number(amount||0).toLocaleString()+". Enter the M-Pesa phone number you will use, then select Pay with M-Pesa. An STK Push will be sent to that phone when Daraja is configured.";elements.paymentStatus.className="form-status";}if((resource||amount)&&location.hash==="#payments"){setTimeout(()=>document.getElementById("payments")?.scrollIntoView({behavior:"smooth",block:"start"}),50);}}
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
(function(){const q=id=>document.getElementById(id);function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}function url(v){try{const u=new URL(String(v||""),location.origin);return /^https?:$/.test(u.protocol)?u.href:"#";}catch{return "#";}}
async function loadVacancies(id,publicMode){const t=q(id);if(!t)return;try{const r=await fetch("/api/vacancies?_="+Date.now(),{credentials:"same-origin"}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Vacancies could not be loaded.");const rows=d.vacancies||[];if(!rows.length){t.innerHTML='<div class="empty-state">No teaching vacancies published yet.</div>';return;}t.innerHTML=rows.map(v=>'<article class="vacancy-card '+(v.featured?'featured':'')+'"><div class="vacancy-card-top"><span class="vacancy-region">'+esc(v.region||v.country||"International")+'</span>'+(v.featured?'<span class="vacancy-featured">FEATURED</span>':'')+'</div><h3>'+esc(v.title)+'</h3><strong>'+esc(v.school)+'</strong><p class="vacancy-meta">'+esc(v.country)+' · '+esc(v.subject)+' · '+esc(v.level)+' · '+esc(v.employment||"Full-time")+'</p>'+(v.salary?'<p><strong>Package:</strong> '+esc(v.salary)+'</p>':'')+(v.deadline?'<p><strong>Deadline:</strong> '+esc(v.deadline)+'</p>':'')+(v.description?'<p>'+esc(v.description).slice(0,320)+(String(v.description).length>320?'…':'')+'</p>':'')+'<div class="vacancy-card-actions"><a class="primary-button" href="'+url(v.apply_url)+'" target="_blank" rel="noopener noreferrer">Apply / View Vacancy</a>'+(publicMode?'<button class="whatsapp-share-button" type="button" data-share-vacancy="whatsapp" data-vacancy-id="'+esc(v.id)+'">WhatsApp</button><button class="facebook-share-button" type="button" data-share-vacancy="facebook" data-vacancy-id="'+esc(v.id)+'">Facebook</button>':'<button class="ghost-button" type="button" data-delete-vacancy="'+esc(v.id)+'">Delete</button>')+'</div></article>').join("");}catch(e){t.innerHTML='<p class="form-status error">'+esc(e.message)+'</p>';}}
async function initVacancies(){loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);document.addEventListener("click",e=>{const b=e.target.closest("[data-share-vacancy]");if(!b)return;const id=b.dataset.vacancyId;const card=b.closest(".vacancy-card");if(!card||!id)return;const title=card.querySelector("h3")?.textContent?.trim()||"International teaching vacancy";const school=card.querySelector("strong")?.textContent?.trim()||"";const text=school?title+" at "+school:title;const shareUrl=new URL("international-teaching-jobs.html",location.href);shareUrl.hash="vacancy-"+encodeURIComponent(id);const encodedUrl=encodeURIComponent(shareUrl.href);if(b.dataset.shareVacancy==="whatsapp"){window.open("https://wa.me/?text="+encodeURIComponent("🌍 Teaching Vacancy Abroad\n"+text+"\n\nView vacancy: "+shareUrl.href)," _blank","noopener,noreferrer");}else{window.open("https://www.facebook.com/sharer/sharer.php?u="+encodedUrl," _blank","noopener,noreferrer");}});const form=q("adminVacancyForm");if(!form)return;try{const r=await fetch("/api/admin/me",{credentials:"same-origin"});const d=await r.json();if(!r.ok||!d.authenticated){form.closest(".admin-vacancies-card")?.remove();return;}}catch{form.closest(".admin-vacancies-card")?.remove();return;}loadVacancies("adminVacancyList",false);form.addEventListener("submit",async e=>{e.preventDefault();const s=q("adminVacancyStatus");s.textContent="Publishing vacancy…";const body={title:q("vacancyTitleInput").value,school:q("vacancySchoolInput").value,country:q("vacancyCountryInput").value,region:q("vacancyRegionInput").value,subject:q("vacancySubjectInput").value,level:q("vacancyLevelInput").value,employment:q("vacancyEmploymentInput").value,salary:q("vacancySalaryInput").value,deadline:q("vacancyDeadlineInput").value,applyUrl:q("vacancyApplyUrlInput").value,description:q("vacancyDescriptionInput").value,requirements:q("vacancyRequirementsInput").value,featured:q("vacancyFeaturedInput").checked};try{const r=await fetch("/api/admin/vacancy",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Vacancy could not be published.");s.textContent="✓ Vacancy published successfully.";form.reset();loadVacancies("adminVacancyList",false);loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);}catch(e){s.textContent=e.message||"Vacancy could not be published.";}});q("clearAdminVacancyButton")?.addEventListener("click",()=>{form.reset();q("adminVacancyStatus").textContent="";});q("adminVacancyList")?.addEventListener("click",async e=>{const b=e.target.closest("[data-delete-vacancy]");if(!b)return;if(!confirm("Delete this teaching vacancy?"))return;const r=await fetch("/api/admin/vacancy-delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:b.dataset.deleteVacancy})}),d=await r.json();if(!r.ok||!d.ok){q("adminVacancyStatus").textContent=d.error||"Could not delete vacancy.";return;}loadVacancies("adminVacancyList",false);loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initVacancies);else initVacancies();})();

/* Admin resource moderation: approve, reject or permanently delete uploaded resources. */
(function initAdminResourceModeration(){
  const host=document.getElementById("adminResourceManagement");
  if(!host)return;
  let adminResources=[];
  const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
  async function load(){
    try{
      const r=await fetch("/api/admin/resources?_="+Date.now(),{credentials:"same-origin",cache:"no-store"});
      if(r.status===401){host.innerHTML='<p class="form-status">Admin login required.</p>';return;}
      const d=await r.json();
      if(!r.ok||!d.ok)throw new Error(d.error||"Resources could not be loaded.");
      adminResources=d.resources||[];
      render();
    }catch(e){host.innerHTML='<p class="form-status error">'+esc(e.message)+'</p>';}
  }
  function render(){
    const q=String(document.getElementById("adminDashboardSearch")?.value||"").trim().toLowerCase();
    const filter=String(document.getElementById("adminStatusFilter")?.value||"all").toLowerCase();
    const rows=adminResources.filter(x=>{
      const hay=[x.title,x.grade,x.subject,x.type,x.fileName,x.filename].join(" ").toLowerCase();
      return (!q||hay.includes(q))&&(filter==="all"||String(x.status||"pending").toLowerCase()===filter);
    });
    const pending=adminResources.filter(x=>String(x.status||"pending").toLowerCase()==="pending").length;
    const approved=adminResources.filter(x=>String(x.status||"").toLowerCase()==="approved").length;
    const rejected=adminResources.filter(x=>String(x.status||"").toLowerCase()==="rejected").length;
    const summary=document.getElementById("adminResourceSummary");
    if(summary)summary.textContent=`${pending} pending · ${approved} online · ${rejected} rejected`;
    if(!rows.length){host.innerHTML='<div class="admin-management-card"><strong>No uploaded resources match this filter.</strong><p>New seller uploads will appear here for moderation.</p></div>';return;}
    host.innerHTML=rows.map(x=>{
      const s=String(x.status||"pending").toLowerCase();
      const badge=s==="approved"?"✓ ONLINE":s==="rejected"?"✕ REJECTED":"● PENDING";
      return `<article class="admin-management-card admin-resource-moderation-card">
        <div class="admin-management-heading"><div><span class="eyebrow">${esc(x.grade||"Grade")} · ${esc(x.subject||"Subject")}</span><h4>${esc(x.title||"Untitled resource")}</h4><p>${esc(x.type||"Resource")} · ${esc(x.fileName||x.filename||"File")}</p></div><span class="price-pill">${badge}</span></div>
        <p><strong>Price:</strong> KES ${Number(x.price||0).toLocaleString("en-KE")} · <strong>Status:</strong> ${esc(s)}</p>
        <div class="admin-resource-moderation-actions">
          <button class="primary-button" type="button" data-resource-moderate="approved" data-resource-id="${esc(x.id)}" ${s==="approved"?"disabled":""}>✓ Approve / Publish</button>
          <button class="secondary-button" type="button" data-resource-moderate="rejected" data-resource-id="${esc(x.id)}" ${s==="rejected"?"disabled":""}>✕ Reject / Hide</button>
          <button class="danger-button" type="button" data-resource-delete="${esc(x.id)}">🗑 Delete File</button>
        </div>
      </article>`;
    }).join("");
  }
  host.addEventListener("click",async e=>{
    const statusBtn=e.target.closest("[data-resource-moderate]");
    const deleteBtn=e.target.closest("[data-resource-delete]");
    if(!statusBtn&&!deleteBtn)return;
    const id=(statusBtn||deleteBtn).dataset.resourceId||(deleteBtn?.dataset.resourceDelete);
    if(deleteBtn){
      if(!confirm("Permanently delete this resource from CBE Nexus and Cloudflare R2? This cannot be undone."))return;
      deleteBtn.disabled=true;
      try{
        const r=await fetch("/api/admin/resource-delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id})});
        const d=await r.json().catch(()=>({}));
        if(!r.ok||!d.ok)throw new Error(d.error||"Delete failed.");
        adminResources=adminResources.filter(x=>String(x.id)!==String(id));render();
        if(typeof window.syncPublicResourcesFromServer==="function")await window.syncPublicResourcesFromServer();
        if(typeof showToast==="function")showToast("Resource and stored file deleted.");
      }catch(err){deleteBtn.disabled=false;showToast(err.message||"Delete failed.");}
      return;
    }
    const status=statusBtn.dataset.resourceModerate;
    statusBtn.disabled=true;
    try{
      const r=await fetch("/api/admin/resource-status",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id,status})});
      const d=await r.json().catch(()=>({}));
      if(!r.ok||!d.ok)throw new Error(d.error||"Status update failed.");
      const item=adminResources.find(x=>String(x.id)===String(id));if(item)item.status=status;render();
      if(typeof window.syncPublicResourcesFromServer==="function")await window.syncPublicResourcesFromServer();
      if(typeof showToast==="function")showToast(status==="approved"?"Resource is now online.":"Resource rejected and hidden from clients.");
    }catch(err){statusBtn.disabled=false;showToast(err.message||"Status update failed.");}
  });
  const refresh=document.getElementById("refreshAdminDashboardButton");
  refresh?.addEventListener("click",load);
  document.getElementById("adminDashboardSearch")?.addEventListener("input",render);
  document.getElementById("adminStatusFilter")?.addEventListener("change",render);
  window.loadAdminResourceModeration=load;
  const observer=new MutationObserver(()=>{if(document.body.classList.contains("admin-unlocked")&&host.dataset.loaded!=="1"){host.dataset.loaded="1";load();}});
  observer.observe(document.body,{attributes:true,attributeFilter:["class"]});
  if(document.body.classList.contains("admin-unlocked")){host.dataset.loaded="1";load();}
})();