import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, FinTrack Inc.',
    avatar: 'SC',
    avatarColor: '#818cf8',
    avatarBg: '#ede9fe',
    quote: 'Asiss delivered our entire trading dashboard in 10 weeks — on time, on budget, and beyond our expectations. Their engineers felt like part of our team from day one.',
    project: 'Web Platform',
    result: '4× faster load times',
    resultColor: '#818cf8',
    resultBg: '#ede9fe',
  },
  {
    name: 'Marcus Webb',
    role: 'Founder, HealthPulse',
    avatar: 'MW',
    avatarColor: '#f472b6',
    avatarBg: '#fce7f3',
    quote: 'We tried two other agencies before Asiss. Nobody else could handle the complexity of our HIPAA-compliant mobile app. They nailed it, and the UI is genuinely beautiful.',
    project: 'Mobile App',
    result: '50K+ downloads in 3 months',
    resultColor: '#f472b6',
    resultBg: '#fce7f3',
  },
  {
    name: 'Lena Hoffmann',
    role: 'VP Engineering, Orion Logistics',
    avatar: 'LH',
    avatarColor: '#34d399',
    avatarBg: '#dcfce7',
    quote: 'Their DevOps team migrated our entire infrastructure to AWS with zero downtime. We went from weekly deploys to shipping 10 times a day. Incredible.',
    project: 'Cloud & DevOps',
    result: '10× deploy frequency',
    resultColor: '#34d399',
    resultBg: '#dcfce7',
  },
  {
    name: 'James Okafor',
    role: 'CEO, Nova Analytics',
    avatar: 'JO',
    avatarColor: '#38bdf8',
    avatarBg: '#e0f2fe',
    quote: 'The AI pipeline Asiss built reduced our manual reporting time by 90%. Our analysts went from spending days on data prep to focusing entirely on insights.',
    project: 'AI & Automation',
    result: '90% less manual work',
    resultColor: '#38bdf8',
    resultBg: '#e0f2fe',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Product, RetailBoost',
    avatar: 'PS',
    avatarColor: '#fb923c',
    avatarBg: '#fff7ed',
    quote: 'We went from idea to live product in 8 weeks. Asiss\'s process is tight, communication is excellent, and the end result was exactly what our customers needed.',
    project: 'Web App',
    result: '8-week delivery',
    resultColor: '#fb923c',
    resultBg: '#fff7ed',
  },
];

const logos = [
  { name: 'FinTrack', color: '#818cf8', bg: '#ede9fe' },
  { name: 'HealthPulse', color: '#f472b6', bg: '#fce7f3' },
  { name: 'Orion', color: '#34d399', bg: '#dcfce7' },
  { name: 'Nova', color: '#38bdf8', bg: '#e0f2fe' },
  { name: 'RetailBoost', color: '#fb923c', bg: '#fff7ed' },
  { name: 'Apex AI', color: '#a78bfa', bg: '#f5f3ff' },
  { name: 'DataMesh', color: '#fbbf24', bg: '#fef9c3' },
];

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
};

export default function TestimonialsSection() {
  const { content } = useContent();
  const testimonialsContent = content?.testimonials?.items;
  const logosContent = content?.testimonials?.logos;
  const mergedTestimonials = (testimonialsContent?.length ? testimonialsContent : testimonials).map((t, i) => {
    const fallback = testimonials[i] || testimonials[0];
    return {
      ...fallback,
      ...t,
      avatarColor: t.avatarColor || fallback.avatarColor,
      avatarBg: t.avatarBg || fallback.avatarBg,
      resultColor: t.resultColor || fallback.resultColor,
      resultBg: t.resultBg || fallback.resultBg,
    };
  });
  const mergedLogos = (logosContent?.length ? logosContent : logos).map((l, i) => {
    const fallback = logos[i] || logos[0];
    return {
      ...fallback,
      ...l,
      color: l.color || fallback.color,
      bg: l.bg || fallback.bg,
    };
  });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % mergedTestimonials.length);
    }, 5000);
    return () => clearInterval(t);
  }, [autoplay]);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
    setAutoplay(false);
  };

  const prev = () => go((current - 1 + mergedTestimonials.length) % mergedTestimonials.length);
  const next = () => go((current + 1) % mergedTestimonials.length);

  const t = mergedTestimonials[current];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 overflow-hidden" style={{ backgroundColor: '#fafafa' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#ede9fe', color: '#6d28d9' }}>
            {content?.testimonials?.badge || 'CLIENT STORIES'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {content?.testimonials?.titleTop || 'Trusted by teams'}
            <br />
            <span style={{ background: 'linear-gradient(90deg, #818cf8, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {content?.testimonials?.titleEmphasis || 'that ship great products'}
            </span>
          </h2>
        </motion.div>

        {/* Logo strip */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-14"
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          {mergedLogos.map((logo, i) => (
            <motion.div key={logo.name}
              className="px-5 py-2.5 rounded-2xl border border-gray-100 shadow-sm font-bold text-sm"
              style={{ backgroundColor: logo.bg, color: logo.color }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -3, transition: { duration: 0.15 } }}
            >
              {logo.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Carousel card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>

          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm bg-white"
              >
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
                  {/* Quote side */}
                  <div>
                    <div className="w-10 h-10 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: t.avatarBg }}>
                      <Quote className="w-5 h-5" style={{ color: t.avatarColor }} />
                    </div>
                    <blockquote className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium mb-8">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: t.avatarBg, color: t.avatarColor }}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Stats side */}
                  <div className="flex flex-row md:flex-col gap-3 md:min-w-[140px]">
                    <div className="rounded-2xl p-4 text-center flex-1 md:flex-none"
                      style={{ backgroundColor: t.avatarBg }}>
                      <div className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Project</div>
                      <div className="text-sm font-bold" style={{ color: t.avatarColor }}>{t.project}</div>
                    </div>
                    <div className="rounded-2xl p-4 text-center flex-1 md:flex-none"
                      style={{ backgroundColor: t.resultBg }}>
                      <div className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">Result</div>
                      <div className="text-sm font-bold leading-tight" style={{ color: t.resultColor }}>{t.result}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {mergedTestimonials.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    backgroundColor: i === current ? t.avatarColor : '#e5e7eb',
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <motion.button onClick={prev}
                className="w-10 h-10 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button onClick={next}
                className="w-10 h-10 rounded-2xl border border-gray-200 bg-white flex items-center justify-center shadow-sm text-gray-500 hover:text-gray-900 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
