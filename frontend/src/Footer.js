// src/components/Footer.js

import React from 'react';
import './Footer.css'; // फुटर के लिए CSS

// Font Awesome से आइकन्स और कंपोनेंट इम्पोर्ट करें
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>CITYART PRINTER</h3>
          <p>
            हम आपकी सभी प्रिंटिंग ज़रूरतों के लिए वन-स्टॉप समाधान हैं। गुणवत्ता और ग्राहक संतुष्टि हमारी प्राथमिकता है।
          </p>
        </div>

        <div className="footer-section links">
          <h3>क्विक लिंक्स</h3>
          <ul>
            <li><a href="/">होम</a></li>
            <li><a href="/products">प्रोडक्ट्स</a></li>
            <li><a href="/about">हमारे बारे में</a></li>
            <li><a href="/contact">संपर्क करें</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>हमसे जुड़ें</h3>
          <div className="social-icons">
            {/* सोशल लिंक्स को नए टैब में खोलने के लिए target="_blank" का उपयोग करें */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} CityArt Printer | सर्वाधिकार सुरक्षित
      </div>
    </footer>
  );
};

export default Footer;