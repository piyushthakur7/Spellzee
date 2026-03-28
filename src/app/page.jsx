"use client";

import { useState } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <header>
        <div className="container nav">
          <div className="logo-group">
            <div className="logo-first" aria-label="Spellzee Icon"></div>
            <div className="logo-second" aria-label="Spellzee Logo"></div>
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="active" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <a href="#review" onClick={() => setMobileMenuOpen(false)}>Review</a>
          </div>
          <a href="https://wa.me/919361102618" className="whatsapp-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat with us
          </a>
          <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

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
                <span style={{color: '#111'}}>Challenge</span>
              </div>
            </h1>
            <p className="hero-desc">Your child will <strong className="text-orange">READ & WRITE ENGLISH CONFIDENTLY</strong> — a proven phonics method trusted by 1000+ Parents across India.</p>
            <div className="hero-buttons">
              <a href="/payment" className="btn btn-orange">Enroll Now</a>
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
              <div className="info-card hero-info-card">
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
                  <text x="5.5" y="19.5" font-family="Arial" font-size="5" font-weight="bold" fill="#FF6611">C</text>
                  <text x="16.5" y="19.5" font-family="Arial" font-size="5" font-weight="bold" fill="#FF6611">B</text>
                  <text x="11" y="8.5" font-family="Arial" font-size="5" font-weight="bold" fill="#FF6611">A</text>
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

      <div className="feature-ribbon">
          <div className="ribbon-track">
              {["25+ Stories", "Read & Write English", "Group Program", "5 Classes", "Progress Tracking", "ACTD Certified"].map((item, i) => (
                <div key={i} className="ribbon-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {item}
                </div>
              ))}
              {/* Duplicate */}
              {["25+ Stories", "Read & Write English", "Group Program", "5 Classes", "Progress Tracking", "ACTD Certified"].map((item, i) => (
                <div key={i+"-dup"} className="ribbon-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {item}
                </div>
              ))}
          </div>
      </div>

      <section className="trust-section" id="about">
        <div className="container">
          <div className="trust-card-wrapper">
            <h2 className="trust-heading"><span className="text-orange">Trusted by</span> Parents. Backed by Experts.</h2>
            <div className="trust-grid">
              {/* IIT-Madras */}
              <div className="trust-item">
                <div className="trust-item-logo">
                  <div style={{width: '60px', height: '60px', borderRadius: '50%', border: '1px solid #ddd', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', padding: '2px', textAlign: 'center'}}>
                    <div style={{width: '50px', height: '50px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <svg viewBox="0 0 100 100" width="50" height="50">
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#ddd" strokeWidth="1" />
                        <path d="M20 70C20 70 35 50 50 50C65 50 80 70 80 70M20 50C20 50 35 30 50 30C65 30 80 50 80 50" stroke="#FF5A00" strokeWidth="2" fill="none" />
                        <text x="50" y="92" fontSize="8" fontWeight="bold" textAnchor="middle" fill="#666">ITM</text>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="trust-item-label">IIT-Madras</div>
                <h4 style={{fontSize: '20px', fontWeight: '700', color: '#000', margin: '4px 0'}}>Incubated Company</h4>
                <div className="trust-badge-pill verified">
                  <div className="badge-icon-rosette">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  Verified
                </div>
              </div>

              {/* ACTD */}
              <div className="trust-item">
                <div className="trust-item-logo">
                  <img src="/images/actd-logo.png" alt="ACTD Accredited" style={{height: '60px', objectFit: 'contain'}} />
                </div>
                <div className="trust-item-label">ACTD Accredited</div>
                <h4 style={{fontSize: '20px', fontWeight: '700', color: '#000', margin: '4px 0'}}>Certified Teachers Methods</h4>
                <div className="trust-badge-pill accredited">
                  <div className="badge-icon-rosette">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  Accredited
                </div>
              </div>

              {/* Happy Parents */}
              <div className="trust-item">
                <div className="trust-item-logo" style={{height: '60px', display: 'flex', alignItems: 'center'}}>
                  <div className="trust-item-label" style={{margin: 0}}>10,000+</div>
                </div>
                <h4 style={{fontSize: '20px', fontWeight: '700', color: '#000', margin: '4px 0'}}>Happy Parents</h4>
                <p style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Across India</p>
                <div className="trust-badge-pill approved">
                  <div className="badge-icon-rosette">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  Approved
                </div>
              </div>

              {/* Rating */}
              <div className="trust-item">
                <div className="trust-item-logo" style={{height: '60px', display: 'flex', alignItems: 'center'}}>
                  <div className="trust-item-label" style={{margin: 0}}>4.9 <span style={{fontSize: '24px'}}>★</span></div>
                </div>
                <h4 style={{fontSize: '20px', fontWeight: '700', color: '#000', margin: '4px 0'}}>Parent Rating</h4>
                <p style={{fontSize: '14px', color: '#666', marginBottom: '8px'}}>Based on 512 Reviews</p>
                <div className="trust-badge-pill rated">
                  <div className="badge-icon-rosette">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                  </div>
                  Rated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="difference-section section-padding">
        <div className="container">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', marginBottom: '48px'}}>
            <span className="section-badge">
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.99999 0L9.91421 5.88833L15.6077 6.04027L11.1636 9.61559L12.78 15.3524L7.99999 12.16L3.21999 15.3524L4.83636 9.61559L0.392275 6.04027L6.08578 5.88833L7.99999 0Z" fill="#FF5A00"/>
              </svg>
              The Spellzee Difference
            </span>
            <h2 className="section-heading" style={{margin: 0}}>Why 1000+ Parents <span className="text-orange">Choose Spellzee</span></h2>
            <p className="section-subtext" style={{margin: 0}}>Not just another English class. A structured phonics system that actually works — in 45 days.</p>
          </div>
          <div className="difference-grid">
            <div className="diff-card">
              <h3>Why Most Kids Struggle</h3>
              <p>It's not about intelligence. It's about a missing step — <strong className="text-orange">no one taught them the sounds behind the words.</strong> Without phonics, reading feels like guesswork.</p>
            </div>
            <div className="diff-card">
              <h3>Sounds First. Always.</h3>
              <p>We don't start with letters — we start with sounds. Our phonics-first method turns every word into something a child can decode, read, and write on their own.</p>
            </div>
            <div className="diff-card">
              <h3>You'll See It. Every Week.</h3>
              <p>No vague promises. Every child gets a <strong className="text-orange">Progress Tracking Card</strong> — updated each session so parents know exactly what was mastered and how far their child has come.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="curriculum-section section-padding">
          <div className="container">
              <span className="section-badge section-badge-orange">CURRICULUM OVERVIEW</span>
              <h2 className="section-heading">What Your Child Learns - <span className="text-orange">5 Phases</span></h2>
              <div className="curriculum-grid">
                {[
                  { title: "3-Letter Words", desc: "Short vowel sounds – Read 3-letter words Write from dictation Spelling confidence", phase: "Phase 1", icon: "" },
                  { title: "CVC Words", desc: "Phonics pyramid blending Read 20+ CVC words Write from dictation", phase: "Phase 2", icon: "/images/curriculum/phase-2.png" },
                  { title: "CCVC Words", desc: "Consonant cluster blending Read flag, clap, drip Write clusters from picture", phase: "Phase 3", icon: "/images/curriculum/phase-3.png" },
                  { title: "Word Families", desc: "–at, -an, -et, -en patterns –Read & write word groups –Ending k & x sounds", phase: "Phase 4", icon: "/images/curriculum/phase-4.png" },
                  { title: "Stories + Sentences", desc: "Read 10+ decodable stories Write full sentences Final evaluation", phase: "Phase 5", icon: "/images/curriculum/phase-5.png" },
                ].map((item, i) => (
                  <div key={i} className="curriculum-card">
                    <div className="curriculum-icon-box">
                      {item.icon ? (
                        <img src={item.icon} alt={item.title} />
                      ) : (
                        <div className="placeholder-icon" style={{width: '32px', height: '32px', border: '2px dashed #fff', borderRadius: '4px'}}></div>
                      )}
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="phase-footer">
                      <div className="phase-separator"></div>
                      <div className="phase-info">
                        <span className="phase-side-bar"></span>
                        <span className="phase-name">{item.phase}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="note-curriculum-container">
                <img src="/images/pin-icon.png" alt="Note" className="note-pin-icon" />
                <p>
                  Note for Parents: This is a <span className="text-orange">Phonics Basics program</span>, not a complete advanced phonics course. Children master the core foundations — short vowels, CVC words, word families, and sentence writing. Advanced topics (blends, digraphs, long vowels) are in our next-level programs.
                </p>
              </div>
          </div>
      </section>

      <section className="teaching-section section-padding">
        <div className="container">
          <div className="teaching-header-container">
            <div className="teaching-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: "4px"}}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><circle cx="12" cy="11" r="2.5"/><path d="M16 19v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1"/></svg>
              OUR TEACHING METHOD
            </div>
            <h2 className="section-heading" style={{fontSize: "44px", fontWeight: "800", marginBottom: "16px"}}>How We <span className="text-orange">Teach ?</span></h2>
            <p className="teaching-subtext">Every session is engaging, structured, and effective &#x2012; even for the youngest learners in a<br/>group setting.</p>
          </div>
          <div className="teaching-grid">
            {[
              { title: "Listen, Repeat & Recognise", tag: "Auditory Learning", text: "Every class begins with audio-first phonics &ndash; children hear the sound, repeat it aloud, and match it to the letter. This builds strong ear-to-eye connections before any writing begins.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14v-4a8 8 0 0 1 16 0v4"/><rect x="2" y="14" width="4" height="7" rx="2"/><rect x="18" y="14" width="4" height="7" rx="2"/><line x1="9" y1="13" x2="9" y2="15"/><line x1="12" y1="10" x2="12" y2="18"/><line x1="15" y1="13" x2="15" y2="15"/></svg> },
              { title: "Trace, Write & Build", tag: "Kinaesthetic Learning", text: "Structured worksheets guide children from tracing letters to independently writing words. The phonics pyramid method breaks words into sounds step by step for faster decoding and confident reading", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7 18.5 3 20l1.5-4L15.5 5.5"/><path d="M14.5 4.5l5 5"/><path d="M6 14.5l3.5 3.5"/><line x1="2" y1="22" x2="22" y2="22"/></svg> },
              { title: "Group Activities & Peer Learning", tag: "Social Learning", text: "Small group batches mean children learn alongside peers at the same level. Group reading, partner activities, and friendly competitions keep energy high every session and boost active participation", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="3"/><path d="M8 22v-3a4 4 0 0 1 8 0v3"/><circle cx="5" cy="9" r="2.5"/><path d="M1 22v-2a3 3 0 0 1 5-2.8"/><circle cx="19" cy="9" r="2.5"/><path d="M23 22v-2a3 3 0 0 0-5-2.8"/></svg> },
              { title: "Reward, Track & Celebrate", tag: "Achievement & Recognition", text: "Children receive a completion certificate at the end of the program. In-class competitions keep every session fun and competitive &mdash; motivating kids to give their best every day and celebrate their learning success.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF5A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/><polygon points="12 4 13.5 7 16 7.5 14.5 9.5 15 12.5 12 11 9 12.5 9.5 9.5 8 7.5 10.5 7"/></svg> },
            ].map((card, i) => (
              <div key={i} className="teaching-card">
                <div className="teaching-icon-wrapper">
                  {card.icon}
                </div>
                <div className="teaching-card-content">
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                  <span className="teaching-tag">{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="results-section section-padding" id="results">
        <div className="container">
          <span className="section-badge section-badge-dark" style={{display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", padding: "8px 16px", borderRadius: "16px", fontSize: "12px", fontWeight: "700", background: "rgba(255, 102, 17, 0.15)", color: "var(--primary-orange)"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M5 4c0 3 3 7 7 7s7-4 7-7"/><path d="M5 4h14"/></svg>
            Real Results
          </span>
          <h2 className="section-heading results-heading" style={{marginBottom: "8px", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>What Children <span className="text-orange">Achieve</span> in 45 Days</h2>
          <p className="results-subtext" style={{color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "400", marginBottom: "48px", lineHeight: "1.5"}}>Measurable outcomes every parent can see — tracked and verified across 1000+ students.</p>
          <div className="results-grid">
            {[
              { n: "97%", h: "Reads Short Vowel Words" },
              { n: "25+", h: "Reads Short Vowel Words" },
              { n: "98%", h: "Reads Short Vowel Words" },
              { n: "1000+", h: "Reads Short Vowel Words" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>, h: "Reads Short Vowel Words" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="2" x2="22" y2="6"/><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"/></svg>, h: "Writes Simple Sentences" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.13 15.57a9 9 0 1 0 15.22-4.24L21.5 8"/><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>, h: "Reads Decodable Stories" },
              { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c1.19-.11 2.45-.66 3.33-1.53 1.14-1.12 1.34-2.8.5-4C10.74 12.33 9.77 12 8.5 12c-1.27 0-2.24.33-3.33 1.47-.87.88-1.42 2.14-1.53 3.33l-.5.5z"/><path d="M5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="m15.5 8.5 2-2"/><path d="M12 5h-1"/><path d="M19 12v-1"/><path d="m18.5 5.5-1 1"/></svg>, h: "Builds Real Confidence" },
            ].map((r, i) => (
              <div key={i} className="result-stat-card">
                {r.n ? (
                  <div className="result-stat-number">{r.n}</div>
                ) : (
                  <div className="result-stat-icon">{r.icon}</div>
                )}
                <h4>{r.h}</h4>
              </div>
            ))}
          </div>
          
          <div className="before-after-grid">
            <div className="ba-card">
              <div className="ba-icon-bg ba-icon-before">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h4>Before 45 Days Reading Challenge</h4>
              <ul className="ba-list">
                <li>Can't differentiate between vowel sounds</li>
                <li>Struggles to blend letters into words</li>
                <li>Feeling shy to Read</li>
                <li>Avoids English</li>
              </ul>
            </div>
            <div className="ba-card">
              <div className="ba-icon-bg ba-icon-after">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4>After Spellzee's 45 Days Reading Challenge</h4>
              <ul className="ba-list">
                <li>Recognise all 5 vowel sounds easily</li>
                <li>Read full sentences with confidence</li>
                <li>Read everyday things like signs & menus</li>
                <li>Confident & Independent Learner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section section-padding">
        <div className="container">
          <span className="section-badge section-badge-orange">Sample Activities</span>
          <h2 className="section-heading" style={{marginBottom: "8px", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>What Your Child Will <span className="text-orange">Read & Write</span></h2>
          <p className="section-subtext" style={{color: "#4A4A4A", fontSize: "16px", fontWeight: "400", marginBottom: "24px", maxWidth: "100%", lineHeight: "1.5"}}>Hands-on worksheets used in every group session — phonics made playful.</p>
          <div className="pdf-badge" style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "20px", background: "rgba(255,102,17,0.1)", color: "var(--primary-orange)", fontWeight: "600", fontSize: "14px", marginBottom: "40px", cursor: "pointer"}}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            Printable PDFs
          </div>
          <div className="worksheet-carousel" style={{marginBottom: "64px"}}>
            <div className="worksheet-track" style={{display: "flex", gap: "24px", overflowX: "auto", paddingBottom: "24px", paddingRight: "40px"}}>
              {[
                { color: "#54C670" },
                { color: "#EF5B9E" },
                { color: "#F7BE54" },
                { color: "#E53E5C" },
                { color: "#EF5B9E" },
              ].map((w, i) => (
                <div key={i} className="worksheet-card" style={{minWidth: "280px", height: "380px", borderRadius: "12px", border: `2px solid ${w.color}`, padding: "8px", background: "#fff", display: "flex", overflow: "hidden", flexShrink: 0}}>
                  <img src="/images/worksheet-sample.png" alt="Worksheet Sample" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px"}} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="word-ribbon" style={{background: "#fff", padding: "48px 0", borderTop: "1px solid #EAEAEA"}}>
          <div className="word-ribbon-track" style={{display: "flex", gap: "24px", animation: "scrollLeft 30s linear infinite", padding: "0 24px"}}>
            {["GO", "GOT", "GOAT", "FLOAT", "FLOATING"].map((w, i) => (
              <div key={i} className="word-chip-container" style={{position: "relative", paddingTop: "8px"}}>
                <div style={{position: "absolute", top: "0", right: "0", background: "red", color: "white", fontSize: "10px", fontWeight: "700", padding: "2px 6px", borderRadius: "8px", transform: "translate(25%, -25%)", zIndex: 2}}>+</div>
                <span className="word-chip" style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "72px", border: "1px solid rgba(235,103,154,0.3)", borderTop: "3px solid #EB679A", borderRadius: "12px", fontSize: "28px", fontWeight: "700", color: "#1A1A1A", background: "#fff", boxShadow: "0 8px 16px rgba(235,103,154,0.1)", minWidth: "140px"}}>{w}</span>
              </div>
            ))}
            {["GO", "GOT", "GOAT", "FLOAT", "FLOATING"].map((w, i) => (
              <div key={i+"-dup"} className="word-chip-container" style={{position: "relative", paddingTop: "8px"}}>
                <div style={{position: "absolute", top: "0", right: "0", background: "red", color: "white", fontSize: "10px", fontWeight: "700", padding: "2px 6px", borderRadius: "8px", transform: "translate(25%, -25%)", zIndex: 2}}>+</div>
                <span className="word-chip" style={{display: "flex", alignItems: "center", justifyContent: "center", padding: "0 32px", height: "72px", border: "1px solid rgba(235,103,154,0.3)", borderTop: "3px solid #EB679A", borderRadius: "12px", fontSize: "28px", fontWeight: "700", color: "#1A1A1A", background: "#fff", boxShadow: "0 8px 16px rgba(235,103,154,0.1)", minWidth: "140px"}}>{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section section-padding" id="review">
        <div className="container">
          <span className="section-badge" style={{background: "rgba(255,102,17,0.1)", color: "var(--primary-orange)", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", padding: "8px 16px", borderRadius: "16px", fontSize: "12px", fontWeight: "700"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
            Parent Reviews
          </span>
          <h2 className="section-heading results-heading" style={{marginBottom: "8px", color: "white", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>Trusted by <span className="text-orange">1000+ Parents</span></h2>
          <p className="results-subtext" style={{color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "400", marginBottom: "48px", lineHeight: "1.5"}}>Real parents. Real reading progress. Across Globe.</p>
          
          <div className="rating-breakdown" style={{background: "#1F150D", borderRadius: "16px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px"}}>
            <div className="rating-left" style={{textAlign: "center", width: "160px"}}>
              <div className="rating-big" style={{fontSize: "72px", fontWeight: "800", color: "var(--primary-orange)", lineHeight: "1"}}>4.9</div>
              <div className="rating-stars" style={{color: "#FFA500", fontSize: "24px", margin: "8px 0 4px", letterSpacing: "2px"}}>★★★★★</div>
              <div className="rating-count" style={{fontSize: "14px", fontWeight: "500", color: "rgba(255,255,255,0.7)"}}>512 reviews</div>
            </div>
            <div className="rating-bars" style={{flexGrow: 1, margin: "0 48px", maxWidth: "400px"}}>
              {[91, 7, 2, 0, 0].map((p, i) => (
                <div key={i} className="bar-row" style={{display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px", fontSize: "14px", fontWeight: "500", color: "rgba(255,255,255,0.7)"}}>
                  <span style={{width: "8px", textAlign: "right"}}>{5-i}</span><span style={{color: "#FFA500", fontSize: "16px"}}>★</span>
                  <div className="bar-bg" style={{flexGrow: 1, height: "8px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden"}}><div className="bar-fill" style={{width: `${p}%`, height: "100%", background: "var(--primary-orange)", borderRadius: "4px"}}></div></div>
                  <span style={{width: "36px"}}>{p}%</span>
                </div>
              ))}
            </div>
            <div className="rating-stats" style={{display: "flex", flexDirection: "column", gap: "24px", textAlign: "left", fontSize: "14px", fontWeight: "500", color: "rgba(255,255,255,0.7)"}}>
              <div style={{display: "flex", alignItems: "center", gap: "16px"}}><span className="text-orange" style={{fontSize: "20px", fontWeight: "700", width: "52px"}}>1000+</span> Parents</div>
              <div style={{display: "flex", alignItems: "center", gap: "16px"}}><span className="text-orange" style={{fontSize: "20px", fontWeight: "700", width: "52px"}}>95%</span> Recommend</div>
              <div style={{display: "flex", alignItems: "center", gap: "16px"}}><span className="text-orange" style={{fontSize: "20px", fontWeight: "700", width: "52px"}}>45d</span> Program</div>
            </div>
          </div>

          <div className="reviews-grid" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"}}>
            {[
              { n: "Priya Sharma", loc: "Mother - Chennai", t: "My daughter could barely read 3-letter words. Within 3 weeks of Spellzee group classes she reads full sentences. The phonics method is magical!", v: false },
              { n: "Muthu Anushya", loc: "Mother - Qatar", t: "My daughter enjoys the English classes and her skills have improved a lot. She is doing very well now, and we can see her making steady progress in her writing.", v: false },
              { n: "Vanmathi Raja", loc: "Mother - Coimbatore", t: "After trying so many options, Spellzee was my last hope, and it worked. My son struggled with reading and never wanted to attend classes, but now he never gets bored.", v: false },
              { n: "Meera Krishnan", loc: "Mother - Madurai", t: "My son went from refusing to read to reading full sentences in just 3 weeks — and now he actually enjoys picking up books on his own!", v: true },
              { n: "Sarika Menon", loc: "Mother - Madurai", t: "Badge rewards kept my son going. He never missed a class and even reads restaurant menus now — all from the group program!", v: true },
              { n: "Kavitha Nair", loc: "Mother of twins - Trichy", t: "Enrolled both twins in the same group batch — both can now read & write independently. School teachers noticed the improvement!", v: true },
            ].map((r, i) => (
              <div key={i} className="review-card" style={{background: r.v ? "linear-gradient(180deg, #381503 0%, #1F150D 100%)" : "#1F150D", padding: "32px", borderRadius: "16px", display: "flex", flexDirection: "column"}}>
                {r.v ? (
                  <div style={{display: "flex", justifyContent: "center", padding: "16px 0 32px 0"}}>
                    <div style={{width: "48px", height: "48px", background: "var(--primary-orange)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer", boxShadow: "0 0 0 8px rgba(255,102,17,0.2)"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{marginLeft: "4px"}}><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                ) : (
                  <div className="review-stars" style={{color: "#FFA500", fontSize: "16px", marginBottom: "24px", letterSpacing: "1px"}}>★★★★★</div>
                )}
                
                {r.v && (
                  <div className="reviewer" style={{marginBottom: "20px", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px"}}>
                    <strong style={{fontSize: "15px", color: "#fff", fontWeight: "600"}}>{r.n}</strong>
                    <span style={{fontSize: "13px", color: "rgba(255,255,255,0.6)", fontWeight: "400"}}>{r.loc}</span>
                  </div>
                )}
                
                <p style={{fontSize: "15px", lineHeight: "1.6", color: r.v ? "rgba(255,255,255,0.8)" : "#fff", marginBottom: r.v ? "0" : "32px", flexGrow: 1, fontWeight: "400"}}>"{r.t}"</p>
                
                {!r.v && (
                  <div className="reviewer" style={{marginTop: "auto", display: "flex", alignItems: "center", gap: "12px"}}>
                    <img src={`https://ui-avatars.com/api/?name=${r.n.replace(" ","+")}&background=FF6611&color=fff&rounded=true&size=40`} alt={r.n} style={{width: "48px", height: "48px", borderRadius: "24px"}} />
                    <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                      <strong style={{color: "#fff", fontSize: "14px", fontWeight: "600"}}>{r.n}</strong>
                      <span style={{fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: "400"}}>{r.loc}</span>
                    </div>
                    <div className="verified-badge" style={{display: "flex", alignItems: "center", gap: "4px", marginLeft: "auto", background: "white", color: "#008744", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase"}}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Verified
                    </div>
                  </div>
                )}
                
                {r.v && (
                  <div style={{marginTop: "32px", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.05)"}}>
                    <div className="review-stars" style={{color: "#FFA500", margin: 0, fontSize: "14px", letterSpacing: "1px"}}>★★★★★</div>
                    <div className="verified-badge" style={{display: "flex", alignItems: "center", gap: "4px", background: "white", color: "#008744", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", margin: 0}}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Verified
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-new-section section-padding">
        <div className="container">
          <div className="pricing-orange-card">
            <div className="best-value-ribbon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Best Value
            </div>
            <div className="pricing-header">
              <span className="pricing-offer-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" stroke="none"><circle cx="12" cy="12" r="10"/></svg>
                SUMMER SPECIAL OFFER
              </span>
              <h2 className="pricing-title">Simple &amp; Affordable</h2>
            </div>
            <div className="pricing-math-row">
              <div className="pricing-math-card">
                <span className="pricing-math-label">PER CLASS</span>
                <span className="pricing-math-value">₹100</span>
              </div>
              <div className="pricing-math-operator">×</div>
              <div className="pricing-math-card">
                <span className="pricing-math-label">LIVE CLASSES</span>
                <span className="pricing-math-value">45</span>
              </div>
              <div className="pricing-math-operator">=</div>
              <div className="pricing-math-card pricing-math-card-total">
                <span className="pricing-math-total-price">₹4,500</span>
                <span className="pricing-math-label">45 Sessions</span>
              </div>
            </div>
            <div className="pricing-features-row">
              {["45 Live Classes", "Phonics Based", "ACTD - Certified Teachers"].map((f, i) => (
                <div key={i} className="pricing-feature-chip">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  {f}
                </div>
              ))}
            </div>
            {/* Visual Assets placeholder & CTA Card Row */}
            <div className="pricing-cta-container" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px", marginTop: "32px"}}>
              
              {/* Educational Cards Visual Placeholder */}
              <div className="pricing-visuals" style={{flex: "1", minWidth: "280px", display: "flex", gap: "12px", justifyContent: "center", alignItems: "center"}}>
                <img src="/images/worksheet-sample.png" alt="Educational Materials" style={{width: "140px", height: "auto", borderRadius: "8px", boxShadow: "0 8px 16px rgba(0,0,0,0.1)", transform: "rotate(-5deg)"}} />
                <img src="/images/hero-girl.png" alt="Happy Student" style={{width: "140px", height: "140px", objectFit: "cover", borderRadius: "8px", boxShadow: "0 8px 16px rgba(0,0,0,0.1)", transform: "rotate(3deg)"}} />
              </div>

              {/* Final CTA Card */}
              <div className="pricing-final-cta-card" style={{background: "#FFF", borderRadius: "24px", padding: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", minWidth: "320px", boxShadow: "0 12px 32px rgba(0,0,0,0.1)"}}>
                <div style={{display: "flex", alignItems: "center", gap: "8px", background: "#FEF2E8", color: "#FF5A00", padding: "6px 16px", borderRadius: "50px", fontSize: "14px", fontWeight: "700"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Limited Seats Available
                </div>
                
                <div style={{textAlign: "center"}}>
                  <div style={{fontSize: "14px", color: "#666", fontWeight: "700", textTransform: "uppercase"}}>TOTAL</div>
                  <div style={{fontSize: "48px", fontWeight: "800", color: "#111", fontFamily: "'Baloo 2', cursive", lineHeight: "1"}}>₹4,500</div>
                </div>

                <a href="/payment" className="btn pricing-cta-btn" style={{width: "100%", background: "#FF5A00", color: "#FFF", boxShadow: "0 8px 20px rgba(255, 90, 0, 0.3)"}}>Enroll Now &rarr;</a>
                
                <div className="pricing-guarantee-pill" style={{boxShadow: "none", background: "transparent", padding: "0"}}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" stroke="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z"/></svg>
                  <div className="guarantee-text" style={{textAlign: "left"}}>
                    <span className="guarantee-bold" style={{fontSize: "13px"}}>2-Class Risk-free</span>
                    <span className="guarantee-light" style={{fontSize: "11px"}}>100% Refund Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-container">
            <h3 className="faq-heading">Frequently Asked Questions</h3>
            <div className="faq-list">
              {[
                { q: 'Is the ₹4,500 fee a one-time payment?', a: 'Yes, ₹4,500 is a one-time payment for the entire 45-day program. There are no hidden charges or recurring fees.' },
                { q: 'Are classes live or recorded?', a: 'All classes are live and interactive. Children learn in small groups with a certified teacher.' },
                { q: 'What age group is this program for?', a: 'This program is designed for children aged 4-8 years. It works for beginners as well as children who need to strengthen their reading foundation.' },
              ].map((faq, index) => (
                <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <span className="faq-toggle">+</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="logo-group footer-logo">
              <div className="logo-first" aria-label="Spellzee Icon"></div>
              <div className="logo-second" aria-label="Spellzee Logo"></div>
            </div>
            <p style={{color: "#aaa", fontSize: "14px"}}>A phonics-based reading & writing program for children aged 4-8. Small group batches, ACTD certified teachers.</p>
          </div>
          <div className="footer-links">
            <h4>Program</h4>
            <ul>
              <li><a href="#">45 Days Reading Challenge</a></li>
              <li><a href="#">Curriculum Overview</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Get in Touch</h4>
            <p style={{color: "#aaa", fontSize: "14px"}}>+91 9361102618<br/>support@spellzee.com</p>
          </div>
        </div>
        <div className="container" style={{borderTop: "1px solid #222", marginTop: "40px", paddingTop: "20px", color: "#666", fontSize: "12px"}}>
            &copy; 2026 Spellzee Edutech. All rights reserved.
        </div>
      </footer>
    </>
  );
}
