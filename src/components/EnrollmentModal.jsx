"use client";

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import './EnrollmentModal.css';

export default function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    batchTime: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const ages = ['4 yrs', '5 yrs', '6 yrs', '8 yrs', '7 yrs'];
  const batches = [
    { time: '11:00 AM', date: 'Mon-Fri Apr 1 onwards', icon: '🌅', status: 'AVAILABLE', statusType: 'available' },
    { time: '6:00 PM', date: 'Mon-Fri Apr 1 onwards', icon: '🌇', status: 'FILLING FAST', statusType: 'filling' },
    { time: '7:00 PM', date: 'Mon-Fri Apr 1 onwards', icon: '🌙', status: 'FEW SEATS', statusType: 'few' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError(null);
  };

  const handlePayment = async () => {
    if (!formData.childName) return setError("Please enter your child's name");
    if (!formData.childAge) return setError("Please select your child's age");
    if (!formData.batchTime) return setError("Please select a preferred batch time");
    if (!formData.phone || formData.phone.length < 10) return setError("Please enter a valid 10-digit WhatsApp/Mobile number");

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 4500, // ₹4500
          customerDetails: formData
        })
      });

      const orderData = await res.json();
      
      if (!res.ok) throw new Error(orderData.error || 'Failed to initialize payment');

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_YourKeyID",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Spellzee",
        description: "45 Days Reading Challenge",
        image: "https://spellzee.in/wp-content/uploads/2022/07/spellzee-latest-logo.png",
        order_id: orderData.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch('/api/verify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              })
            });
            const verifyData = await verifyRes.json();
            
            if (verifyData.isOk) {
              window.location.href = '/success';
            } else {
              setError("Payment verification failed. Please contact support.");
              setLoading(false);
            }
          } catch (err) {
            console.error(err);
            setError("Payment verification failed. Please contact support.");
            setLoading(false);
          }
        },
        prefill: {
          name: formData.childName,
          contact: formData.phone,
        },
        theme: {
          color: "#FF5A00"
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on('payment.failed', function (response){
        setError(`Payment Failed: ${response.error.description}`);
        setLoading(false);
      });
      rzp1.open();
    } catch (err) {
      console.error(err);
      setError(err.message || 'Payment initiation failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      
      <div className="em-overlay" onClick={onClose}>
        <div className="em-modal" onClick={(e) => e.stopPropagation()}>
          <button className="em-close" onClick={onClose}>×</button>
          
          <div className="em-header">
            <h2>Secure Your Child's <span style={{color: '#FF5A00'}}>Summer Spot</span></h2>
            <p>Takes less than a minute. We'll WhatsApp you to confirm your seat.</p>
          </div>

          <div className="em-body">
            {/* Left Column */}
            <div className="em-left">
              <div className="em-badges">
                <div className="em-badge-item">
                  <div className="em-badge-icon">
                    <img src="/images/trust/iit-madras-logo.png" alt="IIT" style={{width: '14px', height: '14px', objectFit: 'contain'}} onError={(e) => {e.target.style.display='none'}}/>
                  </div>
                  IIT-Madras Incubated
                </div>
                <div className="em-badge-item">
                  <div className="em-badge-icon">
                    <img src="/images/actd-logo.png" alt="ACTD" style={{width: '20px', height: '14px', objectFit: 'contain'}} onError={(e) => {e.target.style.display='none'}}/>
                  </div>
                  ACTD Accredited
                </div>
                <div className="em-badge-item">
                  <span style={{fontSize: '14px'}}>★</span> 4.9
                </div>
              </div>

              <div className="em-summary">
                <div className="em-summary-header">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  What You're Enrolling In
                </div>
                
                <div className="em-summary-list">
                  <div className="em-summary-item">
                    <div className="em-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">STARTS</span>
                      <span className="em-item-value">April 1, 2025</span>
                    </div>
                  </div>
                  <div className="em-summary-item">
                    <div className="em-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">CLASSES</span>
                      <span className="em-item-value">45 Classes - 1 Hr/Day 5 Days/Week</span>
                    </div>
                  </div>
                  <div className="em-summary-item">
                    <div className="em-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">ACTIVITIES</span>
                      <span className="em-item-value">Special Activities Every Session</span>
                    </div>
                  </div>
                  <div className="em-summary-item">
                    <div className="em-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">CLASSES</span>
                      <span className="em-item-value">Live Online. Interactive • Real-time</span>
                    </div>
                  </div>
                  <div className="em-summary-item">
                    <div className="em-icon-box">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2z"></path></svg>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">INCLUDES</span>
                      <span className="em-item-value">Free Worksheets + Flashcards</span>
                    </div>
                  </div>
                  <div className="em-summary-item">
                    <div className="em-icon-box" style={{background: '#FF5A00'}}>
                      <span style={{fontSize: '20px', fontWeight: 'bold'}}>₹</span>
                    </div>
                    <div className="em-item-text">
                      <span className="em-item-label">TOTAL FEE</span>
                      <span className="em-item-value">₹4,500 <span style={{fontSize: '12px', color: '#666', fontWeight: 600}}>₹100/class</span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="em-guarantee">
                <div className="em-guarantee-title">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  100% Refund Guarantee
                </div>
                <p>Not happy after the first 2 classes?<br/>Full refund - no questions asked.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="em-right">
              <h3>Join Spellzee</h3>
              
              {error && (
                <div className="em-error">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  {error}
                </div>
              )}

              <div className="em-form-group">
                <label className="em-label">Child's Name <span>*</span></label>
                <input 
                  type="text" 
                  className="em-input" 
                  placeholder="e.g. Aarav, Priya..." 
                  value={formData.childName}
                  onChange={(e) => handleInputChange('childName', e.target.value)}
                />
              </div>

              <div className="em-form-group">
                <label className="em-label">Child's Age <span>*</span></label>
                <div className="em-age-selector">
                  {ages.map(age => (
                    <button 
                      key={age}
                      className={`em-age-btn ${formData.childAge === age ? 'selected' : ''}`}
                      onClick={() => handleInputChange('childAge', age)}
                    >
                      {age}
                    </button>
                  ))}
                </div>
              </div>

              <div className="em-form-group">
                <label className="em-label">Preferred Batch Time <span>*</span></label>
                <div className="em-batch-list">
                  {batches.map(batch => (
                    <div 
                      key={batch.time}
                      className={`em-batch-card ${formData.batchTime === batch.time ? 'selected' : ''}`}
                      onClick={() => handleInputChange('batchTime', batch.time)}
                    >
                      <div className="em-radio"></div>
                      <div className="em-batch-icon">{batch.icon}</div>
                      <div className="em-batch-info">
                        <div className="em-batch-time">{batch.time}</div>
                        <div className="em-batch-date">{batch.date}</div>
                      </div>
                      <div className={`em-batch-status status-${batch.statusType}`}>
                        {batch.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="em-form-group">
                <label className="em-label">WhatsApp / Mobile Number<span>*</span></label>
                <div className="em-phone-input">
                  <div className="em-country-code">IN +91</div>
                  <input 
                    type="tel" 
                    className="em-input" 
                    placeholder="10-digit number" 
                    maxLength="10"
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      handleInputChange('phone', val);
                    }}
                  />
                </div>
              </div>

              <button className="em-submit" onClick={handlePayment} disabled={loading}>
                {loading ? (
                  <><span className="em-spinner"></span> Processing...</>
                ) : (
                  "Reserve My Child's Seat"
                )}
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
