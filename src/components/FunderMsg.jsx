import React from 'react';

const FoundersMessage = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img 
            src="/path/to/sahith-image.jpg" // Replace with the path to the founder's image
            alt="Sahith" 
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 md:pl-6 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            From Vision to Reality
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ivish started with a belief that technology can and should serve everyone. Join us as we redefine accessibility and communication with AI-driven solutions that make a difference for all.
          </p>
          <a href="/join" className="btn btn-primary">
            Join Our Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
