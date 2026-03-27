"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    parentLastName: '',
    whatsapp: '',
    childName: '',
    childAge: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!formData.parentName || !formData.whatsapp) {
      alert("Please fill in your first name and WhatsApp number.");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    try {
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 4500 }) // Total price
      });

      const data = await response.json();
      
      if (!response.ok || !data.orderId) {
        alert("Server error. Please try again.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "YOUR_KEY_ID",
        amount: 4500 * 100, // in paise
        currency: "INR",
        name: "Spellzee",
        description: "45 Days Reading Challenge",
        image: "/images/spellzee-logo.png",
        order_id: data.orderId,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          // Verify payment here via your backend if needed
        },
        prefill: {
          name: `${formData.parentName} ${formData.parentLastName}`.trim(),
          contact: formData.whatsapp,
        },
        theme: {
          color: "#f67825", // match branding
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment integration error:", error);
      alert("Something went wrong with the payment process.");
    }
  };

  return (
    <div className="payment-page-container">
      <header className="payment-header">
        <Link href="/" className="logo">
          <img src="/images/spellzee-logo.png" alt="Spellzee Logo" />
          <span>Spellzee</span>
        </Link>
      </header>
      
      <div className="payment-content">
        <div className="payment-left">
          <h2>45 Days Reading Challenge</h2>
          <div className="info-cards">
            <div className="info-card dark-card">
              <div className="card-icon">👨‍👩‍👧‍👦</div>
              <div className="card-text">
                <h4>Group Program</h4>
                <p>Interactive • Peer Learning • More Fun!</p>
              </div>
            </div>
            
            <div className="info-card dark-card">
              <div className="card-icon">₹</div>
              <div className="card-text">
                <h4>₹4,500</h4>
                <p>Just ₹100 / class</p>
              </div>
            </div>
            
            <div className="info-card dark-card">
              <div className="card-icon">🛡️</div>
              <div className="card-text">
                <h4>100% Refund Guarantee</h4>
                <p>Not happy after the first 2 classes?<br/>Full refund - no questions asked.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="payment-right">
          <div className="form-container">
            <h3>Parent Details</h3>
            <form onSubmit={handlePayment}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="parentName" placeholder="Enter first name" value={formData.parentName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="parentLastName" placeholder="Enter last name" value={formData.parentLastName} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-group">
                <label>WhatsApp / Mobile Number *</label>
                <div className="phone-input">
                  <span className="country-code">IN +91</span>
                  <input type="tel" name="whatsapp" placeholder="10-digit number" value={formData.whatsapp} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Child Name</label>
                  <input type="text" name="childName" placeholder="Enter child name" value={formData.childName} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Child Age</label>
                  <select name="childAge" value={formData.childAge} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                    <option value="7">7 Years</option>
                    <option value="8">8 Years</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="btn btn-orange btn-block reserve-btn">
                Reserve My Child's Seat
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
