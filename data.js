/* ==========================================================================
   ✏️  ملف البيانات: كل اللي في الموقع بيتقرا من هنا.
   - أي قسم تسيبه فاضي [] بيختفي تلقائياً، وأي لينك "" الزرار بتاعه بيختفي.
   - اكتب نص عادي (من غير HTML).
   ========================================================================== */
window.PORTFOLIO = {
  site: {
    name: "Mahmoud Nazmy",
    role: "Mobile Developer · ML & AI Engineer · Data Analyst",
    tagline: "I turn data into decisions and ideas into apps, using Flutter, Python, SQL, Power BI and machine learning.",
    availability: "Open to Data, ML & Mobile roles",
    location: "Cairo, Egypt",
    email: "mahmoooudnazmy103@gmail.com",
    phone: "01026036685",                                  // سايبه فاضي عشان الخصوصية، اكتبه لو عايز
    languages: "Arabic (Native) · English (B2)",
    avatar: "assets/profile.jpg",
    cv: "assets/CV.pdf",
    siteUrl: "https://mahmoudnazmy48.github.io/portfolio/",
    bio: [
      "I'm an engineer with a B.Sc. in Electrical Engineering (Computer Engineering) from the Military Technical College and an M.Sc. in Data Analysis from Cairo University.",
      "My work sits at the intersection of three areas: mobile development with Flutter, data analytics and business intelligence with SQL, Python and Power BI, and machine learning. I enjoy structured problem-solving and turning messy operational data into clear, useful decisions.",
      "I'm currently completing the Machine Learning track of the Digital Egypt Pioneers Initiative (DEPI) and building hands-on projects in classification, regression and customer analytics."
    ],
    socials: {
      github: "https://github.com/mahmoudnazmy48",
      linkedin: "https://www.linkedin.com/in/mahmoud-nazmy-a408b334a",
      x: "", medium: "", behance: ""
    }
  },

  /* أرقام حقيقية من خلفيتك. أضف "years of experience" لما تحددها */
  metrics: [
    { value: "M.Sc.", label: "Data Analysis · Cairo University" },
    { value: "B.Sc.", label: "Computer Engineering · Military Technical College" },
    { value: "DEPI", label: "Machine Learning Track (in progress)" }
  ],

  /* ✏️ أضف تواريخ كل وظيفة في period */
  experience: [
    {
      role: "Command Center Systems Engineer",
      org: "Egyptian Armed Forces",
      location: "Egypt",
      period: "",
      current: true,
      bullets: [
        "Worked in an engineering role on command center systems, applying structured troubleshooting to technical requirements and operational challenges.",
        "Applied an engineering mindset to analyze system issues and support reliable day-to-day operation."
      ],
      tags: ["Systems Engineering", "Troubleshooting", "Operations"]
    },
    {
      role: "Department Manager, Memberships & Subscriptions",
      org: "Dar Al Defaa Al Gawy",
      location: "Egypt",
      period: "",
      current: false,
      bullets: [
        "Managed membership and subscription operations, including administrative workflows, records and transactions.",
        "Supported service delivery and operational continuity, and contributed to improving administrative processes."
      ],
      tags: ["Operations", "Process Improvement", "Records Management"]
    },
    {
      role: "Department Manager, Food & Beverage Control",
      org: "Dar Al Defaa Al Gawy",
      location: "Egypt",
      period: "",
      current: false,
      bullets: [
        "Managed food and beverage control activities and the related operational workflows.",
        "Coordinated with other departments, monitored daily activity and supported adherence to procedures and service standards."
      ],
      tags: ["Operations Management", "Coordination", "Quality Control"]
    }
  ],

  /* ✏️ كل ما تكمل مشروع جديد أضفه هنا. ويفضل تضيف نتايج حقيقية في results */
  projects: [
    {
      title: "Interactive Digital Navigation App",
      badge: "Mobile",
      icon: "🧭",
      image: "",
      categories: ["Mobile"],
      summary: "A Flutter navigation app for a hospitality environment, driven by structured JSON map data.",
      tags: ["Flutter", "Dart", "JSON"],
      problem: "Guests in large hospitality venues often struggle to find buildings and facilities, which hurts the visitor experience.",
      solution: "Built an interactive navigation application in Flutter. Locations, buildings and the connections between them are modeled as JSON data, so the map can be updated without changing application code.",
      features: [
        "Data-driven map: locations, buildings and routes defined in JSON.",
        "Navigation connections modeled between points of interest.",
        "Cross-platform Flutter/Dart codebase."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    },
    {
      title: "Gate Access & Point-of-Sale Database",
      badge: "Data Engineering",
      icon: "🎟️",
      image: "",
      categories: ["Data"],
      summary: "A relational database design for gate operations, ticket sales, memberships and operational reporting.",
      tags: ["SQL Server", "SQL", "Database Design"],
      problem: "Gate access, ticketing and membership records need to stay consistent and reportable, otherwise operations and reporting break down.",
      solution: "Designed a relational schema covering gate operations, ticket sales and membership records. Defined relationships, constraints and business rules to enforce data integrity and support reporting.",
      features: [
        "Normalized tables for gates, tickets, members and sales.",
        "Constraints and business rules to protect data integrity.",
        "Structure that supports operational reporting queries."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    },
    {
      title: "Customer Segmentation & Churn Analysis",
      badge: "Analytics & BI",
      icon: "📊",
      image: "",
      categories: ["Data", "ML & AI"],
      summary: "Exploratory analysis, KPI reporting and Power BI dashboards for customer segmentation and churn.",
      tags: ["Python", "SQL", "Power BI", "DAX", "Excel"],
      problem: "",
      solution: "Cleaned and prepared data, ran exploratory analysis, and built visualizations and KPI reports to segment customers and understand churn.",
      features: [],
      results: "",
      github: "https://github.com/mahmoudnazmy48",
      live: ""
    }
  ],

  skills: [
    { title: "Mobile Development", items: ["Flutter", "Dart", "JSON", "Cross-platform apps"] },
    { title: "Data Analytics & BI", items: ["Power BI", "DAX", "Excel", "EDA", "Data Cleaning", "KPI Reporting", "Dashboards", "Statistical Analysis"] },
    { title: "Machine Learning & AI", items: ["Supervised Learning", "Regression", "Classification", "Feature Preparation", "Model Evaluation", "Deep Learning (learning)"] },
    { title: "Programming & Databases", items: ["Python", "SQL", "R", "Microsoft SQL Server", "Database Design"] }
  ],

  education: [
    { degree: "Master's Degree in Data Analysis", school: "Cairo University, Egypt", period: "", note: "", current: false },
    { degree: "B.Sc. Electrical Engineering (Computer Engineering)", school: "Military Technical College, Egypt", period: "", note: "", current: false }
  ],

  certifications: [
    { title: "Machine Learning Track (in progress)", issuer: "Digital Egypt Pioneers Initiative (DEPI)", date: "Ongoing", url: "" }
  ]
};
