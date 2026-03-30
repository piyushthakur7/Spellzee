export default function ActivitiesSection() {
  return (
    <section className="activities-section section-padding">
      <div className="container">
        <span className="section-badge section-badge-orange" style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
          <img src="/images/document_2783285%201%20%5BVectorized%5D%20(1).svg" alt="Activities" style={{width: '18px', height: '18px'}} />
          Sample Activities
        </span>
        <h2 className="section-heading" style={{marginBottom: "8px", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>What Your Child Will <span className="text-orange">Read & Write</span></h2>
        <p className="section-subtext" style={{color: "var(--text-body)", fontSize: "16px", fontWeight: "400", marginBottom: "24px", maxWidth: "100%", lineHeight: "1.5"}}>Hands-on worksheets used in every group session — phonics made playful.</p>
        <div className="pdf-badge" style={{display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 20px", borderRadius: "20px", background: "rgba(255,102,17,0.1)", color: "var(--primary-orange)", fontWeight: "600", fontSize: "14px", marginBottom: "40px", cursor: "pointer"}}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
          Printable PDFs
        </div>
        <div className="worksheet-carousel" style={{marginBottom: "64px"}}>
          <div className="worksheet-track" style={{display: "flex", gap: "24px", overflowX: "auto", paddingBottom: "24px", paddingRight: "40px", paddingLeft: "16px"}}>
            {[
              { file: "dee6127591958678e6b512005d4140b936f8be16%20(1).jpg", color: "#54C670" }, // Discriminating Ending Sounds (Green)
              { file: "a28db87413ddd304eeeb00240bd8891eee97e2cc%20(1).jpg", color: "#EF5B9E" }, // Word Building a (Pink)
              { file: "82ebec403ae49d8c748cd1ea82e3b520b537282d%20(1).jpg", color: "#F7BE54" }, // Word Building e (Yellow)
              { file: "d5f07e4b71102d3b1cc6d6d9819581b023ae0c38%20(1).jpg", color: "#9E35F4" }, // Word Family at (Purple) 
              { file: "dbb1003161785361306184568bdae4fcffc425dd%20(1).jpg", color: "#E53E5C" }, // at, an, et, en (Red)
              { file: "0076cd1b38cf547cb69bd7db6a7aa73c52af3892%20(1).jpg", color: "#54C670" }, // Extra (Green)
            ].map((w, i) => (
              <div key={i} className="worksheet-card" style={{minWidth: "280px", height: "380px", borderRadius: "16px", border: `1.5px solid ${w.color}`, background: "var(--card-bg)", display: "flex", overflow: "hidden", flexShrink: 0, boxShadow: "var(--card-shadow)"}}>
                <img src={`/images/${w.file}`} alt="Worksheet Sample" style={{width: "100%", height: "100%", objectFit: "cover"}} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="word-ribbon" style={{background: "var(--bg-body)", padding: "48px 0", borderTop: "1px solid var(--border-light)"}}>
        <div className="word-ribbon-track" style={{display: "flex", gap: "32px", animation: "scrollLeft 30s linear infinite", padding: "0 24px", paddingBottom: "32px"}}>
          {["GO", "GOT", "GOAT", "FLOAT", "FLOATING"].map((w, i) => (
            <div key={i} className="word-flashcard" style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              paddingTop: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              minWidth: "240px",
              flexShrink: 0
            }}>
              <div style={{display: "flex", justifyContent: "flex-end", marginBottom: "8px", paddingRight: "4px"}}>
                <img src="/images/spellzee-logo.png" alt="Spellzee" style={{height: "16px", opacity: 0.9}} />
              </div>
              <div style={{
                border: "2.5px solid #DE3163",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
                fontSize: "44px",
                fontWeight: "600",
                color: "var(--text-body)",
                letterSpacing: "1px"
              }}>
                {w}
              </div>
            </div>
          ))}
          {["GO", "GOT", "GOAT", "FLOAT", "FLOATING"].map((w, i) => (
             <div key={i+"-dup"} className="word-flashcard" style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              paddingTop: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              minWidth: "240px",
              flexShrink: 0
            }}>
              <div style={{display: "flex", justifyContent: "flex-end", marginBottom: "8px", paddingRight: "4px"}}>
                <img src="/images/spellzee-logo.png" alt="Spellzee" style={{height: "16px", opacity: 0.9}} />
              </div>
              <div style={{
                border: "2.5px solid #DE3163",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100px",
                fontSize: "44px",
                fontWeight: "600",
                color: "var(--text-body)",
                letterSpacing: "1px"
              }}>
                {w}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
