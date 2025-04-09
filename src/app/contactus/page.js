import BackButton from '@/components/BackButton';
import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
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

        <div className="flex items-center gap-4">
          <FiMapPin className="text-2xl text-green-400" />
          <span className="text-lg font-medium">Punjab, Sri Muktsar Sahib, Sail Gursala Street</span>
        </div>
      </div>

      <form className="mt-8 space-y-4 bg-gray-800 p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg"
        >
          Send Message
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6 text-center">
        You can reach out to us anytime through call, email, or by submitting the form above.
      </p>
    </section>
  );
};

export default Contact;
