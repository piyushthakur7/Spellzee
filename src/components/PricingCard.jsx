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
        {/* Top Absolute Badge */}
        <div className="pc-top-badge">
          SUMMER SPECIAL OFFER
        </div>

        {/* Main Content Area */}
        <div className="pc-content">
          
          {/* Left Section (Title + Calculation + Features) */}
          <div className="pc-left">
            <h2 className="pc-title">Simple & Affordable</h2>
            
            <div className="pc-calculation-row">
              <div className="pc-calc-box">
                <span className="pc-box-label">PER<br/>CLASS</span>
                <span className="pc-box-value">₹100</span>
              </div>
              
              <div className="pc-math-sign">×</div>
              
              <div className="pc-calc-box">
                <span className="pc-box-label">LIVE<br/>CLASSES</span>
                <span className="pc-box-value">45</span>
              </div>
              
              <div className="pc-math-sign">=</div>
              
              <div className="pc-calc-box pc-box-solid">
                <span className="pc-box-value-large">₹4,500</span>
                <span className="pc-box-sub-label">45 Sessions</span>
              </div>
            </div>

            <div className="pc-features">
              <span>• 45 Live Classes</span>
              <span>• Phonics Based</span>
              <span>• ACTD+ Certified Teachers</span>
            </div>
          </div>

          {/* Middle Section (Worksheet graphics + Tag) */}
          <div className="pc-middle-graphics">
            <div className="pc-tag-graphic">
              <span>Best<br/>Value</span>
            </div>
            
            <div className="pc-worksheets">
              <img src="/images/pricing/41-bed_page-00012.png" className="pc-sheet pc-sheet-left" alt="Worksheet 1" onError={(e) => { e.target.style.display = 'none'; }} />
              <img src="/images/pricing/45-kx_page-00013.png" className="pc-sheet pc-sheet-right" alt="Worksheet 2" onError={(e) => { e.target.style.display = 'none'; }} />
              <img src="/images/pricing/48-at-an-et-en_page-00012.png" className="pc-sheet pc-sheet-center" alt="Worksheet 3" onError={(e) => { e.target.style.display = 'none'; }} />
            </div>
          </div>

          {/* Right Section (White Card) */}
          <div className="pc-right-card">
            <div className="pc-total-label">TOTAL</div>
            <div className="pc-total-price">₹4,500</div>
            
            <div className="pc-seats-pill">
              <div className="pc-seats-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </div>
              <div className="pc-seats-text">
                Limited Seats<br/>Available
              </div>
            </div>

            <button onClick={() => setIsModalOpen(true)} className="pc-enroll-btn" style={{border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Enroll Now
            </button>
          </div>
        </div>

        {/* Bottom Absolute Guarantee Bar */}
        <div className="pc-bottom-guarantee">
          <div className="pc-guarantee-main">
            <svg viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            2-Class Risk-free | 100% Refund Guaranteed
          </div>
          <div className="pc-guarantee-sub">
            • 100% Refund if you're not satisfied after 2 classes
          </div>
        </div>
      </section>
    </div>
    <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}