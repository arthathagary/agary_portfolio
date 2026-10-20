export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "resume"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  shortcut: string;
  description: string;
}

export interface TechnologyRationale {
  name: string;
  purpose: string;
}

export interface ChallengeSolution {
  challenge: string;
  solution: string;
}

export interface MetricOutcome {
  value: string;
  label: string;
  detail: string;
}

export interface ProjectCaseStudy {
  id: string;
  name: string;
  tagline: string;
  category: string;
  organization: string;
  featured: boolean;
  liveUrl?: string;
  liveLabel?: string;
  oneSentenceSummary: string;
  myContribution: string;
  role: string;
  technologies: string[];
  technologyRationale: TechnologyRationale[];
  overview: string;
  problemNeed: string;
  technicalApproach: string[];
  challenges: ChallengeSolution[];
  impactMetrics: MetricOutcome[];
  visualArchetype:
    | "appmaker-builder"
    | "otenro-ai"
    | "telegram-automation"
    | "spark-generator"
    | "cordova-cli";
}

export interface RoleProgression {
  title: string;
  period: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  title: string;
  period: string;
  progression?: RoleProgression[];
  employmentType: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillItem {
  name: string;
  context: string;
  usageLevel: "Production Core" | "Production Integration" | "Engineering Workflow";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  summary: string;
  coursework: string[];
  capstone: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    shortcut: "1",
    description: "Overview, core strengths, and featured engineering work",
  },
  {
    id: "about",
    label: "About",
    shortcut: "2",
    description: "Engineering focus, education, and verified achievements",
  },
  {
    id: "projects",
    label: "Projects",
    shortcut: "3",
    description: "Detailed case studies of SaaS platforms and open-source work",
  },
  {
    id: "experience",
    label: "Experience",
    shortcut: "4",
    description: "Chronological software engineering career timeline",
  },
  {
    id: "skills",
    label: "Skills",
    shortcut: "5",
    description: "Production technologies categorized by engineering domain",
  },
  {
    id: "resume",
    label: "Résumé",
    shortcut: "6",
    description: "Interactive résumé view and PDF download",
  },
  {
    id: "contact",
    label: "Contact",
    shortcut: "7",
    description: "Direct email, GitHub profiles, LinkedIn, and references",
  },
];

