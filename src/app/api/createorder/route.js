import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { amount } = data;


    console.log("keys", process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_KEY_SECRET);
    
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET, 
    });

    // creating order
    const order = await instance.orders.create({
      amount: amount * 100, 
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    });

    
    return NextResponse.json(order, { status: 200 });

  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
