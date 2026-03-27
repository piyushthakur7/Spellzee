const fs = require('fs');
let content = fs.readFileSync('src/style.css');

// Find the index of the first null byte, which indicates the start of the garbled UTF-16
const nullIndex = content.indexOf(0);
if (nullIndex !== -1) {
  content = content.slice(0, nullIndex);
}

const appendText = `
/* ===== Payment Page ===== */
.payment-page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #FFF8F2;
}

.payment-header {
  padding: 24px 40px;
  background-color: #ffffff;
}

.payment-content {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 40px 20px;
  gap: 60px;
}

.payment-left {
  flex: 1;
  padding-top: 20px;
}

.payment-left h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #111;
  max-width: 300px;
  line-height: 1.2;
}

.info-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: 16px;
  background-color: #111;
  color: #fff;
}

.card-icon {
  font-size: 28px;
  color: #FF6611;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 102, 17, 0.1);
  border-radius: 50%;
}

.card-text h4 {
  font-size: 18px;
  color: #FF6611;
  margin-bottom: 4px;
}

.card-text p {
  font-size: 14px;
  color: #eee;
  margin: 0;
}

.payment-right {
  flex: 1.2;
}

.form-container {
  background-color: #fff;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.form-container h3 {
  font-size: 24px;
  margin-bottom: 30px;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-group {
  margin-bottom: 24px;
  flex: 1;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #333;
}

.form-group input, .form-group select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 15px;
  font-family: inherit;
  transition: all 0.2s;
}

.form-group input:focus, .form-group select:focus {
  outline: none;
  border-color: #FF6611;
  box-shadow: 0 0 0 3px rgba(255,102,17,0.1);
}

.phone-input {
  display: flex;
}

.country-code {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  border-right: none;
  border-radius: 12px 0 0 12px;
  padding: 14px 16px;
  font-size: 15px;
  color: #666;
  font-weight: 600;
}

.phone-input input {
  border-radius: 0 12px 12px 0;
}

.btn-block {
  width: 100%;
  padding: 18px;
  font-size: 18px;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .payment-content {
    flex-direction: column;
  }
  .form-row {
    flex-direction: column;
    gap: 0;
  }
}
`;

fs.writeFileSync('src/style.css', Buffer.concat([content, Buffer.from(appendText, 'utf8')]));
console.log('Fixed style.css encoding and appended styles');
