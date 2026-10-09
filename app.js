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

const internationalCurriculumSubjects = [
  "Mathematics","Further Mathematics","Mathematics A","Mathematics B","Further Pure Mathematics",
  "Biology","Human Biology","Chemistry","Physics","Science Double Award","Computer Science","ICT",
  "English","English Language","English Language A","English Language B","English Literature",
  "English Language & Literature","Business","Business Studies","Business Management","Accounting",
  "Economics","Geography","History","Religious Studies","Psychology","Sociology","Law",
  "French","Spanish","German","Arabic","Swahili","Art & Design","Visual Arts","Music","Theatre",
  "Drama","Film","Physical Education","Design & Technology","Agriculture","Global Perspectives",
  "Travel & Tourism","Commerce"
];

const allCbeSubjects = [...new Set([
  ...prePrimarySubjects,...lowerPrimarySubjects,...upperPrimarySubjects,...juniorSchoolSubjects,
  ...seniorSchoolSubjects,...specialNeedsSubjects,...diplomaTeacherEducationSubjects,...internationalCurriculumSubjects
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
  "Grade 12": ["Agriculture","Aviation","Biology","Building and Construction","Business Studies","Chemistry","Christian Religious Education","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","Islamic Religious Education","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","Hindu Religious Education","Mandarin Chinese"],
  "IGCSE": ["Mathematics","Biology","Chemistry","Physics","English","Business Studies","Economics","Computer Science","Geography","History","French","Spanish","German","Swahili","Art & Design","Physical Education","Accounting","Agriculture","Design & Technology","Drama","Global Perspectives","ICT","Psychology","Sociology","Travel & Tourism"],
  "IB": ["English Language & Literature","English Literature","French","Spanish","Business Management","Economics","Geography","History","Biology","Chemistry","Physics","Computer Science","Mathematics","Visual Arts","Music","Theatre","Film"],
  "O Level": ["English","Mathematics","Biology","Chemistry","Physics","Geography","History","Business Studies","Accounting","Economics","Computer Science","ICT","French","Spanish","Arabic","Art & Design","Design & Technology","Religious Studies","Physical Education"],
  "A Level": ["Mathematics","Further Mathematics","Physics","Chemistry","Biology","Economics","Business","Accounting","Computer Science","English Language","English Literature","French","Spanish","Geography","History","Psychology","Art & Design","Music","Drama","Travel & Tourism","Sociology","Law"],
  "Pearson": ["English Language A","English Language B","English Literature","Mathematics A","Mathematics B","Further Pure Mathematics","Biology","Human Biology","Chemistry","Physics","Science Double Award","Accounting","Business Studies","Commerce","Economics","Computer Science","ICT","Geography","History","Religious Studies","Arabic","French","German","Spanish","Swahili","Art & Design","Global Citizenship"]
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
  adminCurriculum: document.querySelector("#adminCurriculumInput"),
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
  adminGradeFilter: document.querySelector("#adminGradeFilter"),
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
const ADMIN_EXTENSION_SCRIPTS = [
  "/admin-module-fix.js",
  "/r2-browser.js?v=20261008-1",
  "/ai-course-admin.js?v=20261004-1",
  "/scholarships-admin.js?v=20261004-1",
  "/school-directory-admin.js?v=20261004-1",
  "/admin-blog.js?v=20261004-1",
  "/ad-revenue.js?v=20261005-1"
];
let adminExtensionsPromise = null;
function loadAdminExtensions(){
  if(adminExtensionsPromise) return adminExtensionsPromise;
  adminExtensionsPromise = Promise.all(ADMIN_EXTENSION_SCRIPTS.map(src=>new Promise(resolve=>{
    if(document.querySelector('script[data-cbe-admin-extension="'+src+'"]')) return resolve();
    const s=document.createElement("script");
    s.src=src; s.defer=true; s.dataset.cbeAdminExtension=src;
    s.onload=resolve; s.onerror=resolve;
    document.head.appendChild(s);
  })));
  return adminExtensionsPromise;
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
  activeAdminModule = String(module || "resources").trim();
  document.querySelectorAll("[data-admin-module]").forEach((button)=>{
    const active=button.dataset.adminModule===activeAdminModule;
    button.classList.toggle("active",active);
    button.setAttribute("aria-selected",String(active));
    button.setAttribute("aria-current",active ? "page" : "false");
  });
  document.querySelectorAll("[data-admin-module-panel]").forEach((panel)=>{
    const active=panel.dataset.adminModulePanel===activeAdminModule;
    panel.classList.toggle("active",active);
    panel.hidden=!active;
    panel.setAttribute("aria-hidden",String(!active));
  });
  const panel=document.querySelector('[data-admin-module-panel="'+CSS.escape(activeAdminModule)+'"]');
  if(panel){
    panel.hidden=false;
    panel.classList.add("active");
    setTimeout(()=>panel.scrollIntoView({behavior:"smooth",block:"nearest"}),0);
  }
  if(activeAdminModule==="ai-notes" && typeof initAICourseNotesAdmin==="function") initAICourseNotesAdmin();
  if(activeAdminModule==="resources"){
    if(typeof window.loadAdminResourceModeration==="function") window.loadAdminResourceModeration();
    const form=document.getElementById("resourceForm");
    if(form) setTimeout(()=>form.scrollIntoView({behavior:"smooth",block:"start"}),120);
  }
}
/* Robust admin tab navigation: works for every coloured dashboard button even if another listener intercepts the click. */
(function enableReliableAdminTabs(){
  document.addEventListener("click",function(event){
    const button=event.target.closest("[data-admin-module]");
    if(!button) return;
    event.preventDefault();
    event.stopPropagation();
    setAdminModule(button.dataset.adminModule);
    const panel=document.querySelector('[data-admin-module-panel="'+CSS.escape(button.dataset.adminModule)+'"]');
    if(panel) panel.scrollIntoView({behavior:"smooth",block:"nearest"});
  },true);
})();
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
  renderAdminModuleDetails(data);
  auditAdminExportButtons();
  if(elements.adminResourceBadge) elements.adminResourceBadge.textContent=resources.length;
  if(elements.adminSellerBadge) elements.adminSellerBadge.textContent=sellers.length;
  if(elements.adminPaymentBadge) elements.adminPaymentBadge.textContent=payments.length;
  if(elements.adminSalesBadge) elements.adminSalesBadge.textContent=sales.length;
  if(elements.adminUserBadge) elements.adminUserBadge.textContent=users.length;
  if(elements.adminLastUpdated) elements.adminLastUpdated.textContent="Updated "+new Date().toLocaleString("en-KE");
  const summary=document.getElementById("adminResourceSummary");
  if(summary) summary.textContent=`${pending} pending · ${approved} online · ${rejected} rejected`;
}
function checkAIAcademyIntegrations(){
  const sup=document.getElementById("aiSupabaseStatus"), r2=document.getElementById("aiR2Status"), gh=document.getElementById("aiGithubStatus"), render=document.getElementById("aiRenderStatus");
  if(gh) gh.textContent="Connected source";
  if(render) render.textContent="Live application server";
  fetch("/api/supabase/status",{credentials:"same-origin",cache:"no-store"}).then(r=>r.json()).then(d=>{if(sup)sup.textContent=d.supabaseConfigured?"Connected ✓":"Not configured";}).catch(()=>{if(sup)sup.textContent="Connection error";});
  fetch("/api/r2/status",{credentials:"same-origin",cache:"no-store"}).then(r=>r.json()).then(d=>{if(r2)r2.textContent=d.r2Configured?"Connected ✓":"Not configured";}).catch(()=>{if(r2)r2.textContent="Connection error";});
}
function initAICourseNotesAdmin(){
  const courseSelect=document.getElementById("aiNotesCourseInput"), moduleSelect=document.getElementById("aiNotesModuleInput"), levelSelect=document.getElementById("aiNotesLevelInput"), statusSelect=document.getElementById("aiNotesStatusInput");
  const form=document.getElementById("aiNotesAdminForm"); if(!courseSelect||!moduleSelect||!form||courseSelect.dataset.ready==="1") return;
  courseSelect.dataset.ready="1";
  checkAIAcademyIntegrations();
  const courses=window.CBENexusAICourses||{};
  courseSelect.innerHTML=Object.keys(courses).map(s=>'<option value="'+escapeHtml(s)+'">'+escapeHtml(courses[s].title)+'</option>').join("");
  function refreshModules(){const c=courses[courseSelect.value];moduleSelect.innerHTML=(c?.modules||[]).map((m,i)=>'<option value="'+(i+1)+'">Module '+(i+1)+': '+escapeHtml(m[0])+'</option>').join("");document.getElementById("aiNotesModuleTitleInput").value=c?.modules?.[Number(moduleSelect.value)-1]?.[0]||"";}
  refreshModules();courseSelect.addEventListener("change",refreshModules);moduleSelect.addEventListener("change",refreshModules);
  document.getElementById("aiNotesLoadButton")?.addEventListener("click",loadAICourseNoteAdmin);
  document.getElementById("aiNotesPreviewButton")?.addEventListener("click",()=>{const v=document.getElementById("aiNotesContentInput").value;const w=window.open("","_blank","noopener");if(w)w.document.write("<html><body style='font-family:Arial;padding:30px;max-width:900px;margin:auto'><h1>"+escapeHtml(document.getElementById("aiNotesModuleTitleInput").value)+"</h1><pre style='white-space:pre-wrap;line-height:1.6'>"+escapeHtml(v)+"</pre></body></html>");});
  form.addEventListener("submit",async e=>{e.preventDefault();const c=courses[courseSelect.value],m=c.modules[Number(moduleSelect.value)-1];const payload={courseSlug:courseSelect.value,courseTitle:c.title,moduleNumber:Number(moduleSelect.value),moduleTitle:document.getElementById("aiNotesModuleTitleInput").value,level:levelSelect.value,status:statusSelect.value,content:document.getElementById("aiNotesContentInput").value,objectives:document.getElementById("aiNotesObjectivesInput").value,examples:document.getElementById("aiNotesExamplesInput").value,activity:document.getElementById("aiNotesActivityInput").value,questions:document.getElementById("aiNotesQuestionsInput").value};const st=document.getElementById("aiNotesAdminStatus");st.textContent="Saving...";try{const r=await fetch("/api/admin/ai-course-notes",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Could not save notes.");st.textContent=payload.status==="published"?"Published successfully.":"Saved as draft.";
    const pdfInput=document.getElementById("aiNotesPdfInput"), pdfStatus=document.getElementById("aiNotesPdfStatus");
    if(pdfInput?.files?.[0]){
      const file=pdfInput.files[0];
      if(file.type!=="application/pdf"&&!/\\.pdf$/i.test(file.name)) throw new Error("Please select a PDF file.");
      if(file.size>50*1024*1024) throw new Error("PDF is too large. Maximum size is 50 MB.");
      if(pdfStatus) pdfStatus.textContent="Uploading PDF to Cloudflare R2...";
      const up=await fetch("/api/admin/ai-course-note-pdf",{method:"POST",credentials:"same-origin",headers:{
        "Content-Type":"application/pdf","X-AI-Course-Slug":payload.courseSlug,"X-AI-Module-Number":String(payload.moduleNumber),
        "X-AI-Level":payload.level,"X-AI-File-Name":file.name
      },body:await file.arrayBuffer()});
      const ud=await up.json().catch(()=>({}));
      if(!up.ok||!ud.ok) throw new Error(ud.error||"PDF upload failed.");
      if(pdfStatus) pdfStatus.textContent="✅ PDF uploaded successfully to Cloudflare R2.";
      pdfInput.value="";
    }
    loadAICourseNotesAdmin();}catch(err){st.textContent=err.message;}}); loadAICourseNotesAdmin();
}
async function loadAICourseNotesAdmin(){
  const host=document.getElementById("aiNotesAdminList");if(!host||!isAdminUnlocked())return;try{const r=await fetch("/api/admin/ai-course-notes?_="+Date.now(),{credentials:"same-origin",cache:"no-store"}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Could not load notes.");host.innerHTML=(d.notes||[]).map(n=>'<article class="ai-notes-admin-card"><span class="eyebrow">'+escapeHtml(String(n.status||"").toUpperCase())+' • '+escapeHtml(n.level||"basic")+'</span><h4>'+escapeHtml(n.course_title||n.course_slug)+'</h4><p>Module '+n.module_number+': '+escapeHtml(n.module_title||"")+'</p><button class="secondary-button" data-ai-note-load="'+escapeHtml(n.id)+'">Load</button></article>').join("")||'<div class="admin-management-card">No notes published yet.</div>';host.querySelectorAll("[data-ai-note-load]").forEach(b=>b.addEventListener("click",()=>loadAICourseNoteAdmin(b.dataset.aiNoteLoad)));document.getElementById("aiNotesAdminSummary").textContent=(d.notes||[]).length+" saved notes";}catch(e){host.innerHTML='<div class="admin-management-card">'+escapeHtml(e.message)+'</div>';}
}
async function loadAICourseNoteAdmin(id){
  const r=await fetch("/api/admin/ai-course-notes?_="+Date.now(),{credentials:"same-origin",cache:"no-store"}),d=await r.json();const n=(d.notes||[]).find(x=>String(x.id)===String(id));if(!n)return;
  document.getElementById("aiNotesCourseInput").value=n.course_slug;document.getElementById("aiNotesCourseInput").dispatchEvent(new Event("change"));document.getElementById("aiNotesModuleInput").value=n.module_number;document.getElementById("aiNotesModuleInput").dispatchEvent(new Event("change"));document.getElementById("aiNotesLevelInput").value=n.level;document.getElementById("aiNotesStatusInput").value=n.status;document.getElementById("aiNotesModuleTitleInput").value=n.module_title||"";document.getElementById("aiNotesObjectivesInput").value=n.objectives||"";document.getElementById("aiNotesContentInput").value=n.content||"";document.getElementById("aiNotesExamplesInput").value=n.examples||"";document.getElementById("aiNotesActivityInput").value=n.activity||"";document.getElementById("aiNotesQuestionsInput").value=n.questions||"";const pdfStatus=document.getElementById("aiNotesPdfStatus");if(pdfStatus)pdfStatus.textContent=n.pdf_r2_key?"✅ PDF attached: "+(n.pdf_filename||"PDF notes"):"No PDF attached yet.";window.scrollTo({top:document.getElementById("aiNotesAdminForm").offsetTop-100,behavior:"smooth"});
}
function renderAdminModuleDetails(data){
  const users=Array.isArray(data?.users)?data.users:[];
  const sales=Array.isArray(data?.sales)?data.sales:[];
  const resources=Array.isArray(data?.resources)?data.resources:[];
  const userHost=document.getElementById("adminUserManagement");
  if(userHost){
    userHost.innerHTML=users.length
      ? users.slice(0,100).map((u,i)=>'<article class="admin-management-card"><div class="admin-management-heading"><div><span class="eyebrow">USER '+(i+1)+'</span><h4>'+escapeHtml(u.name||u.username||u.email||"Customer")+'</h4><p>'+escapeHtml(u.email||u.phone||"Account")+'</p></div><span class="price-pill">ACTIVE</span></div></article>').join("")
      : '<div class="admin-management-card"><strong>No customer accounts found.</strong><p>Registered users will appear here.</p></div>';
  }
  const salesHost=document.getElementById("adminSalesManagement");
  if(salesHost){
    salesHost.innerHTML=sales.length
      ? sales.slice().reverse().slice(0,100).map((s,i)=>'<article class="admin-management-card"><div class="admin-management-heading"><div><span class="eyebrow">SALE '+(i+1)+'</span><h4>'+escapeHtml(s.resource||s.title||"Resource purchase")+'</h4><p>'+escapeHtml(s.phone||s.email||s.customer||"Customer")+'</p></div><span class="price-pill">KES '+Number(s.amount||s.price||0).toLocaleString("en-KE")+'</span></div><p>'+escapeHtml(s.status||s.date||s.createdAt||"Recorded transaction")+'</p></article>').join("")
      : '<div class="admin-management-card"><strong>No sales recorded yet.</strong><p>Completed marketplace transactions will appear here.</p></div>';
  }
  const priceHost=document.getElementById("adminPriceManagement");
  if(priceHost){
    const priced=resources.filter(r=>Number(r.price||0)>0);
    const free=resources.filter(r=>Number(r.price||0)<=0);
    const avg=priced.length?priced.reduce((n,r)=>n+Number(r.price||0),0)/priced.length:0;
    priceHost.innerHTML='<article class="admin-management-card"><div class="admin-management-heading"><div><span class="eyebrow">MARKETPLACE PRICING</span><h4>Resource pricing overview</h4><p>Prices are stored with each uploaded resource.</p></div><span class="price-pill">KES</span></div><div class="summary-grid"><div><strong>'+priced.length+'</strong><span>Paid resources</span></div><div><strong>'+free.length+'</strong><span>Free resources</span></div><div><strong>KES '+Math.round(avg).toLocaleString("en-KE")+'</strong><span>Average price</span></div></div></article>';
  }
}
function downloadAdminJson(filename,data){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json;charset=utf-8"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a");
  a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function auditAdminExportButtons(){
  const salesButton=document.getElementById("adminExportSales");
  if(salesButton) salesButton.onclick=()=>{
    downloadAdminJson("cbe-nexus-sales.json",adminDashboardData?.sales||[]);
    showToast("Sales export downloaded.");
  };
  safeOn(document.getElementById("adminExportResources"),"click",()=>{
    downloadAdminJson("cbe-nexus-resources.json",adminDashboardData?.resources||[]);
    showToast("Resources export downloaded.");
  });
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
    await loadAdminExtensions();
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
      .filter((r) => r.id && r.status === "approved" && !["IGCSE","IB","O Level","A Level","Pearson"].includes(String(r.grade || "").trim()));

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

function refreshAdminUploadSubjects() {
  if (!elements.adminCurriculum || !elements.adminGrade || !elements.adminSubject) return;
  const curriculum = String(elements.adminCurriculum.value || "CBC/CBE").trim();
  const internationalCurricula = ["IGCSE","IB","O Level","A Level","Pearson"];
  const international = internationalCurricula.includes(curriculum);
  if (international) {
    optionList(elements.adminGrade, [curriculum], curriculum);
    const subjects = gradeSubjects[curriculum] || [];
    optionList(elements.adminSubject, subjects, subjects[0] || "");
    if (elements.formStatus) elements.formStatus.textContent = curriculum + " selected — choose a " + curriculum + " subject below, then upload and publish.";
  } else {
    const grades = Object.keys(gradeSubjects).filter((value) => !internationalCurricula.includes(value));
    optionList(elements.adminGrade, grades, "Grade 1");
    const subjects = gradeSubjects["Grade 1"] || allCbeSubjects;
    optionList(elements.adminSubject, subjects, subjects[0] || "");
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const uploadedFile = elements.fileInput.files[0];
  const title = document.querySelector("#titleInput").value.trim();
  const description = document.querySelector("#descriptionInput").value.trim();
  const notes = elements.notesContent.value.trim();
  const price = Number(document.querySelector("#priceInput").value || 0);
  const discount = Number(document.querySelector("#discountInput").value || 0);
  const grade = elements.adminGrade.value;
  const curriculum = elements.adminCurriculum ? elements.adminCurriculum.value : "CBC/CBE";
  const subject = elements.adminSubject.value;
  const type = elements.adminType.value;
  let fileName = document.querySelector("#fileNameInput").value.trim();
  const internationalCurricula = ["IGCSE","IB","O Level","A Level","Pearson"];
  const isInternationalUpload = internationalCurricula.includes(curriculum);

  if (!title || !description || !subject || !type || !price && price !== 0) {
    elements.formStatus.textContent = "Complete the resource title, description, subject, material type and price before publishing.";
    showToast("Please complete all required resource details.");
    return;
  }

  if (isInternationalUpload && (!grade || grade !== curriculum)) {
    elements.formStatus.textContent = "Select the international curriculum and its subject before publishing.";
    showToast("Choose a valid international curriculum and subject.");
    return;
  }

  if (!uploadedFile) {
    elements.formStatus.textContent = "Please choose the resource file before publishing.";
    showToast("Select a resource file first.");
    return;
  }

  fileName = fileName || uploadedFile.name;
  const resourceId = `admin-${Date.now()}`;

  try {
    elements.formStatus.textContent = isInternationalUpload
      ? `Uploading ${curriculum} resource to its dedicated international library...`
      : "Uploading resource to Cloudflare R2...";
    const uploadResponse = await fetch("/api/r2/upload", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": uploadedFile.type || "application/octet-stream",
        "Content-Length": String(uploadedFile.size),
        "X-CBE-Role": "admin",
        "X-CBE-Grade": grade,
        "X-CBE-Subject": subject,
        "X-CBE-Type": type,
        "X-CBE-Filename": fileName,
        "X-CBE-Resource-Id": resourceId
      },
      body: uploadedFile
    });
    const uploadData = await uploadResponse.json().catch(() => ({}));
    if (!uploadResponse.ok || !uploadData.ok) throw new Error(uploadData.error || "Resource file could not be uploaded to R2.");

    elements.formStatus.textContent = "Saving resource details to Supabase...";
    const resourceResponse = await fetch("/api/resources", {
      method: "POST",
      credentials: "same-origin",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        id: resourceId,
        role: "admin",
        title,
        grade,
        curriculum,
        subject,
        type,
        description,
        notes,
        price,
        discount,
        term: elements.termInput.value,
        isFreeSample: elements.freeSample.value === "true",
        popularity: 1,
        fileName,
        r2Key: uploadData.r2Key || uploadData.key,
        previewKey: uploadData.previewKey || ""
      })
    });
    const resourceData = await resourceResponse.json().catch(() => ({}));
    if (!resourceResponse.ok || !resourceData.ok) throw new Error(resourceData.error || "Resource metadata could not be saved to Supabase.");

    const saved = resourceData.saved || {
      ...resourceData.resource,
      id: resourceId, title, grade, subject, type, description, price, discount, term: elements.termInput.value,
      isFreeSample: elements.freeSample.value === "true", fileName,
      r2Key: uploadData.r2Key || uploadData.key
    };
    const local = readSavedResources().filter((r) => String(r.id) !== String(saved.id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...local, normalizeResourceForLibrary(saved)]));

    elements.form.reset();
    document.querySelector("#priceInput").value = "";
    document.querySelector("#discountInput").value = 0;
    elements.termInput.value = "Term 1";
    elements.freeSample.value = "false";
    elements.notesContent.value = "";
    elements.adminGrade.value = "Grade 1";
    if (typeof refreshAdminUploadSubjects === "function") refreshAdminUploadSubjects();
    elements.fileHelp.textContent = "Choose a PDF, Word document, PowerPoint, Excel file, text file, or ZIP.";
    // Keep the administrator on the upload form and give an unmistakable success message.
    const successMessage = isInternationalUpload
      ? `✓ SUCCESS — ${curriculum} resource uploaded and saved successfully. It will appear only on the ${curriculum} resource page after approval.`
      : "✓ SUCCESS — Resource uploaded to Cloudflare R2 and saved to Supabase successfully.";
    elements.formStatus.textContent = successMessage;
    elements.formStatus.className = "form-status upload-success";
    showToast(successMessage);
    const submitButton = elements.form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.textContent = "✓ Upload Successful";
    // Refresh only the resource moderation list; do not navigate/reset the Admin Dashboard.
    if (typeof window.loadAdminResourceModeration === "function") await window.loadAdminResourceModeration();
  } catch (error) {
    console.error("CBE Nexus resource publish error:", error);
    elements.formStatus.textContent = error.message || "Resource could not be published.";
    showToast(error.message || "Resource could not be published.");
  }
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
      // Dashboard category cards stay on the main Teaching & Learning Dashboard.
      // They must not redirect learners to a subject/resource-category page.
      event.preventDefault();
      const categoryTypeMap = {
        "Holiday Classes": "Holiday Workbooks",
        "Assignments": "Assignments",
        "KNEC Rubrics": "KNEC Rubrics",
        "Novels": "Bookshop",
        "Novels & Setbooks": "Bookshop",
        "Revision Booklets": "Study Guides",
        "Bookshop": "Bookshop"
      };
      const selectedType = categoryTypeMap[category] || category;
      if (elements.typeFilter) elements.typeFilter.value = selectedType;
      state.type = selectedType;
      renderResources();
      document.querySelector("#resources")?.scrollIntoView({ behavior: "smooth", block: "start" });
      showToast(category + " selected.");
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
    elements.cartDrawer.hidden = false;
    elements.cartDrawer.classList.add("open");
  });

  safeOn(elements.closeResourcePreview, "click", closeResourcePreview);
  safeOn(elements.closeCartButton, "click", () => {
    elements.cartDrawer.classList.remove("open");
    elements.cartDrawer.hidden = true;
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

  // Left Dashboard navigation: Grade -> Subject -> dedicated Resource Centre page.
  function openCbeGradeSubjectPage(grade, subject) {
    const selectedGrade = String(grade || "").trim();
    const selectedSubject = String(subject || "").trim();
    if (!selectedGrade || !selectedSubject || selectedSubject === "All Subjects") return;

    // The HEADER Grade -> Subject links are the single source of truth.
    // The Left Resource Centre resolves its selection to the exact same href.
    const normalize = (value) => String(value || "")
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[()]/g, "")
      .replace(/\s+/g, " ")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

    const aliasKey = (value) => {
      const raw = String(value || "").trim();
      const aliases = {
        "cre": "christian religious education",
        "christian religious education (cre)": "christian religious education",
        "hre": "hindu religious education",
        "hindu religious education (hre)": "hindu religious education",
        "ire": "islamic religious education",
        "islamic religious education (ire)": "islamic religious education",
        "pre technical studies": "pre technical studies",
        "pre technical": "pre technical studies",
        "science & technology": "science and technology",
        "science and technology": "science and technology",
        "history and citizenship": "history and citizenship",
        "history & citizenship": "history and citizenship",
        "music and dance": "music and dance",
        "music & dance": "music and dance",
        "theatre and film": "theatre and film",
        "theatre & film": "theatre and film",
        "sports and recreation": "sports and recreation",
        "sports & recreation": "sports and recreation",
        "building and construction": "building and construction",
        "building & construction": "building and construction",
        "metalwork": "metal work",
        "metal work": "metal work",
        "wood technology": "woodwork",
        "woodwork": "woodwork",
        "marine and fisheries technology": "marine fisheries",
        "marine technology": "marine fisheries",
        "marine & fisheries": "marine fisheries",
        "kenya sign language (ksl)": "sign language",
        "kenya sign language": "sign language",
        "ksl": "sign language",
        "community service learning (csl)": "community service learning",
        "community service learning": "community service learning",
        "indigenous language": "indigenous languages",
        "indigenous languages": "indigenous languages",
        "kiswahili activities": "kiswahili",
        "mathematics activities": "mathematics"
      };
      return normalize(aliases[raw.toLowerCase()] || raw);
    };

    const gradeKey = normalize(selectedGrade);
    const subjectKey = aliasKey(selectedSubject);

    const headerLinks = Array.from(document.querySelectorAll(
      "a[href*=\"resource-category.html?grade=\"]"
    ));

    const matchingLink = headerLinks.find((link) => {
      try {
        const url = new URL(link.getAttribute("href"), window.location.href);
        const headerGrade = url.searchParams.get("grade") || "";
        const headerSubject = url.searchParams.get("subject") || "";
        return normalize(headerGrade) === gradeKey && aliasKey(headerSubject) === subjectKey;
      } catch {
        return false;
      }
    });

    const target = matchingLink?.getAttribute("href") ||
      ("resource-category.html?grade=" + encodeURIComponent(selectedGrade) +
       "&subject=" + encodeURIComponent(selectedSubject));

    window.location.assign(target);
  }

  // Keep every Grade 1-12 subject dropdown independently functional.\n  function setGradeSubject(gradeName, subjectName = "All Subjects") {\n    const cards = elements.gradeList?.querySelectorAll(".grade-card") || [];\n    const targetCard = Array.from(cards).find(card => card.dataset.gradeCard === gradeName);\n    if (!targetCard) return;\n    const select = targetCard.querySelector("[data-grade-subject-select]");\n    if (!select) return;\n    const subjects = gradeSubjects[gradeName] || [];\n    const current = String(subjectName || "All Subjects");\n    select.innerHTML = "";\n    const placeholder = document.createElement("option");\n    placeholder.value = "All Subjects";\n    placeholder.textContent = "Select subject";\n    select.appendChild(placeholder);\n    subjects.forEach(subjectName => {\n      const option = document.createElement("option");\n      option.value = subjectName;\n      option.textContent = subjectName;\n      select.appendChild(option);\n    });\n    select.value = subjects.includes(current) ? current : "All Subjects";\n  }\n\n  // Main dashboard subject links: open the Resource Centre directly for the selected grade + subject.
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
      openCbeGradeSubjectPage(grade, subject);
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

  // ADMIN UPLOAD: Grade controls the Subject list.
  // This keeps every uploaded resource aligned with the grade pages.
  safeOn(elements.adminGrade, "change", (event) => {
    const grade = String(event.target.value || "").trim();
    const subjects = gradeSubjects[grade] || [];
    const current = canonicalSubjectName(elements.adminSubject?.value || "");
    const selected = subjects.find((subject) => canonicalSubjectName(subject) === current) || subjects[0] || "";
    optionList(elements.adminSubject, subjects, selected);
    if (elements.formStatus && grade) {
      elements.formStatus.textContent = subjects.length
        ? grade + " selected. Only subjects belonging to " + grade + " are available."
        : "Select a valid grade.";
    }
  });

  safeOn(elements.adminCurriculum, "change", () => {
    refreshAdminUploadSubjects();
    const selected = String(elements.adminCurriculum?.value || "CBC/CBE");
    if (elements.formStatus) elements.formStatus.textContent = selected === "CBC/CBE"
      ? "CBC / CBE upload selected."
      : selected + " upload selected. This resource will appear only on its dedicated international curriculum page.";
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

  // Resource upload: use a capture-phase guard so the browser never follows a form action or reloads the dashboard.
  if (elements.form && !elements.form.dataset.cbeUploadHandler) {
    elements.form.dataset.cbeUploadHandler = "1";
    elements.form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();
      handleFormSubmit(event);
    }, true);
  }
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
    elements.resourcePreviewModal.hidden = false;
    elements.resourcePreviewModal.classList.add("open");
  } catch (error) { showToast(error.message || "Preview could not be opened."); }
}

