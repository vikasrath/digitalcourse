"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { FiPhone, FiMail } from 'react-icons/fi';

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
            <section className=" relative w-full bg-[#0A2025] lg:py-9 lg:px-8">

                <div className="lg:hidden fixed bottom-0 left-0 z-40 w-full px-4 pb-4 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] rounded-t-2xl">
                    <div className="flex justify-between px-4 items-center text-base font-semibold border-t pt-4 text-gray-800">
                        <span>Price</span>
                        <span>₹299</span>
                    </div>
                    <button
                        onClick={handlePayBtn}
                        className="w-full mt-4 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white text-lg font-semibold rounded-xl shadow-md hover:from-green-500 hover:to-green-600 transition-all duration-300"
                    >
                        Pay ₹299
                    </button>
                </div>

                <div className="mx-auto max-w-[1160px] ">
                    <header className="h-12 mb-8 justify-between items-center flex">
                        <h2 className=" text-white text-2xl font-bold font-['Roboto']">2000+ Cartoon bundle</h2>
                        <div className="flex "><svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5ZM20 36.5C16.7366 36.5 13.5465 35.5323 10.8331 33.7192C8.11969 31.9062 6.00484 29.3293 4.756 26.3143C3.50715 23.2993 3.1804 19.9817 3.81705 16.781C4.45371 13.5803 6.02518 10.6403 8.33275 8.33274C10.6403 6.02517 13.5803 4.4537 16.781 3.81704C19.9817 3.18039 23.2993 3.50714 26.3143 4.75599C29.3293 6.00483 31.9062 8.11968 33.7193 10.8331C35.5323 13.5465 36.5 16.7366 36.5 20C36.495 24.3745 34.7551 28.5685 31.6618 31.6618C28.5685 34.7551 24.3746 36.495 20 36.5ZM29 20C29 20.3978 28.842 20.7794 28.5607 21.0607C28.2794 21.342 27.8978 21.5 27.5 21.5H16.1206L19.5613 24.9387C19.7006 25.0781 19.8112 25.2436 19.8866 25.4257C19.962 25.6077 20.0008 25.8029 20.0008 26C20.0008 26.1971 19.962 26.3923 19.8866 26.5743C19.8112 26.7564 19.7006 26.9219 19.5613 27.0613C19.4219 27.2006 19.2564 27.3112 19.0744 27.3866C18.8923 27.462 18.6971 27.5008 18.5 27.5008C18.3029 27.5008 18.1078 27.462 17.9257 27.3866C17.7436 27.3112 17.5781 27.2006 17.4388 27.0613L11.4388 21.0613C11.2993 20.9219 11.1887 20.7565 11.1132 20.5744C11.0377 20.3923 10.9988 20.1971 10.9988 20C10.9988 19.8029 11.0377 19.6077 11.1132 19.4256C11.1887 19.2435 11.2993 19.0781 11.4388 18.9387L17.4388 12.9387C17.7202 12.6573 18.102 12.4992 18.5 12.4992C18.8981 12.4992 19.2798 12.6573 19.5613 12.9387C19.8427 13.2202 20.0008 13.602 20.0008 14C20.0008 14.398 19.8427 14.7798 19.5613 15.0613L16.1206 18.5H27.5C27.8978 18.5 28.2794 18.658 28.5607 18.9393C28.842 19.2206 29 19.6022 29 20Z"
                                fill="#449596" fillOpacity="0.5"></path>
                        </svg><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 0.5C16.1433 0.5 12.3731 1.64366 9.16639 3.78634C5.95963 5.92903 3.46027 8.97451 1.98436 12.5377C0.508449 16.1008 0.122284 20.0216 0.874696 23.8043C1.62711 27.5869 3.4843 31.0615 6.21143 33.7886C8.93855 36.5157 12.4131 38.3729 16.1957 39.1253C19.9784 39.8777 23.8992 39.4916 27.4623 38.0156C31.0255 36.5397 34.071 34.0404 36.2137 30.8336C38.3564 27.6269 39.5 23.8567 39.5 20C39.4945 14.83 37.4383 9.87322 33.7826 6.21745C30.1268 2.56167 25.1701 0.50546 20 0.5ZM20 36.5C16.7366 36.5 13.5465 35.5323 10.8331 33.7192C8.11969 31.9062 6.00484 29.3293 4.756 26.3143C3.50715 23.2993 3.1804 19.9817 3.81705 16.781C4.45371 13.5803 6.02518 10.6403 8.33275 8.33274C10.6403 6.02517 13.5803 4.4537 16.781 3.81704C19.9817 3.18039 23.2993 3.50714 26.3143 4.75599C29.3293 6.00483 31.9062 8.11968 33.7193 10.8331C35.5323 13.5465 36.5 16.7366 36.5 20C36.495 24.3745 34.7551 28.5685 31.6618 31.6618C28.5685 34.7551 24.3746 36.495 20 36.5ZM28.5613 18.9387C28.7007 19.0781 28.8114 19.2435 28.8868 19.4256C28.9623 19.6077 29.0012 19.8029 29.0012 20C29.0012 20.1971 28.9623 20.3923 28.8868 20.5744C28.8114 20.7565 28.7007 20.9219 28.5613 21.0613L22.5613 27.0613C22.2798 27.3427 21.8981 27.5008 21.5 27.5008C21.102 27.5008 20.7202 27.3427 20.4388 27.0613C20.1573 26.7798 19.9992 26.398 19.9992 26C19.9992 25.602 20.1573 25.2202 20.4388 24.9387L23.8794 21.5H12.5C12.1022 21.5 11.7207 21.342 11.4393 21.0607C11.158 20.7794 11 20.3978 11 20C11 19.6022 11.158 19.2206 11.4393 18.9393C11.7207 18.658 12.1022 18.5 12.5 18.5H23.8794L20.4388 15.0613C20.1573 14.7798 19.9992 14.398 19.9992 14C19.9992 13.602 20.1573 13.2202 20.4388 12.9387C20.7202 12.6573 21.102 12.4992 21.5 12.4992C21.8981 12.4992 22.2798 12.6573 22.5613 12.9387L28.5613 18.9387Z"
                                    fill="#3E9D26"></path>
                            </svg></div>
                    </header>
                    <main className="flex  flex-col  w-full  lg:w-[40%]  gap-10 ">
                        <div className=' '>
                            <Image
                                src="/cartoonimg.jpg"
                                alt="Cartoon Preview"
                                width={500}
                                height={400}
                                className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
                            />

                        </div>
                        <div>
                            <h3 className="text-white text-2xl font-bold font-['Roboto']">Description</h3>
                            <p className="mt-5 mb-8 text-white text-sm font-normal font-['Roboto']">COPYRIGHT FREE EDIT IT MAKE SHORTS IT AND USE IT ON FB, INSTA ETC CARTOON STORIES + FREE 500+ SHORT CARTOON STORY VIDEO.
                                for any course</p>
                            <section className="max-w-md mx-auto mt-10  p-2 lg:p-6 shadow-sm space-y-2">
                                <div className="flex justify-between text-base">
                                    <span>Price</span>
                                    <span className="line-through text-gray-500">₹999</span>
                                </div>

                                <div className="flex justify-between text-base">
                                    <span>Offer</span>
                                    <span className="text-green-600">₹700</span>
                                </div>

                                <div className="flex justify-between text-lg font-semibold border-t pt-4">
                                    <span>Total</span>
                                    <span>₹299</span>
                                </div>

                                <button onClick={handlePayBtn} className="  hidden lg:block lg w-full mt-4 py-3 bg-gradient-to-r from-green-400 to-green-500 text-white text-lg font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:from-green-500 hover:to-green-600">
                                    Pay ₹299
                                </button>

                            </section>


                        </div>
                      <ProductDescription/>
                        <blockquote className="border-l-4 border-gray-500 italic pl-4  max-w-md">
                            <h1>
                                <strong>Delivery:</strong>
                            </h1>
                            <p className="text-lg font-medium">After successful Razorpay payment, you'll instantly receive the PDF download. If not, we'll manually send it to you within a few minutes.</p>
                            <cite className="block text-right mt-4 text-gray-600">Sahil</cite>
                        </blockquote>
                       
                       <section className=" w-full border-b-2 border-white text-white">
                               
                             <h1 className="text-xl font-bold mb-6 ">Contact Us</h1>
                       
                             <div className=" w-full  rounded-xl  space-y-4">
                               <div className="flex  gap-2">
                                 <FiPhone className="text-xl text-green-400" />
                                 <span className="text-lg font-medium">97886-76100</span>
                               </div>
                               
                               <div className="flex ">
                                 <FiMail className="text-xl text-green-400" />
                                 <span className="text-lg font-medium">sahilkumar550sk@gmail.com</span>
                               </div>
                             </div>
                       
                             <p className="text-sm text-gray-400 mt-6 text-center">
                               You can reach out to us anytime through call or email for any queries.
                             </p>
                           </section>
                    </main>
                </div>
            </section>




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




const ProductDescription = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <div className="bg-gray-900 p-8 rounded-xl shadow-lg space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-400">
          Boost Your YouTube Channel with Ready-to-Use Cartoon Videos!
        </h2>

        <p className="text-lg">
          This digital product includes a downloadable <strong>PDF file</strong> that gives you instant access to a bundle of <strong>copyright-free cartoon videos</strong> hosted on Google Drive.
        </p>

        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
          <h3 className="text-xl font-semibold text-green-300">What You’ll Get:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>PDF file with Google Drive links</li>
            <li>High-quality copyright-free cartoon videos</li>
            <li>100% safe to use and monetize on YouTube</li>
            <li>One-time payment, lifetime access</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg space-y-3">
          <h3 className="text-xl font-semibold text-green-300">Why It’s Perfect for You:</h3>
          <ul className="list-disc pl-6 space-y-1 text-gray-300">
            <li>Save time – no need to make your own videos</li>
            <li>Start uploading and monetizing immediately</li>
            <li>Ideal for kids, animation, or educational channels</li>
          </ul>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p>📞 97886-76100 | 📧 sahilkumar550sk@gmail.com</p>
        </div>
      </div>
    </section>
  );
};


