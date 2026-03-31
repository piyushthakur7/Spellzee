export default function CurriculumSection() {
  return (
    <section className="curriculum-section section-padding">
      <div className="container">
        <span className="section-badge section-badge-orange">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="badge-icon">
            <path d="M11.8176 1.72035C12.213 1.69497 12.6092 1.75751 12.9776 1.9035C13.7463 2.21066 14.1925 2.74753 14.5109 3.48892C15.2463 3.54201 15.7367 3.42292 16.4171 3.88132C16.9665 4.25149 17.2477 4.74215 17.3751 5.38251C18.1248 5.49407 18.6906 5.62298 19.2523 6.18447C19.8513 6.78316 20.0355 7.41982 20.04 8.24186L20.0406 16.3114L20.0407 18.6185C20.0405 19.7482 20.1346 20.626 19.2642 21.501C18.9133 21.8533 18.4723 22.1024 17.9895 22.2211C17.4908 22.3399 16.3311 22.2951 15.7662 22.295L12.1992 22.2959L8.30046 22.2959C7.75568 22.2964 6.58033 22.333 6.10938 22.2413C5.6816 22.1559 5.28098 21.9679 4.94201 21.6933C4.39542 21.2569 4.04833 20.6182 3.97952 19.9221C3.92674 19.4182 3.95726 18.2541 3.95754 17.694L3.95852 13.4606L3.95824 9.69597C3.95819 9.20399 3.92967 8.14333 3.98901 7.69701C4.05342 7.21755 4.24978 6.76542 4.55618 6.39105C5.13138 5.68427 5.74694 5.49056 6.61019 5.40351C6.74981 4.89264 6.88884 4.50297 7.27847 4.12619C7.95443 3.47252 8.62019 3.50144 9.48145 3.50479C9.86409 2.47221 10.7218 1.813 11.8176 1.72035ZM18.3123 19.7516C18.3501 18.9841 18.3243 18.0352 18.3241 17.2569L18.3248 12.7976L18.3249 9.64996C18.3249 9.20978 18.3207 8.74844 18.3235 8.3106C18.3285 7.52791 18.1183 7.27469 17.3602 7.11321C17.1007 7.83173 16.8023 8.29535 16.0826 8.63397C15.8848 8.72702 15.6721 8.78437 15.4544 8.8034C15.1032 8.83551 14.6088 8.8236 14.247 8.82382L12.2876 8.82464L10.0221 8.82485C8.79532 8.82482 7.50065 8.96322 6.84054 7.59208C6.80355 7.5153 6.67809 7.16838 6.62201 7.13662L6.59358 7.13029C5.49607 7.30242 5.67058 8.14235 5.67155 9.00131L5.67373 10.6232L5.67443 15.5723L5.67279 18.3604C5.67201 18.8314 5.65099 19.3462 5.69803 19.8137C5.7202 20.034 5.89969 20.2825 6.07767 20.4014C6.23765 20.5159 6.45565 20.5605 6.65475 20.564C7.39669 20.5773 8.15405 20.5688 8.89622 20.5684L13.3359 20.5682L16.113 20.5697C16.3863 20.5698 16.6632 20.5694 16.9343 20.5699C17.4042 20.5707 17.8571 20.6033 18.153 20.1611C18.2505 20.0155 18.2817 19.924 18.3123 19.7516ZM12.1289 7.09886L14.0677 7.10062C14.4675 7.1009 15.0772 7.13003 15.447 7.04538C15.6018 6.89845 15.7144 6.73903 15.6941 6.51398C15.6358 5.8631 15.9431 5.25984 15.0355 5.23103C14.5376 5.21524 13.4979 5.36716 13.1815 4.97118C12.7099 4.381 13.1264 3.41547 11.9141 3.4559C11.5113 3.48196 11.1592 3.75025 11.1078 4.13526C10.9925 5.00057 10.726 5.26476 9.80332 5.23816C8.48196 5.20005 8.20915 5.10876 8.31665 6.59435C8.33653 6.89107 8.46 7.04043 8.7728 7.08489C9.16174 7.11246 9.55183 7.10219 9.94125 7.10144L12.1289 7.09886Z" fill="#FF5A00" />
            <path d="M11.8818 10.5329C12.39 10.5233 12.8371 10.6223 13.2775 10.8843C13.8508 11.222 14.2654 11.7746 14.4293 12.4195C14.6112 13.1431 14.4731 13.781 14.0987 14.4108C14.4099 14.6056 14.6764 14.8074 14.9413 15.0617C15.4775 15.5766 16.0731 16.576 16.0737 17.3393C16.073 17.7412 15.9125 18.1262 15.6277 18.4097C15.0778 18.9595 14.4271 18.8636 13.7114 18.8635L12.1758 18.8619L10.3432 18.8645C9.53273 18.8651 8.6952 18.9637 8.17673 18.1899C7.95129 17.8534 7.86698 17.413 7.95933 17.0166C8.23765 15.8216 8.90384 15.0651 9.89184 14.4038C9.66145 14.041 9.52992 13.6686 9.49819 13.2373C9.44815 12.5568 9.67261 11.8844 10.1215 11.3704C10.5782 10.8451 11.1958 10.5812 11.8818 10.5329ZM9.69614 17.149C10.5038 17.1284 11.3478 17.1398 12.1582 17.1397C12.8322 17.1401 13.6363 17.1193 14.2997 17.1468C13.7804 16.0782 13.025 15.4954 11.7901 15.5718C10.7173 15.7269 10.1477 16.1612 9.69614 17.149ZM12.0824 13.8272C12.515 13.7807 12.8286 13.3932 12.7839 12.9605C12.7391 12.5277 12.3529 12.2126 11.9199 12.2556C11.4846 12.2989 11.1673 12.6877 11.2123 13.1229C11.2573 13.5581 11.6474 13.8738 12.0824 13.8272Z" fill="#FF5A00" />
          </svg>
          CURRICULUM OVERVIEW
        </span>
        <h2 className="section-heading">What Your Child Learns - <span className="text-orange">5 Phases</span></h2>
        <p className="curriculum-subtitle">45 classes - 5 days a week. 9 weeks. Every week your child reads and writes - building <br /> skill progressively from day one.</p>
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
                {typeof item.icon === 'string' ? (
                  <img src={item.icon} alt={item.title} />
                ) : item.icon ? (
                  item.icon
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
