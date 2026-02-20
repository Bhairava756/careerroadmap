// ================================================
// EduPath AI - Complete Application Logic
// ================================================

// Data Store (using localStorage)
const DataStore = {
  get: (key) => {
    const data = localStorage.getItem('edupath_' + key);
    return data ? JSON.parse(data) : null;
  },
  set: (key, value) => {
    localStorage.setItem('edupath_' + key, JSON.stringify(value));
  },
  getOrDefault: (key, defaultValue) => {
    const data = DataStore.get(key);
    return data !== null ? data : defaultValue;
  }
};

// Initialize default data with comprehensive educational content
const initDefaultData = () => {
  if (!DataStore.get('users')) {
    DataStore.set('users', []);
  }
  if (!DataStore.get('currentUser')) {
    DataStore.set('currentUser', null);
  }
  if (!DataStore.get('content')) {
    DataStore.set('content', {
      // AFTER 10TH
      after10th: {
        title: "After 10th - Complete Career Guide",
        streams: [
          { name: "Science (PCM)", description: "Physics, Chemistry, Mathematics", roadmap: ["Choose PCM in Class 11-12", "Target JEE/NDA/CUET", "Complete NCERT", "Daily MCQ practice", "Mock tests", "Clear exam → College → Career"], subjects: { physics: ["Units & Measurements", "Kinematics", "Laws of Motion", "Work Energy & Power", "Thermodynamics", "Waves", "Electrostatics", "Current Electricity", "Magnetism", "Optics", "Modern Physics"], chemistry: ["Mole Concept", "Atomic Structure", "Periodic Table", "Chemical Bonding", "Thermodynamics", "Equilibrium", "Electrochemistry", "Organic Chemistry", "Hydrocarbons"], mathematics: ["Sets & Relations", "Trigonometry", "Quadratic Equations", "Sequences & Series", "Straight Lines", "Circles", "Limits & Derivatives", "Integrals", "Probability", "Vectors"] }, careers: ["Software Engineer", "Data Scientist", "Core Engineer", "Defense Officer"], salary: "₹4-20 LPA" },
          { name: "Science (PCB)", description: "Physics, Chemistry, Biology", roadmap: ["Choose PCB in Class 11-12", "Target NEET", "Complete NCERT Biology/Physics/Chemistry", "Daily MCQs", "Mock tests", "Clear NEET → MBBS/BDS/BAMS/Nursing"], subjects: { biology: ["Cell Structure", "Plant Physiology", "Human Physiology", "Genetics", "Biotechnology", "Ecology", "Reproduction"], physics: ["Mechanics", "Thermodynamics", "Waves", "Optics", "Electricity", "Modern Physics"], chemistry: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry"] }, careers: ["Doctor", "Dentist", "Nurse", "Pharmacist", "Researcher"], salary: "₹6-30+ LPA" },
          { name: "Commerce", description: "Accounts, Business Studies, Economics", roadmap: ["Choose Commerce in Class 11-12", "Study Accountancy, Business Studies, Economics", "Build accounting skills", "Learn Excel/Tally", "After 12th: BCom/BBA/CA Foundation", "Career: Accountant/Analyst/CA"], subjects: { accountancy: ["Financial Accounting", "Company Accounts", "Taxation", "Auditing"], business: ["Business Organization", "Nature & Purpose", "Corporate Social Responsibility"], economics: ["Micro Economics", "Macro Economics", "Indian Economic Development"] }, careers: ["Chartered Accountant", "Company Secretary", "Accountant", "Business Analyst", "Banker"], salary: "₹3-20 LPA" },
          { name: "Arts/Humanities", description: "History, Political Science, Sociology", roadmap: ["Choose Arts in Class 11-12", "Select subjects: History/Geography/Political Science", "Build writing/analytical skills", "After 12th: BA/Journalism/Law/Teaching", "Prepare for UPSC if interested"], subjects: { history: ["Ancient India", "Medieval India", "Modern India", "World History"], political: ["Indian Constitution", "Political Theory", "International Relations"], sociology: ["Society", "Social Change", "Culture"] }, careers: ["Civil Services", "Teacher/Professor", "Journalist", "Lawyer", "Social Worker"], salary: "₹3-25 LPA" },
          { name: "Diploma/ITI", description: "Technical and Skill Courses", roadmap: ["Choose Diploma/ITI after 10th", "Fields: Mechanical/Electrical/Civil/Computer", "Complete 2-3 years course", "Get job OR Lateral entry to BTech"], careers: ["Technician", "Supervisor", "Junior Engineer", "Industry Jobs"], salary: "₹2-8 LPA" }
        ]
      },
      // AFTER 12TH
      after12th: {
        title: "After 12th - Complete Career Guide",
        paths: [
          { stream: "Science - PCM", options: [{ name: "Engineering (BTech)", exams: ["JEE Main", "JEE Advanced", "State CET"], roadmap: "4 years → Projects → Internship → Job" }, { name: "Defense (NDA)", exams: ["NDA Exam", "SSB Interview"], roadmap: "4 years Academy → Officer" }, { name: "BSc (PCM)", exams: ["College Entrance", "CUET"], roadmap: "3 years → MSc/Job" }] },
          { stream: "Science - PCB", options: [{ name: "MBBS", exams: ["NEET"], roadmap: "5.5 years → Doctor" }, { name: "BDS (Dentistry)", exams: ["NEET"], roadmap: "5 years → Dentist" }, { name: "BAMS (Ayurvedic)", exams: ["NEET"], roadmap: "5.5 years → Ayurvedic Doctor" }, { name: "BSc Nursing", exams: ["College Entrance"], roadmap: "4 years → Nurse" }] },
          { stream: "Commerce", options: [{ name: "BCom", exams: ["Direct Admission"], roadmap: "3 years → Job/CA/MBA" }, { name: "BBA", exams: ["CAT", "MAT", "NMAT"], roadmap: "3 years → MBA/Job" }, { name: "CA (Chartered Accountant)", exams: ["CA Foundation", "Intermediate", "Final"], roadmap: "4-5 years → CA" }] },
          { stream: "Arts", options: [{ name: "BA (Various)", exams: ["Direct Admission", "CUET"], roadmap: "3 years → MA/UPSC/Job" }, { name: "BA LLB (Law)", exams: ["CLAT", "AILET"], roadmap: "5 years → Lawyer" }, { name: "Journalism", exams: ["College Entrance"], roadmap: "3 years → Journalist" }] }
        ]
      },
      // ENGINEERING
      engineering: {
        title: "Engineering (BTech) - Complete Guide",
        branches: [
          { name: "Computer Science (CSE)", subjects: ["Programming", "Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "AI/ML", "Web Development"], skills: ["Coding", "DSA", "Git", "Web/Data/AI"], roadmap: "Year 1: Basics → Year 2: Core → Year 3: Projects+Internship → Year 4: Placement", careers: ["Software Engineer", "Web Developer", "Data Analyst", "ML Engineer", "Full Stack Developer"], salary: "₹4-25 LPA" },
          { name: "Electronics & Communication (ECE)", subjects: ["Analog/Digital Circuits", "Signals", "Communication Systems", "Microprocessors", "VLSI", "Embedded Systems"], skills: ["Circuit Design", "Embedded C", "MATLAB"], careers: ["Electronics Engineer", "Embedded Engineer", "VLSI Engineer", "Telecom Engineer"], salary: "₹4-15 LPA" },
          { name: "Electrical Engineering (EE)", subjects: ["Network Theory", "Electrical Machines", "Power Systems", "Control Systems", "Power Electronics"], skills: ["Circuit Analysis", "MATLAB", "Power System Design"], careers: ["Power Engineer", "Design Engineer", "PSU Jobs", "Maintenance Engineer"], salary: "₹4-18 LPA" },
          { name: "Mechanical Engineering (ME)", subjects: ["Engineering Mechanics", "Strength of Materials", "Thermodynamics", "Fluid Mechanics", "Manufacturing Processes", "Machine Design"], skills: ["CAD (AutoCAD/SolidWorks)", "FEA", "Manufacturing"], careers: ["Design Engineer", "Production Engineer", "Automotive Engineer", "Quality Engineer"], salary: "₹4-15 LPA" },
          { name: "Civil Engineering (CE)", subjects: ["Structural Analysis", "RCC & Steel", "Geotechnical", "Transportation", "Environmental", "Surveying"], skills: ["AutoCAD", "STAAD Pro", "Project Management"], careers: ["Site Engineer", "Structural Engineer", "Construction Manager", "Govt Jobs"], salary: "₹4-15 LPA" },
          { name: "AI & Data Science", subjects: ["Python", "Machine Learning", "Deep Learning", "Data Science", "NLP", "Statistics", "Big Data"], skills: ["Python/R", "TensorFlow", "SQL", "Data Visualization"], careers: ["Data Scientist", "ML Engineer", "AI Engineer", "Research Scientist"], salary: "₹6-30+ LPA" }
        ]
      },
      // MEDICAL
      medical: {
        title: "Medical - Complete Career Guide",
        courses: [
          { name: "MBBS", duration: "5.5 Years", eligibility: "12th PCB + NEET", syllabus: { preClinical: ["Anatomy", "Physiology", "Biochemistry"], paraClinical: ["Pathology", "Pharmacology", "Microbiology"], clinical: ["Medicine", "Surgery", "Pediatrics", "OBGY", "Orthopedics"] }, careers: ["General Physician", "Specialist", "Surgeon", "Medical Teacher"], salary: "₹6-30+ LPA" },
          { name: "BDS", duration: "5 Years", eligibility: "12th PCB + NEET", syllabus: ["Oral Anatomy", "Dental Materials", "Oral Pathology", "Orthodontics", "Oral Surgery"], careers: ["Dentist", "Oral Surgeon", "Orthodontist"], salary: "₹5-20 LPA" },
          { name: "BAMS", duration: "5.5 Years", eligibility: "12th PCB + NEET", syllabus: ["Ayurveda Basics", "Herbal Medicine", "Panchakarma"], careers: ["Ayurvedic Doctor", "Herbal Researcher"], salary: "₹4-15 LPA" },
          { name: "BSc Nursing", duration: "4 Years", eligibility: "12th PCB/PCM", syllabus: ["Anatomy", "Community Health Nursing", "Psychiatric Nursing", "Medical-Surgical Nursing"], careers: ["Staff Nurse", "Nursing Supervisor", "Healthcare Admin"], salary: "₹3-10 LPA" },
          { name: "BPharm", duration: "4 Years", eligibility: "12th PCB/PCM", syllabus: ["Pharmaceutics", "Pharmacology", "Pharmaceutical Chemistry"], careers: ["Pharmacist", "Drug Inspector", "Pharma Researcher"], salary: "₹3-12 LPA" }
        ]
      },
      // COMMERCE
      commerce: {
        title: "Commerce & Management - Complete Guide",
        courses: [
          { name: "BCom", duration: "3 Years", subjects: ["Financial Accounting", "Cost Accounting", "Corporate Law", "Income Tax", "Auditing", "Economics"], roadmap: "BCom → Job/CA/MBA/MCom", careers: ["Accountant", "Auditor", "Financial Analyst", "Tax Consultant"], salary: "₹3-8 LPA" },
          { name: "BBA", duration: "3 Years", subjects: ["Principles of Management", "Marketing", "Finance", "HR", "Operations", "Entrepreneurship"], roadmap: "BBA → MBA/Job/Startup", careers: ["Management Trainee", "HR Executive", "Marketing Executive", "BD Manager"], salary: "₹3-10 LPA" },
          { name: "CA", duration: "4-5 Years", stages: ["Foundation", "Intermediate", "Final", "Articleship"], subjects: ["Accounting", "Law", "Taxation", "Auditing", "Costing", "FM"], careers: ["Chartered Accountant", "Auditor", "Tax Consultant", "Finance Manager"], salary: "₹6-30+ LPA" },
          { name: "CS", duration: "3-4 Years", stages: ["Foundation", "Executive", "Professional"], subjects: ["Corporate Law", "Company Law", "Securities Law", "Tax Laws"], careers: ["Company Secretary", "Legal Officer", "Compliance Officer"], salary: "₹5-20 LPA" },
          { name: "MBA", duration: "2 Years", exams: ["CAT", "XAT", "MAT", "CMAT"], specializations: ["Marketing", "Finance", "HR", "Operations", "Business Analytics"], careers: ["Manager", "Consultant", "Marketing/Finance/HR Manager"], salary: "₹6-30+ LPA" }
        ]
      },
      // GOVT EXAMS
      govtExams: {
        title: "Government Exams - Complete Guide",
        exams: [
          { name: "UPSC Civil Services", eligibility: "Graduation, Age 21-32", stages: ["Preliminary", "Mains", "Interview"], syllabus: { prelims: ["History", "Geography", "Polity", "Economy", "Environment", "Science", "Current Affairs"], mains: ["GS 1-4", "Essay", "Optional"] }, posts: ["IAS", "IPS", "IFS", "IRS"], salary: "₹10-20+ LPA" },
          { name: "SSC CGL", eligibility: "Graduation, Age 18-32", syllabus: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness"], stages: ["Tier 1", "Tier 2", "Tier 3"], posts: ["Inspector", "Assistant", "Auditor", "Accountant"], salary: "₹5-12 LPA" },
          { name: "Banking (IBPS PO)", eligibility: "Graduation, Age 20-30", syllabus: ["Quant", "Reasoning", "English", "GA", "Computer"], stages: ["Prelims", "Mains", "Interview"], posts: ["PO", "Clerk", "Specialist Officer"], salary: "₹5-12 LPA" },
          { name: "NDA", eligibility: "12th Pass, Age 16.5-19.5", syllabus: ["Mathematics", "General Ability (GK, English, Science, History, Geography)"], stages: ["Written", "SSB", "Medical"], posts: ["Army", "Navy", "Air Force Officer"], salary: "₹6-15 LPA" },
          { name: "State PSC", eligibility: "Graduation", stages: ["Prelims", "Mains", "Interview"], syllabus: ["State-specific GS", "National GS", "Current Affairs"], posts: ["SDM", "DSP", "Lecturer"], salary: "₹5-15 LPA" }
        ]
      },
      // ARTS
      arts: {
        title: "Arts & Humanities - Complete Guide",
        courses: [
          { name: "BA", duration: "3 Years", subjects: ["History", "Political Science", "Geography", "Sociology", "Psychology", "Economics"], roadmap: "BA → MA/UPSC/B.Ed/Job", careers: ["Civil Services", "Teacher", "Journalist", "Researcher"], salary: "₹3-15 LPA" },
          { name: "BA LLB", duration: "5 Years", exams: ["CLAT", "AILET"], subjects: ["Constitution", "IPC", "CrPC", "Contract Law", "International Law"], roadmap: "5 years → Lawyer/Judge", careers: ["Lawyer", "Judge", "Legal Consultant", "Corporate Counsel"], salary: "₹5-25+ LPA" },
          { name: "Journalism", duration: "3 Years", subjects: ["Reporting", "Writing", "Media Ethics", "TV Production", "Digital Media"], roadmap: "3 years → Journalist/Content Creator", careers: ["Journalist", "News Reporter", "Content Writer", "PR Executive"], salary: "₹3-15 LPA" },
          { name: "B.Ed", duration: "2 Years", exams: ["TET", "CTET"], subjects: ["Child Development", "Pedagogy", "School Management"], roadmap: "2 years → TET → Teacher", careers: ["School Teacher", "Primary/Secondary Teacher", "Principal"], salary: "₹3-10 LPA" }
        ]
      },
      // TECH CAREERS
      techCareers: {
        title: "Tech & IT Careers - Skill-Based Guide",
        paths: [
          { name: "Data Science & AI", skills: ["Python", "SQL", "Statistics", "Machine Learning", "Deep Learning", "NLP"], roadmap: "Python → SQL → Stats → ML → Deep Learning → Projects → Job", careers: ["Data Analyst", "Data Scientist", "ML Engineer", "AI Engineer"], salary: "₹6-30+ LPA" },
          { name: "Web Development", skills: ["HTML", "CSS", "JavaScript", "React/Angular", "Node/Django", "MongoDB/MySQL"], roadmap: "Frontend → Backend → Full Stack → Projects → Job", careers: ["Frontend Dev", "Backend Dev", "Full Stack Developer"], salary: "₹4-20 LPA" },
          { name: "Cyber Security", skills: ["Networking", "Linux", "Ethical Hacking", "Penetration Testing", "Security Tools"], roadmap: "Networking → Linux → Security → Hacking → Labs → Job", careers: ["Security Analyst", "Penetration Tester", "Security Engineer", "SOC Analyst"], salary: "₹6-25 LPA" },
          { name: "Cloud & DevOps", skills: ["Linux", "Git", "AWS/Azure/GCP", "Docker", "Kubernetes", "CI/CD"], roadmap: "Linux → Git → Cloud → Docker → K8s → CI/CD → Job", careers: ["DevOps Engineer", "Cloud Engineer", "SRE", "Infrastructure Engineer"], salary: "₹8-25+ LPA" },
          { name: "Mobile App Development", skills: ["Flutter/React Native", "Dart/Kotlin/Swift", "Firebase", "REST APIs"], roadmap: "Mobile → Framework → Apps → Play Store → Job", careers: ["Android/iOS Developer", "Flutter Developer"], salary: "₹5-20 LPA" },
          { name: "Blockchain", skills: ["Solidity", "Web3", "Smart Contracts", "Ethereum", "JavaScript"], roadmap: "Web Dev → Blockchain → Smart Contracts → DApps → Job", careers: ["Blockchain Developer", "Smart Contract Dev", "Web3 Developer"], salary: "₹8-30+ LPA" }
        ]
      },
      // CAREERS
      careers: [
        { title: 'Software Engineer', description: 'Build applications and systems', salary: '₹5-25 LPA' },
        { title: 'Data Scientist', description: 'Analyze data for insights', salary: '₹6-25 LPA' },
        { title: 'Doctor', description: 'Medical healthcare professional', salary: '₹6-30+ LPA' },
        { title: 'Civil Engineer', description: 'Design infrastructure', salary: '₹4-15 LPA' },
        { title: 'Chartered Accountant', description: 'Financial management', salary: '₹6-25 LPA' },
        { title: 'ML Engineer', description: 'Build AI/ML models', salary: '₹8-30 LPA' },
        { title: 'Full Stack Developer', description: 'Web development (front & back)', salary: '₹5-22 LPA' },
        { title: 'Marketing Manager', description: 'Business marketing strategy', salary: '₹6-20 LPA' },
        { title: 'Civil Servant (IAS/IPS)', description: 'Government administration', salary: '₹10-25 LPA' },
        { title: 'Lawyer', description: 'Legal advisor and advocate', salary: '₹5-30+ LPA' }
      ],
      // COLLEGES
      colleges: [
        { name: 'IIT Bombay', state: 'Maharashtra', type: 'Government', exam: 'JEE Advanced', courses: 'Engineering', ranking: 1 },
        { name: 'IIT Delhi', state: 'Delhi', type: 'Government', exam: 'JEE Advanced', courses: 'Engineering', ranking: 2 },
        { name: 'IIT Madras', state: 'Tamil Nadu', type: 'Government', exam: 'JEE Advanced', courses: 'Engineering', ranking: 3 },
        { name: 'IIT Kharagpur', state: 'West Bengal', type: 'Government', exam: 'JEE Advanced', courses: 'Engineering', ranking: 4 },
        { name: 'AIIMS Delhi', state: 'Delhi', type: 'Government', exam: 'NEET', courses: 'Medical', ranking: 1 },
        { name: 'PGIMER Chandigarh', state: 'Chandigarh', type: 'Government', exam: 'NEET', courses: 'Medical', ranking: 2 },
        { name: 'IIM Ahmedabad', state: 'Gujarat', type: 'Government', exam: 'CAT', courses: 'Management', ranking: 1 },
        { name: 'IIM Bangalore', state: 'Karnataka', type: 'Government', exam: 'CAT', courses: 'Management', ranking: 2 },
        { name: 'NLSIU Bangalore', state: 'Karnataka', type: 'Government', exam: 'CLAT', courses: 'Law', ranking: 1 },
        { name: 'DU Delhi', state: 'Delhi', type: 'Government', exam: 'CUET', courses: 'Arts/Science/Commerce', ranking: 1 }
      ],
      // SCHOLARSHIPS
      scholarships: [
        { name: 'National Means-cum-Merit Scholarship', amount: '₹12,000/year', category: 'General', eligibility: 'Class 8 onwards', exam: 'NMMS' },
        { name: 'Post-Matric Scholarship SC', amount: '₹15,000/year', category: 'SC', eligibility: 'Class 11 onwards' },
        { name: 'Post-Matric Scholarship ST', amount: '₹15,000/year', category: 'ST', eligibility: 'Class 11 onwards' },
        { name: 'OBC Scholarship', amount: '₹10,000/year', category: 'OBC', eligibility: 'Class 11 onwards' },
        { name: 'PM YASASVI Scholarship', amount: '₹75,000-1.25 LPA', category: 'OBC/SC/ST', eligibility: 'Class 9-12', exam: 'YASASVI' },
        { name: 'KVPY Fellowship', amount: '₹1 LPA', category: 'Science', eligibility: 'Class 11-12, Graduation', exam: 'KVPY' },
        { name: 'INSPIRE Scholarship', amount: '₹80,000/year', category: 'Science', eligibility: 'Class 12 Science', exam: 'INSPIRE' },
        { name: 'AICTE Pragati Scholarship', amount: '₹50,000/year', category: 'Girls', eligibility: 'Girls in Technical Education' }
      ],
      // ROADMAPS
      roadmaps: [
        { goal: 'IIT JEE', steps: [{ title: 'Class 9-10', desc: 'Build Foundation - NCERT + Basics' }, { title: 'Class 11 Phase 1', desc: 'Start NCERT + Reference Books - PCM' }, { title: 'Class 11 Phase 2', desc: 'Complete Class 11 - Understanding' }, { title: 'Class 12 Phase 1', desc: 'Complete Class 12 - Quick Coverage' }, { title: 'Class 12 Phase 2', desc: 'Revision + Mock Tests' }, { title: 'JEE Main', desc: 'Attempt Exam - Stay Calm' }, { title: 'JEE Advanced', desc: 'Advanced Problems + Mock Tests' }, { title: 'JoSAA', desc: 'Fill Choices - Get Admission' }] },
        { goal: 'NEET', steps: [{ title: 'Class 9-10', desc: 'Build Science Foundation' }, { title: 'Class 11 Phase 1', desc: 'Biology NCERT - Complete with Diagrams' }, { title: 'Class 11 Phase 2', desc: 'Physics + Chemistry NCERT' }, { title: 'Class 12 Phase 1', desc: 'Complete Class 12 Bio, Phy, Chem' }, { title: 'Class 12 Phase 2', desc: 'NCERT Revision + MCQ Practice' }, { title: 'NEET UG', desc: 'Attempt Exam - Focus on Biology' }, { title: 'Counseling', desc: 'Fill Choices - Get MBBS/BDS' }] },
        { goal: 'UPSC', steps: [{ title: 'Graduation', desc: 'Complete Graduation - Start Basic Reading' }, { title: 'Phase 1', desc: 'NCERT 6-12 - Build Foundation' }, { title: 'Phase 2', desc: 'Standard Books - Polity, History, Geo, Economy' }, { title: 'Phase 3', desc: 'Current Affairs - Newspaper + Magazines' }, { title: 'Phase 4', desc: 'Prelims Preparation - GS + CSAT' }, { title: 'Prelims', desc: 'Attempt UPSC Prelims' }, { title: 'Phase 5', desc: 'Mains Preparation - Answer Writing' }, { title: 'Mains', desc: 'Attempt UPSC Mains' }, { title: 'Interview', desc: 'Personality Test Preparation' }, { title: 'Final', desc: 'Get IAS/IPS/IFS' }] },
        { goal: 'NDA', steps: [{ title: 'Class 9-10', desc: 'Build Strong Base - All Subjects' }, { title: 'Class 11', desc: 'PCM/PCB + General Ability Prep' }, { title: 'Class 12 Phase 1', desc: 'Complete Syllabus - Written Focus' }, { title: 'Class 12 Phase 2', desc: 'Mock Tests + SSB Prep' }, { title: 'Written Exam', desc: 'Clear NDA Written' }, { title: 'SSB', desc: 'Clear SSB Interview - 5 Days' }, { title: 'Medical', desc: 'Clear Medical Examination' }, { title: 'Academy', desc: 'Join NDA - 3 Years Training' }] },
        { goal: 'CA', steps: [{ title: 'After 12th', desc: 'Register for CA Foundation' }, { title: 'Foundation', desc: 'Prepare - Clear CA Foundation' }, { title: 'Intermediate', desc: 'Register - Clear CA Intermediate' }, { title: 'Articleship', desc: 'Start 3 Years Articleship' }, { title: 'Final Phase 1', desc: 'Complete Final Group 1' }, { title: 'Final Phase 2', desc: 'Complete Final Group 2' }, { title: 'Become CA', desc: 'Clear Both Groups - Become CA' }] },
        { goal: 'Software Developer', steps: [{ title: 'Start', desc: 'Learn C/C++ or Python - Basic Programming' }, { title: 'Data Structures', desc: 'DSA - Arrays, Linked Lists, Trees, Graphs' }, { title: 'Algorithms', desc: 'Sorting, Searching, Dynamic Programming' }, { title: 'Web Basics', desc: 'HTML, CSS, JavaScript' }, { title: 'Backend', desc: 'Learn Node/Django/Python - Backend' }, { title: 'Database', desc: 'SQL, MongoDB - Database Management' }, { title: 'Projects', desc: 'Build 2-3 Projects - Portfolio' }, { title: 'Internship', desc: 'Get Internship - Real Experience' }, { title: 'Placement', desc: 'Prepare for Placements - DSA + Projects' }, { title: 'Job', desc: 'Get Job as Software Developer' }] }
      ],
      // QUALIFICATION FLOW
      qualificationFlow: [
        { condition: '10th Pass - Choose Stream', result: 'Science / Commerce / Arts / Diploma' },
        { condition: '12th Science (PCM)', result: 'Engineering / NDA / BSc / BTech' },
        { condition: '12th Science (PCB)', result: 'MBBS / BDS / BAMS / BSc Nursing / BPharm' },
        { condition: '12th Commerce', result: 'BCom / BBA / CA / CS / CMA' },
        { condition: '12th Arts', result: 'BA / BA LLB / Journalism / B.Ed' },
        { condition: 'Graduation - Choose Path', result: 'Job / Masters / UPSC / MBA / Skill Courses' },
        { condition: 'Engineering Pass', result: 'Job / GATE (MTech) / MBA / UPSC' },
        { condition: 'Medical Pass', result: 'MD/MS / Specialist / Job / Teaching' },
        { condition: 'BCom Pass', result: 'Job / CA / MBA / MCom' },
        { condition: 'BA Pass', result: 'MA / UPSC / B.Ed / Job' }
      ]
    });
  }
  if (!DataStore.get('stats')) {
    DataStore.set('stats', { users: 1250, roadmaps: 45, exams: 28, paths: 12 });
  }
  if (!DataStore.get('activity')) {
    DataStore.set('activity', []);
  }
};

// DOM Elements
let elements = {};

const init = () => {
  elements = {
    loader: document.getElementById('loader'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    adminOpenBtn: document.getElementById('adminOpenBtn'),
    adminModal: document.getElementById('adminModal'),
    adminCloseBtn: document.getElementById('adminCloseBtn'),
    adminLoginBtn: document.getElementById('adminLoginBtn'),
    adminPassword: document.getElementById('adminPassword'),
    adminMessage: document.getElementById('adminMessage'),
    adminPanel: document.getElementById('adminPanel'),
    homeLinks: document.getElementById('homeLinks'),
    authSection: document.getElementById('authSection'),
    dashboard: document.getElementById('dashboard'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    registerForm: document.getElementById('registerForm'),
    loginForm: document.getElementById('loginForm'),
    authMessage: document.getElementById('authMessage'),
    quickCards: document.querySelectorAll('.quick-card'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    pathBtns: document.querySelectorAll('.path-btn'),
    pathContent: document.getElementById('pathContent'),
    qualificationFlow: document.getElementById('qualificationFlow')
  };

  initDefaultData();
  setupEventListeners();
  loadStats();
  checkAuth();
  initScrollAnimations();
  
  setTimeout(() => {
    if (elements.loader) {
      elements.loader.classList.add('hidden');
    }
  }, 1500);
};

// Event Listeners
const setupEventListeners = () => {
  elements.themeToggleBtn.addEventListener('click', toggleTheme);
  
  elements.adminOpenBtn.addEventListener('click', () => openModal(elements.adminModal));
  elements.adminCloseBtn.addEventListener('click', () => closeModal(elements.adminModal));
  elements.adminLoginBtn.addEventListener('click', handleAdminLogin);
  elements.adminPassword.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAdminLogin();
  });
  
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  
  elements.registerForm.addEventListener('submit', handleRegister);
  elements.loginForm.addEventListener('submit', handleLogin);
  
  elements.quickCards.forEach(card => {
    card.addEventListener('click', () => {
      const target = card.dataset.target;
      if (target) {
        const user = DataStore.get('currentUser');
        if (!user) {
          elements.authSection.scrollIntoView({ behavior: 'smooth' });
          return;
        }
        scrollToSection(target);
        loadSectionData(target);
      }
    });
  });
  
  elements.backToTopBtn.addEventListener('click', scrollToTop);
  
  elements.pathBtns.forEach(btn => {
    btn.addEventListener('click', () => switchPathTab(btn));
  });
  
  window.addEventListener('scroll', handleScroll);
  
  elements.adminModal.addEventListener('click', (e) => {
    if (e.target === elements.adminModal) closeModal(elements.adminModal);
  });
};

// Load section-specific data
const loadSectionData = (sectionId) => {
  const content = DataStore.get('content');
  const section = document.getElementById(sectionId);
  if (!section || !content) return;

  let html = '';
  
  switch(sectionId) {
    case 'after10Section':
      html = renderAfter10th(content.after10th);
      break;
    case 'after12Section':
      html = renderAfter12th(content.after12th);
      break;
    case 'examSection':
      html = renderExams(content.roadmaps);
      break;
    case 'collegeSection':
      html = renderColleges(content.colleges);
      break;
    case 'scholarshipSection':
      html = renderScholarships(content.scholarships);
      break;
  }
  
  const contentDiv = section.querySelector('.section-content') || document.createElement('div');
  contentDiv.className = 'section-content';
  contentDiv.innerHTML = html;
  if (!section.querySelector('.section-content')) {
    section.appendChild(contentDiv);
  }
};

const renderAfter10th = (data) => {
  return `<div class="detail-header"><h2>${data.title}</h2><p>Choose your stream after 10th and explore career options</p></div><div class="streams-grid">${data.streams.map(stream => `<div class="stream-card"><h3>${stream.name}</h3><p>${stream.description}</p><div class="roadmap-preview"><h4>Roadmap:</h4><ol>${stream.roadmap.slice(0, 4).map(step => `<li>${step}</li>`).join('')}</ol></div><div class="careers-preview"><h4>Careers:</h4><p>${stream.careers.join(', ')}</p><p class="salary">Salary: ${stream.salary}</p></div></div>`).join('')}</div>`;
};

const renderAfter12th = (data) => {
  return `<div class="detail-header"><h2>${data.title}</h2><p>Explore your options after 12th based on your stream</p></div><div class="paths-grid">${data.paths.map(path => `<div class="path-card"><h3>${path.stream}</h3><div class="options-list">${path.options.map(opt => `<div class="option-item"><h4>${opt.name}</h4><p><strong>Exams:</strong> ${opt.exams.join(', ')}</p><p><strong>Path:</strong> ${opt.roadmap}</p></div>`).join('')}</div></div>`).join('')}</div>`;
};

const renderExams = (roadmaps) => {
  return `<div class="detail-header"><h2>Exam Preparation Roadmaps</h2><p>Step-by-step preparation paths for various exams</p></div><select id="roadmapGoalSelect" onchange="updateRoadmapDisplay(this.value)" class="roadmap-select"><option value="">Select an Exam</option>${roadmaps.map(r => `<option value="${r.goal}">${r.goal}</option>`).join('')}</select><div id="roadmapDisplay" class="roadmap-display"><p class="select-prompt">Please select an exam to see the roadmap</p></div>`;
};

window.updateRoadmapDisplay = (goal) => {
  const content = DataStore.get('content');
  const roadmap = content.roadmaps.find(r => r.goal === goal);
  const display = document.getElementById('roadmapDisplay');
  if (!roadmap || !display) return;
  display.innerHTML = `<div class="timeline">${roadmap.steps.map((step, i) => `<div class="timeline-item"><div class="timeline-marker">${i + 1}</div><div class="timeline-content"><h4>${step.title}</h4><p>${step.desc}</p></div></div>`).join('')}</div>`;
};

const renderColleges = (colleges) => {
  return `<div class="detail-header"><h2>Top Colleges in India</h2><p>Filter colleges by state, exam, and type</p></div><div class="filters"><select id="collegeStateFilter"><option value="All">All States</option>${[...new Set(colleges.map(c => c.state))].map(s => `<option value="${s}">${s}</option>`).join('')}</select><select id="collegeTypeFilter"><option value="Any">Any Type</option><option>Government</option><option>Private</option></select><button onclick="filterColleges()">Filter</button></div><div id="collegeList" class="college-list">${colleges.slice(0, 10).map(c => `<div class="college-item"><h4>${c.name}</h4><p>${c.state} | ${c.type} | ${c.exam}</p><span class="ranking">Rank: #${c.ranking}</span></div>`).join('')}</div>`;
};

window.filterColleges = () => {
  const content = DataStore.get('content');
  const state = document.getElementById('collegeStateFilter')?.value || 'All';
  const type = document.getElementById('collegeTypeFilter')?.value || 'Any';
  let filtered = content.colleges;
  if (state !== 'All') filtered = filtered.filter(c => c.state === state);
  if (type !== 'Any') filtered = filtered.filter(c => c.type === type);
  const list = document.getElementById('collegeList');
  if (list) list.innerHTML = filtered.map(c => `<div class="college-item"><h4>${c.name}</h4><p>${c.state} | ${c.type} | ${c.exam}</p><span class="ranking">Rank: #${c.ranking}</span></div>`).join('') || '<p>No colleges found</p>';
};

const renderScholarships = (scholarships) => {
  return `<div class="detail-header"><h2>Scholarships in India</h2><p>Find scholarships based on your category and qualification</p></div><div class="scholarship-list">${scholarships.map(s => `<div class="scholarship-item"><h4>${s.name}</h4><p class="amount">${s.amount}</p><p><strong>Category:</strong> ${s.category}</p><p><strong>Eligibility:</strong> ${s.eligibility}</p>${s.exam ? `<p><strong>Exam:</strong> ${s.exam}</p>` : ''}</div>`).join('')}</div>`;
};

// Theme Toggle
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  elements.themeToggleBtn.textContent = newTheme === 'dark' ? '☀️ Light' : '🌙 Theme';
  DataStore.set('theme', newTheme);
};

const openModal = (modal) => {
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = '1', 10);
};

const closeModal = (modal) => {
  modal.style.opacity = '0';
  setTimeout(() => { modal.classList.add('hidden'); modal.style.display = 'none'; }, 300);
};

const switchTab = (tabName) => {
  elements.tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabName));
  elements.tabContents.forEach(content => content.classList.toggle('active', content.id === tabName + 'Form'));
};

const handleAdminLogin = () => {
  const password = elements.adminPassword.value;
  if (password === 'admin123') {
    elements.adminMessage.textContent = '';
    elements.adminPanel.classList.remove('hidden');
    loadAdminData();
    elements.adminPassword.value = '';
  } else {
    elements.adminMessage.textContent = 'Incorrect password!';
    elements.adminMessage.className = 'message error';
  }
};

const loadAdminData = () => {
  const users = DataStore.get('users') || [];
  const activity = DataStore.get('activity') || [];
  const content = DataStore.get('content');
  
  document.getElementById('adminTotalUsers').textContent = users.length;
  document.getElementById('adminActiveUsers').textContent = users.filter(u => { const lastActive = new Date(u.createdAt); return (new Date() - lastActive) < 86400000; }).length;
  const totalContent = (content?.careers?.length || 0) + (content?.colleges?.length || 0) + (content?.scholarships?.length || 0) + (content?.roadmaps?.length || 0);
  document.getElementById('adminContentCount').textContent = totalContent;
  
  document.getElementById('adminUsers').innerHTML = users.length ? users.slice(0, 10).map(u => `<li><strong>${u.name}</strong> <span>${u.email}</span></li>`).join('') : '<li>No users registered yet</li>';
  document.getElementById('adminActivity').innerHTML = activity.length ? activity.slice(0, 10).map(a => `<li>${a.action} - <span>${a.time}</span></li>`).join('') : '<li>No recent activity</li>';
};

document.addEventListener('click', (e) => {
  if (e.target.id === 'contentAddBtn') {
    const type = document.getElementById('contentType').value;
    const title = document.getElementById('contentTitle').value;
    const description = document.getElementById('contentDescription').value;
    if (!title || !description) { alert('Please fill in all fields'); return; }
    const content = DataStore.get('content');
    const newItem = { title, description };
    if (type === 'careers') { newItem.salary = 'To be updated'; content.careers.push(newItem); }
    else if (type === 'colleges') { content.colleges.push({ name: title, state: 'To be updated', type: 'To be updated', exam: 'To be updated', ranking: 99 }); }
    else if (type === 'scholarships') { content.scholarships.push({ name: title, amount: 'To be updated', category: 'General', eligibility: 'TBD' }); }
    else if (type === 'roadmaps') { content.roadmaps.push({ goal: title, steps: [{ title: 'Step 1', desc: description }] }); }
    DataStore.set('content', content);
    document.getElementById('contentTitle').value = '';
    document.getElementById('contentDescription').value = '';
    loadAdminData();
    alert('Content added successfully!');
  }
});

const handleRegister = (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const location = document.getElementById('regLocation').value;
  const eduClass = document.getElementById('regClass').value;
  const reason = document.getElementById('regReason').value;
  const interest = document.getElementById('regInterest').value;
  
  const users = DataStore.get('users') || [];
  if (users.find(u => u.email === email)) {
    elements.authMessage.textContent = 'Email already registered!';
    elements.authMessage.className = 'message error';
    return;
  }
  
  const newUser = { name, email, password, location, eduClass, reason, interest, createdAt: new Date().toISOString() };
  users.push(newUser);
  DataStore.set('users', users);
  DataStore.set('currentUser', newUser);
  logActivity(`New user registered: ${name}`);
  elements.authMessage.textContent = 'Registration successful! Redirecting...';
  elements.authMessage.className = 'message success';
  setTimeout(() => showDashboard(), 1000);
};

const handleLogin = (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const users = DataStore.get('users') || [];
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    DataStore.set('currentUser', user);
    logActivity(`User logged in: ${user.name}`);
    elements.authMessage.textContent = 'Login successful! Redirecting...';
    elements.authMessage.className = 'message success';
    setTimeout(() => showDashboard(), 1000);
  } else {
    elements.authMessage.textContent = 'Invalid email or password!';
    elements.authMessage.className = 'message error';
  }
};

const checkAuth = () => {
  const user = DataStore.get('currentUser');
  if (user) showDashboard();
};

const showDashboard = () => {
  const user = DataStore.get('currentUser');
  if (!user) return;
  elements.homeLinks.classList.add('hidden');
  elements.authSection.classList.add('hidden');
  elements.dashboard.classList.remove('hidden');
  document.getElementById('welcomeTitle').textContent = `Welcome, ${user.name}!`;
  document.getElementById('welcomeMeta').textContent = `${user.eduClass} Student | ${user.interest}`;
  document.getElementById('aiRecommendation').textContent = `Recommended: ${user.interest} Path`;
  loadDashboardData();
};

document.addEventListener('click', (e) => {
  if (e.target.id === 'logoutBtn') {
    DataStore.set('currentUser', null);
    elements.dashboard.classList.add('hidden');
    elements.homeLinks.classList.remove('hidden');
    elements.authSection.classList.remove('hidden');
    elements.registerForm.reset();
    elements.loginForm.reset();
  }
});

const logActivity = (action) => {
  const activity = DataStore.get('activity') || [];
  activity.unshift({ action, time: new Date().toLocaleTimeString() });
  DataStore.set('activity', activity.slice(0, 100));
};

const loadStats = () => {
  const stats = DataStore.get('stats') || { users: 0, roadmaps: 0, exams: 0, paths: 0 };
  animateNumber('statUsers', stats.users || 0);
  animateNumber('statRoadmaps', stats.roadmaps || 0);
  animateNumber('statExams', stats.exams || 0);
  animateNumber('statPaths', stats.paths || 0);
};

const animateNumber = (elementId, target) => {
  const element = document.getElementById(elementId);
  if (!element) return;
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) { element.textContent = target.toLocaleString(); clearInterval(timer); }
    else { element.textContent = Math.floor(current).toLocaleString(); }
  }, 30);
};

