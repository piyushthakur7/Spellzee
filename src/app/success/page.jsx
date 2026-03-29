"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import '../checkout/checkout.css';

export default function SuccessPage() {

  useEffect(() => {
    const end = Date.now() + 15 * 1000;
    
    const intervalId = setInterval(function() {
      if (Date.now() > end) {
        return clearInterval(intervalId);
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: Math.random() * 0.4 + 0.5,
          y: Math.random() * 0.4 + 0.3
        },
        colors: ['#ffffff', '#ffeedd', '#ffd1b3'],
        zIndex: 10
      });
    }, 250);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <Link href="/" className="logo-section">
            <img src="/images/spellzee-logo.png" alt="Spellzee Logo" />
            <span className="logo-text">Spellzee</span>
          </Link>
          
          <div className="success-header-title">
            <span className="success-text-black">Enrollment</span>
            <span className="success-text-orange">Completed!</span>
            <span>🎉</span>
          </div>

          <div className="success-card">
            <div className="sc-title">Thank You for Joining Spellzee!</div>
            <div className="sc-desc">
              Your child's learning journey with Spellzee has successfully started.
              We're excited to support them in building strong reading and phonics skills step by step.
            </div>
          </div>

          <div className="success-card">
            <div className="sc-title">Let's Stay Connected!</div>
            <div className="sc-desc">
              Join our community and support your child's learning journey every day!
            </div>
            <div className="social-links">
              <a href="#" className="social-icon">in</a>
              <a href="#" className="social-icon">f</a>
              <a href="#" className="social-icon">ig</a>
            </div>
          </div>
        </div>

        <div className="checkout-right">
           <div className="success-orange-box">
           </div>
        </div>
      </div>
    </div>
  );
}
