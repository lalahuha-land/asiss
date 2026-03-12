import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Users, Globe, Award, Bot, Zap, Star, TrendingUp } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const milestones = [
  {
    year: '2018',
    icon: Rocket,
    color: '#818cf8',
    bg: '#ede9fe',
    title: 'Company Founded',
    description: 'Asiss launched in Toronto with a small team of 4 engineers on a mission to build world-class software products.',
    stat: '4 engineers',
    statLabel: 'founding team',
  },
  {
    year: '2019',
    icon: Users,
    color: '#f472b6',
    bg: '#fce7f3',
    title: 'First 10 Clients',
    description: 'Rapid growth through word-of-mouth. We onboarded our first 10 clients across fintech, healthtech, and e-commerce.',
    stat: '10 clients',
    statLabel: 'in year one',
  },
  {
    year: '2020',
    icon: Globe,
    color: '#34d399',
    bg: '#dcfce7',
    title: 'Remote-First Pivot',
    description: 'Embraced fully remote operations and expanded our talent pool globally, tripling team size within 12 months.',
    stat: '3×',
    statLabel: 'team growth',
  },
  {
    year: '2021',
    icon: Award,
    color: '#38bdf8',
    bg: '#e0f2fe',
    title: 'Industry Recognition',
    description: 'Named one of Canada\'s Top 50 Fastest-Growing Tech Companies. Surpassed 50 active client engagements.',
    stat: 'Top 50',
    statLabel: 'fastest growing',
  },
  {
    year: '2022',
    icon: Bot,
    color: '#fb923c',
    bg: '#fff7ed',
    title: 'AI Practice Launched',
    description: 'Launched a dedicated AI & automation practice, delivering LLM-powered products for enterprise clients.',
    stat: '15+',
    statLabel: 'AI projects shipped',
  },
  {
    year: '2023',
    icon: TrendingUp,
    color: '#a78bfa',
    bg: '#f5f3ff',
    title: '$10M Revenue Milestone',
    description: 'Crossed $10M in annual revenue and expanded into the US market with a new office in San Francisco.',
    stat: '$10M',
    statLabel: 'annual revenue',
  },
  {
    year: '2024',
    icon: Zap,
    color: '#fbbf24',
    bg: '#fef9c3',
    title: '300 Projects Shipped',
    description: 'Hit 300 total projects delivered across 6 service lines with a 98% client satisfaction score.',
    stat: '300+',
    statLabel: 'projects delivered',
  },
  {
    year: '2025',
    icon: Star,
    color: '#f472b6',
    bg: '#fce7f3',
    title: 'Platform Products',
    description: 'Launched our first SaaS platform products and introduced Asiss Labs — an internal innovation incubator.',
    stat: 'Asiss',
    statLabel: 'Labs launched',
  },
];

function MilestoneCard({ milestone, index }) {
  const ref = useRef(null);
  const isEven = index % 2 === 0;
  const Icon = milestone.icon;

  return (
    <div className={`relative flex items-center gap-0 ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-10 last:mb-0`}>
      {/* Card */}
      <motion.div
        ref={ref}
        className="w-[calc(50%-2.5rem)] hidden md:block"
        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div
          className="rounded-3xl p-6 border border-gray-100 shadow-sm"
          style={{ backgroundColor: milestone.bg }}
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
              <Icon className="w-5 h-5" style={{ color: milestone.color }} />
            </div>
            <div>
              <div className="text-xs font-bold tracking-widest mb-0.5" style={{ color: milestone.color }}>
                {milestone.year}
              </div>
              <h4 className="text-base font-bold text-gray-900">{milestone.title}</h4>
            </div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">{milestone.description}</p>
          <div className="inline-flex items-baseline gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm">
            <span className="text-lg font-black" style={{ color: milestone.color }}>{milestone.stat}</span>
            <span className="text-xs text-gray-400">{milestone.statLabel}</span>
          </div>
        </div>
      </motion.div>

      {/* Center spine node */}
      <div className="relative flex flex-col items-center z-10 mx-5 hidden md:flex">
        <motion.div
          className="w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center"
          style={{ backgroundColor: milestone.bg }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
        >
          <Icon className="w-5 h-5" style={{ color: milestone.color }} />
        </motion.div>
        <span className="mt-1.5 text-xs font-black text-gray-300">{milestone.year}</span>
      </div>

      {/* Spacer on the other side (desktop) */}
      <div className="w-[calc(50%-2.5rem)] hidden md:block" />

      {/* Mobile card */}
      <motion.div
        className="md:hidden w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="rounded-3xl p-5 border border-gray-100 shadow-sm" style={{ backgroundColor: milestone.bg }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Icon className="w-4 h-4" style={{ color: milestone.color }} />
            </div>
            <div>
              <span className="text-xs font-bold tracking-widest" style={{ color: milestone.color }}>{milestone.year}</span>
              <h4 className="text-sm font-bold text-gray-900 leading-tight">{milestone.title}</h4>
            </div>
            <div className="ml-auto text-right">
              <span className="text-lg font-black block leading-tight" style={{ color: milestone.color }}>{milestone.stat}</span>
              <span className="text-xs text-gray-400">{milestone.statLabel}</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">{milestone.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  const { content } = useContent();
  const timeline = content?.timeline || {};
  const milestonesContent = timeline.milestones;
  const mergedMilestones = (milestonesContent?.length ? milestonesContent : milestones).map((m, i) => {
    const fallback = milestones[i] || milestones[0];
    return {
      ...fallback,
      ...m,
      icon: fallback.icon,
      color: m.color || fallback.color,
      bg: m.bg || fallback.bg,
    };
  });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.2'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#fef9c3', color: '#92400e' }}>
            {timeline.badge || 'OUR JOURNEY'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {timeline.titleTop || 'From startup to'}
            <br />
            <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {timeline.titleEmphasis || 'industry leader'}
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto">
            {timeline.body || '8 years of building, shipping, and growing alongside our clients.'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Animated vertical spine (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block">
            <motion.div className="w-full bg-gradient-to-b from-violet-400 via-pink-400 to-yellow-400 rounded-full origin-top"
              style={{ height: lineHeight }} />
          </div>

          {/* Mobile left spine */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-100 md:hidden">
            <motion.div className="w-full bg-gradient-to-b from-violet-400 to-pink-400 rounded-full origin-top"
              style={{ height: lineHeight }} />
          </div>

          <div className="md:block">
            {mergedMilestones.map((m, i) => (
              <MilestoneCard key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
