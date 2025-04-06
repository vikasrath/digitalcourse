import BackButton from '@/components/BackButton'
import React from 'react'

function page() {
    return (
        <section className="px-6 py-12 max-w-4xl mx-auto text-white">
            <BackButton/>
            <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

            <p className="mb-4">This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website <strong>[YourWebsiteName.com]</strong>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
            <p className="mb-4">When you make a purchase or attempt to make a purchase, we collect personal information such as your name, email address, and payment details. We also collect basic device information through cookies (IP address, browser type, etc.).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Deliver your product via email or download link</li>
                <li>Process your payment securely</li>
                <li>Communicate with you regarding your order</li>
                <li>Improve our site performance and offerings</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Security</h2>
            <p className="mb-4">We use industry-standard security measures to protect your personal information. Payment processing is handled securely through trusted third-party gateways (e.g., Razorpay, Stripe, PayPal).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing Your Information</h2>
            <p className="mb-4">We do not sell, rent, or share your personal data with third parties, except as necessary to provide our services (such as payment processing).</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">5. Cookies</h2>
            <p className="mb-4">We use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
            <p className="mb-4">You have the right to access, correct, or delete any personal information we hold about you. To make a request, please contact us at <strong>[your@email.com]</strong>.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">7. Changes to This Policy</h2>
            <p className="mb-4">We may update this policy from time to time. Any changes will be posted on this page with a new "Last Updated" date.</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">8. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, feel free to contact us at:</p>
            <p className="mt-2"><strong>Email:</strong> [your@email.com]</p>
            <p><strong>Last Updated:</strong> April 6, 2025</p>
        </section>

    )
}

export default page