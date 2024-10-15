import React from 'react';

const Header = () => {
  return (
    <header className="navbar bg-primaryBackground sticky top-0 z-50 shadow-md">
      <div className="flex-1 text-center">
        {/* Logo */}
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src="/path-to-your-logo.svg" alt="Ivish Logo" className="w-16 h-16 mx-auto" />
        </a>
      </div>

      {/* Navigation Menu */}
      <div className="flex-none hidden md:block">
        <ul className="menu menu-horizontal p-0">
          <li><a href="/" className="text-primaryText hover:bg-softBlue">Home</a></li>
          <li><a href="/vision" className="text-primaryText hover:bg-softBlue">Vision</a></li>
          <li><a href="/products" className="text-primaryText hover:bg-softBlue">Products</a></li>
          <li><a href="/early-access" className="text-primaryText hover:bg-softBlue">Early Access</a></li>
          <li><a href="/about" className="text-primaryText hover:bg-softBlue">About</a></li>
          <li><a href="/careers" className="text-primaryText hover:bg-softBlue">Careers</a></li>
          <li><a href="/contact" className="text-primaryText hover:bg-softBlue">Contact</a></li>
        </ul>
      </div>

      {/* Call to Action (CTA) Button */}
      <div className="ml-4">
        <a
          href="/early-access"
          className="btn bg-deepPurple text-white hover:bg-softBlue"
        >
          Get Early Access
        </a>
      </div>
    </header>
  );
};

export default Header;
