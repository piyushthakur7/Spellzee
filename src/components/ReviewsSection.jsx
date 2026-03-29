"use client";

export default function ReviewsSection() {
  return (
    <section className="reviews-section section-padding" id="review">
      <div className="container">
        <span className="section-badge" style={{background: "#2A180D", color: "#FF5A00", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px", padding: "8px 16px", borderRadius: "100px", fontSize: "14px", fontWeight: "600", border: 'none'}}>
          <div style={{background: "#FF5A00", width: "20px", height: "20px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%"}}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
          </div>
          Parent Reviews
        </span>
        <h2 className="section-heading results-heading" style={{marginBottom: "8px", color: "white", fontSize: "36px", fontWeight: "700", lineHeight: "1.2"}}>Trusted by <span className="text-orange">1000+ Parents</span></h2>
        <p className="results-subtext" style={{color: "rgba(255,255,255,0.7)", fontSize: "14px", fontWeight: "400", marginBottom: "48px", lineHeight: "1.5"}}>Real parents. Real reading progress. Across Globe.</p>
        
        <div className="rating-breakdown" style={{background: "#1F150D", borderRadius: "16px", padding: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "80px", marginBottom: "48px"}}>
          <div className="rating-left" style={{textAlign: "center", width: "160px"}}>
            <div className="rating-big" style={{fontSize: "72px", fontWeight: "800", color: "var(--primary-orange)", lineHeight: "1"}}>4.9</div>
            <div className="rating-stars" style={{color: "#FFA500", fontSize: "24px", margin: "8px 0 4px", letterSpacing: "2px"}}>★★★★★</div>
            <div className="rating-count" style={{fontSize: "14px", fontWeight: "500", color: "rgba(255,255,255,0.7)"}}>512 reviews</div>
          </div>
          <div className="rating-bars" style={{width: "100%", maxWidth: "400px"}}>
            {[91, 7, 2, 0, 0].map((p, i) => (
              <div key={i} className="bar-row" style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", fontSize: "13px", fontWeight: "500", color: "rgba(255,255,255,0.6)"}}>
                <span style={{width: "10px", textAlign: "right"}}>{5-i}</span><span style={{color: "#FFA500", fontSize: "14px"}}>★</span>
                <div className="bar-bg" style={{flexGrow: 1, height: "10px", background: "#D9D9D9", borderRadius: "52px", overflow: "hidden", border: "none"}}><div className="bar-fill" style={{width: `${p}%`, height: "100%", background: "var(--primary-orange)", borderRadius: "52px"}}></div></div>
                <span style={{width: "30px", textAlign: "right"}}>{p}%</span>
              </div>
            ))}
          </div>
          <div className="rating-stats" style={{display: "flex", flexDirection: "column", gap: "24px", textAlign: "center", fontSize: "12px", fontWeight: "500", color: "rgba(255,255,255,0.7)", width: "120px"}}>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0"}}>
              <span className="text-orange" style={{fontSize: "20px", fontWeight: "700"}}>1000+</span>
              <span>Parents</span>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0"}}>
              <span className="text-orange" style={{fontSize: "20px", fontWeight: "700"}}>98%</span>
              <span>Recommend</span>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "0"}}>
              <span className="text-orange" style={{fontSize: "20px", fontWeight: "700"}}>45d</span>
              <span>Program</span>
            </div>
          </div>
        </div>

        <div className="reviews-grid" style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px"}}>
          {[
            { n: "Priya Sharma", loc: "Mother - Chennai", t: "My daughter could barely read 3-letter words. After 3 weeks of Spellzee group classes she reads full sentences. The phonics method is magical!", v: false, d: null },
            { n: "Muthu Anushya", loc: "Mother - Qatar", t: "My daughter enjoys the English classes and her skills have improved a lot. She is doing very well now, and we can see her making steady progress in her writing.", v: false, d: null },
            { n: "Vanmathi Raja", loc: "Mother - Coimbatore", t: "After trying so many options, Spellzee was my last hope, and it worked. My son struggled with reading and never wanted to attend classes, but now he never gets bored.", v: false, d: null },
            { n: "Meera Krishnan", loc: "Mother - Madurai", t: "My son went from refusing to read to reading full sentences in just 3 weeks — and now he actually enjoys picking up books on his own!", v: true, d: "1:14" },
            { n: "Sunita Menon", loc: "Mother - Madurai", t: "Badge rewards kept my son going. He never missed a class and even reads restaurant menus now — all from the group program!", v: true, d: "1:14" },
            { n: "Kavitha Nair", loc: "Mother of twins - Trichy", t: "Enrolled both twins in the same group batch — both can now read & write independently. School teachers noticed the improvement!", v: true, d: "1:14" },
          ].map((r, i) => (
            <div key={i} className="review-card" style={{background: "#1F150D", padding: "24px", borderRadius: "16px", display: "flex", flexDirection: "column"}}>
              {r.v ? (
                <div className="video-thumbnail" style={{position: "relative", width: "100%", height: "200px", background: "linear-gradient(180deg, #512003 0%, #2A0F00 100%)", borderRadius: "12px", marginBottom: "24px", display: "flex", flexDirection: "column", overflow: "hidden"}}>
                  <div style={{flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{width: "48px", height: "48px", background: "var(--primary-orange)", borderRadius: "24px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", cursor: "pointer", boxShadow: "0 0 0 6px rgba(255,102,17,0.2)"}}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none" style={{marginLeft: "4px"}}><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "16px", paddingTop: "32px", background: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)"}}>
                    <div className="reviewer" style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "2px", textAlign: "left"}}>
                      <strong style={{fontSize: "14px", color: "#fff", fontWeight: "600"}}>{r.n}</strong>
                      <span style={{fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: "400"}}>{r.loc}</span>
                    </div>
                    {r.d && (
                      <div style={{fontSize: "12px", color: "rgba(255,255,255,0.8)", fontWeight: "500", marginBottom: "2px"}}>{r.d}</div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="review-stars" style={{color: "#FFA500", fontSize: "16px", marginBottom: "24px", letterSpacing: "1px"}}>★★★★★</div>
              )}
              
              <p style={{fontSize: "14px", lineHeight: "1.6", color: "rgba(255,255,255,0.8)", marginBottom: "24px", flexGrow: 1, fontWeight: "400"}}>"{r.t}"</p>
              
              {!r.v ? (
                <div className="reviewer" style={{marginTop: "auto", display: "flex", alignItems: "center", gap: "12px"}}>
                  <img src={`/images/reviews/${r.n.split(" ")[0].toLowerCase()}.png`} onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${r.n.replace(" ","+")}&background=FF6611&color=fff&rounded=true&size=40`; }} alt={r.n} style={{width: "40px", height: "40px", borderRadius: "20px", objectFit: "cover"}} />
                  <div style={{display: "flex", flexDirection: "column", gap: "2px"}}>
                    <strong style={{color: "#fff", fontSize: "14px", fontWeight: "600"}}>{r.n}</strong>
                    <span style={{fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: "400"}}>{r.loc}</span>
                  </div>
                  <div className="verified-badge" style={{display: "flex", alignItems: "center", gap: "6px", marginLeft: "auto", background: "white", color: "#25D366", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", textTransform: "capitalize"}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#25D366"/><path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Verified
                  </div>
                </div>
              ) : (
                <div style={{marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "0"}}>
                  <div className="review-stars" style={{color: "#FFA500", margin: 0, fontSize: "14px", letterSpacing: "1px"}}>★★★★★</div>
                  <div className="verified-badge" style={{display: "flex", alignItems: "center", gap: "6px", background: "white", color: "#25D366", padding: "6px 12px", borderRadius: "20px", fontSize: "11px", fontWeight: "700", textTransform: "capitalize", margin: 0}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="11" fill="#25D366"/><path d="M8 12.5L10.5 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Verified
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
