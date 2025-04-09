import BackButton from '@/components/BackButton';
import React from 'react';

const ShippingPolicy = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
        <BackButton/>
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Shipping Policy</h1>

      <div className="space-y-4 text-sm leading-relaxed bg-white p-6 rounded-xl shadow">
        <p><strong>Effective Date:</strong> April 7, 2025</p>

        <p>
          This is a digital product. No physical item will be shipped to your address.
        </p>

        <p>
          After successful payment through Razorpay, you will receive a downloadable PDF file 
          containing the bundle of copyright-free cartoon video links.
        </p>

        <p>
          In case of any delivery issues, feel free to contact us and we will assist you promptly.
        </p>

        <p><strong>Contact Us:</strong><br />
          📞 +91 97886-76100<br />
          📧 sahilkumar550sk@gmail.com
        </p>
      </div>
    </section>
  );
};

export default ShippingPolicy;
