import Script from 'next/script';
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
        <Script
          id="whatsapp-widget-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var url = 'https://whatsapp-chat-widget.web.app/whatsapp-chat-widget.js';
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.async = true;
              script.src = url;
              var chatOptions = {
                "buttonSetting":{
                  "ctaText":"Chat with us",
                  "positionIsBottomRight":true,
                  "backgroundColor":"#37c968",
                  "borderRadius":40,
                },
                "widgetSetting":{
                  "companyName":"SPELLZEE",
                  "companySubTitle":"Dream-Learn-Rule",
                  "companyImg":"https://spellzee.in/wp-content/uploads/2022/07/spellzee-latest-logo.png",
                  "phoneNumber":"918248751351",
                  "welcomeText":"Hi there! How can I help you?",
                  "userSentText":"Hello, I have a question about {{page_link}}",
                  "showByDefault": null,
                  "ctaText":"Start chat",
                  "headerBackgroundColor":"#0a5f54",
                  "borderRadius":30,
                }
              };
              script.onload = function() {
                  createWhatsappChatWidget(chatOptions);
              };
              var firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
            `
          }}
        />
      </body>
    </html>
  );
}
