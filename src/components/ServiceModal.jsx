import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;
  const Icon = service.icon;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        />

        {/* Panel */}
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
        >
          {/* Header */}
          <div className="rounded-t-3xl p-7 md:p-9" style={{ backgroundColor: service.bg }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" style={{ color: service.color }} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                  <p className="text-sm font-semibold mt-0.5" style={{ color: service.color }}>{service.subtitle}</p>
                </div>
              </div>
              <button onClick={onClose}
                className="w-9 h-9 rounded-2xl bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors flex-shrink-0 mt-0.5">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="p-7 md:p-9 space-y-8">
            {/* Overview */}
            <div>
              <p className="text-base text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {service.stack.map(item => (
                  <div key={item.category} className="rounded-2xl p-4 border border-gray-100 bg-gray-50">
                    <div className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wide">{item.category}</div>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {item.tools.map(t => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium text-white"
                          style={{ backgroundColor: service.color }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">What You Get</h3>
              <ul className="space-y-2.5">
                {service.deliverables.map(d => (
                  <li key={d} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${service.color}20` }}>
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: service.color }} />
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Case Study */}
            <div className="rounded-2xl p-5 border-l-4" style={{ backgroundColor: service.bg, borderColor: service.color }}>
              <div className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: service.color }}>
                Case Study
              </div>
              <h4 className="text-sm font-bold text-gray-800 mb-1">{service.caseStudy.client}</h4>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{service.caseStudy.summary}</p>
              <div className="flex flex-wrap gap-2">
                {service.caseStudy.results.map(r => (
                  <span key={r} className="text-xs px-3 py-1.5 rounded-full font-semibold"
                    style={{ backgroundColor: `${service.color}18`, color: service.color }}>
                    {r}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {service.link && (service.link.startsWith('#') || service.link.startsWith('cta:')) ? (
              <motion.button
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: service.color }}
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  const anchor = service.link.startsWith('#')
                    ? service.link.slice(1)
                    : service.link.replace('cta:', '');
                  const el = document.getElementById(anchor);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                  onClose();
                }}
              >
                Contact Us <ExternalLink className="w-4 h-4" />
              </motion.button>
            ) : service.link ? (
              <motion.a
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: service.color }}
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.97 }}
                href={service.link}
                target="_blank"
                rel="noreferrer"
                onClick={onClose}
              >
                View Project <ExternalLink className="w-4 h-4" />
              </motion.a>
            ) : (
              <motion.button
                className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: service.color }}
                whileHover={{ opacity: 0.88 }}
                whileTap={{ scale: 0.97 }}
                onClick={onClose}
              >
                Start a Project <ExternalLink className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
