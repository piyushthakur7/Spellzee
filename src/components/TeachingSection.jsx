export default function TeachingSection() {
  return (
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
  );
}
