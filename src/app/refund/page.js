import BackButton from '@/components/BackButton';
import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <BackButton/>
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Refund Policy</h1>

      <div className="space-y-4 text-sm leading-relaxed bg-white p-6 rounded-xl shadow">
        <p><strong>Effective Date:</strong> April 7, 2025</p>

        <p>
          We provide a digital PDF that contains a bundle of copyright-free cartoon video links. 
          These files are delivered immediately after payment via Razorpay.
        </p>

        <p>
          Since the product is digital and accessible instantly, we encourage you to review all details 
          before purchase. If you face any issues accessing the product or if the file is not delivered, 
          please reach out to us for support.
        </p>

        <p><strong>Contact Us:</strong><br />
          📞 +91 97886-76100<br />
          📧 sahilkumar550sk@gmail.com
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;
