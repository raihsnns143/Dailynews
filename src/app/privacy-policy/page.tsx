export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200 leading-relaxed">
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        Welcome to <strong>Daily News</strong>. Your privacy is extremely
        important to us. This Privacy Policy explains how we collect, use, and
        protect the personal information you share while using our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, or any
        information you provide when subscribing to newsletters, submitting
        comments, or contacting us. We also collect non-personal data such as
        browser type, device information, and pages visited for analytics and
        performance purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Information</h2>
      <p className="mb-4">
        The information we collect helps us:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>Provide accurate and relevant news content.</li>
        <li>Improve the design, layout, and user experience of our website.</li>
        <li>Send newsletters or updates (only if you’ve subscribed).</li>
        <li>Respond to your feedback, messages, or inquiries.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">3. Cookies</h2>
      <p className="mb-4">
        Our site may use cookies to enhance user experience and analyze traffic.
        Cookies help us understand user preferences and improve site
        performance. You can disable cookies through your browser settings if
        you prefer not to share this information.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Protection</h2>
      <p className="mb-4">
        We take your data security seriously. While we implement modern
        security measures, please note that no online platform can guarantee
        complete data safety. You are encouraged to use secure networks when
        accessing our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">5. Third-Party Links</h2>
      <p className="mb-4">
        Our articles may include links to third-party websites. We are not
        responsible for the privacy policies or content of those external
        sites. Please review their policies before sharing personal
        information.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">6. Your Consent</h2>
      <p className="mb-4">
        By using <strong>Daily News</strong>, you consent to our Privacy
        Policy and agree to its terms.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">7. Updates to This Policy</h2>
      <p className="mb-4">
        We may occasionally update this Privacy Policy to reflect new features
        or legal requirements. Changes will be posted on this page with the
        updated date.
      </p>

      <p className="mt-12 text-sm text-center text-gray-500">
        Last updated: November 2025  
        <br />
        © {new Date().getFullYear()} Daily News. All rights reserved.
      </p>
    </section>
  );
}
