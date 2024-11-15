import React from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
function Navbar() {
  return (
    <div className="bg-gray-100 px-8 py-6 w-full fixed top-0 z-100">
      <div className='flex flex-row justify-between'>
        <div>
          <Link to="/" className="font-sans">logo</Link>
        </div>
        <div className="flex flex-row space-x-6 justify-between items-center">
          <Link to="/about-me" className="hover:text-gray-300 font-sans">About Me</Link>
          <Link to="/experience" className="hover:text-gray-300 font-sans">Experience</Link>
          <Link to="/resume" className="hover:text-gray-300 font-sans">Resumé</Link>
          <Link 
            to="/contact" className="bg-gray-800 text-white font-sans px-4 py-1 rounded hover:bg-black hover:text-white transition-colors duration-200">Contact</Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;