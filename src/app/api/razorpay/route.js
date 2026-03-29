import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Missing Razorpay API keys in environment variables.");
      return NextResponse.json(
        { error: "Payment service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    const body = await req.json();
    const amount = Number(body.amount);

    if (!amount || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount provided." },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100), // amount in paise
      currency: "INR",
      receipt: "spellzee_" + Date.now() + "_" + Math.random().toString(36).substring(7),
    });

    return NextResponse.json({ orderId: order.id }, { status: 200 });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Error creating order. Please try again." },
      { status: 500 }
    );
  }
}
