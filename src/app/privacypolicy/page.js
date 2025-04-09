import BackButton from '@/components/BackButton'
import React from 'react'

function page() {
    return (
        <section class="max-w-4xl mx-auto px-4 py-8 text-gray-800">
            <BackButton/>
            <h1 class="text-3xl font-bold mb-6 text-center text-white">Privacy Policy</h1>

            <div class="space-y-6 text-base leading-relaxed overflow-y-auto max-h-[80vh] p-4 bg-white rounded-2xl shadow-md">

                <p><strong>Effective Date:</strong>April 7, 2025</p>

                <p>Thank you for visiting our website. This Privacy Policy outlines how we handle your data when you purchase our digital product — a PDF containing a bundle of copyright-free cartoon videos hosted on Google Drive.</p>

                <p>We value your privacy and want to assure you that <strong>we do not collect any personal information manually</strong>. All payments and data processing are handled securely by Razorpay.</p>

                <h2 class="text-xl font-semibold mt-4">1. What We Offer</h2>
                <p>Our product is a <strong>digital bundle</strong> (PDF) that contains links to copyright-free cartoon videos. These videos are safe to use and monetize on platforms like YouTube.</p>

                <h2 class="text-xl font-semibold mt-4">2. Data Collection</h2>
                <p>We <strong>do not collect any personal information</strong> manually. All payment transactions are securely processed by <strong>Razorpay</strong>, and any data like your email or phone number is handled under Razorpay’s Privacy Policy.</p>
                <p>We <strong>do not</strong> store or access your payment or personal details.</p>

                <h2 class="text-xl font-semibold mt-4">3. Product Delivery</h2>
                <p>Once your payment is completed, you’ll receive the PDF either through an <strong>auto-download page</strong> or <strong>manual delivery</strong> if needed.</p>
                <p>If you face any issue, please contact us directly.</p>

                <h2 class="text-xl font-semibold mt-4">4. Data Sharing</h2>
                <p>Since we don’t collect your data, there is nothing to share or sell. Simple as that.</p>

                <h2 class="text-xl font-semibold mt-4">5. Security</h2>
                <p>We rely on <strong>Razorpay’s secure payment system</strong> to ensure your data and transactions are protected.</p>

                <h2 class="text-xl font-semibold mt-4">6. Contact Us</h2>
                <ul class="list-disc list-inside">
                    <li><strong>Phone:</strong> +91 97886-76100</li>
                    <li><strong>Email:</strong> sahilkumar550sk@gmail.com</li>
                </ul>

                <h2 class="text-xl font-semibold mt-4">7. Changes to This Policy</h2>
                <p>We may update this Privacy Policy in the future. All changes will be shown on this page with an updated effective date.</p>

            </div>
        </section>

    )
}

export default page