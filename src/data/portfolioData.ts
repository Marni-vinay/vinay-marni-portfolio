import { Project, SkillItem, Certification, ExperienceItem, CloudArchitectureNode } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "MARNI VEERA VENKATA VINAY",
  preferredName: "Vinay Marni",
  headline: "Cloud Computing Engineer | AWS | Cloud Architecture & Software Engineering",
  subHeadline: "B.Tech Cloud Computing Engineering Student at Lovely Professional University",
  bio: "Aspiring Cloud Computing Engineer with hands-on expertise in architecting resilient AWS multi-tier environments, developing robust backend APIs, and automating scalable microservices. Passionate about Cloud Architecture, Infrastructure as Code, High Availability, and modern Software Engineering.",
  university: "Lovely Professional University (LPU)",
  degree: "B.Tech in Computer Science & Engineering (Cloud Computing)",
  graduationYear: "2027",
  cgpa: "6.98",
  location: "Punjab / Andhra Pradesh, India",
  email: "marnivinaye@gmail.com",
  phone: "+91 9849370611",
  rawPhone: "9849370611",
  githubUrl: "https://github.com/Marni-vinay",
  linkedinUrl: "https://www.linkedin.com/in/vinay-marni",
  avatarUrl: "/assets/aistudio/image_30fd4ba0.png",
  status: "Actively seeking Cloud / DevOps Internships & Graduate Opportunities (2027)",
  specializations: [
    "AWS Multi-Tier Architecture",
    "Cloud Computing & Virtualization",
    "Infrastructure as Code (CloudFormation)",
    "Backend & Database Systems (SQL & NoSQL)"
  ]
};