const loadDashboardData = () => {
  const content = DataStore.get('content');
  const plannerInterest = document.getElementById('plannerInterest');
  if (plannerInterest && content.careers) plannerInterest.innerHTML = content.careers.map(c => `<option>${c.title}</option>`).join('');
  const roadmapGoal = document.getElementById('roadmapGoal');
  if (roadmapGoal && content.roadmaps) roadmapGoal.innerHTML = content.roadmaps.map(r => `<option>${r.goal}</option>`).join('');
  const collegeState = document.getElementById('collegeState');
  if (collegeState && content.colleges) { const states = [...new Set(content.colleges.map(c => c.state))]; collegeState.innerHTML = '<option value="All">All States</option>' + states.map(s => `<option>${s}</option>`).join(''); }
  const compare1 = document.getElementById('compare1');
  const compare2 = document.getElementById('compare2');
  if (compare1 && compare2 && content.careers) { const careerOptions = content.careers.map(c => `<option>${c.title}</option>`).join(''); compare1.innerHTML = careerOptions; compare2.innerHTML = careerOptions; }
  loadPathContent('After 10th');
  loadQualificationFlow();
  setupDashboardActions(content);
};

const setupDashboardActions = (content) => {
  document.getElementById('generatePlanBtn')?.addEventListener('click', () => {
    const qualification = document.getElementById('plannerQualification').value;
    const interest = document.getElementById('plannerInterest').value;
    const goal = document.getElementById('plannerGoal').value;
    const output = document.getElementById('plannerOutput');
    if (!output) return;
    output.innerHTML = `<div class="plan-card"><h4>📚 Study Plan for ${interest}</h4><ul><li>Month 1-2: ${qualification} Foundation</li><li>Month 3-4: ${interest} Core Concepts</li><li>Month 5-6: Advanced Topics & Practice</li><li>Month 7-8: Mock Tests & Revision</li></ul></div><div class="plan-card"><h4>🎯 Goal: ${goal}</h4><ul><li>Weekly: 20 hours study</li><li>Monthly: 2 mock tests</li><li>Quarterly: Topic completion</li></ul></div>`;
  });
  
  document.getElementById('findCollegesBtn')?.addEventListener('click', () => {
    const state = document.getElementById('collegeState').value;
    const exam = document.getElementById('collegeExam').value;
    const type = document.getElementById('collegeType').value;
    const colleges = content.colleges.filter(c => (state === 'All' || c.state === state) && (exam === 'Any' || c.exam === exam) && (type === 'Any' || c.type === type));
    const results = document.getElementById('collegeResults');
    if (results) results.innerHTML = colleges.length ? colleges.map(c => `<li class="college-card"><strong>${c.name}</strong><span>${c.state} | ${c.type} | ${c.exam}</span></li>`).join('') : '<li>No colleges found</li>';
  });
  
  document.getElementById('findScholarshipsBtn')?.addEventListener('click', () => {
    const qual = document.getElementById('schQual').value;
    const category = document.getElementById('schCategory').value;
    const scholarships = content.scholarships.filter(s => (qual === 'Any' || s.qualification === qual) && (category === 'Any' || s.category === category));
    const results = document.getElementById('scholarshipResults');
    if (results) results.innerHTML = scholarships.length ? scholarships.map(s => `<li class="scholarship-card"><strong>${s.name}</strong><span>${s.amount} | ${s.category}</span></li>`).join('') : '<li>No scholarships found</li>';
  });
  
  document.getElementById('compareBtn')?.addEventListener('click', () => {
    const c1 = document.getElementById('compare1').value;
    const c2 = document.getElementById('compare2').value;
    const career1 = content.careers.find(c => c.title === c1);
    const career2 = content.careers.find(c => c.title === c2);
    const output = document.getElementById('comparisonOutput');
    if (!output) return;
    output.innerHTML = `<div class="comparison-card"><h5>${career1.title}</h5><p>${career1.description}</p><p class="salary">${career1.salary}</p></div><div class="comparison-card"><h5>${career2.title}</h5><p>${career2.description}</p><p class="salary">${career2.salary}</p></div>`;
  });
  
  document.getElementById('roadmapGoal')?.addEventListener('change', (e) => {
    const roadmap = content.roadmaps.find(r => r.goal === e.target.value);
    if (roadmap) {
      const metaList = document.getElementById('examMeta');
      if (metaList) metaList.innerHTML = `<li>${roadmap.steps.length} Steps</li><li>${roadmap.goal}</li>`;
      const timeline = document.getElementById('roadmapSteps');
      if (timeline) timeline.innerHTML = roadmap.steps.map((step, i) => `<li>Step ${i+1}: ${step.title} - ${step.desc}</li>`).join('');
    }
  });
  
  setupChat();
};

