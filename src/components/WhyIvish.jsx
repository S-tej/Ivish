import React from 'react';

const WhyIvish = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Why We’re Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Key Point 1 */}
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Inclusive Innovation
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Designed for people of all abilities, making advanced tech affordable and accessible.
            </p>
          </div>

          {/* Key Point 2 */}
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Global Communication
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Break language barriers with real-time, culturally aware AI translation.
            </p>
          </div>

          {/* Key Point 3 */}
          <div className="card bg-base-100 shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Wearable Technology
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Empower independence through AR-powered wearables that integrate seamlessly into daily life.
            </p>
          </div>

        </div>
        <div className="mt-12">
          <a href="/products" className="btn btn-primary">
            Discover Our Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyIvish;
