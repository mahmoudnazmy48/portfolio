/* ==========================================================================
   Mahmoud Nazmy — Portfolio Data
   Edit this file to update the content displayed on your portfolio.
   ========================================================================== */

window.PORTFOLIO = {

  /* ---------- 1) Personal Information ---------- */
  site: {
    name: "Mahmoud Nazmy",

    role: "Data Analyst | Business Intelligence | Machine Learning & AI",

    tagline: "Engineering professional with a background in data analytics and business intelligence, currently developing machine learning and AI solutions through practical projects.",

    availability: "Open to Data Analytics, BI & Machine Learning opportunities",

    location: "Cairo, Egypt",

    email: "mahmoooudnazmy103@gmail.com",

    phone: "+201026036685",

    languages: "Arabic (Native) · English (B2)",

    avatar: "assets/profile.jpg",

    cv: "assets/CV.pdf",

    siteUrl: "https://mahmoudnazmy48.github.io/portfolio/",

    bio: [
      "I'm an engineering professional and Egyptian Armed Forces officer with a Bachelor's degree in Electrical Engineering (Computer Engineering specialization) from the Military Technical College and a Master's degree in Data Analysis from Cairo University.",

      "My background combines engineering systems and operational management with data analytics and business intelligence. I enjoy structured problem-solving and using data to understand operational challenges and support better decisions.",

      "I'm currently studying the Machine Learning track through the Digital Egypt Pioneers Initiative (DEPI) and building practical projects to strengthen my skills in data analysis, machine learning, and AI."
    ],

    socials: {
      github: "https://github.com/mahmoudnazmy48",
      linkedin: "https://www.linkedin.com/in/mahmoud-nazmy-a408b334a/",
      x: "",
      medium: "",
      behance: ""
    }
  },


  /* ---------- 2) Profile Highlights ---------- */
  metrics: [
    {
      value: "M.Sc.",
      label: "Data Analysis · Cairo University"
    },
    {
      value: "B.Sc.",
      label: "Electrical Engineering · Military Technical College"
    },
    {
      value: "DEPI",
      label: "Machine Learning Track · In Progress"
    }
  ],


  /* ---------- 3) Professional Experience ---------- */
  /* Add your actual employment dates in "period". */

  experience: [

    {
      role: "Lieutenant Colonel Engineer",
      org: "Egyptian Armed Forces",
      location: "Egypt",
      period: "",
      current: true,

      bullets: [
        "Engineering background in command center systems, with experience addressing technical requirements and operational challenges.",

        "Applied structured troubleshooting and engineering problem-solving in a systems-oriented environment."
      ],

      tags: [
        "Systems Engineering",
        "Technical Problem-Solving",
        "Operations"
      ]
    },

    {
      role: "Department Manager, Memberships & Subscriptions",
      org: "Dar Al Defaa Al Gawy",
      location: "Egypt",
      period: "",
      current: false,

      bullets: [
        "Managed membership and subscription operations, including administrative workflows, records, and transactions.",

        "Coordinated day-to-day processes to support service delivery and operational continuity.",

        "Contributed to improving administrative procedures and information management."
      ],

      tags: [
        "Operations Management",
        "Process Improvement",
        "Records Management"
      ]
    },

    {
      role: "Department Manager, Food & Beverage Control",
      org: "Dar Al Defaa Al Gawy",
      location: "Egypt",
      period: "",
      current: false,

      bullets: [
        "Managed food and beverage control activities and related operational workflows.",

        "Coordinated with relevant departments, monitored daily activities, and supported adherence to procedures and service standards."
      ],

      tags: [
        "Operations",
        "Coordination",
        "Quality Control"
      ]
    }

  ],


  /* ---------- 4) Selected Technical Projects ---------- */
  /* Replace GitHub links with specific repository URLs when available. */

  projects: [

    {
      title: "Interactive Digital Navigation App",

      badge: "Application Development",

      icon: "🧭",

      image: "",

      categories: ["Mobile", "Web"],

      summary: "A Flutter navigation application for a hospitality environment, using structured map data.",

      tags: [
        "Flutter",
        "Dart",
        "JSON"
      ],

      problem: "Visitors in large venues may need help locating buildings and facilities.",

      solution: "Developed an interactive navigation application in Flutter, with locations, buildings, and navigation connections organized as structured JSON data.",

      features: [
        "Map locations and buildings represented through structured data.",
        "Navigation connections modeled between points of interest.",
        "Flutter and Dart application development."
      ],

      results: "",

      github: "https://github.com/mahmoudnazmy48",

      live: "https://mahmoudnazmy48.github.io/portfolio/"
    },


    {
      title: "Gate Access & Point-of-Sale Database",

      badge: "Database Design",

      icon: "🎟️",

      image: "",

      categories: ["Data", "Databases"],

      summary: "A relational database design for gate operations, ticket sales, memberships, and operational reporting.",

      tags: [
        "SQL Server",
        "SQL",
        "Relational Database Design"
      ],

      problem: "Gate, ticketing, and membership information needs consistent structure to support reliable operations and reporting.",

      solution: "Designed a relational schema and business rules for gate operations, ticket sales, and membership records, with a focus on data integrity and reporting needs.",

      features: [
        "Relational tables and defined relationships.",
        "Constraints and business rules for data integrity.",
        "A database structure intended to support operational reporting."
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

      categories: ["Data", "Machine Learning"],

      summary: "A data analytics use case involving exploratory analysis, customer segmentation, and churn-related insights.",

      tags: [
        "Python",
        "SQL",
        "Power BI",
        "DAX",
        "Excel"
      ],

      problem: "",

      solution: "Worked on data preparation, exploratory analysis, visualizations, and KPI reporting to explore customer segments and churn patterns.",

      features: [],

      results: "",

      github: "https://github.com/mahmoudnazmy48",

      live: ""
    }

  ],


  /* ---------- 5) Technical Skills ---------- */

  skills: [

    {
      title: "Data Analytics & Business Intelligence",

      items: [
        "Python",
        "SQL",
        "Power BI",
        "DAX",
        "Excel",
        "Data Cleaning",
        "Exploratory Data Analysis",
        "Data Visualization",
        "KPI Reporting"
      ]
    },

    {
      title: "Machine Learning & AI",

      items: [
        "Supervised Learning",
        "Regression",
        "Classification",
        "Feature Preparation",
        "Model Evaluation",
        "Deep Learning Fundamentals"
      ]
    },

    {
      title: "Programming & Databases",

      items: [
        "Python",
        "R",
        "SQL",
        "Microsoft SQL Server",
        "Relational Database Design"
      ]
    },

    {
      title: "Application Development",

      items: [
        "Flutter",
        "Dart",
        "JSON",
        "Git",
        "GitHub"
      ]
    }

  ],


  /* ---------- 6) Education ---------- */

  education: [

    {
      degree: "Master's Degree in Data Analysis",

      school: "Cairo University, Egypt",

      period: "",

      note: "",

      current: false
    },

    {
      degree: "Bachelor's Degree in Electrical Engineering (Computer Engineering Specialization)",

      school: "Military Technical College, Egypt",

      period: "",

      note: "",

      current: false
    }

  ],


  /* ---------- 7) Professional Development ---------- */

  certifications: [

    {
      title: "Machine Learning Track (In Progress)",

      issuer: "Digital Egypt Pioneers Initiative (DEPI)",

      date: "Ongoing",

      url: ""
    }

  ]

};