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
          <div className="logo">
            <img src="/images/spellzee-logo.png" alt="Spellzee Logo" />
            <span>Spellzee</span>
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#results" onClick={() => setMobileMenuOpen(false)}>Results</a>
            <a href="#review" onClick={() => setMobileMenuOpen(false)}>Review</a>
            <a href="https://wa.me/919361102618" className="btn btn-green">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat with us
            </a>
          </div>
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                Summer Course
              </span>
              <span className="badge badge-age">Age group 4 - 8</span>
            </div>
            <h1 className="hero-h1">
              <span className="big-number">45</span>
              <span className="days-text">Days</span>
            </h1>
            <h2 className="hero-subtitle text-orange">Reading Challenge</h2>
            <p className="hero-desc">Your child will <strong className="text-orange">READ & WRITE ENGLISH CONFIDENTLY</strong> — a proven phonics method trusted by 1000+ Parents across India.</p>
            <div className="hero-buttons">
              <a href="https://wa.me/919361102618" className="btn btn-orange">Enroll Now</a>
              <button className="btn btn-outline-peach">Limited Time offer</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-orange-bg"></div>
              <img src="/images/hero-girl.png" alt="Happy child learning" className="hero-image" />
            </div>
            
            <div className="floating-stat stat-words">
              <div className="stat-icon stat-icon-orange">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <span className="stat-number">1000+ Words</span>
            </div>
            
            <div className="floating-stat stat-price">
              <div className="stat-icon stat-icon-orange">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
              </div>
              <span className="stat-number">₹100 Per Class</span>
            </div>
            
            <div className="floating-stat stat-stories">
              <div className="stat-icon stat-icon-orange">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
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
              <div className="trust-item">
                <div className="trust-icon-img">IIT-Madras</div>
                <h4 className="text-orange">Incubated Company</h4>
                <p>Verified</p>
                <span className="trust-badge">Verified</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon-img">ACTD Accredited</div>
                <h4 className="text-orange">Certified Teachers Methods</h4>
                <p>Accredited</p>
                <span className="trust-badge">Accredited</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon-big"><span className="text-orange">10,000+</span></div>
                <h4>Happy Parents</h4>
                <p>Across India</p>
                <span className="trust-badge">Approved</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <div className="trust-icon-big"><span className="text-orange">4.9</span> ★</div>
                <h4>Parent Rating</h4>
                <p>Based on 512 Reviews</p>
                <span className="trust-badge">Rated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="difference-section section-padding">
        <div className="container">
          <span className="section-badge">The Spellzee Difference</span>
          <h2 className="section-heading">Why 1000+ Parents <span className="text-orange">Choose Spellzee</span></h2>
          <p className="section-subtext">Not just another English class. A structured phonics system that actually works — in 45 days.</p>
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
                  { title: "3-Letter Words", desc: "Short vowel sounds – Read 3-letter words Write from dictation Spelling confidence", phase: "Phase 1" },
                  { title: "CVC Words", desc: "Phonics pyramid blending Read 20+ CVC words Write from dictation", phase: "Phase 2" },
                  { title: "CCVC Words", desc: "Consonant cluster blending Read flag, clap, drip Write clusters from picture", phase: "Phase 3" },
                  { title: "Word Families", desc: "–at, -an, -et, -en patterns –Read & write word groups –Ending k & x sounds", phase: "Phase 4" },
                  { title: "Stories + Sentences", desc: "Read 10+ decodable stories Write full sentences Final evaluation", phase: "Phase 5" },
                ].map((item, i) => (
                  <div key={i} className="curriculum-card">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="phase-divider"></div>
                    <div className="phase-label"><span className="phase-bar"></span> {item.phase}</div>
                  </div>
                ))}
              </div>
          </div>
      </section>

      <section className="teaching-section section-padding">
        <div className="container">
          <span className="section-badge section-badge-orange">OUR TEACHING METHOD</span>
          <h2 className="section-heading">How We <span className="text-orange">Teach ?</span></h2>
          <div className="teaching-grid">
            {[
              { title: "Listen, Repeat & Recognise", tag: "Auditory Learning", text: "Every class begins with audio-first phonics - children hear the sound, repeat it aloud, and match it to the letter. This builds strong ear-to-eye connections before any writing begins." },
              { title: "Trace, Write & Build", tag: "Kinaesthetic Learning", text: "Structured worksheets guide children from tracing letters to independently writing words. The phonics pyramid method breaks words into sounds step by step for faster decoding and confident reading" },
              { title: "Group Activities & Peer Learning", tag: "Social Learning", text: "Small group batches mean children learn alongside peers at the same level. Group reading, partner activities, and friendly competitions keep energy high every session and boost active participation" },
              { title: "Reward, Track & Celebrate", tag: "Achievement & Recognition", text: "Children receive a completion certificate at the end of the program. In-class competitions keep every session fun and competitive — motivating kids to give their best every day and celebrate their learning success." },
            ].map((card, i) => (
              <div key={i} className="teaching-card">
                <div>
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
          <span className="section-badge section-badge-dark">Real Results</span>
          <h2 className="section-heading results-heading">What Children <em className="text-orange underline-orange">Achieve</em> in 45 Days</h2>
          <div className="results-grid">
            {[
              { n: "97%", h: "Reads Short Vowel Words" },
              { n: "25+", h: "Writes Simple Sentences" },
              { n: "98%", h: "Reads Decodable Stories" },
              { n: "1000+", h: "Builds Real Confidence" },
            ].map((r, i) => (
              <div key={i} className="result-card">
                <div className="result-number">{r.n}</div>
                <h4>{r.h}</h4>
              </div>
            ))}
          </div>
          
          <div className="before-after-grid">
            <div className="result-card before-after-card">
              <h4 style={{textAlign:"center", marginBottom: "20px"}}>Before 45 Days</h4>
              <ul className="ba-list">
                <li>Can't differentiate between vowel sounds</li>
                <li>Struggles to blend letters into words</li>
                <li>Feeling shy to Read</li>
                <li>Avoids English</li>
              </ul>
            </div>
            <div className="result-card before-after-card">
              <h4 style={{textAlign:"center", marginBottom: "20px"}}>After Spellzee</h4>
              <ul className="ba-list">
                <li>Recognise all 5 vowel sounds easily</li>
                <li>Read full sentences with confidence</li>
                <li>Read everyday things like signs & menus</li>
                <li>100% Reading Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="activities-section section-padding">
        <div className="container">
          <span className="section-badge section-badge-orange">Sample Activities</span>
          <h2 className="section-heading">What Your Child Will <span className="text-orange">Read & Write</span></h2>
          <div className="worksheet-carousel">
            <div className="worksheet-track">
              {[
                { h: "Ending Sounds", sub: "k, x", p: "Circle the correct ending sound" },
                { h: "Word Building", sub: "a", p: "/k/ → /ka/ → /kat/ = cat", c: "ws-green" },
                { h: "Word Building", sub: "e", p: "/b/ → /be/ → /bed/ = bed", c: "ws-blue" },
                { h: "Word Family", sub: "at", p: "hat, bat, rat, cat, mat", c: "ws-pink" },
              ].map((w, i) => (
                <div key={i} className="worksheet-card">
                  <div className={`ws-header ${w.c || ''}`}>{w.h}</div>
                  <div className="ws-body">
                    <h3>{w.sub}</h3>
                    <p>{w.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="word-ribbon">
          <div className="word-ribbon-track">
            {["GO", "GOT", "GOAT", "FLOAT", "CAT", "CHAT", "CATCH"].map((w, i) => (
              <span key={i} className="word-chip">{w}</span>
            ))}
            {["GO", "GOT", "GOAT", "FLOAT", "CAT", "CHAT", "CATCH"].map((w, i) => (
              <span key={i+"-dup2"} className="word-chip">{w}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section section-padding" id="review">
        <div className="container">
          <span className="section-badge section-badge-dark">Parent Reviews</span>
          <h2 className="section-heading results-heading">Trusted by <span className="text-orange">1000+ Parents</span></h2>
          
          <div className="rating-breakdown">
            <div className="rating-left">
              <div className="rating-big">4.9</div>
              <div className="rating-stars">★★★★★</div>
              <div className="rating-count">512 reviews</div>
            </div>
            <div className="rating-bars">
              {[91, 7, 2, 0, 0].map((p, i) => (
                <div key={i} className="bar-row">
                  <span>{5-i}</span><span className="star-sm">★</span>
                  <div className="bar-bg"><div className="bar-fill" style={{width: `${p}%`}}></div></div>
                  <span>{p}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reviews-grid">
            {[
              { n: "Priya Sharma", t: "My daughter could barely read 3-letter words. After 3 weeks she reads full sentences. Magical!" },
              { n: "Muthu Anushya", t: "My daughter enjoys the classes. Her skills have improved a lot. Steady progress in writing." },
              { n: "Vanmathi Raja", t: "Spellzee was my last hope, and it worked. My son now never gets bored of reading." },
            ].map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">★★★★★</div>
                <p>"{r.t}"</p>
                <div className="reviewer"><strong>{r.n}</strong></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-section section-padding">
        <div className="container" style={{maxWidth: "800px"}}>
          <div className="section-title" style={{textAlign: "center", marginBottom: "40px"}}>
            <h2>Pricing & FAQ</h2>
          </div>
          <div className="pricing-card">
            <h3>₹100 per class</h3>
            <p>45 Live Classes = <strong>₹4,500 Total</strong></p>
            <div className="pricing-highlight">2-Class Risk-free | 100% Refund Guaranteed</div>
            <a href="https://wa.me/919361102618" className="btn btn-orange" style={{width: "100%", marginTop: "30px"}}>Secure Your Spot</a>
          </div>

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
      </section>

      <footer>
        <div className="container footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/spellzee-logo.png" alt="Spellzee Logo" />
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