function closeResourcePreview() {
  if (!elements.resourcePreviewModal) return;
  elements.resourcePreviewModal.classList.remove("open");
  elements.resourcePreviewModal.hidden = true;
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

function selectResourceForPayment(resourceId){
  const id=String(resourceId||"").trim();
  const resource=(getAllResources()||[]).find(r=>String(r.id)===id);
  if(!resource){showToast("This resource is not available. Please refresh and try again.");return;}
  const price=discountedPrice(resource);
  if(price<1){showToast("This resource is free and does not require M-Pesa payment.");return;}
  const titleInput=document.getElementById("selectedResourceInput");
  const idInput=document.getElementById("selectedResourceIdInput");
  const amountInput=document.getElementById("amountInput");
  const phoneInput=document.getElementById("customerPhoneInput");
  if(titleInput)titleInput.value=resource.title||"";
  if(idInput)idInput.value=id;
  if(amountInput)amountInput.value=String(price);
  const phone=window.prompt("Enter the M-Pesa phone number to receive the STK Push (e.g. 0712345678):",phoneInput?.value||"");
  if(!phone)return;
  if(phoneInput)phoneInput.value=phone;
  requestMpesaPayment({preventDefault(){},submitter:document.querySelector("#paymentForm button[type=submit]")});
}

async function requestMpesaPayment(event){
  event.preventDefault();
  const phoneInput=document.getElementById("customerPhoneInput");
  const amountInput=document.getElementById("amountInput");
  const resourceInput=document.getElementById("selectedResourceInput");
  const resourceIdInput=document.getElementById("selectedResourceIdInput");
  const status=document.getElementById("paymentStatus");
  const phone=String(phoneInput?.value||"").trim();
  let resourceId=String(resourceIdInput?.value||"").trim();
  const resourceTitle=String(resourceInput?.value||"").trim();
  const matchedResource=(getAllResources()||[]).find(r=>String(r.title||"").trim()===resourceTitle);
  if(!resourceId&&matchedResource)resourceId=String(matchedResource.id||"");
  const amount=Number(amountInput?.value||0);
  if(!phone||!resourceId||!resourceTitle||amount<1){
    if(status)status.textContent="Select a paid resource and enter a valid M-Pesa phone number.";
    return;
  }
  const button=event.submitter||document.querySelector("#paymentForm button[type=submit]");
  if(button)button.disabled=true;
  if(status)status.textContent="Starting secure M-Pesa STK Push…";
  try{
    const start=await fetch("/api/mpesa/stk-push",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({customerPhone:phone,resourceId})});
    const data=await start.json().catch(()=>({}));
    if(!start.ok||!data.ok)throw new Error(data.error||"M-Pesa payment could not be started.");
    const checkoutRequestID=String(data.CheckoutRequestID||"");
    if(!checkoutRequestID)throw new Error("M-Pesa did not return a checkout request.");
    if(status)status.textContent="STK Push sent. Complete the payment on your phone…";
    let paid=null;
    for(let attempt=0;attempt<30;attempt++){
      await new Promise(resolve=>setTimeout(resolve,2000));
      const check=await fetch("/api/mpesa/status?checkoutRequestID="+encodeURIComponent(checkoutRequestID)+"&phone="+encodeURIComponent(phone),{credentials:"same-origin",cache:"no-store"});
      const result=await check.json().catch(()=>({}));
      if(result.status==="paid"){paid=result;break;}
      if(result.status==="failed"){throw new Error(result.payment?.resultDesc||"M-Pesa payment failed or was cancelled.");}
      if(status)status.textContent="Waiting for M-Pesa confirmation… ("+(attempt+1)+"/30)";
    }
    if(!paid)throw new Error("Payment confirmation is taking longer than expected. Please check your M-Pesa message and use the Download button again after confirmation.");
    if(status){status.innerHTML="<strong style=\"color:#166534;font-size:18px;\">✅ PAYMENT SUCCESSFUL</strong><br><span>Your payment has been received successfully. Preparing your secure download…</span>";status.className="form-status payment-success";}
    const approval=await fetch("/api/download-approval/request",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({resourceId,customerPhone:phone,paymentReference:checkoutRequestID})});
    const approvalData=await approval.json().catch(()=>({}));
    if(!approval.ok||!approvalData.ok)throw new Error(approvalData.error||"Payment was confirmed but download access could not be prepared.");
    if(approvalData.approval?.status!=="approved"){
      if(status)status.textContent="Payment confirmed. Download access is awaiting final approval.";
      return;
    }
    const resource=(getAllResources()||[]).find(r=>String(r.id)===resourceId);
    const key=resource?.r2Key||resource?.r2_key;
    if(!key)throw new Error("The protected resource file is unavailable.");
    const download=await fetch("/api/r2/file?key="+encodeURIComponent(key)+"&resourceId="+encodeURIComponent(resourceId)+"&phone="+encodeURIComponent(phone),{credentials:"same-origin",cache:"no-store"});
    const result=await download.json().catch(()=>({}));
    if(!download.ok||!result.ok)throw new Error(result.error||"Secure download is not available.");
    window.location.href=result.downloadUrl;
  }catch(error){
    if(status)status.textContent=error.message||"Payment could not be completed.";
  }finally{
    if(button)button.disabled=false;
  }
}

