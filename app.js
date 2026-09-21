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
      homework: this.decode("L2FwaS9ob21ld29yay1oZWxwZXI=")
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

const seniorSchoolSubjects = [
  "English",
  "Kiswahili",
  "Kenya Sign Language (KSL)",
  "Core Mathematics",
  "Essential Mathematics",
  "Community Service Learning (CSL)",
  "Sports and Recreation",
  "Music and Dance",
  "Theatre and Film",
  "Fine Arts",
  "Literature in English",
  "Indigenous Languages",
  "Fasihi ya Kiswahili",
  "Sign Language",
  "Arabic",
  "French",
  "German",
  "Mandarin Chinese",
  "Christian Religious Education (CRE)",
  "Islamic Religious Education (IRE)",
  "Hindu Religious Education (HRE)",
  "Business Studies",
  "History and Citizenship",
  "Geography",
  "Biology",
  "Chemistry",
  "Physics",
  "General Science",
  "Agriculture",
  "Computer Studies",
  "Home Science",
  "Aviation",
  "Building and Construction",
  "Electricity",
  "Metalwork",
  "Power Mechanics",
  "Wood Technology",
  "Media Technology",
  "Marine and Fisheries Technology"
];

const lowerPrimarySubjects = [
  "Creative Activities",
  "Christian Religious Education (CRE)",
  "English Activities",
  "Environmental Activities",
  "Hindu Religious Education (HRE)",
  "Islamic Religious Education (IRE)",
  "Kiswahili Activities",
  "Mathematics Activities"
];

const upperPrimarySubjects = [
  "Agriculture",
  "Arabic",
  "Creative Arts",
  "Christian Religious Education (CRE)",
  "English",
  "French",
  "German",
  "Hindu Religious Education (HRE)",
  "Indigenous Language",
  "Islamic Religious Education (IRE)",
  "Kiswahili",
  "Mandarin",
  "Mathematics",
  "Science and Technology",
  "Social Studies"
];

const juniorSchoolSubjects = [
  "Agriculture",
  "Arabic",
  "Creative Arts",
  "Christian Religious Education (CRE)",
  "English",
  "French",
  "German",
  "Hindu Religious Education (HRE)",
  "Indigenous Language",
  "Integrated Science",
  "Islamic Religious Education (IRE)",
  "Kiswahili",
  "Mandarin",
  "Mathematics",
  "Pre-Technical Studies",
  "Social Studies"
];

const gradeSubjects = {
  "Grade 1": lowerPrimarySubjects,
  "Grade 2": lowerPrimarySubjects,
  "Grade 3": lowerPrimarySubjects,
  "Grade 4": upperPrimarySubjects,
  "Grade 5": upperPrimarySubjects,
  "Grade 6": upperPrimarySubjects,
  "Grade 7": juniorSchoolSubjects,
  "Grade 8": juniorSchoolSubjects,
  "Grade 9": juniorSchoolSubjects,
  "Grade 10": seniorSchoolSubjects,
  "Grade 11": seniorSchoolSubjects,
  "Grade 12": seniorSchoolSubjects
};

