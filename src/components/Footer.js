import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Viral Boost</h2>
          <p className="text-sm text-gray-400 mt-2">
            Your shortcut to viral success! Get trending content now.
          </p>
        </div>

        {/* Center - Quick Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-green-400 transition">Home</a>
          <a href="#" className="hover:text-green-400 transition">Bundles</a>
          <a href="#" className="hover:text-green-400 transition">About</a>
          <a href="#" className="hover:text-green-400 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaFacebookF /></a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaInstagram /></a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition text-xl"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-8 space-y-2">
        <p>© {new Date().getFullYear()} Viral Boost. All Rights Reserved.</p>
        <p>Contact: 9788676100</p>
        <p>Shipping Policy: Orders are processed within 2-3 business days.</p>
        <p>Refund Policy: Refunds are available within 7 days of purchase.</p>
        <p>Privacy Policy: We value your privacy. Your data will not be shared with third parties without consent.</p>
        <p>Terms & Conditions: By using our services, you agree to our terms, including timely payments and fair usage.</p>
      </div>

    </footer>
  );
};

export default Footer;
