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
            <h2 className="hero-subtitle">
              <span className="text-orange" style={{display: 'block'}}>Reading</span>
              <span style={{color: '#111', display: 'block'}}>Challenge</span>
            </h2>
            <p className="hero-desc">Your child will <strong className="text-orange">READ & WRITE ENGLISH CONFIDENTLY</strong> — a proven phonics method trusted by 1000+ Parents across India.</p>
            <div className="hero-buttons">
              <a href="/payment" className="btn btn-orange">Enroll Now</a>
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
          <span className="section-badge section-badge-dark" style={{display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", padding: "8px 16px", borderRadius: "16px", fontSize: "12px", fontWeight: "700", background: "rgba(255, 102, 17, 0.15)", color: "var(--primary-orange)"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10"/><path d="M5 4c0 3 3 7 7 7s7-4 7-7"/><path d="M5 4h14"/></svg>
            Real Results
          </span>
          <h2 className="section-heading results-heading" style={{marginBottom: "8px", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>What Children <span className="text-orange">Achieve</span> in 45 Days</h2>
          <p className="results-subtext" style={{color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "400", marginBottom: "48px", lineHeight: "1.5"}}>Measurable outcomes every parent can see — tracked and verified across 1000+ students.</p>
          <div className="results-grid" style={{marginBottom: "32px", gap: "24px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
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
              <div key={i} className="result-card" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "160px", background: "#1A1A1A", borderRadius: "16px", padding: "24px"}}>
                {r.n ? (
                  <div className="result-number" style={{fontSize: "32px", fontWeight: "700", color: "var(--primary-orange)", marginBottom: "16px", lineHeight: "1"}}>{r.n}</div>
                ) : (
                  <div style={{width: "48px", height: "48px", background: "var(--primary-orange)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "white"}}>
                    {r.icon}
                  </div>
                )}
                <h4 style={{fontSize: "14px", fontWeight: "500", textAlign: "center", color: "#fff", margin: 0, lineHeight: "1.5"}}>{r.h}</h4>
              </div>
            ))}
          </div>
          
          <div className="before-after-grid" style={{marginTop: "32px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px"}}>
            <div className="result-card before-after-card" style={{alignItems: "center", padding: "48px 40px", background: "#1A1A1A", borderRadius: "24px"}}>
              <div style={{width: "64px", height: "64px", background: "rgba(255, 102, 17, 0.1)", borderRadius: "32px", border: "1px dashed var(--primary-orange)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", color: "var(--primary-orange)"}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <h4 style={{textAlign:"center", marginBottom: "32px", fontSize: "18px", color: "#fff", fontWeight: "600", lineHeight: "1.5"}}>Before 45 Days Reading<br/>Challenge</h4>
              <ul className="ba-list" style={{display: "flex", flexDirection: "column", gap: "16px", color: "rgba(255,255,255,0.8)", fontWeight: "500", fontSize: "15px", listStyleType: "disc", paddingLeft: "16px", margin: "0 auto", textAlign: "left", lineHeight: "1.5"}}>
                <li>Can't differentiate between vowel sounds</li>
                <li>Struggles to blend letters into words</li>
                <li>Feeling shy to Read</li>
                <li>Avoids English</li>
              </ul>
            </div>
            <div className="result-card before-after-card" style={{alignItems: "center", padding: "48px 40px", background: "#1A1A1A", borderRadius: "24px"}}>
              <div style={{width: "64px", height: "64px", background: "var(--primary-orange)", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 32px", color: "white", boxShadow: "0 8px 24px rgba(255, 102, 17, 0.3)"}}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <h4 style={{textAlign:"center", marginBottom: "32px", fontSize: "18px", color: "#fff", fontWeight: "600", lineHeight: "1.5"}}>After Spellzee's 45 Days<br/>Reading Challenge</h4>
              <ul className="ba-list" style={{display: "flex", flexDirection: "column", gap: "16px", color: "rgba(255,255,255,0.8)", fontWeight: "500", fontSize: "15px", listStyleType: "disc", paddingLeft: "16px", margin: "0 auto", textAlign: "left", lineHeight: "1.5"}}>
                <li>Can't differentiate between vowel sounds</li>
                <li>Recognise all 5 vowel sounds easily</li>
                <li>Read full sentences with confidence</li>
                <li>Read everyday things like signs & menus</li>
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

      <section className="pricing-section section-padding">
        <div className="container" style={{maxWidth: "800px"}}>
          <div className="section-title" style={{textAlign: "center", marginBottom: "40px"}}>
            <h2>Pricing & FAQ</h2>
          </div>
          <div className="pricing-card">
            <h3>₹100 per class</h3>
            <p>45 Live Classes = <strong>₹4,500 Total</strong></p>
            <div className="pricing-highlight">2-Class Risk-free | 100% Refund Guaranteed</div>
            <a href="/payment" className="btn btn-orange" style={{width: "100%", marginTop: "30px"}}>Secure Your Spot</a>
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
