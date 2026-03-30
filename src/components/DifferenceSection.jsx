export default function DifferenceSection() {
  return (
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
            <div className="diff-icon">
              {/* Sad Face Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 15C8.5 14 9.5 13.5 12 13.5C14.5 13.5 15.5 14 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
                <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
              </svg>
            </div>
            <h3>Why Most Kids Struggle</h3>
            <p>It's not about intelligence. It's about a missing step — <strong className="text-orange">no one taught them the sounds behind the words.</strong> Without phonics, reading feels like guesswork.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon">
              {/* Sound Wave Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H5M8 12V6M8 12V18M12 12V4M12 12V20M16 12V6M16 12V18M19 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Sounds First. Always.</h3>
            <p>We don't start with letters — we start with sounds. Our phonics-first method turns every word into something a child can decode, read, and write on their own.</p>
          </div>
          <div className="diff-card">
            <div className="diff-icon">
              {/* Growth/Stats Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 20H21M21 20L14 13M21 20V14M14 13L10 17L6 13M10 17H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 13L3 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
              </svg>
            </div>
            <h3>You'll See It. Every Week.</h3>
            <p>No vague promises. Every child gets a <strong className="text-orange">Progress Tracking Card</strong> — updated each session so parents know exactly what was mastered and how far their child has come.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
