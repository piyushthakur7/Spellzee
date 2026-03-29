"use client";

import React, { useState } from 'react';
import EnrollmentModal from './EnrollmentModal';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badges">
            <span className="badge badge-summer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_7844_4712)">
                  <path d="M11.7395 0H11.9875H12.2792C12.4286 0.0700172 12.7245 0.208205 12.8172 0.333602C13.0598 0.661959 13.2585 1.09987 13.4401 1.46565L14.1705 2.92964L14.6933 3.97315C14.7757 4.13754 14.9214 4.40798 14.9807 4.57193C14.9955 4.61351 15.0091 4.65551 15.0214 4.69786C15.675 4.40013 16.634 4.12884 17.3403 3.88345C18.0226 3.64643 18.8056 3.3709 19.5023 3.21506C19.6992 3.171 19.9169 3.1872 20.1076 3.25852C20.3808 3.35822 20.6026 3.56318 20.7235 3.8276C20.8149 4.03003 20.8356 4.27123 20.7964 4.49069C20.7155 4.9429 20.5243 5.37417 20.3887 5.81191C20.0606 6.78572 19.7514 7.7674 19.4047 8.73466C19.378 8.80917 19.3374 8.9014 19.2999 8.9704C20.6592 9.54605 22.0348 10.3459 23.3709 10.9899C23.7537 11.1745 23.8144 11.3605 24 11.6977V12.282C23.7014 12.8734 23.5418 12.9473 22.9361 13.2347C21.7285 13.8076 20.537 14.4744 19.3235 15.0305C19.6506 15.9672 19.969 16.907 20.2786 17.8496C20.4725 18.4299 20.9865 19.6064 20.7321 20.1544C20.5987 20.4354 20.3604 20.6529 20.0682 20.76C19.5459 20.948 18.393 20.4364 17.8331 20.2547L16.0273 19.6566C15.7688 19.5702 15.2591 19.4152 15.0266 19.3049C14.8595 19.7669 14.3058 20.8081 14.0589 21.3027L13.4178 22.5859C13.1554 23.1102 12.9577 23.6892 12.3995 23.9487C12.3602 23.9667 12.3204 23.9838 12.2803 24H11.9917H11.7432C11.5761 23.9006 11.3343 23.8366 11.1983 23.6498C10.8649 23.1915 10.5787 22.5402 10.3224 22.0284C9.8618 21.1206 9.40915 20.2088 8.96454 19.2931C8.91021 19.3226 8.85408 19.3486 8.79649 19.371C8.62559 19.4369 8.43844 19.5021 8.26191 19.5567C6.98248 19.952 5.72154 20.4596 4.42723 20.7942C4.26028 20.8373 3.98245 20.7731 3.828 20.703C3.56025 20.5837 3.35332 20.3596 3.25566 20.0832C3.08367 19.5968 3.36935 18.9395 3.52777 18.4629L3.99466 17.0636L4.41279 15.8134C4.49405 15.5712 4.58824 15.2584 4.69385 15.0316C3.7204 14.5241 2.71575 14.0499 1.73617 13.5498C1.31041 13.3325 0.78874 13.1089 0.397481 12.8414C0.209344 12.7127 0.0871648 12.4434 0 12.2348V11.77C0.112181 11.6 0.118748 11.3566 0.329283 11.2004C0.815224 10.8396 1.4029 10.5938 1.94632 10.3226C2.85825 9.86063 3.77545 9.40917 4.69777 8.96831C4.67416 8.92214 4.653 8.87477 4.63437 8.8264C4.57781 8.67684 4.52025 8.50015 4.47262 8.34436C4.06669 7.01665 3.52113 5.70787 3.19894 4.36008C3.16479 4.2172 3.23067 3.95395 3.29109 3.82088C3.40983 3.55819 3.63098 3.35562 3.90302 3.26034C4.40791 3.08109 5.10073 3.38721 5.5928 3.5558C6.00895 3.69804 6.42595 3.8378 6.8438 3.97502L8.20943 4.42971C8.4173 4.49913 8.78334 4.61041 8.96391 4.69702C9.0852 4.49391 9.32358 3.96356 9.4433 3.72312L10.5647 1.47339C10.7443 1.11295 10.9516 0.637256 11.2013 0.327527C11.3236 0.175739 11.5768 0.088533 11.7395 0Z" fill="#FF5A00"/>
                  <path d="M11.7395 0H11.9875C12.0166 0.576884 11.9997 1.27672 11.9998 1.86302L12 5.4532L11.9974 18.5473L12 22.0762C12 22.6705 12.0202 23.4207 11.9917 24H11.7432C11.5761 23.9006 11.3343 23.8366 11.1983 23.6498C10.8649 23.1915 10.5787 22.5402 10.3224 22.0284C9.8618 21.1206 9.40915 20.2088 8.96454 19.2931C8.91021 19.3226 8.85408 19.3486 8.79649 19.371C8.62559 19.4369 8.43844 19.5021 8.26191 19.5567C6.98248 19.952 5.72154 20.4596 4.42723 20.7942C4.26028 20.8373 3.98245 20.7731 3.828 20.703C3.56025 20.5837 3.35332 20.3596 3.25566 20.0832C3.08367 19.5968 3.36935 18.9395 3.52777 18.4629L3.99466 17.0636L4.41279 15.8134C4.49405 15.5712 4.58824 15.2584 4.69385 15.0316C3.7204 14.5241 2.71575 14.0499 1.73617 13.5498C1.31041 13.3325 0.78874 13.1089 0.397481 12.8414C0.209344 12.7127 0.0871648 12.4434 0 12.2348V11.77C0.112181 11.6 0.118748 11.3566 0.329283 11.2004C0.815224 10.8396 1.4029 10.5938 1.94632 10.3226C2.85825 9.86063 3.77545 9.40917 4.69777 8.96831C4.67416 8.92214 4.653 8.87477 4.63437 8.8264C4.57781 8.67684 4.52025 8.50015 4.47262 8.34436C4.06669 7.01665 3.52113 5.70787 3.19894 4.36008C3.16479 4.2172 3.23067 3.95395 3.29109 3.82088C3.40983 3.55819 3.63098 3.35562 3.90302 3.26034C4.40791 3.08109 5.10073 3.38721 5.5928 3.5558C6.00895 3.69804 6.42595 3.8378 6.8438 3.97502L8.20943 4.42971C8.4173 4.49913 8.78334 4.61041 8.96391 4.69702C9.0852 4.49391 9.32358 3.96356 9.4433 3.72312L10.5647 1.47339C10.7443 1.11295 10.9516 0.637256 11.2013 0.327527C11.3236 0.175739 11.5768 0.088533 11.7395 0Z" fill="#FF5A00"/>
                  <path d="M11.9933 18.5472C10.2808 18.4595 8.917 18.0248 7.61186 16.8487C6.32768 15.6926 5.55715 14.0724 5.47068 12.3466C5.37576 10.6121 5.97719 8.91154 7.14145 7.62236C8.47582 6.14952 10.0546 5.54678 11.9959 5.45312L11.9933 18.5472Z" fill="#FFBB61"/>
                  <path d="M12.0026 5.45312C13.8701 5.5063 15.4614 6.1315 16.7616 7.50585C17.9582 8.7727 18.5995 10.4649 18.543 12.2066C18.4925 13.9521 17.7423 15.6041 16.4611 16.7908C15.2048 17.966 13.7034 18.5105 12 18.5472L12.0026 5.45312Z" fill="#FF8040"/>
                </g>
                <defs>
                  <clipPath id="clip0_7844_4712">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              Summer Course
            </span>
            <span className="badge badge-age">Age group 4 - 8</span>
          </div>
          <h1 className="hero-h1">
            <span className="big-number">45</span>
            <span className="days-text">Days</span>
            <div className="hero-subtitle">
              <span className="text-orange">Reading </span>
              <span style={{color: 'var(--text-body)'}}>Challenge</span>
            </div>
          </h1>
          <p className="hero-desc">Your child will <strong className="text-orange">READ & WRITE ENGLISH CONFIDENTLY</strong> — a proven phonics method trusted by 1000+ Parents across India.</p>
          <div className="hero-buttons">
            <button onClick={() => setIsModalOpen(true)} className="btn btn-orange" style={{border: 'none', cursor: 'pointer', fontFamily: 'inherit'}}>Enroll Now</button>
            <button className="btn btn-outline-peach">Limited Time offer</button>
          </div>
          
          <div className="hero-info-cards">
            <div className="info-card hero-info-card">
              <div className="card-icon">👥</div>
              <div className="card-text">
                <h4>Group Program</h4>
                <p>Interactive • Peer Learning • More Fun!</p>
              </div>
            </div>
            <div className="info-card hero-info-card" style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
              <div className="card-text">
                <h4 style={{fontSize: '24px'}}>₹4,500</h4>
                <p>Just ₹100 / class</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-orange-bg"></div>
            <img src="/images/hero-girl.png" alt="Happy child learning" className="hero-image" />
          </div>
          
          <div className="floating-stat stat-words">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="#FF6611" strokeWidth="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="#FF6611" strokeWidth="1.5" />
                <rect x="8.5" y="3" width="7" height="7" rx="1" stroke="#FF6611" strokeWidth="1.5" />
                <text x="5.5" y="19.5" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="#FF6611">C</text>
                <text x="16.5" y="19.5" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="#FF6611">B</text>
                <text x="11" y="8.5" fontFamily="Arial" fontSize="5" fontWeight="bold" fill="#FF6611">A</text>
              </svg>
            </div>
            <span className="stat-number">1000+ Words</span>
          </div>
          
          <div className="floating-stat stat-class">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6611" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <path d="M7 15h.01M17 15h.01" />
              </svg>
            </div>
            <span className="stat-number">₹100 Per Class</span>
          </div>
          
          <div className="floating-stat stat-stories">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF6611" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
            <span className="stat-number">25+ Stories</span>
          </div>
        </div>
      </div>
    </section>
    <EnrollmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
