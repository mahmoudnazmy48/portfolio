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
    { value: "9", label: "Hotel departments covered by the ERP project I managed" },
    { value: "3", label: "Live ML & analytics apps on Streamlit" },
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
    },
    {
      icon: "🏨",
      title: "Information Systems & ERP",
      text: "Managing how systems are planned, built and adopted across departments.",
      points: ["ERP implementation and project management", "Requirements analysis and database design", "User training"]
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
        "I keep our systems, data and digital workflows organized and reliable, which is the foundation any analysis or model depends on.",
        "I look for ways to improve how information is collected and reported, and I'm building my machine learning skills with these operational problems in mind.",
        "I managed the implementation of a complete ERP system for the hotel together with the vendor company: requirements analysis, database design, project management and user training across nine departments."
      ],
      tags: ["Information Systems", "ERP", "Data Management", "Reporting", "Machine Learning (learning)"]
    },
    {
      role: "Marketing Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2024 – 2025",
      current: false,
      bullets: [
        "I managed the marketing department and its daily work, and coordinated with the other departments.",
        "Campaigns produce a lot of customer and sales data, so I used it to see what worked and what didn't, and to guide the next decisions.",
        "Customer segmentation and churn analysis fit this work naturally, and I see a clear use for machine learning here, for example in predicting how customers respond."
      ],
      tags: ["Marketing", "Customer Data", "Segmentation", "Data-Informed Decisions"]
    },
    {
      role: "Subscriptions Department Manager",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2023 – 2024",
      current: false,
      bullets: [
        "I managed membership and subscription operations: the administrative workflow, member records and transactions.",
        "Since everything ran on member and transaction records, I worked with that data to follow subscription activity and support decisions.",
        "I also worked on making the administrative process smoother and the reporting clearer. Subscription data is a natural fit for churn analysis and for machine learning, for example predicting which members may not renew."
      ],
      tags: ["Subscription Data", "Churn Analysis", "Operational Reporting", "Process Improvement"]
    },
    {
      role: "Cost Control Department Manager, Food & Beverage",
      org: "Air Defence House (Egyptian Armed Forces)",
      location: "Egypt",
      period: "2021 – 2023",
      current: false,
      bullets: [
        "I managed the cost control department for food and beverage operations and the workflows around it.",
        "I followed cost and consumption figures closely and relied on the numbers to keep control and accountability.",
        "I coordinated with other departments and made sure procedures and service standards were followed. Cost and consumption data is exactly the kind that data analysis and forecasting models work well with."
      ],
      tags: ["Cost Analysis", "Food & Beverage", "Consumption Data", "KPI Monitoring"]
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
    { name: "Machine Learning" },
    { name: "Information Systems" },
    { name: "Applications" }
  ],

  /* ✏️ مشاريع Data و ML الأول، وبعدها مشاريع Tiba Rose. أضف لينك Repo للـ Churn والـ Gate DB لما ترفعهم */
  projects: [
    {
      title: "Ford GoBike Trip Analysis & Dashboard",
      badge: "Data Analysis · Live",
      icon: "🚲",
      image: "assets/fordbikeda.jpg",
      categories: ["Data Analysis & BI"],
      summary: "Exploratory analysis of Ford GoBike trip data with a reusable cleaning pipeline and an interactive dashboard.",
      tags: ["Python", "Pandas", "Plotly", "Dash", "Streamlit", "EDA"],
      problem: "Raw bike-share trip records need cleaning and structure before they can answer questions about users, stations and trip behavior.",
      solution: "Started from an exploratory notebook and separated the reusable logic into a Python pipeline for loading, cleaning and validation, plus feature engineering for rider age and trip duration. On top of it I built an interactive dashboard and deployed it on Streamlit Cloud.",
      featuresTitle: "Key features",
      features: [
        "Modular pipeline: data loading, preprocessing, feature engineering and analysis functions.",
        "Interactive dashboard with Plotly charts and filtering.",
        "Sections: overview KPIs, time analysis, user analysis, station and trip analysis, and relationships between variables.",
        "Documented a source-data limitation (time fields stored as MM:SS.f) and avoided inventing date-based features."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/fordgobike-data_anaylsis-and-Dashboard",
      live: "https://fordgobike-dataanaylsis-and-dashboard-dd9xzlfkdzrwu9ng9k9ujd.streamlit.app/"
    },
    {
      title: "Wholesale Customer Segmentation & Decision Engine",
      badge: "Machine Learning · Live",
      icon: "📦",
      image: "assets/wholesale-customer-segmentation.jpg",
      categories: ["Machine Learning"],
      summary: "Unsupervised customer segmentation (PCA and K-Means) followed by a Random Forest classifier, deployed as an interactive Streamlit app.",
      tags: ["Python", "scikit-learn", "PCA", "K-Means", "Random Forest", "Streamlit"],
      problem: "A wholesale distributor has annual spending data across six product categories but no labels for customer types, and needs to decide how delivery schedules should differ between them.",
      solution: "Log-transformed the skewed spending data, handled outliers with Tukey's fence, reduced dimensions with PCA and clustered customers with K-Means, choosing the number of clusters with silhouette analysis. The clusters became labels for a Random Forest classifier that assigns new customers instantly, and the whole workflow is served through a Streamlit app.",
      featuresTitle: "Key features",
      features: [
        "Two segments found: retailers and supermarkets versus hospitality and food service.",
        "Segment-specific delivery recommendations: 3 days per week for retail, 5 days for fresh-focused hospitality clients.",
        "A/B test design stratified by segment instead of randomized across all customers.",
        "Saved model bundle for instant classification of new customers."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/wholesale-customer-segmentation",
      live: "https://wholesale-customer-segmentation-rkdethyxdj7jkzhtygbpgo.streamlit.app/"
    },
    {
      title: "CharityML: Donor Classification App",
      badge: "Machine Learning · Live",
      icon: "🤝",
      image: "assets/charityml.jpg",
      categories: ["Machine Learning"],
      summary: "A supervised classification model (tuned AdaBoost) with a saved preprocessing pipeline, deployed as a Streamlit app.",
      tags: ["Python", "scikit-learn", "AdaBoost", "Classification", "Streamlit"],
      problem: "A charity wants to target outreach at the people most likely to donate, rather than contacting everyone.",
      solution: "Trained and tuned an AdaBoost classifier, saved the scaler, feature columns and best model, and wrapped them in a Streamlit app so predictions can be made from a simple interface.",
      featuresTitle: "Key features",
      features: [
        "AdaBoost classifier with hyperparameter tuning.",
        "Saved scaler and model columns to keep training and prediction consistent.",
        "Deployed on Streamlit Cloud as a live demo."
      ],
      results: "",
      github: "https://github.com/mahmoudnazmy48/CharityML",
      live: "https://charityml-hdo92mma8hcmzkj8ljysjm.streamlit.app/"
    },
    {
      title: "Hotel ERP Implementation: Air Defence House",
      badge: "Project Management",
      icon: "🏨",
      image: "",
      categories: ["Information Systems"],
      summary: "I managed the implementation of a complete ERP system for the hotel, working with the vendor company across nine departments.",
      tags: ["ERP", "Requirements Analysis", "Database Design", "Project Management", "User Training"],
      problem: "",
      solution: "The system was built for the hotel by an external company. I managed the project on the hotel's side: I analyzed the requirements of each department, designed the database, managed the project and trained the users.",
      featuresTitle: "My role",
      features: [
        "Requirements analysis with each department.",
        "Database design for the system.",
        "Project management, coordinating the hotel and the vendor company.",
        "Training the users.",
        "Departments covered: Housing, Reception, Food & Beverage, HR, Subscriptions, Finance, Warehouses, Events and Marketing."
      ],
      results: "",
      github: "",
      live: ""
    },
    
    {
      title: "Tiba Rose Customer Feedback",
      badge: "Flutter Web · Live",
      icon: "💬",
      image: "assets/marketing.jpg",
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
      image: "assets/navigationmap.jpg",
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
      image: "assets/tibaapp.jpg",
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
    
  ],

  skills: [
    { title: "Data Analysis & BI", items: ["Power BI", "DAX", "Excel", "Data Cleaning", "Exploratory Data Analysis", "Data Visualization", "KPI Reporting", "Statistical Analysis", "Customer Segmentation", "Churn Analysis"] },
    { title: "Machine Learning & AI", items: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Clustering (K-Means)", "PCA", "Random Forest", "AdaBoost", "Feature Engineering", "Model Evaluation", "Deep Learning Fundamentals"] },
    { title: "Programming, Databases & Tools", items: ["Python", "SQL", "R", "Pandas", "NumPy", "scikit-learn", "Plotly", "Streamlit", "Microsoft SQL Server", "Relational Database Design", "Git", "GitHub"] },
    { title: "Systems & Project Management", items: ["ERP Implementation", "Requirements Analysis", "Project Management", "User Training", "Cost Control", "Stakeholder Coordination"] },
    { title: "Application Development", items: ["Flutter", "Flutter Web", "Dart", "JSON"] }
  ],

  /* ✏️ certificate = مسار صورة الشهادة. الزرار بيظهر لوحده أول ما الصورة تبقى موجودة في الفولدر */
  education: [
    {
      degree: "Master's Degree in Data Analysis",
      school: "Cairo University, Egypt",
      period: "2024 – 2026",
      note: "",
      current: false,
      certificate: "assets/certificates/masters-degree.jpg"
    },
    {
      degree: "Bachelor's Degree in Electrical Engineering (Computer Engineering)",
      school: "Military Technical College, Egypt",
      period: "2006 – 2011",
      note: "",
      current: false,
      certificate: "assets/certificates/bachelors-degree.jpg"
    }
  ],

  certifications: [
    {
      title: "Machine Learning Track (In Progress)",
      issuer: "Digital Egypt Pioneers Initiative (DEPI)",
      note: "",
      date: "Ongoing",
      certificate: "assets/certificates/depi-certificate.jpg",
      url: ""
    },
    {
      title: "Protocol and Ceremonies Course",
      issuer: "Military College of Management Sciences (MCMS), Egyptian Armed Forces",
      note: "Course No. 8",
      date: "20 Nov – 1 Dec 2024",
      certificate: "assets/certificates/protocol-ceremonies-2024.jpg",
      url: ""
    },
    {
      title: "Administrative Leadership Qualification Course",
      issuer: "Military College of Management Sciences (MCMS), Egyptian Armed Forces",
      note: "Course No. 5",
      date: "15 Jul – 19 Aug 2023",
      certificate: "assets/certificates/leadership-2023.jpg",
      url: ""
    },
    {
      title: "Total Quality Management (TQM) Course",
      issuer: "Military College of Management Sciences (MCMS), Egyptian Armed Forces",
      note: "Course No. 1",
      date: "4 – 21 Jun 2023",
      certificate: "assets/certificates/tqm-2023.jpg",
      url: ""
    }
  ]
};