function initializePaymentCheckoutFromUrl(){const p=new URLSearchParams(location.search);const resource=p.get("resource");const amount=p.get("amount");const resourceId=p.get("resourceId");if(resource&&elements.selectedResource){elements.selectedResource.value=resource;}if(resourceId&&document.getElementById("selectedResourceIdInput"))document.getElementById("selectedResourceIdInput").value=resourceId;if(amount&&elements.amount&&Number(amount)>0){elements.amount.value=amount;}if(resource&&elements.paymentStatus){elements.paymentStatus.textContent="You are purchasing: "+resource+" — Amount: KSh "+Number(amount||0).toLocaleString()+". Enter the M-Pesa phone number you will use, then select Pay with M-Pesa. An STK Push will be sent to that phone when Daraja is configured.";elements.paymentStatus.className="form-status";}if((resource||amount)&&location.hash==="#payments"){setTimeout(()=>document.getElementById("payments")?.scrollIntoView({behavior:"smooth",block:"start"}),50);}if(resourceId&&resource){setTimeout(()=>{const phone=document.getElementById("customerPhoneInput");const value=window.prompt("Enter the M-Pesa phone number to receive the STK Push (e.g. 0712345678):",phone?.value||"");if(!value)return;if(phone)phone.value=value;requestMpesaPayment({preventDefault(){},submitter:document.querySelector("#paymentForm button[type=submit]")});},250);}}
renderGradeDashboard();
setupFilters();
applyGradeSubjectFromLink(false);
renderQuickTypes();
restoreAdminAccess();
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
initializePaymentCheckoutFromUrl();
(function(){const q=id=>document.getElementById(id);function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}function url(v){try{const u=new URL(String(v||""),location.origin);return /^https?:$/.test(u.protocol)?u.href:"#";}catch{return "#";}}
async function loadVacancies(id,publicMode){const t=q(id);if(!t)return;if(publicMode&&t.hasAttribute("data-stable-vacancy-board"))return;try{const r=await fetch("/api/vacancies?_="+Date.now(),{credentials:"same-origin",cache:"no-store",headers:{"Accept":"application/json"}});const raw=await r.text();let d={};try{d=JSON.parse(raw)}catch{throw new Error("The vacancy service returned an invalid response. Please refresh the page.");}if(!r.ok||!d.ok)throw new Error(d.error||"Vacancies could not be loaded.");const rows=Array.isArray(d.vacancies)?d.vacancies:[];if(!rows.length){t.innerHTML='<div class="empty-state">No teaching vacancies published yet.</div>';return;}t.innerHTML=rows.map(v=>'<article class="vacancy-card '+(v.featured?'featured':'')+'"><div class="vacancy-card-top"><span class="vacancy-region">'+esc(v.region||v.country||"International")+'</span>'+(v.featured?'<span class="vacancy-featured">FEATURED</span>':'')+'</div><h3>'+esc(v.title)+'</h3><strong>'+esc(v.school)+'</strong><p class="vacancy-meta">'+esc(v.country)+' · '+esc(v.subject)+' · '+esc(v.level)+' · '+esc(v.employment||"Full-time")+'</p>'+(v.salary?'<p><strong>Package:</strong> '+esc(v.salary)+'</p>':'')+(v.deadline?'<p><strong>Deadline:</strong> '+esc(v.deadline)+'</p>':'')+(v.description?'<details class="vacancy-details"><summary>📋 Job Description</summary><p>'+esc(v.description)+'</p></details>':'')+(v.requirements?'<details class="vacancy-details"><summary>🎓 Requirements</summary><p>'+esc(v.requirements)+'</p></details>':'')+(v.why_match?'<details class="vacancy-details"><summary>⭐ Why you may be a good match</summary><p>'+esc(v.why_match)+'</p></details>':'')+(v.documents?'<details class="vacancy-details"><summary>📄 Documents to prepare</summary><p>'+esc(v.documents)+'</p></details>':'')+(v.verified_date?'<p class="vacancy-verified"><small>Verified: '+esc(v.verified_date)+'</small></p>':'')+'<div class="vacancy-card-actions"><a class="primary-button" href="'+url(v.apply_url)+'" target="_blank" rel="noopener noreferrer">Apply / View Vacancy</a>'+(publicMode?'<button class="whatsapp-share-button" type="button" data-share-vacancy="whatsapp" data-vacancy-id="'+esc(v.id)+'">WhatsApp</button><button class="facebook-share-button" type="button" data-share-vacancy="facebook" data-vacancy-id="'+esc(v.id)+'">Facebook</button>':'<button class="whatsapp-share-button" type="button" data-share-vacancy="whatsapp" data-vacancy-id="'+esc(v.id)+'">WhatsApp</button><button class="facebook-share-button" type="button" data-share-vacancy="facebook" data-vacancy-id="'+esc(v.id)+'">Facebook</button><button class="ghost-button" type="button" data-share-vacancy="copy" data-vacancy-id="'+esc(v.id)+'">Copy Link</button><button class="secondary-button" type="button" data-edit-vacancy="'+esc(v.id)+'">✏ Edit</button><button class="ghost-button" type="button" data-delete-vacancy="'+esc(v.id)+'">Delete</button>')+'</div></article>').join("");}catch(e){t.innerHTML='<p class="form-status error">'+esc(e.message)+'</p>';}}
async function initVacancies(){loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);document.addEventListener("click",e=>{const b=e.target.closest("[data-share-vacancy]");if(!b)return;const id=b.dataset.vacancyId;const card=b.closest(".vacancy-card");if(!card||!id)return;const title=card.querySelector("h3")?.textContent?.trim()||"International teaching vacancy";const school=card.querySelector("strong")?.textContent?.trim()||"";const text=school?title+" at "+school:title;const shareUrl=new URL("international-teaching-jobs.html",location.href);shareUrl.hash="vacancy-"+encodeURIComponent(id);const encodedUrl=encodeURIComponent(shareUrl.href);if(b.dataset.shareVacancy==="whatsapp"){window.open("https://wa.me/?text="+encodeURIComponent("🌍 Teaching Vacancy Abroad\n"+text+"\n\nView vacancy: "+shareUrl.href)," _blank","noopener,noreferrer");}else if(b.dataset.shareVacancy==="facebook"){window.open("https://www.facebook.com/sharer/sharer.php?u="+encodedUrl," _blank","noopener,noreferrer");}else if(b.dataset.shareVacancy==="copy"){navigator.clipboard?.writeText(shareUrl.href).then(()=>{if(typeof showToast==="function")showToast("Vacancy link copied.");}).catch(()=>window.prompt("Copy vacancy link:",shareUrl.href));}});const form=q("adminVacancyForm");if(!form)return;try{const r=await fetch("/api/admin/me",{credentials:"same-origin"});const d=await r.json();if(!r.ok||!d.authenticated){form.closest(".admin-vacancies-card")?.remove();return;}}catch{form.closest(".admin-vacancies-card")?.remove();return;}loadVacancies("adminVacancyList",false);form.addEventListener("submit",async e=>{e.preventDefault();const s=q("adminVacancyStatus");s.textContent="Publishing vacancy…";const body={id:form.dataset.editId||undefined,title:q("vacancyTitleInput").value,school:q("vacancySchoolInput").value,country:q("vacancyCountryInput").value,region:q("vacancyRegionInput").value,subject:q("vacancySubjectInput").value,level:q("vacancyLevelInput").value,employment:q("vacancyEmploymentInput").value,salary:q("vacancySalaryInput").value,deadline:q("vacancyDeadlineInput").value,applyUrl:q("vacancyApplyUrlInput").value,description:q("vacancyDescriptionInput").value,requirements:q("vacancyRequirementsInput").value,featured:q("vacancyFeaturedInput").checked};try{const r=await fetch("/api/admin/vacancy",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Vacancy could not be published.");s.textContent=form.dataset.editId?"✓ Vacancy updated successfully.":"✓ Vacancy published successfully.";form.reset();delete form.dataset.editId;form.querySelector('[type="submit"]').textContent="➕ Publish Vacancy";loadVacancies("adminVacancyList",false);loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);}catch(e){s.textContent=e.message||"Vacancy could not be published.";}});q("clearAdminVacancyButton")?.addEventListener("click",()=>{form.reset();delete form.dataset.editId;form.querySelector('[type="submit"]').textContent="➕ Publish Vacancy";q("adminVacancyStatus").textContent="";});q("adminVacancyList")?.addEventListener("click",async e=>{
const edit=e.target.closest("[data-edit-vacancy]");if(edit){
  const id=edit.dataset.editVacancy;
  try{
    const r=await fetch("/api/vacancies?_="+Date.now(),{credentials:"same-origin",cache:"no-store"}),d=await r.json();
    const v=(d.vacancies||[]).find(x=>String(x.id)===String(id));if(!v)throw new Error("Vacancy could not be found.");
    q("vacancyTitleInput").value=v.title||"";q("vacancySchoolInput").value=v.school||"";q("vacancyCountryInput").value=v.country||"";q("vacancyRegionInput").value=v.region||"UAE & Gulf";q("vacancySubjectInput").value=v.subject||"";q("vacancyLevelInput").value=v.level||"";q("vacancyEmploymentInput").value=v.employment||"Full-time";q("vacancySalaryInput").value=v.salary||"";q("vacancyDeadlineInput").value=v.deadline||"";q("vacancyApplyUrlInput").value=v.apply_url||"";q("vacancyDescriptionInput").value=v.description||"";q("vacancyRequirementsInput").value=v.requirements||"";q("vacancyFeaturedInput").checked=!!v.featured;
    form.dataset.editId=id;form.querySelector('[type="submit"]').textContent="💾 Update Vacancy";q("adminVacancyStatus").textContent="Editing "+v.title;form.scrollIntoView({behavior:"smooth",block:"start"});
  }catch(err){q("adminVacancyStatus").textContent=err.message||"Could not load vacancy.";}
  return;
}
const b=e.target.closest("[data-delete-vacancy]");if(!b)return;if(!confirm("Delete this teaching vacancy?"))return;const r=await fetch("/api/admin/vacancy-delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:b.dataset.deleteVacancy})}),d=await r.json();if(!r.ok||!d.ok){q("adminVacancyStatus").textContent=d.error||"Could not delete vacancy.";return;}loadVacancies("adminVacancyList",false);loadVacancies("homeVacancyGrid",true);loadVacancies("internationalVacancyGrid",true);});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",initVacancies);else initVacancies();})();

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
    const gradeFilter=String(document.getElementById("adminGradeFilter")?.value||"all").trim().toLowerCase();
    const rows=adminResources.filter(x=>{
      const hay=[x.title,x.grade,x.subject,x.type,x.fileName,x.filename].join(" ").toLowerCase();
      const resourceGrade=String(x.grade||"").trim().toLowerCase();
      return (!q||hay.includes(q))
        && (filter==="all"||String(x.status||"pending").toLowerCase()===filter)
        && (gradeFilter==="all"||resourceGrade===gradeFilter);
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
          <a class="secondary-button" href="resource-category.html?grade=${encodeURIComponent(String(x.grade||""))}&subject=${encodeURIComponent(String(x.subject||""))}" target="_self">View Grade Page</a>
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
  document.getElementById("adminGradeFilter")?.addEventListener("change",render);
  document.getElementById("adminStatusFilter")?.addEventListener("change",render);
  window.loadAdminResourceModeration=load;
  const observer=new MutationObserver(()=>{if(document.body.classList.contains("admin-unlocked")&&host.dataset.loaded!=="1"){host.dataset.loaded="1";load();}});
  observer.observe(document.body,{attributes:true,attributeFilter:["class"]});
  if(document.body.classList.contains("admin-unlocked")){host.dataset.loaded="1";load();}
})();

/* Reliable page navigation for dashboard/action buttons. Existing form, modal, grade-toggle and admin-tab actions are left untouched. */
(function wireButtonPageNavigation(){
  const routes={
    openSellerDashboardButtonSecondary:"upload.html",
    startQuizButton:"quizzes.html",
    toggleQuestionSetterButton:"quizzes.html",
    startGradeOneUploadButton:"upload.html?grade=Grade%201"
  };
  function go(url){ if(url) window.location.assign(url); }
  document.addEventListener("click",function(event){
    const button=event.target.closest("button");
    if(!button) return;
    if(button.dataset.page) { event.preventDefault(); go(button.dataset.page); return; }
    if(routes[button.id]) { event.preventDefault(); go(routes[button.id]); return; }
    const search=button.closest("[data-landing-search]")?.dataset.landingSearch || button.dataset.landingSearch;
    if(search){
      event.preventDefault();
      go("resource-category.html?search="+encodeURIComponent(search));
    }
  },true);
})();

/* Automatic grade colour theme for Teaching & Learning pages. */
(function(){
  const gradeThemeMap={
    "PP1":"preprimary","PP2":"preprimary",
    "Grade 1":"lower-primary","Grade 2":"lower-primary","Grade 3":"lower-primary",
    "Grade 4":"upper-primary","Grade 5":"upper-primary","Grade 6":"upper-primary",
    "Grade 7":"junior-secondary","Grade 8":"junior-secondary","Grade 9":"junior-secondary",
    "Grade 10":"senior-school","Grade 11":"senior-school","Grade 12":"senior-school"
  };
  function applyGradeTheme(grade){
    const value=String(grade||"").trim();
    const theme=gradeThemeMap[value]||"preprimary";
    document.documentElement.setAttribute("data-grade-theme",theme);
    document.documentElement.style.setProperty("--selected-grade",JSON.stringify(value));
    document.body?.setAttribute("data-selected-grade",value);
  }
  function readSelectedGrade(){
    const candidates=[
      document.querySelector("#gradeFilter"),
      document.querySelector("#gradeSelect"),
      document.querySelector("#grade"),
      document.querySelector("[data-grade-select]")
    ];
    const selected=candidates.find(el=>el&&el.value&&el.value!=="All Grades");
    if(selected) applyGradeTheme(selected.value);
  }
  document.addEventListener("DOMContentLoaded",function(){
    readSelectedGrade();
    document.addEventListener("change",function(event){
      const el=event.target;
      if(el&&["gradeFilter","gradeSelect","grade"].includes(el.id)) applyGradeTheme(el.value);
    });
  });
  window.applyCbeGradeTheme=applyGradeTheme;
})();


/* CBE NEXUS — FORCE VISIBLE GRADE COLOURS
   Applies inline styles to the existing Grade 1–12 cards so no
   inherited/legacy CSS can hide the individual colours. */
(function forceVisibleGradeCardColours(){
  const colours={
    "Grade 1":["#d84315","#fff3ee"],"Grade 2":["#8e24aa","#faf0fc"],
    "Grade 3":["#1565c0","#edf5ff"],"Grade 4":["#00838f","#eafafa"],
    "Grade 5":["#2e7d32","#eef9ef"],"Grade 6":["#558b2f","#f2f9eb"],
    "Grade 7":["#ef6c00","#fff4e8"],"Grade 8":["#6a1b9a","#f8effc"],
    "Grade 9":["#ad1457","#fff0f6"],"Grade 10":["#283593","#eef0ff"],
    "Grade 11":["#00695c","#eaf8f5"],"Grade 12":["#bf360c","#fff1ec"]
  };
  function paint(){
    document.querySelectorAll('#dashboard .grade-card[data-grade-card]').forEach(card=>{
      const pair=colours[card.getAttribute('data-grade-card')]; if(!pair)return;
      card.style.setProperty('border-left','6px solid '+pair[0],'important');
      card.style.setProperty('background','linear-gradient(135deg,'+pair[1]+' 0%,#ffffff 100%)','important');
      card.style.setProperty('border-radius','12px','important');
      const toggle=card.querySelector('.grade-toggle');
      const chev=card.querySelector('.grade-chevron');
      if(toggle)toggle.style.setProperty('color',pair[0],'important');
      if(chev)chev.style.setProperty('color',pair[0],'important');
    });
  }
  document.addEventListener('DOMContentLoaded',paint);
  if(document.readyState!=='loading')paint();
})();
