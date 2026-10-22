/* ==========================================================================
   ✏️  ده الملف الوحيد اللي بتعدل فيه بياناتك. (متلمسش index.html / script.js)
   - أي قسم تسيبه فاضي [] بيختفي من الموقع تلقائياً (هو واللينك بتاعه في القائمة).
   - أي لينك تسيبه "" الزرار بتاعه بيختفي.
   - اكتب نص عادي (من غير HTML).
   ========================================================================== */
window.PORTFOLIO = {
  /* ---------- 1) البيانات الأساسية ---------- */
  site: {
    name: "Mahmoud Nazmy",
    role: "Flutter Developer & Mobile Engineer",          // المسمى الوظيفي
    tagline: "I build fast, accessible and beautiful apps, from idea to store release.",
    availability: "Open to new opportunities",             // سيبها "" لو مش عايز البادج
    location: "Cairo, Egypt",
    email: "you@example.com",
    phone: "",                                             // اختياري
    languages: "Arabic (Native) · English (Fluent)",
    avatar: "assets/profile.jpg",                          // ضع صورتك في فولدر assets
    cv: "assets/CV.pdf",                                   // ضع الـ CV في فولدر assets (أو سيبها "")
    siteUrl: "https://YOUR_GITHUB_USERNAME.github.io/portfolio/", // لينك موقعك بعد النشر
    bio: [
      "Paragraph 1: who you are, your experience, and what you specialize in.",
      "Paragraph 2: your approach, the kind of problems you love solving, and your strengths.",
      "Paragraph 3 (optional): teaching, open source, community, or what you're looking for next."
    ],
    socials: {
      github: "https://github.com/YOUR_GITHUB_USERNAME",
      linkedin: "https://www.linkedin.com/in/YOUR_USERNAME",
      x: "",
      medium: "",
      behance: ""
    }
  },

  /* ---------- 2) أرقام تعرض إنجازاتك (3 لـ 4 أرقام كفاية) ---------- */
  metrics: [
    { value: "3+",   label: "Years of experience" },
    { value: "15+",  label: "Projects delivered" },
    { value: "5",    label: "Apps on the stores" },
    { value: "3.5",  label: "GPA / 4.0" }
  ],

  /* ---------- 3) الخبرات (الأحدث أولاً) ---------- */
  experience: [
    {
      role: "Flutter Developer",
      org: "Company Name",
      location: "Cairo, Egypt · Hybrid",
      period: "Jan 2024 – Present",
      current: true,
      bullets: [
        "Built X using Flutter and Bloc, which improved Y by 30%.",
        "Cut app startup time from 4s to 1.5s through profiling and lazy loading.",
        "Mentored 3 junior developers and introduced code review guidelines."
      ],
      tags: ["Flutter", "Dart", "Bloc", "Firebase"]
    },
    {
      role: "Junior Mobile Developer",
      org: "Another Company",
      location: "Remote",
      period: "Jun 2022 – Dec 2023",
      current: false,
      bullets: [
        "Shipped 4 production apps used by 20k+ users.",
        "Integrated REST APIs, push notifications and in-app payments."
      ],
      tags: ["Flutter", "REST", "CI/CD"]
    }
  ],

  /* ---------- 4) المشاريع (Case Studies) ---------- */
  projects: [
    {
      title: "Project One",
      badge: "Flagship",
      icon: "🚀",                       // إيموجي بيظهر لو مفيش صورة
      image: "",                        // اختياري: "assets/project1.png"
      categories: ["Mobile"],           // بيتعمل منها فلاتر تلقائياً
      summary: "One or two sentences: what it does and who it is for.",
      tags: ["Flutter", "Firebase", "Bloc"],
      problem: "What problem existed? Who suffered from it and why did it matter?",
      solution: "How did you solve it? Describe the architecture and key decisions.",
      features: [
        "Feature or technical highlight number one.",
        "Feature or technical highlight number two.",
        "Feature or technical highlight number three."
      ],
      results: "Measurable outcome: users, performance gains, ratings, awards, grades...",
      github: "https://github.com/YOUR_GITHUB_USERNAME/project-one",
      live: ""                          // Play Store / Live demo
    },
    {
      title: "Project Two",
      badge: "Open Source",
      icon: "📊",
      image: "",
      categories: ["Web", "Data"],
      summary: "One or two sentences: what it does and who it is for.",
      tags: ["Python", "Pandas", "Dash"],
      problem: "", solution: "", features: [], results: "",
      github: "https://github.com/YOUR_GITHUB_USERNAME/project-two",
      live: ""
    }
  ],

  /* ---------- 5) المهارات (مجموعات) ---------- */
  skills: [
    { title: "Mobile",    items: ["Flutter", "Dart", "Kotlin", "Android SDK"] },
    { title: "Backend & Data", items: ["Firebase", "REST APIs", "SQL", "Hive"] },
    { title: "Architecture & Tools", items: ["Clean Architecture", "Bloc / Riverpod", "Git & GitHub", "CI/CD"] },
    { title: "Soft Skills", items: ["Mentoring", "Communication", "Problem Solving"] }
  ],

  /* ---------- 6) التعليم ---------- */
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Your University",
      period: "2019 – 2023",
      note: "GPA 3.5 / 4.0 · Graduation project: Grade A",
      current: false
    }
  ],

  /* ---------- 7) الشهادات والكورسات ---------- */
  certifications: [
    { title: "Certification or Diploma Name", issuer: "Issuer (e.g. ITI, Udacity)", date: "2023", url: "" }
  ]
};
