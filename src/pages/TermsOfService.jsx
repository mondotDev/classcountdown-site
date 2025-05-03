// src/pages/TermsOfService.jsx
import React from 'react';

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold">Terms of Service</h1>

      <p>
        Last updated: {new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>

      <p>
        These Terms of Service ("Terms") govern your use of the ClassCountdown application and website. By accessing or using ClassCountdown, you agree to be bound by these Terms. If you do not agree, please discontinue use of the app and site.
      </p>

      <h2 className="text-2xl font-semibold mt-8">1. Use of the App</h2>
      <p>
        ClassCountdown is designed for personal and educational use only. You agree not to use the app for any unlawful or unauthorized purposes. Reverse engineering, distributing, or copying the app without permission is prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8">2. User-Generated Content</h2>
      <p>
        Schedule data and preferences created within the app are stored locally on your device. We are not responsible for any loss of this data due to device failure, deletion, or app updates.
      </p>

      <h2 className="text-2xl font-semibold mt-8">3. Future Account Features</h2>
      <p>
        We may introduce optional account-based features in the future, such as cloud backups. These will be optional and may require consent to collect and store limited user data. Additional terms will apply to such features.
      </p>

      <h2 className="text-2xl font-semibold mt-8">4. Advertising and Monetization</h2>
      <p>
        The free version of ClassCountdown may display ads through Google AdMob. These third-party ads are governed by their own privacy and data policies. ClassCountdown is not responsible for the content or behavior of external ads.
      </p>

      <h2 className="text-2xl font-semibold mt-8">5. Pro Features and Purchases</h2>
      <p>
        Some features may be available only to users who purchase a Pro upgrade. All purchases made through Google Play or the App Store are subject to their terms and refund policies. We do not process or store payment information.
      </p>

      <h2 className="text-2xl font-semibold mt-8">6. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to ClassCountdown at any time if you violate these Terms or engage in harmful or disruptive behavior.
      </p>

      <h2 className="text-2xl font-semibold mt-8">7. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time to reflect new features, services, or legal requirements. We will notify users of major updates via the app or our website. Continued use after changes indicates acceptance.
      </p>

      <h2 className="text-2xl font-semibold mt-8">8. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at:
        <a href="mailto:hello@classcountdown.app" className="text-primary underline"> hello@classcountdown.app</a>
      </p>
    </main>
  );
}
