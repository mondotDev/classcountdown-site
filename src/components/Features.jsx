// src/components/Features.jsx
import React from 'react';
import { Clock, Calendar, Settings } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: <Clock size={32} className="text-primary" />,
    title: 'Live Countdown',
    description: 'See how much time is left in the current period at a glance, so you’re never caught off guard.',
  },
  {
    icon: <Calendar size={32} className="text-primary" />,
    title: 'Custom Schedules',
    description: 'Tailor your daily and weekly schedule, including zero periods, breaks, and lunch times.',
  },
  {
    icon: <Settings size={32} className="text-primary" />,
    title: 'Student & Teacher Friendly',
    description: 'Built for real school days — whether you’re teaching, learning, or doing both.',
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Features That Work for You</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 shadow-soft text-left transition-all duration-700 ease-out transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
