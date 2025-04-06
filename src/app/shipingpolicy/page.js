import BackButton from '@/components/BackButton'
import React from 'react'

function page() {
    return (
        <section className="px-6 py-12 max-w-4xl mx-auto text-white">
            <BackButton/>
            <h1 className="text-3xl font-bold mb-6 text-center">Shipping Policy</h1>

            <p className="mb-4">
                Thank you for purchasing from <strong>https://www.sahilstore.shop/</strong>. Please read our shipping policy to understand how we deliver our digital products.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">1. Digital Delivery</h2>
            <p className="mb-4">
                All our products, including the copyright-free cartoon video bundles, are delivered digitally via a secure download link sent to your email after successful payment.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">2. Delivery Time</h2>
            <p className="mb-4">
                You will receive the download link within minutes of your purchase. In rare cases, delivery may take up to 1 hour. Please check your inbox and spam/junk folder.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">3. No Physical Shipment</h2>
            <p className="mb-4">
                As we deal only in digital goods, there is <strong>no physical shipping involved</strong>. You will not receive any physical item through postal or courier services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">4. Issues with Download</h2>
            <p className="mb-4">
                If you face any issues accessing or downloading the files, please contact us immediately. We are here to assist you:
            </p>
            <p className="mb-2"><strong>Email:</strong> https://www.sahilstore.shop/</p>
            <p><strong>Response Time:</strong> Within 24–48 business hours</p>

            <h2 className="text-2xl font-semibold mt-8 mb-2">5. File Format</h2>
            <p className="mb-4">
                All video files are provided in commonly supported formats such as MP4. Ensure your device supports the format before purchasing.
            </p>

            <p className="mt-6 text-sm text-gray-600">Last updated: April 6, 2025</p>
        </section>

    )
}

export default page