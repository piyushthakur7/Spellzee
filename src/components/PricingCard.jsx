"use client";

import React from 'react';
import Link from 'next/link';
import './PricingCard.css';

export default function PricingCard() {
  return (
    <section className="pricing-banner" id="pricing">
      {/* Orange gradient background */}
      <div className="pricing-banner-bg">
        {/* Decorative floating elements */}
        <div className="pricing-float pricing-float-1">✦</div>
        <div className="pricing-float pricing-float-2">◆</div>
        <div className="pricing-float pricing-float-3">★</div>
        <div className="pricing-float pricing-float-4">●</div>
      </div>

      <div className="pricing-banner-content">
        <div className="pricing-tag">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
          </svg>
          Limited Time Offer
        </div>

        <h2 className="pricing-title">
          Start Your Child's <span className="pricing-title-highlight">Reading Journey</span> Today
        </h2>

        {/* Price card overlapping the banner */}
        <div className="pricing-card-main">
          <div className="pricing-card-header">
            <div className="pricing-program-name">45 Days Reading Challenge</div>
            <div className="pricing-program-type">Group Program • Live Classes</div>
          </div>

          <div className="pricing-price-row">
            <div className="pricing-price-left">
              <span className="pricing-old-price">₹9,999</span>
              <span className="pricing-new-price">₹4,500</span>
              <span className="pricing-price-sub">Just ₹100 per class</span>
            </div>
            <div className="pricing-discount-badge">55% OFF</div>
          </div>

          <div className="pricing-features">
            <div className="pricing-feature-item">
              <div className="pricing-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>45 Live Interactive Classes</span>
            </div>
            <div className="pricing-feature-item">
              <div className="pricing-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>250+ Worksheets & Activities</span>
            </div>
            <div className="pricing-feature-item">
              <div className="pricing-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>25+ Storybooks Included</span>
            </div>
            <div className="pricing-feature-item">
              <div className="pricing-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <span>Dedicated Progress Tracking</span>
            </div>
          </div>

          <Link href="/payment" className="pricing-enroll-btn" id="pricing-enroll-btn">
            <span>Enroll Now — ₹4,500</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>

          <div className="pricing-guarantee">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>100% Refund Guarantee — No questions asked after first 2 classes</span>
          </div>
        </div>

        {/* Trust badges below the card */}
        <div className="pricing-trust-row">
          <div className="pricing-trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="pricing-trust-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>SSL Encrypted</span>
          </div>
          <div className="pricing-trust-item">
            <img src="https://razorpay.com/build/browser/static/razorpay-logo-white.svg" alt="Razorpay" style={{height: '18px', filter: 'brightness(10)'}} onError={(e) => { e.target.style.display = 'none'; }} />
            <span>Powered by Razorpay</span>
          </div>
        </div>
      </div>
    </section>
  );
}