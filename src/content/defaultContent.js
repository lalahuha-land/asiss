export const defaultContent = {
  brand: {
    name: 'Asiss',
    subtitle: 'SOLUTIONS',
    estd: 'ESTD 2018',
  },
  hero: {
    badge: 'THE SMART CHOICE',
    headline: 'Ready to build your next product?',
    subhead: 'From idea to deployment, we deliver on time.',
    latestDelivery: {
      title: 'Latest Delivery',
      project: 'FinTrack Dashboard',
      tags: ['React', 'Node', 'AWS'],
      link: 'https://example.com/latest-delivery',
    },
    upcomingProject: {
      title: 'Upcoming Project',
      project: 'Atlas Analytics Suite',
      tags: ['Next.js', 'TypeScript', 'GCP'],
      link: 'https://example.com/upcoming-project',
    },
    servicesTitle: 'Our Expertise',
    servicesSubtitle: 'End-to-end engineering',
    photoUrl:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=450&fit=crop',
    photoAlt: 'Team at work',
    serviceNodes: ['Web Apps', 'Mobile', 'Cloud', 'AI / ML', 'Security'],
    techStack: [
      { name: 'Frontend', detail: 'React · Next.js' },
      { name: 'Backend', detail: 'Node · Python' },
      { name: 'Cloud', detail: 'AWS · GCP' },
      { name: 'AI / ML', detail: 'OpenAI · PyTorch' },
    ],
    heroTitle: 'We build software that scales with you',
    heroBody:
      'From idea to deployment — we design, engineer, and deliver modern software solutions.',
    tagline: 'Ship fast, scale smart',
    navItems: [
      { label: 'About', section: 'about' },
      { label: 'Services', section: 'programs' },
      { label: 'Process', section: 'pillars' },
      { label: 'Contact', section: 'contact' },
    ],
    statsBadge: '12 Active Builds',
  },
  about: {
    badge: 'ABOUT US',
    titleTop: 'A team of passionate',
    titleEmphasis: 'software engineers',
    body:
      "Founded in 2018, Asiss has helped over 120 companies transform their ideas into scalable digital products. We're not just a vendor — we're your long-term technology partner.",
    values: [
      {
        title: 'Innovation First',
        description:
          'We stay ahead of the curve — adopting modern technologies that keep your product future-proof.',
      },
      {
        title: 'Results-Driven',
        description:
          'Every line of code is written with your business goals in mind. We measure success by impact.',
      },
      {
        title: 'Fast Delivery',
        description:
          'Agile sprints, clear milestones, and rapid iteration. We ship quality software — fast.',
      },
    ],
    stats: [
      { value: '120+', label: 'Clients Served' },
      { value: '300+', label: 'Projects Shipped' },
      { value: '7 yrs', label: 'In Business' },
      { value: '98%', label: 'Satisfaction Rate' },
    ],
  },
  services: {
    badge: 'OUR SERVICES',
    titleTop: 'End-to-end software',
    titleEmphasis: 'engineering services',
    items: [
      {
        title: 'Web Application Development',
        subtitle: 'Full-stack, scalable web apps',
        description:
          'From SPAs to enterprise portals — we build performant, accessible web applications using React, Next.js, and modern backend frameworks.',
        link: 'https://example.com/projects/web',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        stack: [
          { category: 'Frontend', tools: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
          { category: 'Backend', tools: ['Node.js', 'GraphQL', 'REST'] },
          { category: 'Database', tools: ['PostgreSQL', 'Redis', 'Prisma'] },
          { category: 'Infrastructure', tools: ['AWS', 'Vercel', 'Docker'] },
        ],
        deliverables: [
          'Fully responsive, accessible UI built to WCAG 2.1 AA',
          'Secure REST or GraphQL API with documentation',
          'Authentication & role-based access control',
          'Performance audit: <2s LCP, 90+ Lighthouse score',
          'Deployment pipeline with staging and production environments',
          'Source code, technical docs & 30-day warranty',
        ],
        caseStudy: {
          client: 'FinTrack Inc. — Financial Dashboard',
          summary:
            'Rebuilt a legacy AngularJS platform into a modern React + Node.js stack, reducing load time by 4x and enabling real-time portfolio tracking for 30,000 daily active users.',
          results: ['4x faster load', '30K DAU', '99.98% uptime', 'Delivered in 10 weeks'],
        },
      },
      {
        title: 'Mobile Development',
        subtitle: 'iOS, Android & cross-platform',
        description:
          'Native and cross-platform mobile apps that deliver smooth user experiences and integrate seamlessly with your existing systems.',
        link: 'https://example.com/projects/mobile',
        tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
        stack: [
          { category: 'Cross-platform', tools: ['React Native', 'Expo', 'Flutter'] },
          { category: 'Native', tools: ['Swift', 'Kotlin', 'SwiftUI'] },
          { category: 'Backend', tools: ['Firebase', 'Supabase', 'Node.js'] },
          { category: 'Testing', tools: ['Detox', 'Jest', 'Maestro'] },
        ],
        deliverables: [
          'iOS & Android apps from a single codebase',
          'App Store & Google Play submission support',
          'Push notifications & deep linking',
          'Offline-first architecture with sync',
          'Biometric auth & secure local storage',
          'Analytics integration (Mixpanel / Amplitude)',
        ],
        caseStudy: {
          client: 'HealthPulse — HIPAA-Compliant Patient App',
          summary:
            'Designed and built a React Native app for remote patient monitoring with end-to-end encryption and EHR integration, achieving 50K downloads within 3 months of launch.',
          results: ['50K downloads in 3 mo.', 'HIPAA compliant', '4.8 star App Store', 'Zero data breaches'],
        },
      },
      {
        title: 'Cloud & DevOps',
        subtitle: 'Infrastructure that scales',
        description:
          'CI/CD pipelines, containerized deployments, and cloud-native architectures on AWS, GCP, and Azure.',
        link: 'https://example.com/projects/cloud',
        tags: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
        stack: [
          { category: 'Cloud', tools: ['AWS', 'GCP', 'Azure'] },
          { category: 'Containers', tools: ['Docker', 'Kubernetes', 'Helm'] },
          { category: 'IaC', tools: ['Terraform', 'Pulumi', 'CDK'] },
          { category: 'CI/CD', tools: ['GitHub Actions', 'ArgoCD', 'Jenkins'] },
        ],
        deliverables: [
          'Cloud architecture design & cost optimisation',
          'Fully automated CI/CD pipeline',
          'Zero-downtime blue/green deployments',
          'Centralised logging, alerting & dashboards',
          'Auto-scaling policies and disaster recovery plan',
          'Infrastructure-as-code (fully reproducible)',
        ],
        caseStudy: {
          client: 'Orion Logistics — AWS Migration',
          summary:
            'Migrated a monolithic on-prem system to a Kubernetes-based microservices architecture on AWS, enabling the team to ship 10x more frequently with zero downtime during migration.',
          results: ['10x deploy frequency', 'Zero downtime', '40% infra cost savings', '6-week migration'],
        },
      },
      {
        title: 'AI & Automation',
        subtitle: 'Intelligent software systems',
        description:
          'LLM integrations, workflow automation, and machine learning models that reduce manual effort and unlock new capabilities.',
        link: 'https://example.com/projects/ai',
        tags: ['OpenAI', 'LangChain', 'Python', 'MLOps'],
        stack: [
          { category: 'LLM / NLP', tools: ['OpenAI', 'Anthropic', 'LangChain'] },
          { category: 'ML', tools: ['PyTorch', 'scikit-learn', 'HuggingFace'] },
          { category: 'Pipelines', tools: ['Airflow', 'Prefect', 'dbt'] },
          { category: 'MLOps', tools: ['MLflow', 'Weights & Biases', 'SageMaker'] },
        ],
        deliverables: [
          'Custom LLM-powered features (chat, summarisation, extraction)',
          'Automated data pipelines replacing manual workflows',
          'ML model training, evaluation & deployment',
          'RAG (retrieval-augmented generation) system',
          'Monitoring for model drift and data quality',
          'Full technical documentation and team training',
        ],
        caseStudy: {
          client: 'Nova Analytics — AI Reporting Engine',
          summary:
            'Built an LLM-powered pipeline that auto-generates weekly business reports from raw data, reducing analyst prep time by 90% and surfacing insights executives previously missed.',
          results: ['90% time saved', '3-week build', 'GPT-4 powered', 'Zero manual reports'],
        },
      },
      {
        title: 'Security & Compliance',
        subtitle: 'Built secure from day one',
        description:
          'Penetration testing, GDPR/SOC2 compliance readiness, secure coding practices, and ongoing vulnerability management.',
        link: 'https://example.com/projects/security',
        tags: ['OWASP', 'SOC2', 'GDPR', 'Pen Testing'],
        stack: [
          { category: 'Testing', tools: ['Burp Suite', 'OWASP ZAP', 'Metasploit'] },
          { category: 'Compliance', tools: ['SOC 2', 'GDPR', 'HIPAA', 'ISO 27001'] },
          { category: 'Monitoring', tools: ['Splunk', 'Datadog', 'PagerDuty'] },
          { category: 'Tooling', tools: ['Snyk', 'Dependabot', 'Trivy'] },
        ],
        deliverables: [
          'Full penetration test with detailed findings report',
          'OWASP Top 10 remediation roadmap',
          'SOC 2 / GDPR readiness assessment & gap analysis',
          'Secrets management & secure CI/CD hardening',
          'Dependency vulnerability scanning & patching',
          'Security training session for your engineering team',
        ],
        caseStudy: {
          client: 'MedVault — Healthcare SaaS Hardening',
          summary:
            'Conducted an end-to-end security audit and compliance uplift for a health-tech SaaS platform, closing 34 critical vulnerabilities and achieving SOC 2 Type II certification in 12 weeks.',
          results: ['SOC 2 Type II certified', '34 vulns closed', '12-week timeline', 'Zero incidents post-audit'],
        },
      },
      {
        title: 'Data & Analytics',
        subtitle: 'Turn data into decisions',
        description:
          'Data pipelines, dashboards, and reporting systems that give your team real-time insight into what matters most.',
        link: 'https://example.com/projects/data',
        tags: ['Tableau', 'dbt', 'BigQuery', 'Spark'],
        stack: [
          { category: 'Warehousing', tools: ['BigQuery', 'Snowflake', 'Redshift'] },
          { category: 'Transformation', tools: ['dbt', 'Spark', 'Pandas'] },
          { category: 'Visualisation', tools: ['Tableau', 'Metabase', 'Superset'] },
          { category: 'Orchestration', tools: ['Airflow', 'Prefect', 'Fivetran'] },
        ],
        deliverables: [
          'End-to-end data pipeline (ingestion → warehouse → dashboard)',
          'Executive KPI dashboard with real-time refresh',
          'Data quality monitoring & alerting',
          'Semantic layer with standardised business metrics',
          'Historical data migration & backfill',
          'Team onboarding & self-serve analytics training',
        ],
        caseStudy: {
          client: 'RetailBoost — Unified Analytics Platform',
          summary:
            'Consolidated data from 6 disparate sources into a single BigQuery warehouse with dbt transformations and a Metabase dashboard, cutting weekly reporting time from 2 days to 20 minutes.',
          results: ['6 sources unified', '20-min reporting', '2x revenue visibility', '8-week delivery'],
        },
      },
    ],
  },
  process: {
    badge: 'OUR PROCESS',
    titleTop: 'From idea',
    titleEmphasis: 'to shipped product',
    body: 'A battle-tested 6-step process that delivers on time and within scope.',
    steps: [
      {
        label: 'Discovery',
        description:
          'We deep-dive into your business goals, user needs, and technical constraints to form a solid foundation.',
      },
      {
        label: 'Design',
        description:
          'UX/UI design and architecture planning — prototypes and system designs before writing a single line of code.',
      },
      {
        label: 'Build',
        description:
          'Agile development in two-week sprints. Clean, documented, and test-covered code at every step.',
      },
      {
        label: 'Test',
        description:
          'Rigorous QA: unit tests, integration tests, load testing, and security reviews before any release.',
      },
      {
        label: 'Launch',
        description:
          'Seamless deployment to production with zero-downtime releases and full monitoring in place.',
      },
      {
        label: 'Iterate',
        description:
          'Post-launch support, analytics review, and continuous improvement cycles to keep your product ahead.',
      },
    ],
  },
  timeline: {
    badge: 'OUR JOURNEY',
    titleTop: 'From startup to',
    titleEmphasis: 'industry leader',
    body: '8 years of building, shipping, and growing alongside our clients.',
    milestones: [
      {
        year: '2018',
        title: 'Company Founded',
        description:
          'Asiss launched in Toronto with a small team of 4 engineers on a mission to build world-class software products.',
        stat: '4 engineers',
        statLabel: 'founding team',
      },
      {
        year: '2019',
        title: 'First 10 Clients',
        description:
          'Rapid growth through word-of-mouth. We onboarded our first 10 clients across fintech, healthtech, and e-commerce.',
        stat: '10 clients',
        statLabel: 'in year one',
      },
      {
        year: '2020',
        title: 'Remote-First Pivot',
        description:
          'Embraced fully remote operations and expanded our talent pool globally, tripling team size within 12 months.',
        stat: '3x',
        statLabel: 'team growth',
      },
      {
        year: '2021',
        title: 'Industry Recognition',
        description:
          "Named one of Canada's Top 50 Fastest-Growing Tech Companies. Surpassed 50 active client engagements.",
        stat: 'Top 50',
        statLabel: 'fastest growing',
      },
      {
        year: '2022',
        title: 'AI Practice Launched',
        description:
          'Launched a dedicated AI & automation practice, delivering LLM-powered products for enterprise clients.',
        stat: '15+',
        statLabel: 'AI projects shipped',
      },
      {
        year: '2023',
        title: '$10M Revenue Milestone',
        description:
          'Crossed $10M in annual revenue and expanded into the US market with a new office in San Francisco.',
        stat: '$10M',
        statLabel: 'annual revenue',
      },
      {
        year: '2024',
        title: '300 Projects Shipped',
        description:
          'Hit 300 total projects delivered across 6 service lines with a 98% client satisfaction score.',
        stat: '300+',
        statLabel: 'projects delivered',
      },
      {
        year: '2025',
        title: 'Platform Products',
        description:
          'Launched our first SaaS platform products and introduced Asiss Labs — an internal innovation incubator.',
        stat: 'Asiss',
        statLabel: 'Labs launched',
      },
    ],
  },
  testimonials: {
    badge: 'CLIENT STORIES',
    titleTop: 'Trusted by teams',
    titleEmphasis: 'that ship great products',
    items: [
      {
        name: 'Sarah Chen',
        role: 'CTO, FinTrack Inc.',
        avatar: 'SC',
        quote:
          'Asiss delivered our entire trading dashboard in 10 weeks — on time, on budget, and beyond our expectations. Their engineers felt like part of our team from day one.',
        project: 'Web Platform',
        result: '4x faster load times',
      },
      {
        name: 'Marcus Webb',
        role: 'Founder, HealthPulse',
        avatar: 'MW',
        quote:
          'We tried two other agencies before Asiss. Nobody else could handle the complexity of our HIPAA-compliant mobile app. They nailed it, and the UI is genuinely beautiful.',
        project: 'Mobile App',
        result: '50K+ downloads in 3 months',
      },
      {
        name: 'Lena Hoffmann',
        role: 'VP Engineering, Orion Logistics',
        avatar: 'LH',
        quote:
          'Their DevOps team migrated our entire infrastructure to AWS with zero downtime. We went from weekly deploys to shipping 10 times a day. Incredible.',
        project: 'Cloud & DevOps',
        result: '10x deploy frequency',
      },
      {
        name: 'James Okafor',
        role: 'CEO, Nova Analytics',
        avatar: 'JO',
        quote:
          'The AI pipeline Asiss built reduced our manual reporting time by 90%. Our analysts went from spending days on data prep to focusing entirely on insights.',
        project: 'AI & Automation',
        result: '90% less manual work',
      },
      {
        name: 'Priya Sharma',
        role: 'Head of Product, RetailBoost',
        avatar: 'PS',
        quote:
          "We went from idea to live product in 8 weeks. Asiss's process is tight, communication is excellent, and the end result was exactly what our customers needed.",
        project: 'Web App',
        result: '8-week delivery',
      },
    ],
    logos: [
      { name: 'FinTrack' },
      { name: 'HealthPulse' },
      { name: 'Orion' },
      { name: 'Nova' },
      { name: 'RetailBoost' },
      { name: 'Apex AI' },
      { name: 'DataMesh' },
    ],
  },
  pricing: {
    badge: 'PRICING',
    titleTop: 'Simple, transparent',
    titleEmphasis: 'project-based pricing',
    body:
      'No hourly surprises. Fixed scopes, predictable budgets, and a dedicated team from kick-off to launch.',
    tiers: [
      {
        name: 'MVP Starter',
        tagline: 'Launch fast, validate early.',
        price: 'From $15K',
        delivery: '4–6 weeks',
        features: [
          'Single-platform web or mobile app',
          'Up to 5 core user flows',
          'Responsive UI / UX design',
          'REST API + basic auth',
          'Cloud deployment (AWS / GCP)',
          '30-day post-launch support',
        ],
        cta: 'Start My MVP',
        popular: false,
      },
      {
        name: 'Growth Engine',
        tagline: 'Scale what’s working.',
        price: 'From $50K',
        delivery: '8–14 weeks',
        features: [
          'Full-stack web + mobile apps',
          'Custom integrations & 3rd-party APIs',
          'Advanced analytics dashboard',
          'Role-based access control',
          'CI/CD pipeline & monitoring',
          'Performance optimisation',
          '90-day post-launch support',
        ],
        cta: 'Grow My Product',
        popular: true,
      },
      {
        name: 'Scale Enterprise',
        tagline: 'Enterprise-grade. No compromises.',
        price: 'Custom',
        delivery: 'Tailored timeline',
        features: [
          'Multi-product / white-label platforms',
          'Microservices & event-driven arch.',
          'AI / ML pipeline integration',
          'SOC 2 / HIPAA compliance',
          'Dedicated engineering team',
          'SLA-backed uptime guarantees',
          'Ongoing retainer & roadmap support',
        ],
        cta: 'Talk to Us',
        popular: false,
      },
    ],
    note:
      'All plans include a free 30-minute discovery call. No commitment required.',
  },
  contact: {
    badge: "LET'S WORK TOGETHER",
    title: 'Tell us about your project',
    body: "Answer 3 quick questions and we'll be in touch within 24 hours.",
    whatsapp: '+60133418044',
    email: 'juwitathings.co@gmail.com',
    ctaWhatsappLabel: 'WhatsApp Us',
    ctaEmailLabel: 'Email Us',
    messageLabel: 'Message (optional)',
    messagePlaceholder: 'Add any details about your project...',
    successTitle: "You're all set!",
    successBody: 'I will get back to you within 24 hours.',
    steps: [
      {
        id: 'project',
        title: 'What are you building?',
        subtitle: 'Select the type of project you have in mind.',
        field: 'projectType',
        options: [
          { value: 'web', label: 'Web App' },
          { value: 'mobile', label: 'Mobile App' },
          { value: 'cloud', label: 'Cloud / DevOps' },
          { value: 'ai', label: 'AI / Automation' },
          { value: 'security', label: 'Security & Compliance' },
          { value: 'data', label: 'Data & Analytics' },
        ],
      },
      {
        id: 'budget',
        title: "What's your budget?",
        subtitle: 'This helps us tailor the right team and scope for you.',
        field: 'budget',
        options: [
          { value: 'under10k', label: 'Under $10K', detail: 'MVP / small scope' },
          { value: '10_50k', label: '$10K – $50K', detail: 'Standard project' },
          { value: '50_150k', label: '$50K – $150K', detail: 'Mid-scale build' },
          { value: 'over150k', label: '$150K+', detail: 'Enterprise / long-term' },
        ],
      },
      {
        id: 'timeline',
        title: 'When do you need it?',
        subtitle: 'Give us a sense of your urgency.',
        field: 'timeline',
        options: [
          { value: 'asap', label: 'ASAP', detail: 'Within 1 month' },
          { value: '1_3mo', label: '1–3 Months', detail: 'Standard timeline' },
          { value: '3_6mo', label: '3–6 Months', detail: 'Comfortable pace' },
          { value: 'flexible', label: 'Flexible', detail: 'No hard deadline' },
        ],
      },
    ],
  },
  faq: {
    badge: 'FAQ',
    title: 'Questions, answered',
    body:
      "Everything you need to know about working with Asiss. If you have more questions, reach out and we'll respond within 24 hours.",
    items: [
      {
        question: 'What types of projects do you take on?',
        answer:
          'We build web apps, mobile apps, data platforms, AI automations, and cloud infrastructure. If your product needs design, engineering, or scaling help, we can support it end to end.',
      },
      {
        question: 'How quickly can we start?',
        answer:
          'Most engagements kick off within 1–2 weeks. For urgent requests, we can accelerate scoping and start within days depending on team availability.',
      },
      {
        question: 'What does a typical engagement look like?',
        answer:
          'We begin with discovery, align on scope and milestones, then build in agile sprints with weekly demos. You get clear documentation, transparent progress, and predictable delivery.',
      },
      {
        question: 'Do you offer fixed-price projects?',
        answer:
          'Yes. We offer fixed-scope packages for MVPs and growth builds, plus flexible retainers for long-term product teams.',
      },
      {
        question: 'Can you work with our existing team?',
        answer:
          'Absolutely. We embed with internal teams, collaborate in your tools, and provide senior engineering capacity where it’s needed most.',
      },
      {
        question: 'How do we get a quote?',
        answer:
          'Share a short project brief and desired timeline. We’ll propose a scope, budget range, and delivery plan after a quick discovery call.',
      },
    ],
  },
  footer: {
    companyName: 'Asiss',
    copyright: '© 2025 Asiss Inc. All rights reserved.',
  },
};
