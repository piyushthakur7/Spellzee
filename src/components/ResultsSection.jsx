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
            { icon: <img src="/images/book-pages%201%20%5BVectorized%5D%20(1).svg" alt="Reading" style={{width: '28px', height: '28px'}} />, h: "Reads Short Vowel Words" },
            { icon: <img src="/images/Vector%20(2).svg" alt="Writing" style={{width: '24px', height: '24px'}} />, h: "Writes Simple Sentences" },
            { icon: <img src="/images/fairy-tale%201%20%5BVectorized%5D%20(1).svg" alt="Stories" style={{width: '32px', height: '32px'}} />, h: "Reads Decodable Stories" },
            { icon: <img src="/images/rocket%201%20%5BVectorized%5D%20(1).svg" alt="Confidence" style={{width: '28px', height: '28px'}} />, h: "Builds Real Confidence" },
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
              <img src="/images/sad_4309111%201%20%5BVectorized%5D%20(3).svg" alt="Before" style={{width: '32px', height: '32px'}} />
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
              <img src="/images/Vector%20(2).svg" alt="After" style={{width: '28px', height: '28px'}} />
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