const loadPathContent = (path) => {
  const pathData = {
    'After 10th': [{ title: 'Science Stream (PCM)', desc: 'Physics, Chemistry, Mathematics - For Engineering', courses: ['IIT JEE', 'NDA', 'BSc'] }, { title: 'Science Stream (PCB)', desc: 'Physics, Chemistry, Biology - For Medical', courses: ['NEET', 'BSc Nursing', 'BPharm'] }, { title: 'Commerce Stream', desc: 'Accounts, Economics, Business Studies', courses: ['BCom', 'BBA', 'CA Foundation'] }, { title: 'Arts Stream', desc: 'History, Political Science, Sociology', courses: ['BA', 'UPSC', 'Journalism'] }],
    'After 12th': [{ title: 'Engineering', desc: 'BTech in various specializations', courses: ['IITs', 'NITs', 'State Colleges'] }, { title: 'Medical', desc: 'MBBS, BDS, BAMS, Nursing', courses: ['AIIMS', 'State Medical Colleges'] }, { title: 'Commerce', desc: 'BCom, BBA, CA, CS', courses: ['DU', 'Mumbai University'] }, { title: 'Arts/Humanities', desc: 'BA, BA LLB, Journalism', courses: ['DU', 'NLSIU', 'Media Colleges'] }],
    'After Graduation': [{ title: 'Masters (MTech/MSc)', desc: 'Specialization in your field', courses: ['GATE', 'GRE'] }, { title: 'MBA', desc: 'Master of Business Administration', courses: ['CAT', 'XAT', 'NMAT'] }, { title: 'Civil Services', desc: 'UPSC / State PSC', courses: ['UPSC CSE', 'State PSC'] }, { title: 'Jobs', desc: 'Corporate and Government jobs', courses: ['Campus Placement', 'Off-campus'] }]
  };
  const data = pathData[path] || pathData['After 10th'];
  if (elements.pathContent) elements.pathContent.innerHTML = data.map(item => `<div class="flow-item"><h4>${item.title}</h4><p>${item.desc}</p><p><strong>Options:</strong> ${item.courses.join(', ')}</p></div>`).join('');
};

