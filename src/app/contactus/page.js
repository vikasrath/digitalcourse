import BackButton from '@/components/BackButton';
import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';

function ContactPage() {
  return (
    <section className="px-6 py-12 max-w-2xl mx-auto text-white">
        <BackButton/>
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4">
        <div className="flex items-center gap-4">
          <FiPhone className="text-2xl text-green-400" />
          <span className="text-lg font-medium">97886-76100</span>
        </div>

        <div className="flex items-center gap-4">
          <FiMail className="text-2xl text-green-400" />
          <span className="text-lg font-medium">sahilkumar550sk@gmail.com</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 mt-6 text-center">
        You can reach out to us anytime through call or email for any queries.
      </p>
    </section>
  );
}

export default ContactPage;
