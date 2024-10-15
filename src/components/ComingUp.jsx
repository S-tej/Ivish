import React from 'react';

const WhatsComingSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-softBlue dark:from-black dark:to-deepPurple py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What’s Coming
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">

          {/* UnitySense360X Card */}
          <div className="card w-full md:w-1/2 bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src="/path/to/unity-sense-image.jpg" // Replace with your image path
                alt="UnitySense360X Concept"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-2xl font-semibold text-gray-900 dark:text-white">
                UnitySense360X
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                An AR-powered wearable, designed to foster independence for people with disabilities.
              </p>
              <div className="card-actions justify-center mt-4">
                <button className="btn bg-deepPurple text-white hover:bg-softBlue transition-all duration-300">
                  Get Updates
                </button>
              </div>
            </div>
          </div>

          {/* LinguaFlow Card */}
          <div className="card w-full md:w-1/2 bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
            <figure className="px-10 pt-10">
              <img
                src="/path/to/lingua-flow-image.jpg" // Replace with your image path
                alt="LinguaFlow UI"
                className="rounded-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-2xl font-semibold text-gray-900 dark:text-white">
                LinguaFlow
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Real-time AI translation breaking language barriers globally.
              </p>
              <div className="card-actions justify-center mt-4">
                <button className="btn bg-softBlue text-gray-900 hover:bg-deepPurple transition-all duration-300">
                  Stay Tuned
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatsComingSection;
