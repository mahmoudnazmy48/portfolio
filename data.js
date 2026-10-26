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
    { value: "DEPI", label: "Machine Learning Track · In Progress" },
    { value: "3", label: "Live Flutter Web apps deployed" }
  ],

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

  /* الأحدث أولاً */
  experience: [
    {
      role: "Information Systems Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2025 – Present",
      current: true,
      bullets: [
        "I run the information systems department and coordinate the technical needs of daily operations.",
        "My focus is keeping our systems, data and digital workflows organized and reliable.",
        "I look for ways to improve how information is managed and reported, and I use my engineering background to solve problems as they come up."
      ],
      tags: ["Information Systems", "Data Management", "Digital Transformation", "Process Improvement"]
    },
    {
      role: "Subscriptions Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2023 – 2025",
      current: false,
      bullets: [
        "I managed membership and subscription operations: the administrative workflow, member records and transactions.",
        "Since everything ran on member and transaction records, I worked with that data to follow subscription activity and support decisions.",
        "I also worked on making the administrative process smoother and the reporting clearer."
      ],
      tags: ["Subscription Data", "Operational Reporting", "Data-Informed Decisions", "Process Improvement"]
    },
    {
      role: "Cost Control Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2021 – 2023",
      current: false,
      bullets: [
        "I managed the cost control department and the workflows around it.",
        "I followed cost and consumption figures closely and relied on the numbers to keep control and accountability.",
        "I coordinated with other departments and made sure procedures and service standards were followed."
      ],
      tags: ["Cost Analysis", "Operational Data", "KPI Monitoring", "Coordination"]
    },
    {
      role: "Command Center Systems Engineer",
      org: "Egyptian Armed Forces",
      location: "Egypt",
      period: "2012 – 2021",
      current: false,
      bullets: [
        "I worked as an engineer on command center systems.",
        "Day to day that meant technical troubleshooting and making sure the systems met operational requirements.",
        "It's where I built my foundation in systems engineering and in working inside demanding operational environments."
      ],
      tags: ["Systems Engineering", "Technical Troubleshooting", "Engineering"]
    }
  ],

  /* تبويبات المشاريع بالترتيب. تبويب فاضي بيظهر رسالة بدل صفحة فاضية */
  projectTabs: [
    { name: "Data Analysis & BI" },
    { name: "Machine Learning", empty: "Machine learning projects are on the way. I'm building them as part of the DEPI track and they will be published here." },
    { name: "Applications" }
  ],

  /* ✏️ مشاريع Data الأول، وبعدها مشاريع Tiba Rose. أضف لينك Repo للـ Churn والـ Gate DB لما ترفعهم */
  projects: [
    {
      title: "Customer Segmentation & Churn Analysis",
      badge: "Analytics & BI",
      icon: "📊",
      image: "",
      categories: ["Data Analysis & BI"],
      summary: "Exploratory analysis, customer segmentation and churn-related insights with KPI reporting.",
      tags: ["Python", "SQL", "Power BI", "DAX", "Excel"],
      problem: "",
      solution: "Worked on data preparation, exploratory analysis, visualizations and KPI reporting to explore customer segments and churn patterns.",
      features: [],
      results: "",
      github: "",
      live: ""
    },
    {
      title: "Gate Access & Point-of-Sale Database",
      badge: "Database Design",
      icon: "🎟️",
      image: "",
      categories: ["Data Analysis & BI"],
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
      github: "",
      live: ""
    },
    {
      title: "Tiba Rose Customer Feedback",
      badge: "Flutter Web · Live",
      icon: "💬",
      image: "",
      categories: ["Applications"],
      summary: "A Flutter web application for collecting customer feedback at Tiba Rose.",
      tags: ["Flutter", "Dart", "Flutter Web"],
      problem: "Understanding customer opinion requires a simple, consistent way to collect feedback from guests.",
      solution: "Built the feedback application with Flutter, compiled it for the web and deployed it on GitHub Pages as a live demo.",
      features: [
        "Built with Flutter and Dart.",
        "Compiled for the web and deployed as a live demo."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/Tiba-Rose-Customers-FeedBack",
      live: "https://mahmoudnazmy48.github.io/Tiba-Rose-Customers-FeedBack/"
    },
    {
      title: "Tiba Rose Navigation Map",
      badge: "Flutter Web · Live",
      icon: "🧭",
      image: "",
      categories: ["Applications"],
      summary: "An interactive navigation map for a hospitality venue, driven by structured JSON data.",
      tags: ["Flutter", "Dart", "JSON"],
      problem: "Visitors in large venues may need help locating buildings and facilities.",
      solution: "Developed an interactive navigation application in Flutter, with locations, buildings and navigation connections organized as structured JSON data, and deployed it as a live demo.",
      features: [
        "Map locations and buildings represented through structured data.",
        "Navigation connections modeled between points of interest.",
        "Flutter and Dart, deployed on GitHub Pages."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/Tiba-Rose-Navigation-Map",
      live: "https://mahmoudnazmy48.github.io/Tiba-Rose-Navigation-Map/"
    },
    {
      title: "Tiba Rose App",
      badge: "Flutter Web · Live",
      icon: "🌹",
      image: "",
      categories: ["Applications"],
      summary: "The main Tiba Rose application, built with Flutter and deployed as a live web app.",
      tags: ["Flutter", "Dart", "Flutter Web"],
      problem: "",
      solution: "Built the application with Flutter, compiled it for the web and deployed it on GitHub Pages as a live demo.",
      features: [
        "Built with Flutter and Dart.",
        "Compiled for the web and deployed as a live demo."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/Tiba-Rose-App",
      live: "https://mahmoudnazmy48.github.io/Tiba-Rose-App/"
    },
    {
      title: "Tiba Rose Marketing",
      badge: "Flutter Web",
      icon: "📣",
      image: "",
      categories: ["Applications"],
      summary: "A Flutter web application focused on Tiba Rose marketing.",
      tags: ["Flutter", "Dart", "Flutter Web"],
      problem: "",
      solution: "Built with Flutter and compiled for the web.",
      features: [],
      results: "",
      github: "https://github.com/mahmoudnazmy48/Tiba-Rose-Marketing",
      live: ""
    }
  ],

  skills: [
    { title: "Data Analysis & BI", items: ["Power BI", "DAX", "Excel", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "KPI Reporting", "Statistical Analysis", "Customer Segmentation", "Churn Analysis"] },
    { title: "Machine Learning & AI", items: ["Supervised Learning", "Regression", "Classification", "Feature Preparation", "Model Evaluation", "Deep Learning Fundamentals"] },
    { title: "Programming & Databases", items: ["Python", "SQL", "R", "Microsoft SQL Server", "Relational Database Design"] },
    { title: "Application Development", items: ["Flutter", "Flutter Web", "Dart", "JSON", "Git", "GitHub"] }
  ],

  education: [
    { degree: "Master's Degree in Data Analysis", school: "Cairo University, Egypt", period: "", note: "", current: false },
    { degree: "Bachelor's Degree in Electrical Engineering (Computer Engineering)", school: "Military Technical College, Egypt", period: "", note: "", current: false }
  ],

  certifications: [
    { title: "Machine Learning Track (In Progress)", issuer: "Digital Egypt Pioneers Initiative (DEPI)", date: "Ongoing", url: "" }
  ]
};