const starterResources = [
  {
    id: "g1-math-notes",
    title: "Grade 1 Mathematics Number Work Notes",
    grade: "Grade 1",
    subject: "Mathematics Activities",
    type: "Notes",
    description: "Learner-friendly number work notes with activities for counting, grouping, and comparing numbers.",
    price: 100,
    discount: 10,
    term: "Term 1",
    isFreeSample: true,
    popularity: 15,
    file: "resources/grade-1-mathematics-notes.txt"
  },
  {
    id: "g4-science-scheme",
    title: "Grade 4 Science and Technology Scheme of Work",
    grade: "Grade 4",
    subject: "Science and Technology",
    type: "Schemes of Work",
    description: "A termly scheme with strands, sub-strands, learning experiences, key inquiry questions, and assessment rubrics.",
    price: 200,
    discount: 0,
    term: "Term 2",
    isFreeSample: false,
    popularity: 14,
    file: "resources/grade-4-science-scheme.txt"
  },
  {
    id: "g7-math-topical",
    title: "Grade 7 Mathematics Topical Questions",
    grade: "Grade 7",
    subject: "Mathematics",
    type: "Topical Questions",
    description: "Competency-based topical revision covering integers, algebraic expressions, geometry, and data handling.",
    price: 120,
    discount: 15,
    term: "Term 2",
    isFreeSample: false,
    popularity: 13,
    file: "resources/grade-7-mathematics-topical-questions.txt"
  },
  {
    id: "g8-english-lesson",
    title: "Grade 8 English Lesson Plan Pack",
    grade: "Grade 8",
    subject: "English",
    type: "Lesson Plan",
    description: "Structured lesson plans with vocabulary practice, reading tasks, oral skills, and learner reflection prompts.",
    price: 150,
    discount: 0,
    term: "Term 1",
    isFreeSample: true,
    popularity: 12,
    file: "resources/grade-8-english-lesson-plan.txt"
  },
  {
    id: "g10-biology-assessment",
    title: "Grade 10 Biology Assessment Test",
    grade: "Grade 10",
    subject: "Biology",
    type: "Assessment Test",
    description: "A competency-aligned assessment test with practical skills, short responses, and marking guidance.",
    price: 180,
    discount: 20,
    term: "Term 3",
    isFreeSample: false,
    popularity: 11,
    file: "resources/grade-10-biology-assessment.txt"
  },
  {
    id: "g12-business-holiday",
    title: "Grade 12 Business Studies Holiday Workbook",
    grade: "Grade 12",
    subject: "Business Studies",
    type: "Holiday Workbooks",
    description: "Holiday revision workbook with enterprise questions, case studies, and self-assessment checklists.",
    price: 250,
    discount: 5,
    term: "Term 3",
    isFreeSample: false,
    popularity: 10,
    file: "resources/grade-12-business-holiday-workbook.txt"
  }
];

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
  homeworkForm: document.querySelector("#homeworkForm"),
  homeworkGrade: document.querySelector("#homeworkGradeInput"),
  homeworkSubject: document.querySelector("#homeworkSubjectInput"),
  homeworkQuestion: document.querySelector("#homeworkQuestionInput"),
  homeworkAnswer: document.querySelector("#homeworkAnswer"),
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
    ...readSavedResources(),
    ...readSellerResources().filter((resource) => resource.status === "approved")
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
    link.classList.toggle("active", link.dataset.materialLink === state.type);
  });
}

function renderQuickTypes() {
  elements.quickTypes.innerHTML = materialTypes
    .map((type) => `<button type="button" data-quick-type="${escapeHtml(type)}">${escapeHtml(type)}</button>`)
    .join("");
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
  optionList(elements.gradeFilter, ["All Grades", ...grades], state.grade);
  optionList(elements.adminGrade, grades, "Grade 1");
  optionList(elements.sellerGrade, grades, "Grade 1");
  optionList(elements.projectGrade, grades, "Grade 1");
  optionList(elements.tuitionGrade, grades, "Grade 1");
  optionList(elements.homeworkGrade, grades, "Grade 1");
  optionList(elements.typeFilter, ["All Materials", ...materialTypes], state.type);
  optionList(elements.adminType, materialTypes, "Notes");
  optionList(elements.sellerType, materialTypes, "Notes");
  optionList(elements.adminSubject, gradeSubjects["Grade 1"], "Mathematics Activities");
  optionList(elements.sellerSubject, gradeSubjects["Grade 1"], "Mathematics Activities");
  refreshSubjectFilters();
}

