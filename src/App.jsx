import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AddOns from './components/AddOns';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <AddOns />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
