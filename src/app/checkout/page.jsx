"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './checkout.css';

export default function CheckoutPage() {
  const [activeTab, setActiveTab] = useState('UPI');
  const [activeModal, setActiveModal] = useState(null); // 'exit' | 'fee' | 'contact' | 'country'

  const renderTabContent = () => {
    switch(activeTab) {
      case 'UPI':
        return (
          <div className="upi-qr-wrapper">
            <div className="qr-title">UPI QR</div>
            <div className="qr-box">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=spellzee@upi" alt="UPI QR" />
            </div>
            <div className="upi-text">Scan the QR using any UPI App</div>
            <div className="upi-icons">
              <div className="upi-icon-circle bg-white"><span style={{color: '#f9a31b', fontSize: '20px'}}>P</span></div>
              <div className="upi-icon-circle bg-blue">G</div>
              <div className="upi-icon-circle bg-white" style={{color: '#00baf2'}}>P</div>
              <div className="upi-icon-circle bg-purple">पे</div>
            </div>
          </div>
        );
      case 'Cards':
        return (
          <div className="cards-tab">
            <div className="tab-title">Add a new card</div>
            <div className="mock-card">
              <div className="mock-card-bg"></div>
              <div className="mc-top">
                <span style={{fontSize: '24px', transform: 'rotate(90deg)', display: 'inline-block'}}>&#x262A;</span>
                <span className="mc-visa">VISA</span>
              </div>
              <div className="mc-number">34XX 45XX 77XX 35XX</div>
              <div className="mc-bottom">
                <div className="mc-group" style={{flex: 1}}>
                  <span className="mc-label">Card holder name</span>
                  <span className="mc-value">XXXXXXXXXX</span>
                </div>
                <div className="mc-group" style={{marginRight: '30px'}}>
                  <span className="mc-label">Expiry date</span>
                  <span className="mc-value">0X/X0</span>
                </div>
                <div className="mc-chip"></div>
              </div>
            </div>
            
            <div className="card-form">
              <input type="text" placeholder="Card number" className="card-input" />
              <div className="card-form-row">
                <input type="text" placeholder="MM/YY" className="card-input" />
                <input type="text" placeholder="CVV" className="card-input" />
              </div>
              <button className="btn-continue">Continue</button>
            </div>
          </div>
        );
      case 'Netbanking':
        return (
          <div className="list-tab">
            <div className="tab-title">Suggested Banks</div>
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input type="text" className="search-input" placeholder="Search for banks" />
            </div>
            <div className="list-container">
              {[
                { name: 'ICICI Bank', color: '#db0011', icon: 'i' },
                { name: 'Kotak Mahindra Bank', color: '#db0011', icon: 'k' },
                { name: 'Axis Bank', color: '#880022', icon: 'a' },
                { name: 'HDFC Bank', color: '#0052cc', icon: 'h' },
                { name: 'Canara Bank', color: '#00baf2', icon: 'c' },
                { name: 'Union Bank of India', color: '#db0011', icon: 'u' },
              ].map(bank => (
                <div className="list-item" key={bank.name}>
                  <div className="list-left">
                    <div className="bank-logo" style={{color: bank.color}}>❖</div>
                    <span>{bank.name}</span>
                  </div>
                  <div className="arrow-right">&gt;</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Wallet':
        return (
          <div className="list-tab">
            <div className="tab-title">All Wallet Options</div>
            <div className="list-container">
              {[
                { name: 'PhonePe', color: '#5f259f', char: 'पे' },
                { name: 'Mobikwik', color: '#0052cc', char: 'M' },
                { name: 'Airtel Payments Bank', color: '#db0011', char: 'A' },
                { name: 'Ola Money', color: '#00a650', char: 'O' },
                { name: 'JioMoney', color: '#0052cc', char: 'J' },
                { name: 'PayZapp', color: '#f9a31b', char: 'P' },
              ].map(wallet => (
                <div className="list-item" key={wallet.name}>
                  <div className="list-left">
                    <div className="bank-logo" style={{color: wallet.color}}>
                      <div className="upi-icon-circle" style={{width: 24, height: 24, fontSize: 12}}>{wallet.char}</div>
                    </div>
                    <span>{wallet.name}</span>
                  </div>
                  <div className="arrow-right">&gt;</div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Pay Later':
        return (
          <div className="list-tab">
            <div className="tab-title">Pay Later</div>
            <div className="list-container">
               <div className="list-item">
                  <div className="list-left">
                    <div className="bank-logo bg-rzp">◢</div>
                    <span>RazorpayX Postpaid</span>
                  </div>
                  <div className="arrow-right">&gt;</div>
                </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-wrapper">
        <div className="checkout-left">
          <Link href="/" className="logo-section">
            <img src="/images/spellzee-logo.png" alt="Spellzee Logo" />
            <span className="logo-text">Spellzee</span>
          </Link>
          
          <div className="challenge-title">
            <span className="big-number">45</span> 
            <span>Days Reading Challenge</span>
          </div>

          <div className="price-card" onClick={() => setActiveModal('fee')} style={{cursor: 'pointer'}}>
            <div className="price-label">Price Summary</div>
            <div className="price-value">₹4,500</div>
          </div>

          <div className="user-card" onClick={() => setActiveModal('contact')}>
            <div className="user-info">
              <svg className="user-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <span>Using as +9876543212</span>
            </div>
            <span>&gt;</span>
          </div>
        </div>

        <div className="checkout-right">
          <div className="payment-box">
            <div className="checkout-box-header">
              <span className="header-title">Payment Options</span>
              <div className="header-actions">
                <span onClick={() => setActiveModal('options')}>•••</span>
                <span className="close-btn" onClick={() => setActiveModal('exit')}>✕</span>
              </div>
            </div>
            
            <div className="payment-body">
              <div className="sidebar">
                
                {/* UPI Option */}
                <div className={`sidebar-item ${activeTab === 'UPI' ? 'active' : ''}`} onClick={() => setActiveTab('UPI')}>
                  <div className="radio-circle">{activeTab === 'UPI' && <div className="radio-dot"></div>}</div>
                  <div className="sidebar-label">UPI</div>
                  <div className="sidebar-logos">
                    <div className="brand-icon bg-purple">पे</div>
                    <div className="brand-icon bg-blue">G</div>
                    <div className="brand-icon bg-cyan">P</div>
                    <div className="brand-icon rect bg-white" style={{color: '#00baf2'}}>paytm</div>
                  </div>
                </div>

                {/* Cards Option */}
                <div className={`sidebar-item ${activeTab === 'Cards' ? 'active' : ''}`} onClick={() => setActiveTab('Cards')}>
                  <div className="radio-circle">{activeTab === 'Cards' && <div className="radio-dot"></div>}</div>
                  <div className="sidebar-label">Cards</div>
                  <div className="sidebar-logos">
                    <div className="brand-icon rect bg-white" style={{color: '#1a1f71'}}>VISA</div>
                    <div className="brand-icon bg-red" style={{background: 'linear-gradient(to right, #eb001b 50%, #f79e1b 50%)'}}></div>
                    <div className="brand-icon bg-cyan"></div>
                    <div className="brand-icon bg-blue"></div>
                  </div>
                </div>

                {/* Netbanking Option */}
                <div className={`sidebar-item ${activeTab === 'Netbanking' ? 'active' : ''}`} onClick={() => setActiveTab('Netbanking')}>
                  <div className="radio-circle">{activeTab === 'Netbanking' && <div className="radio-dot"></div>}</div>
                  <div className="sidebar-label">Netbanking</div>
                  <div className="sidebar-logos">
                    <div className="brand-icon rect bg-white" style={{color: '#880022'}}>AXIS</div>
                    <div className="brand-icon rect bg-white" style={{color: '#db0011'}}>HDFC</div>
                    <div className="brand-icon rect bg-blue">SBI</div>
                    <div className="brand-icon rect bg-white" style={{color: '#db0011'}}>ICICI</div>
                  </div>
                </div>

                {/* Wallet Option */}
                <div className={`sidebar-item ${activeTab === 'Wallet' ? 'active' : ''}`} onClick={() => setActiveTab('Wallet')}>
                  <div className="radio-circle">{activeTab === 'Wallet' && <div className="radio-dot"></div>}</div>
                  <div className="sidebar-label">Wallet</div>
                  <div className="sidebar-logos">
                    <div className="brand-icon bg-purple">पे</div>
                    <div className="brand-icon bg-blue">J</div>
                    <div className="brand-icon bg-red">A</div>
                    <div className="brand-icon bg-white" style={{color: '#f9a31b'}}>F</div>
                  </div>
                </div>

                {/* Pay Later Option */}
                <div className={`sidebar-item ${activeTab === 'Pay Later' ? 'active' : ''}`} onClick={() => setActiveTab('Pay Later')}>
                  <div className="radio-circle">{activeTab === 'Pay Later' && <div className="radio-dot"></div>}</div>
                  <div className="sidebar-label">Pay Later</div>
                  <div className="sidebar-logos">
                    <div className="brand-icon bg-rzp">◢</div>
                  </div>
                </div>

              </div>

              <div className="content-area">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modals */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          
          <div className={`modal-box ${activeModal === 'country' ? 'country-box' : ''}`} onClick={(e) => e.stopPropagation()}>
            <div className="modal-close-row">
              {['options', 'terms', 'language'].includes(activeModal) ? null : <span>•••</span>}
              <span onClick={() => activeModal === 'country' ? setActiveModal('contact') : setActiveModal(null)}>✕</span>
            </div>

            {activeModal === 'fee' && (
              <div>
                <div className="fee-title">Fee Breakup</div>
                <div className="fee-row">
                  <span>Amount</span>
                  <span>₹4,499.00</span>
                </div>
                <div className="fee-row">
                  <span>Convenience Charges</span>
                  <span>₹0.00</span>
                </div>
                <div className="fee-row">
                  <span>GST on Convenience Charges</span>
                  <span>₹0.00</span>
                </div>
                <div className="fee-divider"></div>
                <div className="fee-row fee-total">
                  <span>Total Charges</span>
                  <span>₹4,499.00</span>
                </div>
                <button className="modal-btn" onClick={() => setActiveModal(null)}>Continue & Pay</button>
              </div>
            )}

            {activeModal === 'exit' && (
              <div className="exit-content">
                <svg className="exit-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z" />
                </svg>
                <div className="exit-title">Are you sure you want to exit?</div>
                <div className="exit-sub">You will be taken back to 45 Days Reading Challenge</div>
                <button className="modal-btn" onClick={() => setActiveModal(null)}>Continue to Payment</button>
                <button className="modal-btn" onClick={() => window.location.href = '/'}>Exit</button>
              </div>
            )}

            {activeModal === 'contact' && (
              <div>
                <div className="contact-title">Edit contact details</div>
                <div className="contact-sub">Enter mobile & email to continue</div>
                <div className="contact-input-group">
                  <div className="contact-country" onClick={() => setActiveModal('country')}>
                    <span>🇮🇳</span>
                    <span>+91</span>
                    <span style={{fontSize: 10, marginLeft: 2}}>▼</span>
                  </div>
                  <input type="tel" className="contact-input-field" defaultValue="9876554321" />
                </div>
                <button className="modal-btn" onClick={() => setActiveModal(null)}>Continue</button>
              </div>
            )}

            {activeModal === 'country' && (
              <div>
                <div className="country-title">Select country code</div>
                <div className="search-wrapper country-search-wrapper">
                  <span className="search-icon">🔍</span>
                  <input type="text" className="search-input" placeholder="Search Country" />
                </div>
                <div className="country-list">
                  {[
                    { flag: '🇮🇳', code: '+91', name: 'India' },
                    { flag: '🇦🇪', code: '+93', name: 'UAE' },
                    { flag: '🇲🇾', code: '+93', name: 'Malaysia' },
                    { flag: '🇸🇬', code: '+93', name: 'Singapore' },
                    { flag: '🇱🇰', code: '+93', name: 'Sri lanka' },
                    { flag: '🇶🇦', code: '+93', name: 'Qatar' },
                    { flag: '🇬🇧', code: '+93', name: 'England' },
                    { flag: '🇦🇫', code: '+93', name: 'Afghanistan' },
                  ].map(c => (
                    <div className="country-item" key={c.name} onClick={() => setActiveModal('contact')}>
                      <div className="ci-flag">{c.flag}</div>
                      <div className="ci-code">({c.code})</div>
                      <div className="ci-name">{c.name}</div>
                      <div className="ci-radio"></div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === 'options' && (
              <div>
                <div className="options-title">Account & Terms</div>
                <div className="options-item" onClick={() => setActiveModal('terms')}>
                  <div className="oi-icon">📄</div>
                  <div className="oi-texts">
                    <div className="oi-main">Razorpay T&Cs</div>
                    <div className="oi-sub">Policies Terms of Service</div>
                  </div>
                  <div className="arrow-right">&gt;</div>
                </div>
                <div className="options-item" onClick={() => setActiveModal('language')}>
                  <div className="oi-icon">A文</div>
                  <div className="oi-texts">
                    <div className="oi-main">Language</div>
                    <div className="oi-sub">English</div>
                  </div>
                  <div className="arrow-right">&gt;</div>
                </div>
              </div>
            )}

            {activeModal === 'terms' && (
              <div>
                <div className="options-header-row">
                  <span className="options-back-btn" onClick={() => setActiveModal('options')}>←</span>
                  <span className="options-title-inline">Razorpay T&Cs</span>
                </div>
                <div className="options-item">
                  <div className="oi-texts">
                    <div className="oi-main">Razorpay Terms of Service</div>
                  </div>
                  <div className="ext-link-icon">↗</div>
                </div>
              </div>
            )}

            {activeModal === 'language' && (
              <div>
                <div className="options-header-row">
                  <span className="options-back-btn" onClick={() => setActiveModal('options')}>←</span>
                  <span className="options-title-inline">Language</span>
                </div>
                <div className="lang-list">
                  {['English', 'বাংলা', 'हिंदी', 'मराठी', 'ગુજરાતી', 'தமிழ்', 'తెలుగు', 'ಕನ್ನಡ'].map(lang => (
                    <div className="lang-item" key={lang}>
                      <span>{lang}</span>
                      <div className="arrow-right">&gt;</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
