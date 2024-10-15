import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ComingUp from '../components/ComingUp';
import MissionStatement from '../components/MissionStatement';
import FoundersMessage from '../components/FunderMsg';
import WhyIvish from '../components/WhyIvish';
import JoinOurJourney from '../components/JoinUs';

const Home = () => {
  return (
    <div className="bg-primaryBackground min-h-screen">
      <Header /> {/* Sticky Header */}

      {/* Hero Section */}
      <HeroSection />


      {/* Features Section */}
      <ComingUp/>

      <MissionStatement/>

      <FoundersMessage/>

      <WhyIvish/>
      
      <JoinOurJourney/>
    </div>
  );
};

export default Home;
