import React from 'react';
import Header from './components/Header';
import Footer from './Footer'; // फुटर को इम्पोर्ट करें
import HomeScreen from './HomeScreen'; // होमस्क्रीन को इम्पोर्ट करें
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <HomeScreen /> {/* यहाँ हमने HomeScreen कंपोनेंट का उपयोग किया है */}
      </main>
      <Footer /> {/* फुटर को यहाँ जोड़ें */}
    </div>
  );
}

export default App;