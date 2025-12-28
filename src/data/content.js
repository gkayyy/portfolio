export const DATA = {
  about: "I’m a backend developer with hands-on experience building scalable, production-ready systems, primarily in cybersecurity and SIEM platforms. I enjoy working close to the system level—designing APIs, processing large volumes of data, and deploying containerized applications in Linux environments.",
  
  expertise: [
    { 
      title: "Backend API Development", 
      tags: ["Django", "Node.js", "REST", "PostgreSQL"], 
      desc: "Designing and maintaining secure, scalable RESTful APIs for enterprise-grade applications with a focus on clean architecture." 
    },
    { 
      title: "Data Processing & Search", 
      tags: ["Elasticsearch", "Logstash", "Kibana", "SIEM"], 
      desc: "Building ingestion pipelines for indexing, querying, and real-time security log analytics." 
    },
    { 
      title: "Containerization", 
      tags: ["Docker", "Linux", "VMware", "Git"], 
      desc: "Dockerizing backend services to ensure consistent deployments across environments and improve system scalability." 
    },
    { 
      title: "Automation & Tasking", 
      tags: ["Celery", "Redis", "Python", "RabbitMQ"], 
      desc: "Implementing background tasks and schedulers to handle time-based and heavy workloads efficiently." 
    }
  ],
  
  experience: [
    {
      company: "ThreatCure",
      role: "Backend Developer",
      period: "Feb 2025 – Jan 2026",
      points: [
        "Contributed to an enterprise SIEM platform used by banking and financial institutions.",
        "Designed data parsing and processing pipelines for structured/unstructured security logs.",
        "Managed Elasticsearch pipelines and index retention policies for performance optimization.",
        "Collaborated with frontend teams through well-documented REST APIs.",
        "Mentored junior developers and improved workflow efficiency."
      ]
    },
    {
      company: "ThreatCure",
      role: "Backend Developer Intern",
      period: "Oct 2024 – Jan 2025",
      points: [
        "Developed RESTful APIs using Django for seamless frontend-backend communication.",
        "Worked with MITRE ATT&CK and STIX to correlate and map cyberattack chains.",
        "Optimized database queries and data models for improved system performance.",
        "Explored Celery-based background task automation."
      ]
    }
  ],

  education: {
    degree: "BS in Software Engineering",
    school: "Umaer Basha Institute of Technology (UBIT), University of Karachi",
    years: "2022 – 2025"
  }
};