export default function TrustSection() {
  return (
    <section className="trust-section" id="about">
      <div className="container">
        <div className="trust-card-wrapper">
          <h2 className="trust-heading"><span className="text-orange">Trusted by</span> Parents. Backed by Experts.</h2>
          <div className="trust-grid">
            {/* IIT-Madras */}
            <div className="trust-item">
              <div className="trust-item-logo">
                <div className="logo-circle">
                  <img
                    src="/images/curriculum/iitm%20logo.png"
                    alt="IIT Madras Logo"
                    className="trust-logo-img"
                  />
                </div>
              </div>
              <div className="trust-item-label">IIT-Madras</div>
              <h4 className="trust-item-heading">Incubated Company</h4>
              <div className="trust-badge-pill verified">
                <div className="badge-icon-rosette">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                  </svg>
                </div>
                Verified
              </div>
            </div>

            {/* ACTD */}
            <div className="trust-item">
              <div className="trust-item-logo">
                <img src="/images/actd-logo.png" alt="ACTD Accredited" className="trust-logo-img" />
              </div>
              <div className="trust-item-label">ACTD Accredited</div>
              <h4 className="trust-item-heading no-wrap">Certified Teachers Methods</h4>
              <div className="trust-badge-pill accredited">
                <div className="badge-icon-rosette">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11 2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                </div>
                Accredited
              </div>
            </div>

            {/* Happy Parents */}
            <div className="trust-item">
              <div className="trust-item-logo stat-row">
                <div className="trust-item-label no-margin">10,000+</div>
              </div>
              <h4 className="trust-item-heading">Happy Parents</h4>
              <p className="trust-subtext">Across India</p>
              <div className="trust-badge-pill approved">
                <div className="badge-icon-rosette">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81 1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11-2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                </div>
                Approved
              </div>
            </div>

            {/* Rating */}
            <div className="trust-item">
              <div className="trust-item-logo stat-row">
                <div className="trust-item-label no-margin">4.9 <span className="star-inline">★</span></div>
              </div>
              <h4 className="trust-item-heading">Parent Rating</h4>
              <p className="trust-subtext">Based on 512 Reviews</p>
              <div className="trust-badge-pill rated">
                <div className="badge-icon-rosette">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 12c0-1.07-.46-2.03-1.19-2.73.15-1.05-.11-2.14-.78-3.04-.67-.9-1.63-1.5-2.74-1.69-.37-1.11-1.14-2.04-2.18-2.61-1.04-.57-2.22-.64-3.32-.21-1.1-.43-2.28-.36-3.32.21-1.04.57-1.81-1.5-2.18 2.61-1.11.19-2.07.79-2.74 1.69-.67.9-.93 1.99-.78 3.04-.73.7-1.19 1.66-1.19 2.73s.46 2.03 1.19 2.73c-.15 1.05.11-2.14.78 3.04.67.9 1.63 1.5 2.74 1.69.37 1.11 1.14 2.04 2.18 2.61a3.99 3.99 0 0 0 3.32-.21c1.1.43 2.28.36 3.32-.21 1.04-.57 1.81-1.5 2.18-2.61 1.11-.19 2.07-.79 2.74-1.69.67-.9.93-1.99.78-3.04.73-.7 1.19-1.66 1.19-2.73zM10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                </div>
                Rated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