export const PROFILE_DATA = {
  fullName: "Arthath Agary",
  title: "Software Engineer",
  eyebrow: "Software Engineer · Full-Stack SaaS & AI Platform Engineering",
  headline:
    "Building customer-facing no-code builders, AI-assisted web platforms, and resilient full-stack architectures across the MEAN and MERN stacks.",
  shortIntro:
    "Software Engineer with 2+ years of experience designing and shipping commercial SaaS products. I specialize in full-stack JavaScript and TypeScript architectures—engineering dynamic Angular, React, and Next.js interfaces alongside Node.js, Sails.js, and Express REST APIs integrated with Google Gemini, OpenAI, payment gateways, and production observability.",
  resumeFilePath: "/resume.pdf",
  resumeDownloadFilename: "Arthath_Agary_Software_Engineer_Resume.pdf",
  domain: "https://arthathagary.engineer",
  domainLabel: "arthathagary.engineer",
  contact: {
    email: "arthathagary@gmail.com",
    phone: "+94-75-8393-323",
    phoneHref: "tel:+94758393323",
    linkedinUrl: "https://www.linkedin.com/in/arthathagary",
    linkedinHandle: "linkedin.com/in/arthathagary",
    githubPersonalUrl: "https://github.com/arthathagary",
    githubPersonalHandle: "github.com/arthathagary",
    githubWorkUrl: "https://github.com/arthathagary-simato",
    githubWorkHandle: "github.com/arthathagary-simato",
    websiteUrl: "https://arthathagary.engineer",
    websiteHandle: "arthathagary.engineer",
  },
  coreStrengths: [
    {
      label: "Full-Stack SaaS Engineering",
      detail: "Angular, React.js, Next.js, Node.js, Sails.js (MVC), Express.js, MongoDB",
    },
    {
      label: "AI & Visual Builder Pipelines",
      detail: "Google Gemini API, OpenAI API, GrapesJS layout synthesis, Redis caching",
    },
    {
      label: "Payments & Auth Infrastructure",
      detail: "Stripe, Ideabiz OTP-less checkout, Single Sign-On (SSO), JWT, bcrypt",
    },
    {
      label: "Cloud & Production Observability",
      detail: "AWS EC2, AWS S3, Datadog RUM error tracking, Google Analytics 4 funnels",
    },
  ],
  aboutParagraphs: [
    "I am a Software Engineer with over two years of production experience across the MEAN and MERN ecosystems, focused on building commercial SaaS platforms that turn complex technical workflows into intuitive no-code and AI-powered products.",
    "At Simato Vas Solutions, I progress from Associate Software Engineer to Software Engineer after starting as an intern—architecting core features across Appmaker, Otenro Pro, Telegram Sub Manager, and Appmaker Spark. My work spans the full request lifecycle: designing MongoDB schemas and Sails.js/Node.js REST APIs, building interactive Angular and GrapesJS visual editors, integrating LLM pipelines (Google Gemini and OpenAI), and managing cloud deployments on AWS EC2 and S3.",
    "I care deeply about measurable engineering impact—whether that means removing checkout friction with OTP-less payment flows, cutting manual website creation time through structured AI-to-layout pipelines, or instrumenting Datadog RUM and Google Analytics 4 so teams can diagnose production issues with real telemetry rather than guesswork.",
  ],
  education: {
    institution: "Cardiff Metropolitan University",
    degree: "BSc (Hons) in Software Engineering",
    period: "2023 – 2025",
    summary:
      "Honours degree program covering the Software Development Life Cycle (SDLC), object-oriented system design, data structures, cloud computing fundamentals, and Agile software delivery.",
    coursework: [
      "Software Engineering Principles",
      "Data Structures & Algorithms",
      "Database Systems",
      "Web & Mobile App Development",
      "Cloud Computing Fundamentals",
    ],
    capstone:
      "Final-Year Project: Designed and built a full-stack web application utilizing modern JavaScript frameworks, RESTful API architecture, and structured database modeling.",
  } satisfies EducationItem,
  achievements: [
    {
      metric: "56+ Public Repositories",
      title: "Active Open-Source & Full-Stack GitHub Portfolio",
      description:
        "Maintain 56+ public repositories on GitHub spanning full-stack web applications, developer utilities, and experiments across React, Angular, and Node.js.",
    },
    {
      metric: "Pull Shark & Pair Extraordinaire",
      title: "GitHub Collaborative Engineering Recognition",
      description:
        "Recognized with multiple Pull Shark and Pair Extraordinaire achievement badges on GitHub for sustained pull request merges and collaborative pair programming.",
    },
    {
      metric: "-40% Issues / -50% Debug Time",
      title: "Production Reliability & Observability Impact",
      description:
        "Reduced reported production user issues by 40% and cut front-end debugging and issue resolution time by 50% through proactive defect fixes and Datadog RUM instrumentation.",
    },
  ],
  references: [
    {
      name: "U. Mahfoos",
      role: "Senior Software Engineer",
      company: "Jaseci Labs",
      phone: "+94 77 5491 905",
      email: "umahfoosahamed@gmail.com",
    },
    {
      name: "J.M. Rifkhan",
      role: "Senior DevOps Engineer",
      company: "Innodata",
      phone: "+94 76 7730 555",
      email: "rifkhan561@gmail.com",
    },
  ] satisfies ReferenceItem[],
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "appmaker",
    name: "Appmaker",
    tagline: "No-Code App Builder Platform",
    category: "Commercial SaaS Platform",
    organization: "Simato Vas Solutions",
    featured: true,
    liveUrl: "https://appmaker.lk",
    liveLabel: "appmaker.lk",
    oneSentenceSummary:
      "A commercial no-code application builder enabling enterprise and SMB customers to create, configure, and publish web and mobile applications without writing code.",
    myContribution:
      "Engineered the OTP-less Ideabiz payment checkout, reusable Angular template generation workflows, GA4 conversion funnel tracking, and Datadog RUM front-end observability.",
    role: "Software Engineer (Full-Stack)",
    technologies: [
      "Angular",
      "AngularJS",
      "Sails.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Cordova",
      "Ideabiz",
      "Datadog RUM",
      "Google Analytics 4",
    ],
    technologyRationale: [
      {
        name: "Angular & TypeScript",
        purpose:
          "Powered modular, reusable application templates and strongly typed builder configuration workflows.",
      },
      {
        name: "Sails.js (Node.js MVC) & MongoDB",
        purpose:
          "Handled multi-tenant application schemas, build orchestration APIs, and asynchronous billing callbacks.",
      },
      {
        name: "Apache Cordova",
        purpose:
          "Packaged user-configured web applications into deployable hybrid mobile builds.",
      },
      {
        name: "Ideabiz Payment Gateway",
        purpose:
          "Enabled carrier-grade, OTP-less direct billing during customer checkout.",
      },
      {
        name: "Datadog RUM & Google Analytics 4",
        purpose:
          "Provided real-time client error telemetry and step-by-step onboarding funnel visibility.",
      },
    ],
    overview:
      "Appmaker is an in-house SaaS platform developed by the Simato Vas Solutions engineering team and utilized by external customers to assemble, customize, and launch applications through a visual no-code workflow.",
    problemNeed:
      "Customers building apps on the platform faced friction during subscription checkout, manual repetition when configuring similar app structures, and occasional front-end errors that were slow to reproduce without client-side telemetry.",
    technicalApproach: [
      "Architected an OTP-less checkout pipeline integrated with the Ideabiz API so eligible users could complete billing verification without leaving or restarting the onboarding flow.",
      "Built a library of reusable Angular application templates and automated generation steps that pre-populate navigation, theming, and data bindings.",
      "Instrumented Google Analytics 4 funnel events across each stage of app creation and payment to quantify drop-off points and guide UX refinements.",
      "Deployed Datadog Real User Monitoring (RUM) across the front-end to capture stack traces, session context, and API latency in real time.",
    ],
    challenges: [
      {
        challenge:
          "High user drop-off during multi-step subscription verification and onboarding.",
        solution:
          "Replaced manual OTP entry where supported with a streamlined Ideabiz OTP-less verification flow and tracked funnel progression via GA4, reducing onboarding friction by 30% and lifting completion rates by 18%.",
      },
      {
        challenge:
          "Diagnosing intermittent client-side issues across both modern Angular modules and legacy AngularJS views.",
        solution:
          "Integrated Datadog RUM error tracking with structured context tags, cutting front-end debugging and issue resolution time by 50%.",
      },
    ],
    impactMetrics: [
      {
        value: "-30%",
        label: "Onboarding Friction",
        detail: "Reduced customer checkout friction via OTP-less Ideabiz integration.",
      },
      {
        value: "+18%",
        label: "Completion Rate",
        detail: "Boosted onboarding funnel completion using GA4 drop-off diagnostics.",
      },
      {
        value: "-50%",
        label: "Debugging Time",
        detail: "Cut front-end issue diagnosis time after deploying Datadog RUM.",
      },
      {
        value: "+35%",
        label: "App Creation Speed",
        detail: "Accelerated user build speed through reusable Angular templates.",
      },
    ],
    visualArchetype: "appmaker-builder",
  },
  {
    id: "otenro-pro",
    name: "Otenro Pro",
    tagline: "AI-Powered Website Builder Platform",
    category: "Commercial AI SaaS Platform",
    organization: "Simato Vas Solutions",
    featured: true,
    liveUrl: "https://pro.otenro.com",
    liveLabel: "pro.otenro.com",
    oneSentenceSummary:
      "An AI-powered website generation platform that converts user prompts into fully structured, visually editable single-page and multi-page websites.",
    myContribution:
      "Integrated the Google Gemini API for automated site structure synthesis, engineered the AI-to-GrapesJS layout transformation pipeline with Redis, and built cross-platform Single Sign-On (SSO).",
    role: "Software Engineer (Full-Stack)",
    technologies: [
      "Angular",
      "Sails.js",
      "MongoDB",
      "GrapesJS",
      "Redis",
      "Google Gemini API",
      "TypeScript",
      "JavaScript",
    ],
    technologyRationale: [
      {
        name: "Google Gemini API",
        purpose:
          "Synthesized structured page hierarchies, section semantics, and tailored copy from user prompts.",
      },
      {
        name: "GrapesJS",
        purpose:
          "Served as the visual DOM canvas allowing users to drag, style, and edit AI-generated layouts without code.",
      },
      {
        name: "Redis",
        purpose:
          "Cached intermediate generation states and session tokens to keep multi-page synthesis responsive.",
      },
      {
        name: "Sails.js & MongoDB",
        purpose:
          "Orchestrated prompt pipelines, persisted site component trees, and managed cross-service SSO sessions.",
      },
      {
        name: "Angular & TypeScript",
        purpose:
          "Delivered the workspace shell, prompt wizard, multi-page route manager, and editor controls.",
      },
    ],
    overview:
      "Otenro Pro is an enterprise-ready AI website builder developed within the Simato SaaS suite. It bridges generative AI with deterministic visual editing by turning natural-language business descriptions into editable GrapesJS component trees.",
    problemNeed:
      "Traditional drag-and-drop website builders still require hours of manual layout assembly, while raw LLM HTML outputs are often brittle, malformed, or impossible for non-technical users to customize visually.",
    technicalApproach: [
      "Integrated the Google Gemini API with strict schema prompting to generate complete website page hierarchies and section payloads.",
      "Engineered a deterministic transformation pipeline that validates AI JSON/HTML responses and maps them directly into editable GrapesJS components and style blocks.",
      "Implemented orchestration logic supporting both Single-Page Application (SPA) landing sites and cohesive multi-page websites backed by Redis state management.",
      "Architected a unified Single Sign-On (SSO) authentication layer across Otenro platform properties for seamless account transitions.",
    ],
    challenges: [
      {
        challenge:
          "Converting non-deterministic AI responses into reliable, visually editable GrapesJS layouts without broken DOM structures.",
        solution:
          "Built a middle-tier normalization and validation pipeline for both SPA and multi-page generation, achieving a 95%+ successful generation rate and reducing design time by 45%.",
      },
      {
        challenge:
          "Eliminating repetitive authentication prompts when users moved between Otenro dashboard services and the visual editor.",
        solution:
          "Designed and deployed a cross-platform SSO architecture that reduced user login times by 25%.",
      },
    ],
    impactMetrics: [
      {
        value: "-60%",
        label: "Manual Creation Time",
        detail: "Cut manual site setup time via Google Gemini structure generation.",
      },
      {
        value: "95%+",
        label: "Generation Reliability",
        detail: "Successful SPA and multi-page generation rate across user prompts.",
      },
      {
        value: "-45%",
        label: "Design Iteration Time",
        detail: "Reduced layout customization time via the AI-to-GrapesJS pipeline.",
      },
      {
        value: "-25%",
        label: "Login Time",
        detail: "Accelerated cross-platform access through unified SSO architecture.",
      },
    ],
    visualArchetype: "otenro-ai",
  },
  {
    id: "telegram-sub-manager",
    name: "Telegram Sub Manager",
    tagline: "Subscription Automation Platform",
    category: "Automation & Monetization SaaS",
    organization: "Simato Vas Solutions",
    featured: true,
    oneSentenceSummary:
      "A full-stack subscription management platform that uses the Telegram Bot API to automate paid community access, recurring billing validation, and member lifecycle enforcement.",
    myContribution:
      "Built the end-to-end Telegram Bot API automation engine, recurring monetization logic, and automated backend validation for member approvals, renewals, and kick/unban workflows.",
    role: "Software Engineer (Full-Stack)",
    technologies: [
      "Sails.js",
      "Angular",
      "MongoDB",
      "Telegram Bot API",
      "TypeScript",
      "JavaScript",
    ],
    technologyRationale: [
      {
        name: "Telegram Bot API",
        purpose:
          "Executed real-time channel invite generation, member status verification, and automated kick/unban enforcement.",
      },
      {
        name: "Sails.js (Node.js)",
        purpose:
          "Processed webhook events, scheduled subscription expiry checks, and enforced payment state transitions.",
      },
      {
        name: "MongoDB",
        purpose:
          "Stored subscriber records, channel administrator rules, payment ledger states, and audit logs.",
      },
      {
        name: "Angular & TypeScript",
        purpose:
          "Provided channel administrators with a clean dashboard to configure tiers, track subscribers, and monitor revenue.",
      },
    ],
    overview:
      "Telegram Sub Manager enables digital creators and enterprise channel administrators to monetize private Telegram communities without manually verifying receipts, inviting members, or removing expired accounts.",
    problemNeed:
      "Channel administrators managing hundreds of subscribers spent significant manual effort reconciling payments, issuing invite links, and revoking access when subscriptions lapsed.",
    technicalApproach: [
      "Developed a full-stack web dashboard and webhook backend coupling Sails.js REST APIs with the Telegram Bot API.",
      "Implemented recurring monetization workflows that bind verified payment statuses directly to Telegram user IDs and channel membership tiers.",
      "Engineered automated background jobs and webhook handlers for subscription validation, renewal grace periods, and automatic kick/unban actions.",
    ],
    challenges: [
      {
        challenge:
          "Keeping Telegram channel membership strictly synchronized with billing renewals and expirations without human intervention.",
        solution:
          "Automated backend validation, renewal processing, and bot-driven kick/unban lifecycle handling, reducing manual administrative labor for channel owners by 80%.",
      },
    ],
    impactMetrics: [
      {
        value: "-80%",
        label: "Manual Admin Labor",
        detail: "Eliminated manual payment verification and member kick/unban tasks.",
      },
      {
        value: "100%",
        label: "Lifecycle Automation",
        detail: "Automated onboarding, renewal validation, and access enforcement via Bot API.",
      },
    ],
    visualArchetype: "telegram-automation",
  },
  {
    id: "appmaker-spark",
    name: "Appmaker Spark",
    tagline: "AI Landing Page Generator",
    category: "Commercial AI SaaS Platform",
    organization: "Simato Vas Solutions",
    featured: true,
    liveUrl: "https://ai.appmaker.lk",
    liveLabel: "ai.appmaker.lk",
    oneSentenceSummary:
      "An AI landing-page generation workspace featuring real-time component streaming, live responsive previews, and multi-model content structuring.",
    myContribution:
      "Architected the responsive Angular front-end workspace, dynamic component loading engine, interactive live preview canvas, and Gemini/OpenAI content integration.",
    role: "Software Engineer (Full-Stack)",
    technologies: [
      "Angular",
      "TypeScript",
      "Sails.js",
      "MongoDB",
      "OpenAI API",
      "Google Gemini API",
      "JavaScript",
    ],
    technologyRationale: [
      {
        name: "Angular & TypeScript",
        purpose:
          "Powered the reactive split-pane editor, dynamic component loader, and real-time section state management.",
      },
      {
        name: "Google Gemini & OpenAI APIs",
        purpose:
          "Generated structured marketing copy, value propositions, and section configurations tailored to user prompts.",
      },
      {
        name: "Sails.js & MongoDB",
        purpose:
          "Managed AI prompt routing, section schema persistence, and published landing page configurations.",
      },
    ],
    overview:
      "Appmaker Spark (ai.appmaker.lk) is a focused AI landing-page builder designed to help businesses go from a brief product prompt to a conversion-ready, customizable landing page in minutes.",
    problemNeed:
      "Users needed a faster, lighter-weight workflow than a full multi-page site builder when launching targeted promotional or product landing pages, with immediate visual feedback as sections were generated.",
    technicalApproach: [
      "Built a responsive modern Angular UI supporting real-time section editing and device-width live previews.",
      "Implemented a dynamic component loading architecture capable of rendering and reordering heterogeneous landing-page sections on the fly.",
      "Integrated both Google Gemini and OpenAI APIs to fetch, parse, and map generated content directly into structured, user-editable section schemas.",
    ],
    challenges: [
      {
        challenge:
          "Rendering AI-generated page sections dynamically while maintaining instantaneous live preview updates as users edited text and layouts.",
        solution:
          "Designed a modular component registry and reactive state binding in Angular so streamed AI payloads hydrate into editable page sections without full-page reloads.",
      },
    ],
    impactMetrics: [
      {
        value: "Real-Time",
        label: "Live Preview Architecture",
        detail: "Dynamic Angular component rendering with instant section updates.",
      },
      {
        value: "Dual-LLM",
        label: "Gemini + OpenAI Pipeline",
        detail: "Structured AI output mapped directly into editable UI sections.",
      },
    ],
    visualArchetype: "spark-generator",
  },
  {
    id: "cordova-hcp-cli",
    name: "Cordova Hot Code Push CLI",
    tagline: "Open-Source Node.js 20+ Modernization",
    category: "Open-Source Developer Tooling",
    organization: "Open Source (npm)",
    featured: false,
    oneSentenceSummary:
      "An open-source fork and modernization of the deprecated cordova-hot-code-push-cli utility restoring compatibility with Node.js 20+ build pipelines.",
    myContribution:
      "Forked the unmaintained CLI package, upgraded incompatible legacy dependencies, patched deprecated Node.js APIs, and published the modernized package to npm.",
    role: "Open-Source Maintainer & Contributor",
    technologies: ["Node.js", "Apache Cordova", "JavaScript", "npm"],
    technologyRationale: [
      {
        name: "Node.js (v20+)",
        purpose:
          "Targeted modern LTS runtime environments where legacy filesystem and crypto calls in the original CLI failed.",
      },
      {
        name: "Apache Cordova",
        purpose:
          "Preserved hot-code-push manifest and hash generation workflows for hybrid mobile build pipelines.",
      },
    ],
    overview:
      "The original cordova-hot-code-push-cli library had been deprecated and failed on modern Node.js 20+ environments due to outdated transitive dependencies and removed runtime APIs.",
    problemNeed:
      "Engineering teams maintaining Cordova hybrid mobile apps could not upgrade their CI/CD build servers to Node.js 20+ without breaking over-the-air hot code push manifest generation.",
    technicalApproach: [
      "Forked the upstream cordova-hot-code-push-cli repository and audited the dependency tree for Node.js 20+ incompatibilities.",
      "Updated broken packages, patched deprecated Node APIs, verified manifest generation output, and published the modernized package to npm.",
    ],
    challenges: [
      {
        challenge:
          "Restoring Node.js 20+ compatibility without breaking backward compatibility with existing Cordova project configuration files.",
        solution:
          "Patched internal CLI modules and dependency versions while keeping the CLI flags and generated manifest schema identical for drop-in adoption.",
      },
    ],
    impactMetrics: [
      {
        value: "Node 20+",
        label: "Runtime Compatibility",
        detail: "Unblocked modern Node.js LTS environments for Cordova build pipelines.",
      },
      {
        value: "Published",
        label: "Available on npm",
        detail: "Packaged and released for community and production CI/CD use.",
      },
    ],
    visualArchetype: "cordova-cli",
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "simato-fulltime",
    company: "Simato Vas Solutions",
    title: "Software Engineer",
    period: "Nov 2024 – Present",
    progression: [
      { title: "Software Engineer", period: "Nov 2025 – Present" },
      { title: "Associate Software Engineer", period: "Nov 2024 – Nov 2025" },
    ],
    employmentType: "Full-Time",
    summary:
      "Lead full-stack engineering across Simato's commercial SaaS product suite, building no-code application builders, AI-powered website generators, and automated subscription platforms.",
    responsibilities: [
      "Design and build customer-facing full-stack SaaS products—including Appmaker, Otenro Pro, Telegram Sub Manager, and Appmaker Spark—using Angular, Sails.js, Node.js, and MongoDB.",
      "Integrate production payment gateways (Ideabiz), generative AI models (Google Gemini, OpenAI), product analytics (Google Analytics 4), and observability tooling (Datadog RUM).",
      "Operate within an Agile/Scrum engineering workflow across cross-functional teams, managing sprint planning, backlog refinement, and production deployments via Jira.",
      "Partner directly with company founders and product stakeholders to translate business requirements into scalable, maintainable platform features.",
      "Manage cloud infrastructure, application deployments, and object storage utilizing AWS EC2 and AWS S3.",
    ],
    achievements: [
      "Cut manual website creation time by 60% and achieved a 95%+ generation success rate on Otenro Pro by engineering a Google Gemini to GrapesJS layout pipeline.",
      "Reduced customer checkout friction by 30% and boosted onboarding completion by 18% on Appmaker through OTP-less Ideabiz billing and GA4 funnel instrumentation.",
      "Cut front-end debugging and issue resolution time by 50% by deploying Datadog RUM error monitoring across client applications.",
      "Reduced manual subscription management labor by 80% by building automated Telegram Bot API validation and renewal workflows.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Sails.js",
      "MongoDB",
      "Redis",
      "GrapesJS",
      "Google Gemini API",
      "OpenAI API",
      "AWS EC2",
      "AWS S3",
      "Datadog RUM",
      "Google Analytics 4",
      "Ideabiz",
      "Jira",
    ],
  },
  {
    id: "simato-intern",
    company: "Simato Vas Solutions",
    title: "Intern Software Engineer",
    period: "May 2024 – Nov 2024",
    employmentType: "Internship",
    summary:
      "Contributed directly to live production SaaS codebases across the MEAN stack, focusing on defect resolution, platform stability, and core feature delivery.",
    responsibilities: [
      "Onboarded rapidly onto the production multi-product codebase to ship features and fixes for live, customer-facing SaaS applications.",
      "Diagnosed and resolved critical defects across the Angular front-end and Sails.js back-end.",
      "Built platform features and implemented performance optimizations for Appmaker and Otenro Pro under senior engineer mentorship.",
    ],
    achievements: [
      "Reduced reported production user issues by 40% through systematic bug resolution across Angular front-end components and Sails.js REST APIs.",
      "Earned promotion to full-time Associate Software Engineer upon completion of internship.",
    ],
    technologies: [
      "Angular",
      "AngularJS",
      "Sails.js",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: "clancode-intern",
    company: "Clancode Labs",
    title: "Intern Software Engineer",
    period: "Aug 2023 – Feb 2024",
    employmentType: "Internship",
    summary:
      "Developed full-stack features, payment integrations, and authentication workflows for a commercial web product utilizing the MERN stack.",
    responsibilities: [
      "Developed full-stack product features for a live commercial web application using MongoDB, Express.js, React.js, and Node.js (MERN).",
      "Integrated the Stripe payment gateway backend to process one-time customer transactions reliably.",
      "Designed MongoDB schemas and built RESTful backend APIs for user management, subscription records, and payment processing.",
      "Implemented secure authentication and role-based authorization flows using JSON Web Tokens (JWT), bcrypt password hashing, and protected client/server routing.",
    ],
    achievements: [
      "Delivered end-to-end Stripe checkout backend and JWT/bcrypt authentication architecture for production release.",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "JWT",
      "bcrypt",
      "RESTful APIs",
      "JavaScript",
    ],
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Building responsive single-page applications, visual drag-and-drop builders, and interactive client workspaces.",
    skills: [
      {
        name: "Angular",
        context: "Primary production framework for Appmaker, Otenro Pro, Spark, and Telegram Sub Manager",
        usageLevel: "Production Core",
      },
      {
        name: "React.js",
        context: "Commercial MERN stack product development at Clancode Labs and full-stack repositories",
        usageLevel: "Production Core",
      },
      {
        name: "Next.js",
        context: "Modern full-stack React applications and SSR/App Router web architectures",
        usageLevel: "Production Core",
      },
      {
        name: "TypeScript",
        context: "Strict-typed component architectures, API contracts, and AI payload parsing",
        usageLevel: "Production Core",
      },
      {
        name: "JavaScript (ES6+)",
        context: "Core language across browser runtimes, Node.js backends, and CLI tooling",
        usageLevel: "Production Core",
      },
      {
        name: "Tailwind CSS",
        context: "Utility-first styling for responsive interfaces and design systems",
        usageLevel: "Production Core",
      },
      {
        name: "HTML5 & CSS3",
        context: "Semantic markup, responsive layouts, and custom visual builder styling",
        usageLevel: "Production Core",
      },
      {
        name: "GrapesJS",
        context: "Custom visual website builder integration and AI-to-layout block pipelines in Otenro Pro",
        usageLevel: "Production Integration",
      },
      {
        name: "AngularJS",
        context: "Maintaining and modernizing legacy modules within Appmaker",
        usageLevel: "Production Integration",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineering & Auth",
    description:
      "Designing MVC architectures, RESTful APIs, webhook processors, and multi-platform authentication.",
    skills: [
      {
        name: "Node.js",
        context: "Primary server runtime across all SaaS platforms and CLI packages",
        usageLevel: "Production Core",
      },
      {
        name: "Sails.js (MVC)",
        context: "Core backend MVC framework powering Simato's multi-tenant SaaS products",
        usageLevel: "Production Core",
      },
      {
        name: "Express.js",
        context: "REST API routing and middleware architecture for MERN applications",
        usageLevel: "Production Core",
      },
      {
        name: "RESTful API Design",
        context: "Resource modeling, webhook ingestion, pagination, and service-to-service APIs",
        usageLevel: "Production Core",
      },
      {
        name: "Single Sign-On (SSO)",
        context: "Cross-platform authentication architecture across Otenro services (-25% login time)",
        usageLevel: "Production Core",
      },
      {
        name: "JWT & bcrypt",
        context: "Token-based authentication, password hashing, and protected route middleware",
        usageLevel: "Production Core",
      },
    ],
  },
  {
    id: "data-cloud",
    title: "Databases, Caching & Cloud",
    description:
      "Schema design, high-speed caching for generative pipelines, and cloud infrastructure management.",
    skills: [
      {
        name: "MongoDB",
        context: "Document schema modeling for users, subscriptions, payments, and visual site trees",
        usageLevel: "Production Core",
      },
      {
        name: "Redis",
        context: "In-memory caching and state management for Otenro Pro AI generation pipelines",
        usageLevel: "Production Core",
      },
      {
        name: "AWS EC2",
        context: "Production compute instance provisioning, process management, and deployments",
        usageLevel: "Production Core",
      },
      {
        name: "AWS S3",
        context: "Secure cloud object storage for user uploads, generated assets, and static builds",
        usageLevel: "Production Core",
      },
    ],
  },
  {
    id: "ai-integrations",
    title: "AI, Payments & Platform Integrations",
    description:
      "Connecting LLM APIs, payment gateways, and messaging bots directly into reliable customer workflows.",
    skills: [
      {
        name: "Google Gemini API",
        context: "Automated full-site structure generation in Otenro Pro and section synthesis in Spark",
        usageLevel: "Production Integration",
      },
      {
        name: "OpenAI API",
        context: "Dynamic landing-page content generation and structured prompt pipelines",
        usageLevel: "Production Integration",
      },
      {
        name: "Stripe",
        context: "Backend checkout integration and webhook handling for commercial web transactions",
        usageLevel: "Production Integration",
      },
      {
        name: "Ideabiz Payment Gateway",
        context: "OTP-less carrier billing checkout flow in Appmaker (-30% onboarding friction)",
        usageLevel: "Production Integration",
      },
      {
        name: "Telegram Bot API",
        context: "Automated subscription lifecycle, access control, and kick/unban handling",
        usageLevel: "Production Integration",
      },
      {
        name: "Apache Cordova",
        context: "Hybrid mobile app packaging and Node.js 20+ Hot Code Push CLI modernization",
        usageLevel: "Production Integration",
      },
    ],
  },
  {
    id: "observability-tools",
    title: "Observability, Analytics & Workflow",
    description:
      "Production monitoring, conversion funnel diagnostics, and collaborative Agile delivery.",
    skills: [
      {
        name: "Datadog RUM",
        context: "Real-user error tracking and performance monitoring (-50% front-end debugging time)",
        usageLevel: "Engineering Workflow",
      },
      {
        name: "Google Analytics 4 (GA4)",
        context: "Funnel event instrumentation to diagnose drop-offs (+18% completion rate)",
        usageLevel: "Engineering Workflow",
      },
      {
        name: "Git & GitHub",
        context: "Version control across 56+ public repos; Pull Shark & Pair Extraordinaire badges",
        usageLevel: "Engineering Workflow",
      },
      {
        name: "Jira (Agile / Scrum)",
        context: "Sprint planning, backlog grooming, cross-functional coordination, and release tracking",
        usageLevel: "Engineering Workflow",
      },
      {
        name: "Postman",
        context: "REST API contract testing, webhook simulation, and endpoint documentation",
        usageLevel: "Engineering Workflow",
      },
    ],
  },
];
