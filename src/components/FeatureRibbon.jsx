export default function FeatureRibbon() {
  return (
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
  );
}
