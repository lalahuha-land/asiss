import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, TestTube, Rocket, RefreshCw } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const steps = [
  { icon: Search, label: 'Discovery', description: 'We deep-dive into your business goals, user needs, and technical constraints to form a solid foundation.', color: '#818cf8', bg: '#ede9fe' },
  { icon: PenTool, label: 'Design', description: 'UX/UI design and architecture planning — prototypes and system designs before writing a single line of code.', color: '#f472b6', bg: '#fce7f3' },
  { icon: Code2, label: 'Build', description: 'Agile development in two-week sprints. Clean, documented, and test-covered code at every step.', color: '#34d399', bg: '#dcfce7' },
  { icon: TestTube, label: 'Test', description: 'Rigorous QA: unit tests, integration tests, load testing, and security reviews before any release.', color: '#38bdf8', bg: '#e0f2fe' },
  { icon: Rocket, label: 'Launch', description: 'Seamless deployment to production with zero-downtime releases and full monitoring in place.', color: '#fb923c', bg: '#fff7ed' },
  { icon: RefreshCw, label: 'Iterate', description: 'Post-launch support, analytics review, and continuous improvement cycles to keep your product ahead.', color: '#a78bfa', bg: '#f5f3ff' },
];

export default function PillarsSection() {
  const { content } = useContent();
  const process = content?.process || {};
  const processSteps = process.steps || steps;

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#fce7f3', color: '#be185d' }}>
            {process.badge || 'OUR PROCESS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            {(process.titleTop || 'From idea')}<br />
            <span style={{ background: 'linear-gradient(90deg, #f472b6, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {process.titleEmphasis || 'to shipped product'}
            </span>
          </h2>
          <p className="text-base max-w-lg mx-auto text-gray-500">
            {process.body || 'A battle-tested 6-step process that delivers on time and within scope.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {processSteps.map((step, i) => {
            const Icon = [Search, PenTool, Code2, TestTube, Rocket, RefreshCw][i % 6];
            return (
              <motion.div key={step.label}
                className="rounded-3xl p-7 relative overflow-hidden border border-gray-100 shadow-sm"
                style={{ backgroundColor: step.bg || ['#ede9fe','#fce7f3','#dcfce7','#e0f2fe','#fff7ed','#f5f3ff'][i % 6] }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                <div className="absolute top-4 right-5 text-6xl font-black opacity-[0.07] text-gray-900 select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-11 h-11 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5" style={{ color: step.color || ['#818cf8','#f472b6','#34d399','#38bdf8','#fb923c','#a78bfa'][i % 6] }} />
                </div>
                <h4 className="text-base font-bold mb-2 text-gray-800">{step.label}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
