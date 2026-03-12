import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Shield, Bot, BarChart } from 'lucide-react';
import ServiceModal from './ServiceModal';
import { useContent } from '@/lib/ContentContext';

const services = [
  {
    icon: Globe,
    title: 'Web Application Development',
    subtitle: 'Full-stack, scalable web apps',
    description: 'From SPAs to enterprise portals — we build performant, accessible web applications using React, Next.js, and modern backend frameworks.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    color: '#818cf8',
    bg: '#ede9fe',
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
      summary: 'Rebuilt a legacy AngularJS platform into a modern React + Node.js stack, reducing load time by 4× and enabling real-time portfolio tracking for 30,000 daily active users.',
      results: ['4× faster load', '30K DAU', '99.98% uptime', 'Delivered in 10 weeks'],
    },
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    subtitle: 'iOS, Android & cross-platform',
    description: 'Native and cross-platform mobile apps that deliver smooth user experiences and integrate seamlessly with your existing systems.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: '#f472b6',
    bg: '#fce7f3',
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
      summary: 'Designed and built a React Native app for remote patient monitoring with end-to-end encryption and EHR integration, achieving 50K downloads within 3 months of launch.',
      results: ['50K downloads in 3 mo.', 'HIPAA compliant', '4.8★ App Store', 'Zero data breaches'],
    },
  },
  {
    icon: Database,
    title: 'Cloud & DevOps',
    subtitle: 'Infrastructure that scales',
    description: 'CI/CD pipelines, containerized deployments, and cloud-native architectures on AWS, GCP, and Azure.',
    tags: ['Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    color: '#34d399',
    bg: '#dcfce7',
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
      summary: 'Migrated a monolithic on-prem system to a Kubernetes-based microservices architecture on AWS, enabling the team to ship 10× more frequently with zero downtime during migration.',
      results: ['10× deploy frequency', 'Zero downtime', '40% infra cost savings', '6-week migration'],
    },
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    subtitle: 'Intelligent software systems',
    description: 'LLM integrations, workflow automation, and machine learning models that reduce manual effort and unlock new capabilities.',
    tags: ['OpenAI', 'LangChain', 'Python', 'MLOps'],
    color: '#38bdf8',
    bg: '#e0f2fe',
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
      summary: 'Built an LLM-powered pipeline that auto-generates weekly business reports from raw data, reducing analyst prep time by 90% and surfacing insights executives previously missed.',
      results: ['90% time saved', '3-week build', 'GPT-4 powered', 'Zero manual reports'],
    },
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    subtitle: 'Built secure from day one',
    description: 'Penetration testing, GDPR/SOC2 compliance readiness, secure coding practices, and ongoing vulnerability management.',
    tags: ['OWASP', 'SOC2', 'GDPR', 'Pen Testing'],
    color: '#fb923c',
    bg: '#fff7ed',
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
      summary: 'Conducted an end-to-end security audit and compliance uplift for a health-tech SaaS platform, closing 34 critical vulnerabilities and achieving SOC 2 Type II certification in 12 weeks.',
      results: ['SOC 2 Type II certified', '34 vulns closed', '12-week timeline', 'Zero incidents post-audit'],
    },
  },
  {
    icon: BarChart,
    title: 'Data & Analytics',
    subtitle: 'Turn data into decisions',
    description: 'Data pipelines, dashboards, and reporting systems that give your team real-time insight into what matters most.',
    tags: ['Tableau', 'dbt', 'BigQuery', 'Spark'],
    color: '#a78bfa',
    bg: '#f5f3ff',
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
      summary: 'Consolidated data from 6 disparate sources into a single BigQuery warehouse with dbt transformations and a Metabase dashboard, cutting weekly reporting time from 2 days to 20 minutes.',
      results: ['6 sources unified', '20-min reporting', '2× revenue visibility', '8-week delivery'],
    },
  },
];

export default function ProgramsSection() {
  const [selected, setSelected] = useState(null);
  const { content } = useContent();
  const servicesContent = content?.services?.items;
  const mergedServices = (servicesContent?.length ? servicesContent : services).map((s, i) => {
    const fallback = services[i] || services[0];
    return {
      ...fallback,
      ...s,
      icon: fallback.icon,
      color: s.color || fallback.color,
      bg: s.bg || fallback.bg,
    };
  });

  return (
    <>
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#fafafa' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: '#dcfce7', color: '#059669' }}>
            {content?.services?.badge || 'OUR SERVICES'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {(content?.services?.titleTop || 'End-to-end software')}<br />
            <span style={{ background: 'linear-gradient(90deg, #34d399, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {content?.services?.titleEmphasis || 'engineering services'}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mergedServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title}
                  className="rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col"
                  style={{ backgroundColor: s.bg }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                    <Icon className="w-5 h-5" style={{ color: s.color }} />
                  </div>
                  <h3 className="text-base font-bold text-gray-800 mb-1">{s.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: s.color }}>{s.subtitle}</p>
                  <p className="text-sm leading-relaxed text-gray-500 mb-5 flex-1">{s.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-medium bg-white text-gray-600 shadow-sm border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    onClick={() => setSelected(s)}
                    className="w-full py-2.5 rounded-2xl text-xs font-bold border-2 transition-colors"
                    style={{ borderColor: s.color, color: s.color, backgroundColor: 'white' }}
                    whileHover={{ backgroundColor: s.color, color: '#fff' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Learn More →
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceModal service={selected} onClose={() => setSelected(null)} />
    </>
  );
}
