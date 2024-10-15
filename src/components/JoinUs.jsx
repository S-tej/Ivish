import React, { useState } from 'react';

const JoinOurJourney = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Email submitted: ", email);
  };

  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Be a Part of the Future
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Stay updated with our developments and get exclusive early access to the future of AI and accessibility.
        </p>
        
        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full max-w-xs mb-4 md:mb-0 md:mr-4"
          />
          <button type="submit" className="btn btn-primary">
            Sign Up for Early Access
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinOurJourney;
