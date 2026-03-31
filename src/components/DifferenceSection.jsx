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
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6990_2137)">
                  <path d="M18.5757 0H21.3852C21.8006 0.152157 22.402 0.111597 22.8575 0.178147C23.7026 0.309593 24.5396 0.488707 25.3645 0.714629C29.7961 1.94038 33.6684 4.65883 36.3268 8.41039C38.2296 11.0915 39.4551 14.1966 39.8566 17.4646C39.9008 17.8237 39.8926 18.2689 40 18.6078V21.4268L39.9891 21.4641C39.9078 21.7489 39.877 22.2024 39.8457 22.5064C39.748 23.4589 39.5672 24.3964 39.3121 25.3201C37.8887 30.4439 34.4927 34.7948 29.8678 37.4198C28.0004 38.4793 25.9735 39.2289 23.8661 39.6395C23.5029 39.7098 21.8047 39.941 21.6657 40H18.3808C18.2007 39.9215 16.4927 39.7008 16.1619 39.6355C14.2148 39.2559 12.3345 38.5906 10.582 37.6612C5.77887 35.1117 2.224 30.7127 0.739441 25.4815C0.526145 24.7428 0.375337 24.047 0.245564 23.2907C0.16286 22.8087 0.145248 21.98 0 21.547V18.4846C0.106884 18.225 0.233464 16.7594 0.31162 16.3295C0.63482 14.6255 1.17185 12.9691 1.90996 11.3996C4.33504 6.26965 8.83609 2.42007 14.28 0.819926C15.2362 0.54852 16.2074 0.333603 17.1888 0.176295C17.5983 0.11101 18.2093 0.144888 18.5757 0Z" fill="#FFF0E6"/>
                  <path d="M27.1663 7.73529C27.716 7.71962 27.9012 7.90552 28.2823 8.27541C29.4134 9.37302 30.5965 10.425 31.6988 11.5502C31.8281 11.6821 31.8851 11.9351 31.9289 12.1117C31.6884 13.1181 30.9361 13.3532 30.1654 12.6555C29.5251 12.0758 28.8951 11.4597 28.284 10.8487C28.2267 15.213 28.276 19.6899 28.277 24.062L28.2808 27.6281C28.282 28.338 28.36 29.5091 28.1562 30.2041C28.0845 30.4485 27.7288 30.6159 27.4888 30.7019C27.4624 30.7037 27.436 30.7049 27.4095 30.7053C26.8796 30.7135 26.4418 30.3848 26.4139 29.8377C26.3773 29.1194 26.3918 28.3999 26.3919 27.6805L26.3922 23.6746L26.3928 10.8429C25.9577 11.2973 24.484 12.8102 23.9643 13.0073C23.7264 13.0975 23.4995 13.0446 23.2755 12.9415C23.0484 12.837 22.8994 12.6635 22.8169 12.4276C22.7432 12.2172 22.735 11.9478 22.8358 11.7444C23.0103 11.3922 26.2542 8.34701 26.7589 7.94962C26.8856 7.84978 27.0144 7.78798 27.1663 7.73529Z" fill="#FF5A00"/>
                  <path d="M18.8139 16.9546C19.1758 16.9329 19.7921 17.1537 19.8459 17.5492C19.9564 18.3603 19.9121 19.2538 19.9122 20.0786L19.9121 24.7547C19.9119 26.4001 19.9177 28.046 19.9056 29.6912C19.9015 30.2456 19.6356 30.541 19.1159 30.7024C17.9752 30.7778 18.0211 29.8087 18.0242 29.0131C18.0302 27.4567 18.0246 25.899 18.0248 24.3426L18.0257 20.1487C18.0258 19.4108 18.0211 18.6743 18.0327 17.9365C18.0412 17.3909 18.3015 17.1182 18.8139 16.9546Z" fill="#FF5A00"/>
                  <path d="M10.4471 21.9595C10.6317 21.9457 10.8058 21.9711 10.9759 22.0455C11.1945 22.1411 11.3774 22.3096 11.4628 22.5356C11.6115 22.9294 11.5782 28.8065 11.5343 29.6273C11.5245 29.8111 11.5192 30.0164 11.4407 30.1853C11.3083 30.4704 11.0434 30.5975 10.7649 30.7011C10.5612 30.7142 10.3833 30.6916 10.1963 30.605C9.99064 30.5096 9.80646 30.3367 9.73044 30.1191C9.59451 29.7298 9.62017 23.6443 9.66396 22.9285C9.67392 22.7657 9.69009 22.6364 9.76353 22.4883C9.91091 22.1912 10.1433 22.0636 10.4471 21.9595Z" fill="#FF5A00"/>
                </g>
                <defs>
                  <clipPath id="clip0_6990_2137">
                    <rect width="40" height="40" fill="white"/>
                  </clipPath>
                </defs>
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
