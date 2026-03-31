export default function Footer() {
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '60px 0 30px' }}>
      <div className="container footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '40px', marginBottom: '60px' }}>
        <div>
          <div className="logo-group footer-logo" style={{ marginBottom: '20px' }}>
            <div className="logo-first" aria-label="Spellzee Icon"></div>
            <div className="logo-second" aria-label="Spellzee Logo"></div>
          </div>
          <p style={{ color: '#fff', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '300px' }}>
            Spellzee is an IIT Madras Incubated Edtech Company dedicated to enhancing learning for students. We bridge the gap between traditional and modern education, creating an inclusive, engaging, and effective learning experience.
          </p>
          <div className="social-icons" style={{ display: 'flex', gap: '12px' }}>
            <a href="https://www.instagram.com/spellzee.in/" target="_blank" rel="noopener noreferrer" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.217.957.477 1.377.896.42.42.68.819.897 1.377.163.422.358 1.057.412 2.227.059 1.266.071 1.646.071 4.85s-.012 3.584-.07 4.85c-.056 1.17-.251 1.805-.413 2.227-.218.558-.478.957-.897 1.377-.42.42-.819.68-1.378.897-.422.163-1.057.358-2.227.412-1.267.059-1.647.071-4.85.071s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.217-.957-.477-1.377-.896-.42-.42-.68-.819-.897-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.558.477-.957.896-1.377.42-.42.819-.68 1.377-.897.422-.163 1.057-.358 2.227-.412 1.266-.059 1.646-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.259-2.911.556-.788.306-1.458.715-2.125 1.383-.67.667-1.076 1.336-1.383 2.125-.298.763-.499 1.634-.556 2.911-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.058 1.277.259 2.148.556 2.911.306.788.715 1.458 1.383 2.125.667.67 1.336 1.076 2.125 1.383.763.297 1.634.498 2.911.556 1.28.059 1.688.073 4.948.073s3.667-.014 4.947-.072c1.277-.058 2.148-.259 2.911-.556.788-.306 1.458-.715 2.125-1.383.671-.667 1.077-1.336 1.383-2.125.297-.763.498-1.634.556-2.911.06-1.28.073-1.688.073-4.948s-.014-3.667-.072-4.947c-.057-1.277-.259-2.148-.556-2.911-.306-.788-.715-1.458-1.383-2.125-.668-.67-1.337-1.076-2.125-1.383-.763-.298-1.634-.499-2.911-.556-1.281-.059-1.689-.073-4.948-.073z" /><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/spellzee/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#0077b5', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
            </a>
            <a href="https://www.facebook.com/Spellzee.in/" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#1877f2', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h4 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '20px', marginBottom: '16px', color: '#fff' }}>Program</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><a href="#" style={{ color: '#fff', fontSize: '14px', transition: '0.3s' }}>45 Days Reading Challenge</a></li>
            <li><a href="#" style={{ color: '#fff', fontSize: '14px', transition: '0.3s' }}>Curriculum Overview</a></li>
            <li><a href="#" style={{ color: '#fff', fontSize: '14px', transition: '0.3s' }}>How We Teach</a></li>
            <li><a href="#" style={{ color: '#fff', fontSize: '14px', transition: '0.3s' }}>Sample Worksheets</a></li>
            <li><a href="#" style={{ color: '#fff', fontSize: '14px', transition: '0.3s' }}>Parent Reviews</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 style={{ fontFamily: "'Baloo 2', cursive", fontSize: '20px', marginBottom: '16px', color: '#fff' }}>Get in Touch</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 9361102618
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              support@spellzee.com
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontSize: '14px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Mon-Sat • 9AM - 9PM
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ borderTop: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontSize: '12px', padding: '0 20px' }}>
        <div>© 2022 Spellzee. All rights reserved.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Made with <span style={{ color: '#ff4d4d' }}>❤️</span> for young readers across India
        </div>
      </div>
    </footer>
  );
}
