export default function CurriculumSection() {
  return (
    <section className="curriculum-section section-padding">
      <div className="container">
        <span className="section-badge section-badge-orange">CURRICULUM OVERVIEW</span>
        <h2 className="section-heading">What Your Child Learns - <span className="text-orange">5 Phases</span></h2>
        <div className="curriculum-grid">
          {[
            { title: "3-Letter Words", desc: "Short vowel sounds – Read 3-letter words Write from dictation Spelling confidence", phase: "Phase 1", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> },
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
                  <div className="placeholder-icon" style={{width: '32px', height: '32px', border: '2px dashed #FFD700', borderRadius: '4px'}}></div>
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
          <img src="/images/push-pin%201.png" alt="Note" className="note-pin-icon" />
          <p>
            Note for Parents: This is a <span className="text-orange">Phonics Basics program</span>, not a complete advanced phonics course. Children master the core foundations — short vowels, CVC words, word families, and sentence writing. Advanced topics (blends, digraphs, long vowels) are in our next-level programs.
          </p>
        </div>
      </div>
    </section>
  );
}
