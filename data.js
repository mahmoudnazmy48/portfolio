/* ==========================================================================
   Mahmoud Nazmy: Portfolio Data
   ✏️ ده الملف الوحيد اللي بتعدل فيه المحتوى. أي قسم فاضي [] بيختفي، وأي لينك "" بيختفي زراره.
   ========================================================================== */
window.PORTFOLIO = {

  site: {
    name: "Mahmoud Nazmy",
    role: "Data Analyst · Business Intelligence · Data Science · Machine Learning",
    tagline: "I turn operational data into decisions using SQL, Python, Power BI and machine learning.",
    availability: "Open to Data Analytics, BI & Machine Learning opportunities",
    location: "Cairo, Egypt",
    email: "mahmoooudnazmy103@gmail.com",
    phone: "+201026036685",            // سيبه "" لو مش عايز رقمك يظهر للعامة
    languages: "Arabic (Native) · English (B2)",
    avatar: "assets/profile.jpg",
    cv: "assets/CV.pdf",
    siteUrl: "https://mahmoudnazmy48.github.io/portfolio/",
    heroChips: ["SQL", "Python", "Power BI", "Machine Learning"],
    bio: [
      "My path into technology began with Computer Engineering at the Military Technical College. After graduating, I joined the Egyptian Armed Forces, where years of work with information systems built discipline, ownership, time management and the ability to perform under pressure.",
      "Along the way I became drawn to data: taking raw data, understanding what it says, finding patterns and turning them into something useful. That curiosity led me to an M.Sc. in Data Analysis at Cairo University, alongside hands-on work in statistics, visualization and business intelligence.",
      "As my understanding of data grew, a new question followed: what if I could go beyond analyzing data and build systems that learn from it? That question led me to machine learning and, increasingly, to AI engineering.",
      "Today I'm continuing that move from data analysis into machine learning and AI through the DEPI Machine Learning track and projects I build myself, aiming to understand not only how models work, but why they work."
    ],
    socials: {
      github: "https://github.com/mahmoudnazmy48",
      linkedin: "https://www.linkedin.com/in/mahmoud-nazmy-a408b334a/",
      x: "", medium: "", behance: ""
    }
  },

  journey: [
    { title: "Computer Engineering", sub: "Military Technical College" },
    { title: "Data Analysis", sub: "M.Sc., Cairo University" },
    { title: "Machine Learning", sub: "DEPI track, in progress" },
    { title: "AI Engineering", sub: "Where I'm heading" }
  ],

  metrics: [
    { value: "M.Sc.", label: "Data Analysis · Cairo University" },
    { value: "B.Sc.", label: "Computer Engineering · Military Technical College" },
    { value: "DEPI", label: "Machine Learning Track · In Progress" }
  ],

  /* ---------- What I do (3 كروت تلخص تخصصك) ---------- */
  focus: [
    {
      icon: "🔎",
      title: "Data Analysis",
      text: "Understanding what raw data is saying and turning it into insight.",
      points: ["Data cleaning and exploratory analysis", "Statistical analysis", "Customer segmentation and churn analysis"]
    },
    {
      icon: "📊",
      title: "Business Intelligence",
      text: "Clear KPIs, reports and dashboards that support decisions.",
      points: ["Power BI dashboards with DAX", "KPI reporting and data visualization", "SQL Server querying and database design"]
    },
    {
      icon: "🤖",
      title: "Data Science & Machine Learning",
      text: "Moving from analyzing data to building models that learn from it.",
      points: ["Regression and classification", "Feature preparation and model evaluation", "Deep learning fundamentals (in progress)"]
    }
  ],

  /* ✏️ أضف تواريخ حقيقية في period (مثال: "2022 – Present") */
  experience: [
    {
      role: "Information Systems Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2022 – Present",
      current: true,
      bullets: [
        "Manage information systems activities and coordinate technology-related operational requirements.",
        "Support the organization and reliability of information systems, data and digital workflows.",
        "Identify opportunities to improve information management, operational processes and reporting.",
        "Apply engineering and analytical problem-solving skills to support technology-driven operations."
      ],
      tags: ["Information Systems", "Data Management", "Digital Transformation", "Process Improvement"]
    },
    {
      role: "Command Center Systems Engineer",
      org: "Egyptian Armed Forces",
      location: "Egypt",
      period: "2012 – 2022",
      current: false,
      bullets: [
        "Worked as an engineer specializing in command center systems.",
        "Applied engineering knowledge and structured troubleshooting to technical systems and operational requirements.",
        "Built experience in systems engineering, technical problem-solving and operational environments."
      ],
      tags: ["Systems Engineering", "Technical Troubleshooting", "Engineering"]
    }
  ],

  /* ✏️ حط لينك Repo مستقل لكل مشروع بدل لينك البروفايل */
  projects: [
    {
      title: "Customer Segmentation & Churn Analysis",
      badge: "Analytics & BI",
      icon: "📊",
      image: "",
      categories: ["Data Analysis", "BI"],
      summary: "Exploratory analysis, customer segmentation and churn-related insights with KPI reporting.",
      tags: ["Python", "SQL", "Power BI", "DAX", "Excel"],
      problem: "",
      solution: "Worked on data preparation, exploratory analysis, visualizations and KPI reporting to explore customer segments and churn patterns.",
      features: [],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    },
    {
      title: "Gate Access & Point-of-Sale Database",
      badge: "machine learning",
      icon: "🎟️",
      image: "",
      categories: ["machine learning"],
      summary: "A relational database design for gate operations, ticket sales, memberships and operational reporting.",
      tags: ["SQL Server", "SQL", "Relational Design"],
      problem: "Gate, ticketing and membership information needs a consistent structure to support reliable operations and reporting.",
      solution: "Designed a relational schema and business rules for gate operations, ticket sales and membership records, focused on data integrity and reporting needs.",
      features: [
        "Relational tables with defined relationships.",
        "Constraints and business rules for data integrity.",
        "A structure intended to support operational reporting."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    },
    {
      title: "Interactive Digital Navigation App",
      badge: "Application Development",
      icon: "🧭",
      image: "",
      categories: ["Mobile App Development"],
      summary: "A Flutter navigation application for a hospitality environment, using structured map data.",
      tags: ["Flutter", "Dart", "JSON"],
      problem: "Visitors in large venues may need help locating buildings and facilities.",
      solution: "Developed an interactive navigation application in Flutter, with locations, buildings and navigation connections organized as structured JSON data.",
      features: [
        "Map locations and buildings represented through structured data.",
        "Navigation connections modeled between points of interest.",
        "Flutter and Dart application development."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    }
  ],

  skills: [
    { title: "Data Analysis & BI", items: ["Power BI", "DAX", "Excel", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "KPI Reporting", "Statistical Analysis", "Customer Segmentation", "Churn Analysis"] },
    { title: "Machine Learning & AI", items: ["Supervised Learning", "Regression", "Classification", "Feature Preparation", "Model Evaluation", "Deep Learning Fundamentals"] },
    { title: "Programming & Databases", items: ["Python", "SQL", "R", "Microsoft SQL Server", "Relational Database Design"] },
    { title: "Application Development", items: ["Flutter", "Dart", "JSON", "Git", "GitHub"] }
  ],

  education: [
    { degree: "Master's Degree in Data Analysis", school: "Cairo University, Egypt", period: "", note: "", current: false },
    { degree: "Bachelor's Degree in Electrical Engineering (Computer Engineering)", school: "Military Technical College, Egypt", period: "", note: "", current: false }
  ],

  certifications: [
    { title: "Machine Learning Track (In Progress)", issuer: "Digital Egypt Pioneers Initiative (DEPI)", date: "Ongoing", url: "" }
  ]
};
