// src/components/FAQ.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'Is ClassCountdown free?',
    answer: 'Yes! The basic schedule features are free. Upgrade to Pro to unlock multiple schedules and future premium tools.',
  },
  {
    question: 'Who is ClassCountdown for?',
    answer: 'Students, teachers, or anyone navigating a school day with a bell-based schedule.',
  },
  {
    question: 'Will this work on my phone?',
    answer: 'Yes — ClassCountdown is optimized for mobile and will be available on Android first.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-background py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Frequently Asked Questions</h2>

        <div className="space-y-8 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 shadow-soft transition-all duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
