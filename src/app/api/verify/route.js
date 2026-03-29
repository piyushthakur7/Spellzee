import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    if (!process.env.RAZORPAY_KEY_SECRET) {
      console.error("Missing RAZORPAY_KEY_SECRET in environment variables.");
      return NextResponse.json(
        { message: "Payment verification service is not configured." },
        { status: 500 }
      );
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { message: "Missing required payment verification fields." },
        { status: 400 }
      );
    }

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment verified! Save to DB here if needed.
      return NextResponse.json(
        { message: "Payment verified successfully", verified: true },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid payment signature", verified: false },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
