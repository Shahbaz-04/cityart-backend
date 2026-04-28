import React from 'react';
import './HomeScreen.css'; // इस स्क्रीन के लिए CSS

const HomeScreen = () => {
  return (
    <div className="homescreen">
      {/* हीरो सेक्शन (मुख्य बैनर) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>आपकी कल्पना, हमारी प्रिंटिंग</h1>
          <p className="hero-sub">बैग, कार्ड, बैनर और भी बहुत कुछ - उच्च गुणवत्ता वाली प्रिंटिंग सेवाएँ, आपके दरवाज़े पर।</p>
          <button className="hero-button">हमारे प्रोडक्ट्स देखें</button>
        </div>
      </section>

      {/* कैटेगरी सेक्शन */}
      <section className="categories-section">
        <h2>हमारी सेवाएँ</h2>
        <div className="category-container">
          <div className="category-card">
            <i className="fas fa-shopping-bag category-icon"></i>
            <h3>बैग प्रिंटिंग</h3>
            <p>कस्टम डिज़ाइन वाले कपड़े और कागज़ के बैग।</p>
          </div>
          <div className="category-card">
            <i className="fas fa-id-card category-icon"></i>
            <h3>कार्ड प्रिंटिंग</h3>
            <p>विजिटिंग कार्ड, शादी के कार्ड और निमंत्रण पत्र।</p>
          </div>
          <div className="category-card">
            <i className="fas fa-flag category-icon"></i>
            <h3>बैनर और पोस्टर</h3>
            <p>प्रमोशन और इवेंट्स के लिए आकर्षक बैनर।</p>
          </div>
          <div className="category-card">
            <i className="fas fa-tshirt category-icon"></i>
            <h3>टी-शर्ट प्रिंटिंग</h3>
            <p>अपनी पसंदीदा डिज़ाइन वाली टी-शर्ट पहनें।</p>
          </div>
        </div>
      </section>

      {/* फीचर्ड प्रोडक्ट्स सेक्शन */}
      <section className="featured-products-section">
        <h2>लोकप्रिय प्रोडक्ट्स</h2>
        <div className="product-grid">
          {/* प्रोडक्ट 1 */}
          <div className="product-card">
            <img src="https://placehold.co/400x300/EFEFEF/333333?text=Premium+Visiting+Card" alt="Visiting Card" />
            <div className="product-info">
              <h3>प्रीमियम विजिटिंग कार्ड</h3>
              <p className="product-price">₹250 से शुरू</p>
            </div>
          </div>
          {/* प्रोडक्ट 2 */}
          <div className="product-card">
            <img src="https://placehold.co/400x300/EFEFEF/333333?text=Custom+Tote+Bag" alt="Tote Bag" />
            <div className="product-info">
              <h3>कस्टम टोट बैग</h3>
              <p className="product-price">₹400 से शुरू</p>
            </div>
          </div>
          {/* प्रोडक्ट 3 */}
          <div className="product-card">
            <img src="https://placehold.co/400x300/EFEFEF/333333?text=Flex+Banner" alt="Flex Banner" />
            <div className="product-info">
              <h3>फ्लेक्स बैनर (3x5 फीट)</h3>
              <p className="product-price">₹500 से शुरू</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
