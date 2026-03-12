import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const values = [
  { icon: Lightbulb, title: 'Innovation First', description: 'We stay ahead of the curve — adopting modern technologies that keep your product future-proof.', color: '#818cf8', bg: '#ede9fe' },
  { icon: Target, title: 'Results-Driven', description: 'Every line of code is written with your business goals in mind. We measure success by impact.', color: '#34d399', bg: '#dcfce7' },
  { icon: Rocket, title: 'Fast Delivery', description: 'Agile sprints, clear milestones, and rapid iteration. We ship quality software — fast.', color: '#f472b6', bg: '#fce7f3' },
];

export default function AboutSection() {
  const { content } = useContent();
  const about = content?.about || {};
  const valueItems = about.values || values;
  const statItems = about.stats || [
    { value: '120+', label: 'Clients Served', color: '#818cf8' },
    { value: '300+', label: 'Projects Shipped', color: '#f472b6' },
    { value: '7 yrs', label: 'In Business', color: '#34d399' },
    { value: '98%', label: 'Satisfaction Rate', color: '#38bdf8' },
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#ede9fe', color: '#6d28d9' }}>
            {about.badge || 'ABOUT US'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {(about.titleTop || 'A team of passionate')}<br />
            <span style={{ background: 'linear-gradient(90deg, #7c3aed, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {about.titleEmphasis || 'software engineers'}
            </span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-500 leading-relaxed">
            {about.body || "Founded in 2018, Asiss has helped over 120 companies transform their ideas into scalable digital products. We're not just a vendor — we're your long-term technology partner."}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {valueItems.map((item, i) => {
            const Icon = [Lightbulb, Target, Rocket][i % 3];
            return (
              <motion.div key={item.title}
                className="rounded-3xl p-8 border border-gray-100 shadow-sm"
                style={{ backgroundColor: item.bg || ['#ede9fe', '#dcfce7', '#fce7f3'][i % 3] }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -4, transition: { duration: 0.2 } }}>
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm">
                  <Icon className="w-6 h-6" style={{ color: item.color || ['#818cf8', '#34d399', '#f472b6'][i % 3] }} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          className="rounded-3xl border border-gray-100 shadow-sm grid grid-cols-2 md:grid-cols-4 overflow-hidden"
          style={{ backgroundColor: '#fafafa' }}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          {statItems.map((s, i) => (
            <div key={s.label} className={`p-7 text-center ${i < 3 ? 'border-r border-gray-100' : ''}`}>
              <div className="text-3xl font-bold mb-1" style={{ color: s.color || ['#818cf8', '#f472b6', '#34d399', '#38bdf8'][i % 4] }}>{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
