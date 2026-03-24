import '../style.css';

export const metadata = {
  title: 'Spellzee | 45 Days Reading Challenge - Phonics for Kids',
  description: "Your child will READ & WRITE ENGLISH CONFIDENTLY with Spellzee's proven phonics method trusted by 1000+ parents across India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/spellzee-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