export const SKILLS_DATA: SkillItem[] = [
  {
    name: "AWS",
    category: "Cloud",
    level: "Advanced",
    proficiencyPercent: 92,
    description: "Hands-on cloud architecture across VPC, EC2, ALB, Auto Scaling, RDS, S3, IAM, CloudFormation, and CloudWatch.",
    iconKey: "aws",
    tags: ["EC2", "ALB", "Auto Scaling", "VPC", "RDS", "IAM", "CloudFormation", "CloudWatch", "S3"]
  },
  {
    name: "MS Azure",
    category: "Cloud",
    level: "Proficient",
    proficiencyPercent: 82,
    description: "Multi-cloud provisioning, Azure Virtual Machines, Blob Storage, Virtual Networks, Resource Groups, and Entra ID.",
    iconKey: "azure",
    tags: ["Azure VMs", "Blob Storage", "Virtual Networks", "Resource Groups", "Entra ID"]
  },
  {
    name: "Python",
    category: "Programming",
    level: "Advanced",
    proficiencyPercent: 88,
    description: "Backend REST APIs with FastAPI, Boto3 AWS automation scripts, financial data analytics, and cloud orchestration.",
    iconKey: "python",
    tags: ["FastAPI", "Boto3", "Automation", "RESTful APIs", "OOP"]
  },
  {
    name: "Docker",
    category: "DevOps & Tools",
    level: "Proficient",
    proficiencyPercent: 85,
    description: "Containerizing microservices, multi-stage image optimization, Docker Compose environments, and deployment pipelines.",
    iconKey: "docker",
    tags: ["Containerization", "Docker Compose", "Multi-Stage Builds", "Microservices"]
  },
  {
    name: "PL/SQL",
    category: "Database",
    level: "Advanced",
    proficiencyPercent: 90,
    description: "Stored procedures, triggers, packages, cursors, automated business logic, and transaction management in Oracle DBMS.",
    iconKey: "plsql",
    tags: ["Stored Procedures", "Triggers", "Packages", "Cursors", "Exception Handling"]
  },
  {
    name: "MySQL",
    category: "Database",
    level: "Advanced",
    proficiencyPercent: 88,
    description: "Relational database schema design, indexing, complex JOIN queries, ACID compliance, and performance tuning.",
    iconKey: "mysql",
    tags: ["Relational Design", "Complex Joins", "Indexes", "Query Optimization", "ACID"]
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Proficient",
    proficiencyPercent: 84,
    description: "NoSQL document modeling, indexing, aggregation pipelines, MongoDB Atlas cloud clusters, and Mongoose ORM.",
    iconKey: "mongodb",
    tags: ["Document DB", "Aggregation Pipelines", "Atlas Cloud", "Schema Validation"]
  },
  {
    name: "Git / GitHub",
    category: "DevOps & Tools",
    level: "Advanced",
    proficiencyPercent: 90,
    description: "Distributed version control, collaborative GitFlow, automated GitHub Actions CI/CD workflows, pull request reviews.",
    iconKey: "git",
    tags: ["Version Control", "GitHub Actions", "CI/CD", "Branching Strategies", "Collaboration"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "stock-market-dashboard",
    title: "Stock Market Dashboard",
    category: "Full-Stack",
    badge: "Capstone Major Project",
    description: "A production-grade, interactive financial dashboard delivering real-time stock analytics, dynamic technical indicators, and secured investor portfolio tracking.",
    highlights: [
      "Engineered real-time stock streaming pipelines utilizing Alpha Vantage and Finnhub APIs",
      "Implemented secure JWT user authentication with role-based session authorization",
      "Built resilient RESTful microservices with Node.js, Express.js, and MongoDB for high concurrency",
      "Designed an ultra-responsive UI with React and Tailwind CSS featuring interactive financial charts"
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Alpha Vantage", "Finnhub"],
    githubUrl: "https://github.com/Marni-vinay/MAJOR-PROJECT-CAPSTONE-",
    architecture: "Client (React + Tailwind) → JWT Middleware → Express API Gateway → Alpha Vantage/Finnhub → MongoDB Atlas"
  },
  {
    id: "finosage-api",
    title: "FinoSage API",
    category: "Cloud & API",
    badge: "Cloud AI Architecture",
    description: "An advanced, high-throughput financial intelligence API combining multi-source market data ingestion with AI-driven predictive insights and Supabase/Firebase backend pipelines.",
    highlights: [
      "Developed modular asynchronous REST endpoints using Python FastAPI for millisecond latency",
      "Integrated Claude AI to synthesize earnings call summaries, sentiment indicators, and market briefings",
      "Architected dual persistence layer with PostgreSQL on Supabase and real-time triggers via Firebase",
      "Integrated multi-provider financial data feeds from Alpha Vantage and Finnhub with caching mechanisms"
    ],
    techStack: ["FastAPI", "Python", "PostgreSQL", "Supabase", "Firebase", "Claude AI", "Alpha Vantage", "Finnhub"],
    architecture: "FastAPI Async Engine → Claude AI Synthesis → Supabase PostgreSQL + Firebase Realtime DB"
  },
  {
    id: "placement-tracker",
    title: "Placement / Internship Tracker",
    category: "Frontend",
    badge: "Recruitment Tracker",
    description: "A dedicated recruitment and internship lifecycle tracking system built for engineering students to monitor application stages, deadlines, and offer pipelines.",
    highlights: [
      "Created an intuitive Kanban and tabular dashboard for tracking applications across Applied, Interview, and Offer stages",
      "Implemented seamless zero-latency client storage using localStorage with backup JSON export/import",
      "Developed interview schedule countdowns, salary metrics, and company-specific note boards",
      "Engineered with clean vanilla JavaScript, responsive CSS, and semantic HTML for zero bloat"
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    githubUrl: "https://github.com/Marni-vinay/Placement-Tracker",
    architecture: "Responsive UI → State Manager → Browser localStorage Engine"
  },
  {
    id: "academic-management-system",
    title: "Academic Management System",
    category: "Database",
    badge: "Enterprise PL/SQL",
    description: "An enterprise-grade relational database management system managing student lifecycle records, faculty allocation, grading, and automated course enrollment procedures.",
    highlights: [
      "Authored custom Oracle PL/SQL packages, stored procedures, and triggers for automated grade calculations",
      "Enforced strict ACID transaction controls, relational foreign key constraints, and index optimizations",
      "Implemented automated student fee clearance triggers and prerequisite validation before registration",
      "Created administrative audit logs for auditing faculty course allocation and grading history"
    ],
    techStack: ["Oracle PL/SQL", "SQL", "DBMS", "Oracle Database"],
    githubUrl: "https://github.com/Marni-vinay/Project-is-Academic-Management-System-using-PL-SQL",
    architecture: "Oracle DB Engine ↔ PL/SQL Packages & Triggers ↔ Relational Schemas & Indexes"
  }
];

export const CLOUD_NODES: CloudArchitectureNode[] = [
  {
    id: "internet",
    title: "Public Internet & Users",
    awsService: "Route 53 & IGW",
    category: "public",
    cidrOrConfig: "0.0.0.0/0 via Internet Gateway",
    description: "Global internet traffic entering the architecture via AWS Internet Gateway (IGW) attached to the Custom VPC.",
    keyResponsibilities: [
      "Provides bidirectional communication for public-facing assets",
      "Translates public IP addresses to VPC private routing tables",
      "Enforces edge DDoS filtering with AWS Shield standard"
    ],
    metricsMonitored: ["BytesIn", "BytesOut", "NetworkPacketsIn"],
    iconName: "Globe"
  },
  {
    id: "alb",
    title: "Application Load Balancer (ALB)",
    awsService: "Elastic Load Balancing (ALB)",
    category: "public",
    cidrOrConfig: "Dual Public Subnets (AZ-a, AZ-b) : 10.0.1.0/24 & 10.0.2.0/24",
    description: "Layer 7 load balancer distributing incoming web traffic evenly across healthy EC2 targets across multiple Availability Zones.",
    keyResponsibilities: [
      "Terminates SSL/TLS certificates via AWS Certificate Manager",
      "Performs HTTP/HTTPS health checks on EC2 target groups",
      "Enforces path-based routing (/api/* to backend services)"
    ],
    metricsMonitored: ["TargetResponseTime", "RequestCount", "HTTPCode_Target_5XX_Count", "ActiveConnectionCount"],
    iconName: "Network"
  },
  {
    id: "asg",
    title: "Auto Scaling Group (ASG)",
    awsService: "EC2 Auto Scaling",
    category: "private-app",
    cidrOrConfig: "Min: 2, Desired: 2, Max: 6 instances across Private Subnets",
    description: "Dynamically maintains application availability by scaling EC2 capacity up or down based on incoming CPU and memory demand.",
    keyResponsibilities: [
      "Automatically replaces unhealthy EC2 instances",
      "Target tracking policy based on 65% average CPU utilization",
      "Distributes instances evenly across multi-AZ private subnets"
    ],
    metricsMonitored: ["GroupInServiceInstances", "GroupTerminatingInstances", "CPUUtilization"],
    iconName: "Cpu"
  },
  {
    id: "ec2",
    title: "EC2 App Instances",
    awsService: "Amazon EC2 (t3.medium / t4g)",
    category: "private-app",
    cidrOrConfig: "Private Subnets (10.0.10.0/24 & 10.0.20.0/24)",
    description: "Secure application compute nodes running containerized workloads, backend APIs, and microservices with zero public IP exposure.",
    keyResponsibilities: [
      "Accepts traffic exclusively from the ALB security group (Port 80/443)",
      "Accesses AWS services via IAM Role without hardcoded credentials",
      "Communicates securely with Amazon RDS in private DB subnets"
    ],
    metricsMonitored: ["CPUUtilization", "DiskReadOps", "DiskWriteOps", "StatusCheckFailed"],
    iconName: "Server"
  },
  {
    id: "rds",
    title: "Amazon RDS (Multi-AZ)",
    awsService: "Amazon Relational Database Service (MySQL/PostgreSQL)",
    category: "private-db",
    cidrOrConfig: "Isolated DB Subnet Group (10.0.100.0/24 & 10.0.200.0/24)",
    description: "Fully managed relational database configured with automated Multi-AZ synchronous standby replication for disaster recovery.",
    keyResponsibilities: [
      "Synchronous replication to secondary standby in separate AZ",
      "Automated daily snapshots and point-in-time recovery",
      "Restricted ingress strictly to EC2 Security Group on Port 3306/5432"
    ],
    metricsMonitored: ["CPUUtilization", "FreeStorageSpace", "DatabaseConnections", "ReadLatency", "WriteLatency"],
    iconName: "Database"
  },
  {
    id: "vpc",
    title: "Amazon VPC & Subnets",
    awsService: "Amazon VPC (10.0.0.0/16)",
    category: "management",
    cidrOrConfig: "IPv4 CIDR: 10.0.0.0/16 across 2 Availability Zones",
    description: "Logically isolated software-defined virtual network providing full control over IP addressing, subnets, route tables, and network gateways.",
    keyResponsibilities: [
      "Strict separation of Public Web, Private Application, and Isolated Database Subnets",
      "NAT Gateways enabling private subnets outbound egress for patching",
      "Network Access Control Lists (NACLs) as secondary stateless subnet firewalls"
    ],
    metricsMonitored: ["VPC Flow Logs", "RejectedPackets", "AcceptedPackets"],
    iconName: "Shield"
  },
  {
    id: "iam",
    title: "AWS Identity and Access Management",
    awsService: "AWS IAM",
    category: "management",
    cidrOrConfig: "Least-Privilege Roles & Temporary STS Credentials",
    description: "Fine-grained security framework assigning instance profiles and permissions without credential exposure.",
    keyResponsibilities: [
      "Instance profiles granting EC2 secure access to S3 buckets and CloudWatch Logs",
      "Strict role-based access control (RBAC) preventing unauthorized privilege escalation",
      "Enforces MFA and audited API access via CloudTrail"
    ],
    metricsMonitored: ["IAM Access Analyzer", "CredentialReport", "PolicyActivity"],
    iconName: "Key"
  },
  {
    id: "cloudwatch",
    title: "Amazon CloudWatch",
    awsService: "CloudWatch Metrics, Alarms & Logs",
    category: "management",
    cidrOrConfig: "Real-time Metrics (1-min resolution) + Alarm Triggers",
    description: "Observability and monitoring service collecting performance metrics, centralized application logs, and triggering auto-scaling actions.",
    keyResponsibilities: [
      "Triggers Auto Scaling policies when CPU exceeds threshold",
      "Sends SNS incident alerts to the engineering team",
      "Aggregates system and application access logs into structured Log Groups"
    ],
    metricsMonitored: ["AlarmStates", "LogEventsPerSec", "CompositeAlarms"],
    iconName: "Activity"
  },
  {
    id: "cloudformation",
    title: "AWS CloudFormation (IaC)",
    awsService: "Infrastructure as Code",
    category: "management",
    cidrOrConfig: "Declarative YAML / JSON Stack Templates",
    description: "Automates repeatable, version-controlled provisioning of the complete VPC, subnets, ALB, ASG, and RDS architecture.",
    keyResponsibilities: [
      "Enables zero-touch infrastructure provisioning and rollback safety",
      "Defines modular parameters, outputs, and security groups",
      "Integrates with CI/CD Git pipelines for automated infrastructure releases"
    ],
    metricsMonitored: ["StackStatus", "ResourceDrift", "ChangeSetSuccessRate"],
    iconName: "Layers"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "NYERAS EDU-TECH AND INNOVATIONS PRIVATE LIMITED",
    role: "Sr Academic Counsellor",
    period: "Aug 2026 – Jan 2027",
    type: "Internship",
    location: "Hybrid / India",
    description: [
      "Conducted technical counseling and career mentoring for aspiring engineering and tech students, guiding them through modern software engineering, cloud computing, and DevOps career roadmaps.",
      "Analyzed academic profiles, learning trajectories, and industry requirements to recommend tailored technical specializations (Cloud, AI, Data Systems).",
      "Collaborated with educational operations and marketing teams to streamline student onboarding workflows and performance tracking.",
      "Delivered technical seminar presentations highlighting AWS cloud certifications, industry capstone projects, and competitive engineering preparation."
    ],
    skillsApplied: ["Technical Mentorship", "Career Counseling", "Cloud Roadmaps", "Data Tracking", "Communication", "Team Leadership"]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: "gemini-google-ai",
    title: "Gemini Certified Student (Generative AI)",
    issuer: "Google for Education",
    issueDate: "Nov 2026 – Valid through Nov 2029",
    documentUrl: "/assets/aistudio/gemini_certificate_fa6067a4.pdf",
    previewImageUrl: "/assets/aistudio/gemini_certificate_preview.png",
    skillsAcquired: ["Google AI & Gemini", "Generative AI Foundations", "LLM Prompting", "Responsible AI"],
    badgeColor: "sky"
  },
  {
    id: "angular-web-dev",
    title: "Angular Web Developer Certification",
    issuer: "Infosys Springboard",
    issueDate: "December 16, 2025",
    documentUrl: "/assets/aistudio/Angular_Web_Developer_Certification_24081b32.pdf",
    previewImageUrl: "/assets/aistudio/angular_certificate_preview.png",
    verificationUrl: "https://verify.onwingspan.com",
    skillsAcquired: ["Angular", "TypeScript", "SPA Architecture", "Components & Routing", "RxJS"],
    badgeColor: "rose"
  },
  {
    id: "lpu-plsql-bootcamp",
    title: "CodeQuery: The Ultimate PL/SQL & Data Science Bootcamp",
    issuer: "Centre for Professional Enhancement, LPU",
    issueDate: "June – July 2025 (Issued: Aug 13, 2025)",
    gradeOrScore: "Grade 'A' • Cert No. 409492",
    documentUrl: "/assets/aistudio/SQL_ed570987.pdf",
    previewImageUrl: "/assets/aistudio/sql_certificate_preview.png",
    skillsAcquired: ["Oracle PL/SQL", "Stored Procedures", "Triggers & Cursors", "Relational DBMS", "Data Modeling"],
    badgeColor: "blue"
  },
  {
    id: "infosys-js",
    title: "JavaScript Course Completion Certificate",
    issuer: "Infosys Springboard",
    issueDate: "December 12, 2025",
    documentUrl: "/assets/aistudio/javascript_a1b55a98.pdf",
    previewImageUrl: "/assets/aistudio/javascript_certificate_preview.png",
    verificationUrl: "https://verify.onwingspan.com",
    skillsAcquired: ["Modern JavaScript (ES6+)", "Asynchronous Programming", "DOM APIs", "Event-Driven Architecture"],
    badgeColor: "amber"
  },
  {
    id: "fcc-responsive-web",
    title: "Responsive Web Design Certification",
    issuer: "freeCodeCamp",
    issueDate: "Verified Lifetime",
    credentialUrl: "https://www.freecodecamp.org/certification/fcc1acd1828-9279-4f0e-8cb0-c26d33eeabfa/responsive-web-design",
    skillsAcquired: ["HTML5", "CSS3", "Responsive Grid & Flexbox", "Web Accessibility", "Mobile First Design"],
    badgeColor: "indigo"
  }
];

