import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    
    // We use the same secret from our env variables to generate our own signature
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "YOUR_KEY_SECRET")
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Payment is completely verified and authentic. 
      // You can save this transaction to a DB here if you want.
      return NextResponse.json({ message: "Payment verified successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid payment signature" }, { status: 400 });
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