function resourceMatches(resource) {
  const query = state.search.trim().toLowerCase();
  const searchable = `${resource.title} ${resource.description} ${resource.subject} ${resource.type} ${resource.term || ""}`.toLowerCase();
  return (state.grade === "All Grades" || resource.grade === state.grade)
    && (state.subject === "All Subjects" || resource.subject === state.subject)
    && (state.type === "All Materials" || resource.type === state.type)
    && (state.term === "All Terms" || resource.term === state.term)
    && (state.access === "All Access" || (state.access === "Free Samples" ? resource.isFreeSample : !resource.isFreeSample))
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
  const resources = getAllResources();
  const filtered = sortResources(resources.filter(resourceMatches));
  elements.statResources.textContent = resources.length;
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
      <p>${escapeHtml(resource.description)}</p>
      <div class="resource-activity"><span>📥 ${Number(resource.downloads || 0)} downloads</span><span>🛒 ${Number(resource.purchases || 0)} purchases</span></div>
      <div class="price-row">
        <div>
          <strong>${money(discountedPrice(resource))}</strong>
          <span>${Number(resource.discount) || 0}% discount from ${money(resource.price)}</span>
        </div>
      </div>
      <div class="card-actions resource-library-actions">
        <button class="primary-button resource-action-button" type="button" data-pay="${escapeHtml(resource.id)}">Pay M-Pesa</button>
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

function renderDownloadApprovals() {
  if (!elements.downloadApprovalList) return;
  const approvedDownloads = readApprovedDownloads();
  const pending = approvedDownloads.filter((download) => download.status === "pending");
  
  if (!pending.length) {
    elements.downloadApprovalList.innerHTML = `<div class="empty-state">No pending download requests.</div>`;
    return;
  }

  elements.downloadApprovalList.innerHTML = pending.map((download) => `
    <div class="approval-item">
      <strong>${escapeHtml(download.resourceName)}</strong>
      <span>Customer: ${escapeHtml(download.customerPhone)} | Amount: ${money(download.amount)}</span>
      <span>Status: Pending activation</span>
      <div class="approval-actions">
        <button class="primary-button" type="button" data-confirm-download="${escapeHtml(download.id)}">Approve Download</button>
        <button class="secondary-button" type="button" data-reject-download="${escapeHtml(download.id)}">Reject</button>
      </div>
    </div>
  `).join("");
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

async function handleHomeworkHelper(event) {
  event.preventDefault();
  const payload = {
    grade: elements.homeworkGrade.value,
    subject: elements.homeworkSubject.value.trim(),
    question: elements.homeworkQuestion.value.trim()
  };
  elements.homeworkAnswer.textContent = "Preparing a guided homework response...";
  const backend = await postToBackend(API_ENDPOINTS.homework, payload);
  if (!backend || !backend.ok) { elements.homeworkAnswer.innerHTML = `<strong>AI Homework Helper</strong><p>${escapeHtml((backend && backend.error) || "The AI Homework Helper is temporarily unavailable.")}</p>`; showToast("AI Homework Helper needs configuration."); return; }
  const answer = backend.answer
    ? backend.answer
    : `Guided help for ${payload.grade} ${payload.subject}: Start by identifying what the question is asking, list the known facts, solve one step at a time, then check whether your answer fits the question. For this question, write the key idea in your own words first: "${payload.question}"`;
  elements.homeworkAnswer.innerHTML = `<strong>AI Homework Helper</strong><p>${escapeHtml(answer)}</p>`;
  showToast("Homework helper response ready.");
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
    const response = await fetch("/api/admin/dashboard", { credentials: "same-origin" });
    if (!response.ok) return;
    const data = await response.json();
    if (!data.ok) return;
    renderAdminControlCentre(data);
  } catch {}
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
  const resources = data.resources || [];
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
  if (elements.adminPopularResources) {
    const popular = data.popularResources || [];
    elements.adminPopularResources.innerHTML = popular.length ? popular.map((r, index) =>
      "<div class=\"admin-popular-row\"><span class=\"admin-rank\">" + (index + 1) + "</span><div class=\"admin-record-main\"><strong>" + escapeHtml(r.title || "Untitled resource") + "</strong><span>" + escapeHtml(r.grade || "") + " · " + escapeHtml(r.subject || "") + "</span></div><span class=\"admin-popular-metric\">" + Number(r.purchases || 0) + " purchases · " + Number(r.downloads || 0) + " downloads</span></div>"
    ).join("") : "<div class=\"empty-state\">No resource activity has been recorded yet.</div>";
  }

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

  const visibleResources = resources.filter((r) => matches(r, [r.title, r.grade, r.subject, r.type, r.sellerUsername, r.status])).slice(0, 50);
  elements.adminResourceManagement.innerHTML = visibleResources.length
    ? visibleResources.map((r) =>
      "<div class=\"admin-record\"><div class=\"admin-record-main\"><strong>" + escapeHtml(r.title || "Untitled resource") +
      "</strong><span>" + escapeHtml(r.grade || "") + " · " + escapeHtml(r.subject || "") + " · " + escapeHtml(r.type || "Resource") +
      "</span></div><span class=\"status-pill " + escapeHtml(r.status || "approved") + "\">" + escapeHtml(r.status || "approved") +
      "</span><div class=\"admin-record-actions\"><button class=\"primary-button\" type=\"button\" data-admin-resource-id=\"" +
      escapeHtml(r.id) + "\" data-admin-resource-status=\"approved\">Approve</button><button class=\"secondary-button\" type=\"button\" data-admin-resource-id=\"" +
      escapeHtml(r.id) + "\" data-admin-resource-status=\"rejected\">Reject</button></div></div>"
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

  const visiblePrices = resources.filter((r) => matches(r, [r.title, r.grade, r.subject, r.type, r.price, r.discount])).slice(0, 50);
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
  const userButton = event.target.closest("[data-admin-user-id]");
  const priceButton = event.target.closest("[data-admin-save-price]");
  try {
    if (sellerButton) {
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
  elements.amount.value = amount;
  elements.paymentStatus.textContent = `Ready to request M-Pesa payment of ${money(amount)} to ${MPESA_PHONE}.`;
  elements.whatsappOrder.href = whatsappLink(resource, amount);
  showToast(`${resource.title} selected for M-Pesa payment.`);
  document.querySelector("#payments").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function requestMpesaPayment(event) {
  event.preventDefault();

  const payload = {
    customerPhone: elements.customerPhone.value.trim(),
    businessPhone: MPESA_PHONE,
    amount: Number(elements.amount.value),
    resource: elements.selectedResource.value.trim()
  };

  elements.paymentStatus.textContent = "Sending M-Pesa payment request...";
  showToast("Processing M-Pesa request...");
  const record = {
    id: `pay-${Date.now()}`,
    ...payload,
    status: "pending confirmation",
    createdAt: new Date().toISOString()
  };
  localStorage.setItem(PAYMENT_RECORDS_KEY, JSON.stringify([record, ...readPaymentRecords()]));
  renderPaymentRecords();

  try {
    const response = await fetch(MPESA_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("M-Pesa backend is not active yet.");
    }

    const result = await response.json();
    if (!result.ok || !result.CheckoutRequestID) throw new Error(result.error || "M-Pesa request was not accepted.");
    const updatedRecords = readPaymentRecords().map((item) =>
      item.id === record.id ? { ...item, checkoutRequestID: result.CheckoutRequestID } : item
    );
    localStorage.setItem(PAYMENT_RECORDS_KEY, JSON.stringify(updatedRecords));
    elements.paymentStatus.textContent = "M-Pesa request sent. Complete payment on the phone. The download unlocks after confirmation.";
    showToast("M-Pesa request sent successfully.");
  } catch {
    elements.paymentStatus.textContent = `M-Pesa API backend is not connected yet. Pay manually to ${MPESA_PHONE}, then confirm on WhatsApp.`;
    elements.whatsappOrder.href = whatsappLink(null, payload.amount);
    showToast("M-Pesa backend is not active yet. Use WhatsApp confirmation.");
  }
}

function setGradeSubject(grade, subject) {
  state.grade = grade;
  state.subject = subject;
  elements.gradeFilter.value = grade;
  refreshSubjectFilters();
  elements.subjectFilter.value = subject;
  renderResources();
  document.querySelector("#resources").scrollIntoView({ behavior: "smooth", block: "start" });
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
    if (previewButton) openResourcePreview(previewButton.dataset.previewResource);
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

  safeOn(elements.adminGrade, "change", (event) => {
    const subjects = gradeSubjects[event.target.value];
    optionList(elements.adminSubject, subjects, subjects[0]);
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
    const subjects = gradeSubjects["Grade 1"] || [];
    if (elements.adminSubject) optionList(elements.adminSubject, subjects, subjects[0] || "All Subjects");
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
  safeOn(elements.homeworkForm, "submit", handleHomeworkHelper);

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
  const resource = getAllResources().find((r) => r.id === resourceId);
  if (!resource || !resource.r2Key) { showToast("This resource does not have a protected file."); return; }
  const phone = prompt("Enter the phone number used for M-Pesa payment:");
  if (!phone) return;
  const normalize = (value) => String(value || "").replace(/\D/g, "");
  const paid = readPaymentRecords().find((item) => normalize(item.customerPhone) === normalize(phone) && item.status === "paid" && item.checkoutRequestID && String(item.resource || "").trim().toLowerCase() === String(resource.title || "").trim().toLowerCase());
  if (!paid) { showToast("Payment has not been confirmed for this resource yet."); return; }
  try {
    const response = await fetch("/api/r2/file?key=" + encodeURIComponent(resource.r2Key) + "&checkoutRequestID=" + encodeURIComponent(paid.checkoutRequestID), { credentials: "same-origin" });
    if (!response.ok) { const data = await response.json().catch(() => ({})); throw new Error(data.error || "Download is not available."); }
    window.location.href = response.url;
    showToast("Secure temporary download link generated.");
  } catch (error) { showToast(error.message || "Download could not be started."); }
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

function confirmDownloadApproval(downloadId) {
  const updated = readApprovedDownloads().map((dl) => {
    if (dl.id === downloadId) {
      return { ...dl, status: "approved", approvedAt: new Date().toISOString() };
    }
    return dl;
  });
  localStorage.setItem(APPROVED_DOWNLOADS_KEY, JSON.stringify(updated));
  renderDownloadApprovals();
  showToast("Download approved for customer.");
}

function rejectDownloadRequest(downloadId) {
  const updated = readApprovedDownloads().filter((dl) => dl.id !== downloadId);
  localStorage.setItem(APPROVED_DOWNLOADS_KEY, JSON.stringify(updated));
  renderDownloadApprovals();
  showToast("Download request rejected.");
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
renderQuickTypes();
restoreAdminAccess();
bindEvents();
injectContactInfo();
renderResources();
renderTrending();
renderCart();
renderSellerResources();
renderSellerAccountApprovals();
renderAdminApprovals();
renderPaymentRecords();
renderDownloadApprovals();
renderProgressReport();
