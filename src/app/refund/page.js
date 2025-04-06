import BackButton from '@/components/BackButton'
import React from 'react'

function page() {
    return (
        <section className="px-6 py-12 max-w-4xl mx-auto text-white">
            <BackButton/>
            <h1 className="text-3xl font-bold mb-6 text-center">Cancellation & Refund Policy</h1>

            <p className="mb-4">
                At <strong>www.sahilstore.shop/</strong>, we aim to provide high-quality digital products that add real value to content creators. Before making a purchase, please read our policy regarding cancellations and refunds.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">1. Digital Product Nature</h2>
            <p className="mb-4">
                All of our products, including the copyright-free cartoon video bundles, are digital downloads. Once a purchase is completed and the download link is sent, it cannot be revoked or returned.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">2. No Cancellation After Purchase</h2>
            <p className="mb-4">
                As these are instant-access digital goods, we do not allow cancellations after the payment is completed. Please be sure of your purchase before proceeding to checkout.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">3. No Refund Policy</h2>
            <p className="mb-4">
                We have a strict <strong>no refund policy</strong> due to the downloadable and non-returnable nature of digital products. Once the files are delivered, we cannot offer a refund, exchange, or credit.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">4. Exceptions</h2>
            <p className="mb-4">
                Refunds will only be considered under the following circumstances:
            </p>
            <ul className="list-disc ml-6 mb-4">
                <li>The files are not accessible or corrupted, and we’re unable to fix the issue.</li>
                <li>You have been charged twice for the same order.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-2">5. Contact Us</h2>
            <p className="mb-4">
                If you believe your situation qualifies for an exception, please contact us within 7 days of purchase at:
            </p>
            <p className="mb-2"><strong>phone:</strong> 07886-76100</p>
            <p><strong>Response Time:</strong> Within 24–48 business hours</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">6. Final Note</h2>
            <p>
                We appreciate your understanding and encourage you to reach out if you have any concerns before purchasing. We’re always here to help!
            </p>

            <p className="mt-6 text-sm text-gray-600">Last updated: April 6, 2025</p>
        </section>

    )
}

export default page