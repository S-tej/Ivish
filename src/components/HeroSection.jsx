import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-softBlue to-white dark:from-deepPurple">
        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Revolutionizing Accessibility & AI for Everyone
          </h1>
          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 mb-8 max-w-2xl mx-auto">
            Ivish is crafting groundbreaking AI solutions to empower individuals with disabilities, bridging cultures, and transforming global communication.
          </p>
          <div className="space-x-4">
            <Link to="/join" className="btn btn-primary">
              Join the Movement
            </Link>
            <Link to="/vision" className="btn btn-secondary">
              Explore the Vision
            </Link>
          </div>
        </div>
      </section>
    );
  };

export default HeroSection;
