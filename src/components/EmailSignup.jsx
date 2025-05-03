// src/components/EmailSignup.jsx
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { db } from '../../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await addDoc(collection(db, 'waitlistEmails'), {
        email,
        createdAt: serverTimestamp(),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="bg-card rounded-2xl shadow-soft max-w-3xl mx-auto my-16 px-6 py-10 text-center">
      <div className="flex flex-col items-center gap-4">
        <Mail className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-semibold text-gray-800">Stay in the loop</h2>
        <p className="text-gray-600 max-w-md">
          Be the first to hear when ClassCountdown launches on the App Store and Play Store.
        </p>

        {submitted ? (
          <p className="text-green-600 font-medium mt-4">Thanks! We'll keep you posted. 🎉</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md mt-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Notify Me
            </button>
          </form>
        )}

        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>
    </section>
  );
}
