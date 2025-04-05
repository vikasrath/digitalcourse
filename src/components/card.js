"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function Card() {
    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID; 
            console.log("Razorpay Key:", razorpayKey);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayBtn = async () => {
        try {
            // Create an order from backend
            const response = await fetch("/api/createorder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: 299 }),
            });

            const order = await response.json();

            
            

            const options = {
                key: razorpayKey,
                amount: 29900, // amount in paisa
                currency: "INR",
                name: "Cartoon Videos Bundle",
                description: "Get access to the PDF bundle",
                order_id: order.id,
                handler: function (response) {
                    if (response.razorpay_payment_id) {
                        setShowModal(true);
                    } else {
                        alert("sory something went wrong");
                    }
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error("Error while creating Razorpay order", error);
        }
    };

    return (
        <div className=" md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl">
                {/* Text Section */}
                <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Cartoon <span className="text-blue-600">Videos</span>
                        <span className="text-lg sm:text-xl text-gray-500 ml-2 font-medium">2.0</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 px-2 md:px-0">
                        Boost your YouTube reach with Cartoon reels! Get high-engagement short videos designed to go viral effortlessly.
                    </p>
                    <div>
                        <button
                            onClick={handlePayBtn}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
                        >
                            Pay ₹299
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0">
                    <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                        <Image
                            src="/cartoonimg.jpg"
                            alt="Cartoon Preview"
                            width={500}
                            height={400}
                            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>




            {/* ✅ Payment Success Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center animate-fadeIn">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                            <FaCheckCircle className="text-green-500 text-3xl" />
                            Payment Successful!
                        </h2>
                        <p className="text-gray-600 mb-6">Thank you for your purchase!</p>

                        <a
                            href="/bundlpdf.pdf"
                            download="bundlepdf.pdf"
                            className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Download PDF
                        </a>

                        <button
                            onClick={() => setShowModal(false)}
                            className="block mx-auto mt-4 text-blue-500 underline hover:text-blue-700 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}



