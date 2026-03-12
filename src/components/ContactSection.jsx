import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Database, Bot, Shield, BarChart, CheckCircle, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const steps = [
  {
    id: 'project',
    title: 'What are you building?',
    subtitle: 'Select the type of project you have in mind.',
    field: 'projectType',
    options: [
      { value: 'web', label: 'Web App', icon: Globe, color: '#818cf8', bg: '#ede9fe' },
      { value: 'mobile', label: 'Mobile App', icon: Smartphone, color: '#f472b6', bg: '#fce7f3' },
      { value: 'cloud', label: 'Cloud / DevOps', icon: Database, color: '#34d399', bg: '#dcfce7' },
      { value: 'ai', label: 'AI / Automation', icon: Bot, color: '#38bdf8', bg: '#e0f2fe' },
      { value: 'security', label: 'Security & Compliance', icon: Shield, color: '#fb923c', bg: '#fff7ed' },
      { value: 'data', label: 'Data & Analytics', icon: BarChart, color: '#a78bfa', bg: '#f5f3ff' },
    ],
  },
  {
    id: 'budget',
    title: "What's your budget?",
    subtitle: 'This helps us tailor the right team and scope for you.',
    field: 'budget',
    options: [
      { value: 'under10k', label: 'Under $10K', detail: 'MVP / small scope', color: '#34d399', bg: '#dcfce7' },
      { value: '10_50k', label: '$10K – $50K', detail: 'Standard project', color: '#818cf8', bg: '#ede9fe' },
      { value: '50_150k', label: '$50K – $150K', detail: 'Mid-scale build', color: '#f472b6', bg: '#fce7f3' },
      { value: 'over150k', label: '$150K+', detail: 'Enterprise / long-term', color: '#fb923c', bg: '#fff7ed' },
    ],
  },
  {
    id: 'timeline',
    title: 'When do you need it?',
    subtitle: 'Give us a sense of your urgency.',
    field: 'timeline',
    options: [
      { value: 'asap', label: 'ASAP', detail: 'Within 1 month', color: '#f472b6', bg: '#fce7f3' },
      { value: '1_3mo', label: '1–3 Months', detail: 'Standard timeline', color: '#818cf8', bg: '#ede9fe' },
      { value: '3_6mo', label: '3–6 Months', detail: 'Comfortable pace', color: '#34d399', bg: '#dcfce7' },
      { value: 'flexible', label: 'Flexible', detail: 'No hard deadline', color: '#38bdf8', bg: '#e0f2fe' },
    ],
  },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function ContactSection() {
  const { content } = useContent();
  const contact = content?.contact || {};
  const stepsContent = contact.steps;
  const mergedSteps = (stepsContent?.length ? stepsContent : steps).map((s, i) => {
    const fallback = steps[i] || steps[0];
    const defaultOptions = fallback.options || [];
    const mergedOptions = (s.options || defaultOptions).map((opt, idx) => {
      const fbOpt = defaultOptions[idx] || defaultOptions[0] || {};
      return {
        ...fbOpt,
        ...opt,
        icon: fbOpt.icon,
        color: opt.color || fbOpt.color,
        bg: opt.bg || fbOpt.bg,
      };
    });
    return {
      ...fallback,
      ...s,
      options: mergedOptions,
    };
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState({ projectType: null, budget: null, timeline: null, message: '' });
  const [submitted, setSubmitted] = useState(false);

  const step = mergedSteps[currentStep];
  const selected = answers[step?.field];
  const isLast = currentStep === mergedSteps.length - 1;

  const choose = (value) => setAnswers(prev => ({ ...prev, [step.field]: value }));

  const getLabel = (field, value) => {
    const stepDef = mergedSteps.find((s) => s.field === field);
    const opt = stepDef?.options?.find((o) => o.value === value);
    return opt?.label || value;
  };

  const next = () => {
    if (!selected) return;
    if (isLast) {
      setSubmitted(true);
      const summary = [];
      if (answers.projectType) summary.push(`Project: ${getLabel('projectType', answers.projectType)}`);
      if (answers.budget) summary.push(`Budget: ${getLabel('budget', answers.budget)}`);
      if (answers.timeline) summary.push(`Timeline: ${getLabel('timeline', answers.timeline)}`);
      if (answers.message) summary.push(`Message: ${answers.message}`);

      const body = summary.join('\n');
      if (whatsappLink) {
        const waUrl = `${whatsappLink}?text=${encodeURIComponent(body)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
      }
      if (emailLink) {
        const subject = encodeURIComponent('New Project Inquiry');
        const mailto = `${emailLink}?subject=${subject}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
      }
      return;
    }
    setDirection(1);
    setCurrentStep(c => c + 1);
  };

  const back = () => {
    setDirection(-1);
    setCurrentStep(c => c - 1);
  };

  const reset = () => { setSubmitted(false); setCurrentStep(0); setAnswers({ projectType: null, budget: null, timeline: null, message: '' }); };

  const whatsappNumber = (contact.whatsapp || '').replace(/[^\d]/g, '');
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;
  const emailLink = contact.email ? `mailto:${contact.email}` : null;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#fef9c3' }}>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#1c1917', color: '#fde68a' }}>
            {contact.badge || "LET'S WORK TOGETHER"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {contact.title || 'Tell us about your project'}
          </h2>
          <p className="text-gray-500 text-sm">{contact.body || "Answer 3 quick questions and we'll be in touch within 24 hours."}</p>
        </motion.div>

        {/* Card */}
        <div className="rounded-3xl bg-white shadow-sm border border-gray-100 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                className="flex flex-col items-center justify-center py-20 px-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                {/* Animated checkmark */}
                <motion.div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#dcfce7' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, times: [0, 0.7, 1] }}
                >
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </motion.div>

                {/* Floating sparkles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div key={i}
                    className="absolute pointer-events-none"
                    style={{ left: `${20 + i * 12}%`, top: `${30 + (i % 2) * 20}%` }}
                    initial={{ opacity: 0, y: 0, scale: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -40, scale: [0, 1, 0] }}
                    transition={{ duration: 1.2, delay: i * 0.12 }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: ['#818cf8','#f472b6','#34d399','#38bdf8','#fb923c','#a78bfa'][i] }} />
                  </motion.div>
                ))}

                <motion.h3 className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  {contact.successTitle || "You're all set!"}
                </motion.h3>
                <motion.p className="text-gray-500 text-sm mb-8 max-w-xs"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                  {contact.successBody || "We've received your details and will reach out within 24 hours to schedule a free discovery call."}
                </motion.p>

                {/* Summary pills */}
                <motion.div className="flex flex-wrap gap-2 justify-center mb-8"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
                  {mergedSteps.map(s => {
                    const opt = s.options.find(o => o.value === answers[s.field]);
                    return opt ? (
                      <span key={s.id} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ backgroundColor: opt.bg, color: opt.color }}>
                        {opt.label}
                      </span>
                    ) : null;
                  })}
                </motion.div>

                <motion.button onClick={reset}
                  className="text-sm text-gray-400 underline hover:text-gray-600 transition-colors"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
                  Start over
                </motion.button>
              </motion.div>
            ) : (
              <motion.div key={`step-${currentStep}`} custom={direction}
                variants={slideVariants} initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="p-7 md:p-10"
              >
                {/* Progress bar */}
                <div className="flex gap-1.5 mb-8">
                  {steps.map((_, i) => (
                    <div key={i} className="h-1.5 flex-1 rounded-full overflow-hidden bg-gray-100">
                      <motion.div className="h-full rounded-full"
                        style={{ backgroundColor: i <= currentStep ? '#7c3aed' : 'transparent' }}
                        initial={{ width: i < currentStep ? '100%' : '0%' }}
                        animate={{ width: i <= currentStep ? '100%' : '0%' }}
                        transition={{ duration: 0.4 }} />
                    </div>
                  ))}
                </div>

                <p className="text-xs font-semibold text-violet-500 mb-1 tracking-wide uppercase">
                  Step {currentStep + 1} of {mergedSteps.length}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-400 mb-7">{step.subtitle}</p>

                {/* Options */}
                <div className={`grid gap-3 mb-8 ${step.options.length === 6 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2'}`}>
                  {step.options.map(opt => {
                    const Icon = opt.icon;
                    const isChosen = selected === opt.value;
                    return (
                      <motion.button key={opt.value}
                        onClick={() => choose(opt.value)}
                        className="rounded-2xl p-4 text-left border-2 transition-all relative overflow-hidden"
                        style={{
                          backgroundColor: isChosen ? opt.bg : '#fafafa',
                          borderColor: isChosen ? opt.color : '#f3f4f6',
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isChosen && (
                          <motion.div className="absolute top-2 right-2"
                            initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <CheckCircle className="w-4 h-4" style={{ color: opt.color }} />
                          </motion.div>
                        )}
                        {Icon && (
                          <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-2.5 bg-white shadow-sm">
                            <Icon className="w-4 h-4" style={{ color: opt.color }} />
                          </div>
                        )}
                        <div className="text-sm font-semibold text-gray-800">{opt.label}</div>
                        {opt.detail && <div className="text-xs text-gray-400 mt-0.5">{opt.detail}</div>}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Message (optional) on final step */}
                {isLast && (
                  <div className="mb-8">
                    <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      {contact.messageLabel || 'Message (optional)'}
                    </label>
                    <textarea
                      value={answers.message}
                      onChange={(e) => setAnswers(prev => ({ ...prev, message: e.target.value }))}
                      placeholder={contact.messagePlaceholder || 'Add any details about your project...'}
                      className="w-full min-h-[110px] rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300"
                    />
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between">
                  <button onClick={back}
                    className={`flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-gray-700 transition-colors ${currentStep === 0 ? 'invisible' : ''}`}>
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <motion.button onClick={next}
                    disabled={!selected}
                    className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity"
                    style={{ backgroundColor: selected ? '#7c3aed' : '#d1d5db' }}
                    whileHover={selected ? { scale: 1.04 } : {}}
                    whileTap={selected ? { scale: 0.97 } : {}}
                  >
                    {isLast ? 'Submit' : 'Continue'} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Direct contact */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold text-white text-center"
              style={{ backgroundColor: '#22c55e' }}
            >
              {contact.ctaWhatsappLabel || 'WhatsApp Us'}
            </a>
          )}
          {emailLink && (
            <a
              href={emailLink}
              className="px-6 py-3 rounded-full text-sm font-semibold text-gray-900 text-center border border-gray-200"
            >
              {contact.ctaEmailLabel || 'Email Us'}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
