"use client";
import { useState } from 'react';

export default function FaqSection() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="faq-section-new">
      <span className="section-badge section-badge-orange">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        Frequently Asked Questions
      </span>
      <h2 className="faq-heading-new">Parents <span className="text-orange">Ask. We Answer</span></h2>
      <p className="faq-subtext">Everything you need to know before enrolling your child</p>
      <div className="faq-list">
        {[
          { q: 'Is the ₹4,500 fee a one-time payment?', a: 'Yes, ₹4,500 is a one-time payment for the entire 45-day program. There are no hidden charges or recurring fees.' },
          { q: 'Are classes live or recorded?', a: 'All classes are live and interactive. Children learn in small groups with a certified teacher.' },
          { q: 'What age group is this program for?', a: 'This program is designed for children aged 4-8 years. It works for beginners as well as children who need to strengthen their reading foundation.' },
          { q: 'What is the class schedule?', a: 'Classes are held 5 days a week (Monday to Friday), and each session is 45 minutes long. You can choose from multiple batch timings.' },
        ].map((faq, index) => (
          <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{faq.q}</span>
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
