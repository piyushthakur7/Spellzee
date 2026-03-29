export default function ResultsSection() {
  return (
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
            { n: "97%", h: "Reads 3-letter words by Day 20" },
            { n: "25+", h: "Engaging Phonic stories" },
            { n: "98%", h: "Visible progress in 2 weeks" },
            { n: "1000+", h: "Batch-wise proven results" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/><path d="M6 8h2"/><path d="M6 12h2"/><path d="M16 8h2"/><path d="M16 12h2"/></svg>, h: "Reads Short Vowel Words" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><path d="M15 5l4 4"/></svg>, h: "Writes Simple Sentences" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13a8 8 0 0 1 16 0"/><path d="M7 13a5 5 0 0 1 10 0"/><path d="M4 13h16v8H4z"/><path d="M12 13v8"/><path d="M7 17h2"/><path d="M15 17h2"/><path d="M3 5l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"/><path d="M20 3l.5 1.5L22 5l-1.5.5L20 7l-.5-1.5L18 5l1.5-.5z"/><path d="M2 19l.5 1.5L4 21l-1.5.5L2 23l-.5-1.5L0 21l1.5-.5z"/></svg>, h: "Reads Decodable Stories" },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l.5-.5c1.19-.11 2.45-.66 3.33-1.53 1.14-1.12 1.34-2.8.5-4C10.74 12.33 9.77 12 8.5 12c-1.27 0-2.24.33-3.33 1.47-.87.88-1.42 2.14-1.53 3.33l-.5.5z"/><path d="M12 12a2 2 0 1 0 4-4 2 2 0 0 0-4 4z"/><path d="m15.5 8.5 2-2"/></svg>, h: "Builds Real Confidence" },
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
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
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><path d="M21 21v-8M17 21v-4M13 21v-6M9 21v-3M5 21v-5"/></svg>
            </div>
            <h4>After Spellzee's 45 Days Reading Challenge</h4>
            <ul className="ba-list">
              <li>Can't differentiate between vowel sounds</li>
              <li>Recognise all 5 vowel sounds easily</li>
              <li>Read full sentences with confidence</li>
              <li>Read everyday things like signs & menus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
