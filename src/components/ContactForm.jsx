// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section className="bg-white py-16 px-6" id="contact">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="text-center text-gray-500 mb-10">We'd love to hear from you — whether you have a question, feedback, or want to say hi.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            disabled={status === 'loading'}
          >
            <MessageCircle className="w-5 h-5" />
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-sm mt-2">Message sent! We'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
