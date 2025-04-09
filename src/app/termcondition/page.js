import BackButton from '@/components/BackButton';
import React from 'react';

function Page() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <BackButton/>
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Terms and Conditions</h1>

      <div className="space-y-4 text-sm leading-relaxed bg-white p-6 rounded-xl shadow">
        <p><strong>Effective Date:</strong> April 7, 2025</p>

        <p>You are purchasing a digital PDF file that contains links to a bundle of copyright-free cartoon videos. These videos are safe to use and monetize on YouTube.</p>

        <p>After successful payment via Razorpay, the PDF will be available for download or manually shared if needed. No physical items will be shipped.</p>

        <p><strong>Usage Rights:</strong><br />
          ✔️ You can use the videos on your YouTube channel and monetize them.<br />
          ❌ You cannot resell, redistribute, or claim ownership of the videos.
        </p>

        <p>All payments are securely processed through Razorpay. We do not manually store any payment information.</p>

        <p>We may update these terms at any time. Any changes will be shown on this page.</p>

        <p><strong>Contact Us:</strong><br />
          📞 +91 97886-76100<br />
          📧 sahilkumar550sk@gmail.com
        </p>
      </div>
    </section>
  );
}

export default Page;
