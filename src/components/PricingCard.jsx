"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import './PricingCard.css';
import EnrollmentModal from './EnrollmentModal';

export default function PricingCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="pc-wrapper">
        <section className="pc-container" id="pricing">
          {/* Background Decorations (clipped to card) */}
          <div className="pc-ellipse-wrapper">
            <img src="/images/Ellipse%2021922.svg" className="pc-bg-ellipse pc-ellipse-1" alt="" aria-hidden="true" />
            <img src="/images/Ellipse%2021922.svg" className="pc-bg-ellipse pc-ellipse-2" alt="" aria-hidden="true" />
            <img src="/images/Ellipse%2021922.svg" className="pc-bg-ellipse pc-ellipse-3" alt="" aria-hidden="true" />
          </div>

          {/* Top Absolute Badge */}
          <div className="pc-top-badge">
            SUMMER SPECIAL OFFER
          </div>

          <div className="pc-content">
            {/* Left Section (Offer Content) */}
            <div className="pc-left">
              <h2 className="pc-title">Simple & Affordable</h2>
              
              <div className="pc-calculation-row">
                <div className="pc-calc-box">
                  <span className="pc-box-label">PER CLASS</span>
                  <span className="pc-box-value">₹100</span>
                </div>
                
                <div className="pc-math-sign">×</div>
                
                <div className="pc-calc-box">
                  <span className="pc-box-label">LIVE CLASSES</span>
                  <span className="pc-box-value">45</span>
                </div>
                
                <div className="pc-math-sign">=</div>
                
                <div className="pc-calc-box pc-box-highlight">
                  <span className="pc-box-highlight-value">₹4,500</span>
                  <span className="pc-box-highlight-sub">45 Sessions</span>
                </div>
              </div>

              <div className="pc-features-inline">
                <span>45 Live Classes</span>
                <span className="pc-dot">•</span>
                <span>Phonics Based</span>
                <span className="pc-dot">•</span>
                <span>ACTD - Certified Teachers</span>
              </div>
            </div>

            {/* Middle Section (Visual Stack) */}
            <div className="pc-middle">
              <div className="pc-visual-stack">
                <img src="/images/pricing/worksheet1.jpg" className="pc-visual-card card-left" alt="Worksheet 1" />
                <img src="/images/pricing/worksheet2.jpg" className="pc-visual-card card-right" alt="Worksheet 2" />
                <img src="/images/pricing/worksheet3.jpg" className="pc-visual-card card-center" alt="Worksheet 3" />
              </div>
            </div>

            {/* Right Section (CTA Panel) */}
            <div className="pc-right">
              <div className="pc-cta-card">
                <div className="pc-best-value-badge">
                  Best Value
                </div>
                <div className="pc-cta-header">
                  <span className="pc-cta-label">TOTAL</span>
                  <h3 className="pc-cta-price">₹4,500</h3>
                </div>
                
                <div className="pc-seats-status">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Limited Seats Available
                </div>

                <button onClick={() => setIsModalOpen(true)} className="pc-enroll-button">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Floating Guarantee Bar (Overlapping) */}
          <div className="pc-floating-guarantee">
            <div className="pc-guarantee-inner">
              <div className="pc-shield-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <div className="pc-guarantee-info">
                <span className="pc-guarantee-title">2 - Class Risk-free  |  100% Refund Guaranteed</span>
                <p className="pc-guarantee-sub">• 100% Refund if you're not satisfied after 2 classes</p>
              </div>
            </div>
          </div>
        </section>

        {/* 100% Width Anchoring Strip (Bottom Layer) */}
        <div className="pc-anchoring-strip"></div>
      </div>
    <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}