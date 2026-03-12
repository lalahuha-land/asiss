import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowRight, Zap, Globe, Smartphone, Database, Bot, Shield } from 'lucide-react';
import { useContent } from '@/lib/ContentContext';

const SparkleShape = ({ size = 20, color = '#fbbf24', style, delay = 0 }) => (
  <motion.div className="absolute hidden md:block pointer-events-none" style={style}
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2L13.2 9.8L21 12L13.2 14.2L12 22L10.8 14.2L3 12L10.8 9.8L12 2Z" />
    </svg>
  </motion.div>
);

const services = [
  { icon: Globe, label: 'Web Apps', color: '#818cf8' },
  { icon: Smartphone, label: 'Mobile', color: '#f472b6' },
  { icon: Database, label: 'Cloud', color: '#34d399' },
  { icon: Bot, label: 'AI / ML', color: '#38bdf8' },
  { icon: Shield, label: 'Security', color: '#fb923c' },
];

export default function HeroSection({ onNavigate }) {
  const { content } = useContent();
  const hero = content?.hero || {};
  const brand = content?.brand || {};
  const navItems = hero.navItems || [
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'programs' },
    { label: 'Process', section: 'pillars' },
    { label: 'Contact', section: 'contact' },
  ];
  const serviceNodes = hero.serviceNodes || services.map((s) => s.label);
  const latest = hero.latestDelivery || {};
  const latestLink = latest.link;
  const upcoming = hero.upcomingProject || null;
  const techStack = hero.techStack || [];

  const renderDeliveryCard = (item, fallbackTitle) => {
    if (!item) return null;
    const link = item.link;
    const title = item.title || fallbackTitle;
    const project = item.project || 'Project Name';
    const tags = item.tags || [];

    const body = (
      <>
        <div className="text-pink-200 text-xs font-medium mb-1">{title}</div>
        <div className="text-white font-semibold text-sm">{project}</div>
        <div className="flex gap-1.5 mt-2">
          {tags.map(t => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full text-pink-200"
              style={{ backgroundColor: 'rgba(244,114,182,0.15)' }}>{t}</span>
          ))}
        </div>
      </>
    );

    if (link) {
      return (
        <a
          className="rounded-2xl p-4 mb-5 z-10 flex-shrink-0 block hover:opacity-95 transition-opacity"
          style={{ backgroundColor: 'rgba(244, 114, 182, 0.18)', border: '1px solid rgba(244,114,182,0.3)' }}
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {body}
        </a>
      );
    }

    return (
      <div
        className="rounded-2xl p-4 mb-5 z-10 flex-shrink-0"
        style={{ backgroundColor: 'rgba(244, 114, 182, 0.18)', border: '1px solid rgba(244,114,182,0.3)' }}
      >
        {body}
      </div>
    );
  };
  return (
    <section
      className="w-full min-h-screen md:h-screen relative overflow-hidden p-4 md:p-5 flex flex-col"
      style={{ background: 'linear-gradient(135deg, #faf5ff 0%, #fdf4ff 25%, #f0fdf4 60%, #f0f9ff 100%)' }}
    >
      {/* Sparkle decorations */}
      <SparkleShape size={22} color="#fbbf24" style={{ top: '4%', right: '10%' }} delay={0} />
      <SparkleShape size={14} color="#fbbf24" style={{ bottom: '20%', left: '5%' }} delay={1} />
      <SparkleShape size={18} color="#f87171" style={{ top: '18%', left: '4%' }} delay={2} />
      <SparkleShape size={12} color="#fbbf24" style={{ bottom: '40%', right: '4.5%' }} delay={0.5} />
      <SparkleShape size={10} color="#f472b6" style={{ top: '58%', left: '2.5%' }} delay={1.5} />

      {/* ── DESKTOP BENTO GRID ── */}
      <div
        className="hidden md:grid flex-1 min-h-0 gap-3"
        style={{
          gridTemplateColumns: '1.1fr 1fr 1.1fr',
          gridTemplateRows: '2fr 1.2fr 1.7fr',
          gridTemplateAreas: `
            "brand  photo    services"
            "brand  logo     services"
            "cta    tagline  techstack"
          `,
        }}
      >
        {/* ── BRAND CARD ── */}
        <motion.div
          className="rounded-3xl p-7 flex flex-col relative overflow-hidden"
          style={{ gridArea: 'brand', background: 'linear-gradient(145deg, #4338ca 0%, #7c3aed 100%)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-52 h-52 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(#a78bfa, transparent)' }} />

          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-6 z-10">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4338ca)' }}
            >
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-white font-bold text-base leading-tight tracking-wide">{brand.name || 'Asiss'}</div>
              <div className="text-violet-300 text-xs tracking-widest">{brand.subtitle || 'SOLUTIONS'}</div>
            </div>
          </div>

          {/* Mini project card */}
          {renderDeliveryCard(
            {
              title: latest.title || 'Latest Delivery',
              project: latest.project || 'FinTrack Dashboard',
              tags: latest.tags || ['React', 'Node', 'AWS'],
              link: latestLink,
            },
            'Latest Delivery'
          )}
          {renderDeliveryCard(upcoming, 'Upcoming Project')}

          {/* Stacked client cards */}
          <div className="flex-1 relative z-10">
            {[
              { name: 'Acme Corp', role: 'Web Platform', deg: '-6deg', top: 0, left: 0 },
              { name: 'Orion Inc', role: 'Mobile App', deg: '2deg', top: 12, left: 22 },
              { name: 'Nova AI', role: 'ML Pipeline', deg: '-1.5deg', top: 24, left: 44 },
            ].map((c, i) => (
              <div key={c.name}
                className="absolute bg-white rounded-xl p-3 shadow-md w-40"
                style={{ transform: `rotate(${c.deg})`, top: c.top, left: c.left, zIndex: i + 1 }}>
                <div className="w-5 h-5 rounded-md mb-2" style={{ backgroundColor: ['#ede9fe','#fce7f3','#dcfce7'][i] }} />
                <div className="text-xs font-bold text-gray-700">{c.name}</div>
                <div className="text-xs text-gray-400">{c.role}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── PHOTO CARD ── */}
        <motion.div
          className="rounded-3xl overflow-hidden relative"
          style={{ gridArea: 'photo' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src={hero.photoUrl || "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=450&fit=crop"}
            alt={hero.photoAlt || "Team at work"}
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute top-3 right-3 rounded-2xl px-3 py-1.5 flex items-center gap-1.5 shadow-sm backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(252, 231, 243, 0.92)' }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Zap className="w-3.5 h-3.5 text-pink-500 fill-pink-400" />
            <span className="text-xs font-semibold text-pink-600">{hero.statsBadge || '12 Active Builds'}</span>
          </motion.div>
        </motion.div>

        {/* ── SERVICES CARD ── */}
        <motion.div
          className="rounded-3xl p-6 flex flex-col cursor-pointer"
          style={{ gridArea: 'services', backgroundColor: '#dcfce7' }}
          onClick={() => onNavigate('programs')}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-1">{hero.servicesTitle || 'Our Expertise'}</h3>
          <p className="text-xs text-gray-500 mb-4">{hero.servicesSubtitle || 'End-to-end engineering'}</p>

          {/* Radial diagram */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative" style={{ width: 256, height: 200 }}>
              {/* SVG dashed lines */}
              <svg width="256" height="200" className="absolute inset-0">
                {services.map((_, i) => {
                  const cx = 128, cy = 100, r = 80;
                  const angles = [-90, -18, 54, 126, 198];
                  const a = angles[i] * (Math.PI / 180);
                  return (
                    <line key={i}
                      x1={cx} y1={cy}
                      x2={cx + Math.cos(a) * r} y2={cy + Math.sin(a) * r}
                      stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="5,3"
                    />
                  );
                })}
              </svg>
              {/* Center hub */}
              <div className="absolute w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                <span className="text-xs font-bold text-gray-700 text-center leading-tight">Full<br/>Stack</span>
              </div>
              {/* Service nodes */}
              {services.map((s, i) => {
                const cx = 128, cy = 100, r = 80;
                const angles = [-90, -18, 54, 126, 198];
                const a = angles[i] * (Math.PI / 180);
                const x = cx + Math.cos(a) * r;
                const y = cy + Math.sin(a) * r;
                const Icon = s.icon;
                const label = serviceNodes[i] || s.label;
                return (
                  <div key={s.label} className="absolute" style={{ left: x, top: y, transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center"
                      style={{ border: `2px solid ${s.color}60` }}>
                      <Icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <span className="block text-center text-[11px] text-gray-500 mt-1 leading-tight max-w-[88px] whitespace-normal">
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── CTA CARD ── */}
        <motion.div
          className="rounded-3xl p-6 flex flex-col justify-between"
          style={{ gridArea: 'cta', backgroundColor: '#fef9c3', border: '1.5px solid #fde68a80' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <span className="inline-block px-2.5 py-1 rounded-full text-xs font-bold mb-3"
              style={{ backgroundColor: '#1c1917', color: '#fde68a' }}>
              {hero.badge || 'THE SMART CHOICE'}
            </span>
            <h2 className="text-xl font-bold text-gray-900 leading-snug mb-2">
              {hero.headline || 'Ready to build your next product?'}
            </h2>
            <p className="text-xs text-gray-500">
              {hero.subhead || 'From idea to deployment, we deliver on time.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#1c1917' }}
            >
              Get Started <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {navItems.slice(0, 3).map(n => (
              <button key={n.section} onClick={() => onNavigate(n.section)}
                className="rounded-full px-3.5 py-2.5 text-xs font-medium border bg-white bg-opacity-70 text-gray-600 hover:border-gray-400 transition-colors"
                style={{ borderColor: '#d1d5db' }}>
                {n.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── LOGO CARD ── */}
        <motion.div
          className="rounded-3xl flex flex-col items-center justify-center gap-2"
          style={{ gridArea: 'logo', backgroundColor: '#ede9fe' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #4338ca)' }}>
            <Code2 className="w-8 h-8 text-white" />
          </div>
          <span className="text-sm font-bold text-violet-800 tracking-wide">{brand.name || 'Asiss'}</span>
          <span className="text-xs text-violet-400 tracking-widest">{brand.estd || 'ESTD 2018'}</span>
        </motion.div>

        {/* ── TAGLINE CARD ── */}
        <motion.div
          className="rounded-3xl flex items-center justify-center p-5"
          style={{ gridArea: 'tagline', backgroundColor: '#fce7f3' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-center text-pink-700 leading-snug"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontStyle: 'italic', fontSize: '1.25rem', fontWeight: 500 }}>
            {(hero.tagline || 'Ship fast, scale smart').split('\n').map((line, idx, arr) => (
              <React.Fragment key={`${line}-${idx}`}>
                {line}
                {idx < arr.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </p>
        </motion.div>

        {/* ── TECH STACK CARD ── */}
        <motion.div
          className="rounded-3xl p-5"
          style={{ gridArea: 'techstack', backgroundColor: '#e0f2fe' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <div className="text-xs font-bold text-sky-700 mb-3 tracking-wide">Technologies + Platforms</div>
          <div className="grid grid-cols-2 gap-2">
            {(techStack.length
              ? techStack
              : [
                  { name: 'Frontend', detail: 'React · Next.js', color: '#818cf8' },
                  { name: 'Backend', detail: 'Node · Python', color: '#f472b6' },
                  { name: 'Cloud', detail: 'AWS · GCP', color: '#34d399' },
                  { name: 'AI / ML', detail: 'OpenAI · PyTorch', color: '#38bdf8' },
                ]
            ).map((t, idx) => (
              <div key={`${t.name}-${idx}`} className="rounded-xl p-3 bg-white bg-opacity-70">
                <div
                  className="w-2 h-2 rounded-full mb-1.5"
                  style={{ backgroundColor: t.color || ['#818cf8', '#f472b6', '#34d399', '#38bdf8'][idx % 4] }}
                />
                <div className="text-xs font-semibold text-gray-700">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── MOBILE SIMPLE HERO ── */}
      <div className="md:hidden flex-1 flex flex-col items-center justify-center py-16 px-2 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #4338ca)' }}
            >
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900">{brand.name || 'Asiss'}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            {(hero.heroTitle || 'We build software that scales with you').split(' that ').map((part, idx) => (
              <React.Fragment key={idx}>
                {part}
                {idx === 0 ? <br /> : null}
                {idx === 0 ? (
                  <span style={{ background: 'linear-gradient(90deg, #7c3aed, #0891b2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {`that ${hero.heroTitle?.split(' that ')[1] || 'scales with you'}`}
                  </span>
                ) : null}
              </React.Fragment>
            ))}
          </h1>
          <p className="text-base text-gray-500 mb-8 max-w-sm mx-auto">
            {hero.heroBody || 'From idea to deployment — we design, engineer, and deliver modern software solutions.'}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {navItems.map(item => (
              <button key={item.section} onClick={() => onNavigate(item.section)}
                className="px-5 py-2.5 rounded-full text-sm font-medium border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all text-gray-700">
                {item.label}
              </button>
            ))}
          </div>
          <motion.div className="mt-10 flex flex-col items-center"
            animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <span className="text-xs mb-1.5 text-violet-400">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border-2 border-violet-300 flex items-start justify-center pt-1">
              <motion.div className="w-1.5 h-1.5 rounded-full bg-violet-400"
                animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
