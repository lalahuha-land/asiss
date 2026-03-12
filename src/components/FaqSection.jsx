import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useContent } from '@/lib/ContentContext';

const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'We build web apps, mobile apps, data platforms, AI automations, and cloud infrastructure. If your product needs design, engineering, or scaling help, we can support it end to end.',
  },
  {
    question: 'How quickly can we start?',
    answer:
      'Most engagements kick off within 1–2 weeks. For urgent requests, we can accelerate scoping and start within days depending on team availability.',
  },
  {
    question: 'What does a typical engagement look like?',
    answer:
      'We begin with discovery, align on scope and milestones, then build in agile sprints with weekly demos. You get clear documentation, transparent progress, and predictable delivery.',
  },
  {
    question: 'Do you offer fixed-price projects?',
    answer:
      'Yes. We offer fixed-scope packages for MVPs and growth builds, plus flexible retainers for long-term product teams.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely. We embed with internal teams, collaborate in your tools, and provide senior engineering capacity where it’s needed most.',
  },
  {
    question: 'How do we get a quote?',
    answer:
      'Share a short project brief and desired timeline. We’ll propose a scope, budget range, and delivery plan after a quick discovery call.',
  },
];

export default function FaqSection() {
  const { content } = useContent();
  const faq = content?.faq || {};
  const faqItems = faq.items || faqs;
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ backgroundColor: '#ede9fe', color: '#6d28d9' }}
          >
            {faq.badge || 'FAQ'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900">
            {faq.title || 'Questions, answered'}
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            {faq.body || "Everything you need to know about working with Asiss. If you have more questions, reach out and we'll respond within 24 hours."}
          </p>
        </motion.div>

        <div className="rounded-3xl border border-gray-100 shadow-sm bg-white">
          <Accordion type="single" collapsible className="px-6 md:px-8">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.question} value={`faq-${i}`}>
                <AccordionTrigger className="text-base md:text-lg text-gray-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
