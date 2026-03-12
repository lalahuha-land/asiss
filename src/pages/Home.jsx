import React, { useRef, useState, useEffect, useCallback } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProgramsSection from '@/components/ProgramsSection';
import PillarsSection from '@/components/PillarsSection';
import ContactSection from '@/components/ContactSection';
import TimelineSection from '@/components/TimelineSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import ScrollBackButton from '@/components/ScrollBackButton';
import FaqSection from '@/components/FaqSection';
import { useContent } from '@/lib/ContentContext';

export default function Home() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const programsRef = useRef(null);
  const pillarsRef = useRef(null);
  const contactRef = useRef(null);
  const [showBack, setShowBack] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // null = hero only

  const sectionRefs = { about: aboutRef, programs: programsRef, pillars: pillarsRef, contact: contactRef };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setShowBack(window.scrollY > window.innerHeight * 0.5);
      } else if (containerRef.current) {
        setShowBack(containerRef.current.scrollTop > 100);
      }
    };

    if (isMobile) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else if (containerRef.current) {
      const el = containerRef.current;
      el.addEventListener('scroll', handleScroll);
      return () => el.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile, activeSection]);

  const handleNavigate = useCallback((section) => {
    if (isMobile) {
      const ref = sectionRefs[section];
      if (ref?.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveSection(section);
      // After state updates and section renders, scroll to it
      setTimeout(() => {
        const ref = sectionRefs[section];
        if (ref?.current && containerRef.current) {
          containerRef.current.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [isMobile]);

  const handleScrollBack = useCallback(() => {
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveSection(null);
      if (containerRef.current) {
        containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [isMobile]);

  // Mobile: normal scrollable page
  if (isMobile) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
        <HeroSection onNavigate={handleNavigate} />
        <div ref={programsRef}><ProgramsSection /></div>
        <PricingSection onContact={() => handleNavigate('contact')} />
        <div ref={pillarsRef}><PillarsSection /></div>
        <TestimonialsSection />
        <div ref={aboutRef}><AboutSection /></div>
        <TimelineSection />
        <FaqSection />
        <div id="contact" ref={contactRef}><ContactSection /></div>
        <Footer />
        <ScrollBackButton visible={showBack} onClick={handleScrollBack} />
      </div>
    );
  }

  // Desktop: hero fills viewport, sections only appear when navigated
  return (
    <div 
      ref={containerRef}
      className="h-screen overflow-y-auto"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div ref={heroRef}>
        <HeroSection onNavigate={handleNavigate} />
      </div>
      
      {activeSection && (
        <>
          <div ref={programsRef}><ProgramsSection /></div>
          <PricingSection onContact={() => handleNavigate('contact')} />
          <div ref={pillarsRef}><PillarsSection /></div>
          <TestimonialsSection />
          <div ref={aboutRef}><AboutSection /></div>
          <TimelineSection />
          <FaqSection />
          <div id="contact" ref={contactRef}><ContactSection /></div>
          <Footer />
        </>
      )}
      
      <ScrollBackButton visible={showBack} onClick={handleScrollBack} />
    </div>
  );
}

function Footer() {
  const { content } = useContent();
  const footer = content?.footer || {};
  return (
    <footer className="py-8 px-4 text-center border-t" style={{ borderColor: '#e5e7eb', backgroundColor: '#fafafa' }}>
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2">
        <span className="text-sm font-bold text-gray-800">{footer.companyName || 'Asiss'}</span>
        <span className="text-xs text-gray-400">{footer.copyright || '© 2025 Asiss Inc. All rights reserved.'}</span>
      </div>
    </footer>
  );
}
