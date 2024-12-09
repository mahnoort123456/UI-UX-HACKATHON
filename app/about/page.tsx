import React from 'react'
import AboutHero from '../components/aboutHero'
import AboutSection from '../components/aboutSection'
import AboutPopularProduct from '../components/aboutPopularProduct';

const Aboutpage = () => {
    return (
      <div className="bg-white" id="about">
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default Aboutpage