const switchPathTab = (btn) => {
  elements.pathBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  loadPathContent(btn.dataset.path);
};

const loadQualificationFlow = () => {
  const content = DataStore.get('content');
  const flows = content.qualificationFlow || [{ condition: '10th Pass', result: 'Choose Stream' }, { condition: '12th Science', result: 'Engineering/Medical' }];
  if (elements.qualificationFlow) elements.qualificationFlow.innerHTML = flows.map(f => `<div class="flow-item"><h4>IF: ${f.condition}</h4><p>THEN: ${f.result}</p></div>`).join('');
};

const setupChat = () => {
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const sendMessage = () => {
    if (!chatInput) return;
    const message = chatInput.value.trim();
    if (!message) return;
    addChatMessage(message, 'user');
    chatInput.value = '';
    setTimeout(() => { const response = getBotResponse(message); addChatMessage(response, 'bot'); }, 500);
  };
  chatSendBtn?.addEventListener('click', sendMessage);
  chatInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
};

const addChatMessage = (text, sender) => {
  const chatbox = document.getElementById('chatbox');
  if (!chatbox) return;
  const div = document.createElement('div');
  div.className = `chat-message ${sender}`;
  div.textContent = text;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
};

const getBotResponse = (message) => {
  const lower = message.toLowerCase();
  if (lower.includes('jee') || lower.includes('engineering')) return 'For IIT JEE: Start with NCERT, solve previous year papers, join test series. Focus on Physics, Chemistry, and Mathematics concepts. Check our Engineering section!';
  else if (lower.includes('neet') || lower.includes('medical')) return 'For NEET: Prioritize Biology NCERT (most weightage), practice Physics numericals, memorize Chemistry formulas. Take regular mock tests. Check our Medical section!';
  else if (lower.includes('after 10th') || lower.includes('10th')) return 'After 10th, you can choose: Science (PCM/PCB), Commerce, Arts, or Diploma. Each stream has different career paths. Check our After 10th section!';
  else if (lower.includes('after 12th') || lower.includes('12th')) return 'After 12th, options depend on your stream: Science (Engineering/Medical), Commerce (BCom/BBA/CA), Arts (BA/Law/Journalism). Check our After 12th section!';
  else if (lower.includes('commerce') || lower.includes('bcom') || lower.includes('bba')) return 'Commerce offers careers in CA, CS, BBA, Banking, and Finance. Check our Commerce section for BCom, BBA, CA, and MBA details!';
  else if (lower.includes('upsc') || lower.includes('civil service')) return 'UPSC requires graduation, then prepare for Prelims (GS), Mains (Essay+GS+Optional), and Interview. Start with NCERTs and The Hindu. Check our Govt Exams section!';
  else if (lower.includes('college')) return 'College admission depends on your entrance exam score. We have data for IITs, IIMs, AIIMS, and more. Check the Colleges section!';
  else if (lower.includes('scholarship')) return 'Check national scholarships: NMMS, Post-Matric for SC/ST/OBC, PM YASASVI, KVPY for Science. Check Scholarships section!';
  else if (lower.includes('career')) return 'Career options: Engineering, Medical, Commerce, Arts, Govt Jobs, Tech/IT. Take our sections for detailed guidance!';
  else if (lower.includes('salary') || lower.includes('job')) return 'Typical salaries: Software Engineer ₹4-20LPA, Doctor ₹6-30+LPA, CA ₹6-25LPA, IAS ₹10-20LPA. Check detailed sections!';
  else return 'I recommend exploring our sections: After 10th, After 12th, Engineering, Medical, Commerce, Govt Exams, or Arts. Where would you like to know more?';
};

const scrollToSection = (sectionId) => {
  const user = DataStore.get('currentUser');
  if (!user) { elements.authSection.scrollIntoView({ behavior: 'smooth' }); return; }
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const handleScroll = () => {
  if (window.scrollY > 300) elements.backToTopBtn?.classList.remove('hidden');
  else elements.backToTopBtn?.classList.add('hidden');
  document.querySelectorAll('.reveal').forEach(el => { const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight - 100) el.classList.add('visible'); });
};

const initScrollAnimations = () => handleScroll();

document.addEventListener('DOMContentLoaded', init);
