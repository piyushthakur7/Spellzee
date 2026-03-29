"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './payment.css';

export default function PaymentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    parentName: '',
    parentLastName: '',
    whatsapp: '',
    childName: '',
    childAge: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const verifyPayment = async (response) => {
    try {
      const res = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });

      const data = await res.json();

      if (res.ok && data.verified) {
        // Payment verified — redirect to success page
        router.push('/success');
      } else {
        setError('Payment verification failed. Please contact support.');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Verification error:', err);
      setError('Could not verify payment. Please contact support.');
      setIsLoading(false);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.parentName.trim()) {
      setError('Please enter your first name.');
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.trim().length < 10) {
      setError('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    setIsLoading(true);

    const res = await loadRazorpayScript();
    if (!res) {
      setError('Razorpay SDK failed to load. Please check your connection.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: 1 })
      });

      const data = await response.json();
      
      if (!response.ok || !data.orderId) {
        setError(data.error || 'Server error. Please try again.');
        setIsLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: 1 * 100,
        currency: "INR",
        name: "Spellzee",
        description: "45 Days Reading Challenge",
        image: "/images/spellzee-logo.png",
        order_id: data.orderId,
        handler: function (response) {
          // Verify the payment server-side
          verifyPayment(response);
        },
        prefill: {
          name: `${formData.parentName} ${formData.parentLastName}`.trim(),
          contact: formData.whatsapp,
        },
        theme: {
          color: "#FF5A00",
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
          }
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        setError(`Payment failed: ${response.error.description}`);
        setIsLoading(false);
      });
      paymentObject.open();
    } catch (error) {
      console.error("Payment integration error:", error);
      setError('Something went wrong. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="pay-page">
      {/* Header */}
      <header className="pay-header">
        <Link href="/" className="pay-logo">
          <img src="/images/spellzee-logo.png" alt="Spellzee" />
          <span>Spellzee</span>
        </Link>
        <div className="pay-header-secure">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <span>Secure Checkout</span>
        </div>
      </header>

      <div className="pay-body">
        {/* Left — Info */}
        <div className="pay-info">
          <div className="pay-info-inner">
            <h2 className="pay-info-title">
              <span className="pay-big-num">45</span>
              <span>Days Reading Challenge</span>
            </h2>

            <div className="pay-highlights">
              <div className="pay-highlight-item">
                <div className="pay-hi-icon">👥</div>
                <div>
                  <h4>Group Program</h4>
                  <p>Interactive • Peer Learning • More Fun!</p>
                </div>
              </div>
              <div className="pay-highlight-item">
                <div className="pay-hi-icon">💰</div>
                <div>
                  <h4>₹1 <span className="pay-strike">₹9,999</span></h4>
                  <p>Just ₹100 / class</p>
                </div>
              </div>
              <div className="pay-highlight-item">
                <div className="pay-hi-icon">🛡️</div>
                <div>
                  <h4>100% Refund Guarantee</h4>
                  <p>Not happy after 2 classes? Full refund.</p>
                </div>
              </div>
            </div>

            <div className="pay-included">
              <h4>What's Included</h4>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  45 Live Interactive Classes
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  250+ Worksheets & Activities
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  25+ Storybooks
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  Progress Tracking Dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="pay-form-wrapper">
          <div className="pay-form-card">
            <h3 className="pay-form-title">Parent & Child Details</h3>
            <p className="pay-form-sub">Fill in your details to secure your child&apos;s spot</p>

            {error && (
              <div className="pay-error">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handlePayment}>
              <div className="pay-form-row">
                <div className="pay-form-group">
                  <label>First Name <span className="pay-required">*</span></label>
                  <input type="text" name="parentName" placeholder="Enter first name" value={formData.parentName} onChange={handleChange} />
                </div>
                <div className="pay-form-group">
                  <label>Last Name</label>
                  <input type="text" name="parentLastName" placeholder="Enter last name" value={formData.parentLastName} onChange={handleChange} />
                </div>
              </div>
              
              <div className="pay-form-group">
                <label>WhatsApp / Mobile <span className="pay-required">*</span></label>
                <div className="pay-phone-input">
                  <span className="pay-country-code">
                    <span>🇮🇳</span> +91
                  </span>
                  <input type="tel" name="whatsapp" placeholder="10-digit number" value={formData.whatsapp} onChange={handleChange} maxLength="10" />
                </div>
              </div>

              <div className="pay-form-row">
                <div className="pay-form-group">
                  <label>Child's Name</label>
                  <input type="text" name="childName" placeholder="Enter child name" value={formData.childName} onChange={handleChange} />
                </div>
                <div className="pay-form-group">
                  <label>Child's Age</label>
                  <select name="childAge" value={formData.childAge} onChange={handleChange}>
                    <option value="">Select age</option>
                    <option value="4">4 Years</option>
                    <option value="5">5 Years</option>
                    <option value="6">6 Years</option>
                    <option value="7">7 Years</option>
                    <option value="8">8 Years</option>
                  </select>
                </div>
              </div>
              
              <button type="submit" className="pay-submit-btn" disabled={isLoading} id="pay-submit-btn">
                {isLoading ? (
                  <>
                    <span className="pay-spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    Reserve My Child&apos;s Seat — ₹1
                  </>
                )}
              </button>
            </form>

            <div className="pay-form-footer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span>Your details are safe & encrypted. Payments powered by Razorpay.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
