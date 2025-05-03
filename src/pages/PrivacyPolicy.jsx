// src/pages/PrivacyPolicy.jsx
import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>

      <p>
        Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <p>
        ClassCountdown is committed to respecting your privacy. This Privacy Policy explains how we collect, use,
        and protect your information when using our app or website.
      </p>

      <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
      <p>
        <strong>Currently, ClassCountdown does not collect or store any personal data.</strong> Your schedules and
        preferences are saved locally on your device only.
      </p>

      <h2 className="text-2xl font-semibold mt-8">2. Future Features</h2>
      <p>
        In the future, we may introduce optional features such as user accounts or cloud sync. If and when those features
        are introduced, we will update this policy and request user consent before collecting any information.
      </p>

      <h2 className="text-2xl font-semibold mt-8">3. Third-Party Services</h2>
      <p>
        Our app may display ads provided by Google AdMob. AdMob may collect anonymous usage data in accordance with their
        own privacy policy. We do not have access to or store this information ourselves.
      </p>
      <p>
        For more information, please review Google’s AdMob Privacy Policy:&nbsp;
        <a
          href="https://support.google.com/admob/answer/6128543?hl=en"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          AdMob Privacy and Data
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mt-8">4. Your Rights</h2>
      <p>
        Since we do not currently collect personal data, no action is needed to request deletion or modification of your
        information. If we add optional account features, we will include easy-to-use tools for managing your data.
      </p>

      <h2 className="text-2xl font-semibold mt-8">5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or future changes, you can reach out to us at:&nbsp;
        <a href="mailto:hello@classcountdown.app" className="text-primary underline">hello@classcountdown.app</a>
      </p>
    </main>
  );
}
