import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    // Initialize razorpay object
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || "YOUR_KEY_ID",
      key_secret: process.env.RAZORPAY_KEY_SECRET || "YOUR_KEY_SECRET",
    });

    // Create an order
    const order = await razorpay.orders.create({
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Error creating order" },
      { status: 500 }
    );
  }
}
