import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Founders from './components/Founders';
import Investors from './components/Investors';
import Contributors from './components/Contributors';
import Tasks from './components/Tasks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Founders />
      <Investors />
      <Contributors />
      <Tasks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
