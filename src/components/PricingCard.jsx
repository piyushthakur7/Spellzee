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
              <div className="pc-best-value-badge">
                <span className="pc-best-value-badge-text">Best<br/>Value</span>
              </div>
              <div className="pc-cta-card">
                <span className="pc-cta-label">TOTAL</span>
                <h3 className="pc-cta-price">₹4,500</h3>
                
                <div className="pc-seats-status">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>Limited Seats Available</span>
                </div>

                <button onClick={() => setIsModalOpen(true)} className="pc-enroll-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v8M8 12h8"/>
                  </svg>
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Floating Guarantee Bar (Now correctly positioned child of section) */}
          <div className="pc-floating-guarantee">
            <div className="pc-guarantee-inner">
              <div className="pc-shield-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.9533 0.510629C11.4691 0.481345 12.1031 0.497004 12.6275 0.497073L15.4653 0.498132L18.8656 0.496998C19.352 0.496266 20.8328 0.448232 21.2793 0.57297C21.5518 0.649079 22.2121 1.61356 22.4779 1.90625C23.993 3.57486 26.1545 4.4642 28.332 4.87548C28.5964 4.91958 29.0931 5.07245 29.2155 5.34017C29.4556 5.86523 29.3752 6.86217 29.3745 7.41924L29.3712 10.1678L29.3728 13.3764C29.3731 14.0245 29.3817 14.6735 29.3553 15.3212C29.0952 21.7136 24.7049 26.6384 19.4898 29.873C18.7934 30.3154 17.0014 31.2687 16.2424 31.459C15.4305 31.6625 12.8003 30.0708 12.0783 29.6115C7.83984 26.9156 4.09372 22.9125 2.97546 17.8854C2.81155 17.1459 2.70517 16.3948 2.65728 15.6389C2.61526 14.9135 2.6289 14.1525 2.62896 13.4224L2.63025 10.1254L2.62763 7.38658C2.62699 6.90433 2.61894 6.42124 2.63463 5.93945C2.66979 4.8597 3.46937 4.93867 4.26691 4.75186C6.60741 4.20358 8.88038 3.03083 10.2371 0.978585C10.4116 0.714604 10.5724 0.592435 10.878 0.526398C10.903 0.520948 10.9282 0.515691 10.9533 0.510629ZM18.2779 26.597C21.7004 24.3557 24.8545 21.1129 25.7174 16.984C25.8266 16.4595 25.8972 15.9277 25.9286 15.393C26.0482 13.165 25.8914 10.7594 25.9412 8.5153C25.9489 8.16405 25.7558 7.81039 25.4201 7.66417C23.846 7.0853 22.4173 6.38861 21.1121 5.31383C20.712 4.98436 20.0094 4.18045 19.5143 3.96702C18.7868 3.91252 17.7077 3.9088 16.9628 3.92583C15.5271 3.95867 13.9188 3.87042 12.5054 3.9502C12.0848 4.08133 11.6821 4.58905 11.3483 4.89814C10.1487 6.00902 8.72994 6.8287 7.20756 7.41249C6.89913 7.53102 6.39528 7.6988 6.17903 7.98614C5.98394 8.32749 6.03256 9.2813 6.03316 9.66339L6.03622 11.59C6.03612 12.855 5.98122 14.578 6.09925 15.8073C6.17166 16.577 6.32634 17.3368 6.56063 18.0736C7.86963 22.2214 11.5716 25.5152 15.3057 27.5524C15.6008 27.7134 15.9734 27.851 16.2927 27.72C16.9371 27.4553 17.6974 26.9769 18.2779 26.597Z" fill="#10A64A"/>
                  <path d="M13.1673 5.79389C14.57 5.74102 16.0167 5.81598 17.4232 5.7852C17.8732 5.77536 18.373 5.7767 18.8186 5.80861C19.0775 5.96698 19.3752 6.27408 19.6092 6.48483C19.8729 6.71961 20.1461 6.94352 20.4281 7.15592C21.1856 7.71739 21.9952 8.20495 22.8457 8.61186C23.2521 8.80683 23.6692 8.97364 24.077 9.16673C24.0942 10.3988 24.083 11.6546 24.0839 12.8883C24.0846 13.958 24.1306 15.2302 23.9489 16.269C23.3166 19.8853 20.6796 22.6295 17.7976 24.6726C17.3152 25.0093 16.5158 25.5426 15.9896 25.7891C14.4615 24.9941 12.7143 23.6405 11.4983 22.4261C9.74621 20.6763 8.33587 18.4854 8.00849 15.9873C7.88115 15.0154 7.91587 14.0123 7.91593 13.0285L7.91799 9.15489C9.35396 8.53698 10.4687 8.00452 11.725 7.02605C11.9346 6.86533 12.1378 6.69645 12.3341 6.5198C12.5396 6.33223 12.9645 5.90792 13.1673 5.79389ZM14.7899 16.9171C14.3721 16.5828 13.9569 16.0934 13.5601 15.7114C13.0653 15.2351 12.5819 14.554 11.7921 14.9543C11.7015 15.0015 11.6047 15.094 11.5409 15.1755C11.3895 15.3673 11.3213 15.6118 11.3516 15.8542C11.4107 16.3445 12.0936 16.8996 12.4659 17.2618C12.7585 17.5574 13.0963 17.8889 13.3819 18.1855C14.6073 19.4582 14.7899 19.5062 16.0245 18.3118L17.1651 17.2069C18.1734 16.2302 19.1997 15.2733 20.2033 14.2932C20.4515 14.0509 20.6843 13.7961 20.6644 13.4312C20.6288 12.7788 20.1113 12.5353 19.5437 12.5635C19.5256 12.5645 19.5073 12.5655 19.4891 12.5666C19.2148 12.6647 19.0046 12.8421 18.804 13.0494C17.543 14.3525 16.0108 15.5966 14.7899 16.9171Z" fill="#10A64A"/>
                </svg>
              </div>
              <div className="pc-guarantee-info">
                <div className="pc-guarantee-top-row">
                  <span className="pc-risk-free">2 - Class Risk-free</span>
                  <span className="pc-guarantee-divider"></span>
                  <span className="pc-refund-title">100% Refund Guaranteed</span>
                </div>
                <div className="pc-guarantee-bottom-row">
                  <span className="pc-guarantee-dot"></span>
                  <p className="pc-guarantee-sub">100% Refund if you're not satisfied after 2 classes</p>
                </div>
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