// src/components/Footer.jsx
import React from 'react';
import { Facebook, Instagram, Twitter, Music2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const socials = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: 'Facebook',
      href: 'https://www.facebook.com/people/ClassCountdown/61575604024639/',
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'X / Twitter',
      href: '#',
      disabled: true,
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: '#',
      disabled: true,
    },
    {
      icon: <TikTokIcon />,
      label: 'TikTok',
      href: '#',
      disabled: true,
    },
  ];

  return (
    <footer
      ref={ref}
      className={`bg-white border-t border-gray-200 py-10 px-6 transition-all duration-700 ease-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600 space-y-6">
        <p>&copy; {new Date().getFullYear()} ClassCountdown. All rights reserved.</p>

        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500">
          {socials.map(({ icon, label, href, disabled }) => (
            <a
              key={label}
              href={disabled ? undefined : href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-3 py-1 rounded-md transition hover:text-primary ${
                disabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              title={disabled ? `${label} coming soon` : `Follow us on ${label}`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 pt-4 text-gray-500">
          <Link to="/privacy" className="hover:text-primary underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary underline">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}

// Temporary TikTok icon using music note
function TikTokIcon() {
  return <Music2 className="w-5 h-5" />;
}
