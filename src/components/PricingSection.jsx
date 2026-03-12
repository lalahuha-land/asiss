import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp, Building2, ArrowRight, Clock } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const tiers = [
  {
    icon: Zap,
    name: 'MVP Starter',
    tagline: 'Launch fast, validate early.',
    price: 'From $15K',
    delivery: '4–6 weeks',
    color: '#34d399',
    bg: '#dcfce7',
    darkBg: '#f0fdf4',
    border: '#86efac',
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
    icon: TrendingUp,
    name: 'Growth Engine',
    tagline: 'Scale what\'s working.',
    price: 'From $50K',
    delivery: '8–14 weeks',
    color: '#7c3aed',
    bg: '#ede9fe',
    darkBg: '#f5f3ff',
    border: '#c4b5fd',
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
    icon: Building2,
    name: 'Scale Enterprise',
    tagline: 'Enterprise-grade. No compromises.',
    price: 'Custom',
    delivery: 'Tailored timeline',
    color: '#f472b6',
    bg: '#fce7f3',
    darkBg: '#fdf4ff',
    border: '#f9a8d4',
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
];

export default function PricingSection({ onContact }) {
  const [hovered, setHovered] = useState(null);
  const { content } = useContent();
  const pricing = content?.pricing || {};
  const tiersContent = pricing.tiers;
  const mergedTiers = (tiersContent?.length ? tiersContent : tiers).map((t, i) => {
    const fallback = tiers[i] || tiers[0];
    return {
      ...fallback,
      ...t,
      icon: fallback.icon,
      color: t.color || fallback.color,
      bg: t.bg || fallback.bg,
      darkBg: t.darkBg || fallback.darkBg,
      border: t.border || fallback.border,
    };
  });

  return (
    <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#ede9fe', color: '#6d28d9' }}>
            {pricing.badge || 'PRICING'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {pricing.titleTop || 'Simple, transparent'}
            <br />
            <span style={{ background: 'linear-gradient(90deg, #7c3aed, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {pricing.titleEmphasis || 'project-based pricing'}
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            {pricing.body || 'No hourly surprises. Fixed scopes, predictable budgets, and a dedicated team from kick-off to launch.'}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {mergedTiers.map((tier, i) => {
            const Icon = tier.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={tier.name}
                className="relative rounded-3xl border-2 overflow-hidden cursor-default"
                style={{
                  backgroundColor: isHovered ? tier.bg : tier.darkBg,
                  borderColor: isHovered ? tier.color : tier.border,
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute top-5 right-5">
                    <motion.span
                      className="text-xs font-bold px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: tier.color }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}

                <div className="p-7 md:p-8">
                  {/* Icon + Name */}
                  <div className="w-11 h-11 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" style={{ color: tier.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{tier.tagline}</p>

                  {/* Price + Delivery */}
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-7">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs font-medium text-gray-400">Delivery: {tier.delivery}</span>
                  </div>

                  {/* Divider */}
                  <div className="h-px mb-6" style={{ backgroundColor: `${tier.color}40` }} />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${tier.color}20` }}>
                          <Check className="w-3 h-3" style={{ color: tier.color }} />
                        </div>
                        <span className="text-sm text-gray-600 leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    onClick={onContact}
                    className="w-full py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity"
                    style={{
                      backgroundColor: tier.color,
                      color: '#fff',
                    }}
                    whileHover={{ opacity: 0.88 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer note */}
        <motion.p className="text-center text-xs text-gray-400 mt-10"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          {pricing.note || 'All plans include a free 30-minute discovery call. No commitment required.'}
        </motion.p>
      </div>
    </section>
  );
}
