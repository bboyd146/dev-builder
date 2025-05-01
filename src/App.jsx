import React, { useState } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import AddOns from './components/AddOns';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <div>
      <Hero />
      <Services />
      <Pricing onPackageSelect={setSelectedPackage} />
      <Testimonials />
      <AddOns onSelectionChange={setSelectedAddOns} />
      <Contact selectedAddOns={selectedAddOns} selectedPackage={selectedPackage} />
      <Footer />
    </div>
  );
}

export default App;
