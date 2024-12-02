import React from 'react';
import { Link } from 'react-router-dom';
import resume from './assets/resume.pdf';
import logo from './images/logo4.png';

// Navbar Component
function Navbar() {

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Joanna_Lin_Resume.pdf';
        link.click();
      };

  return (
    <div className="bg-gray-100 px-8 py-6 w-full fixed top-0 z-100">
      <div className='flex flex-row justify-between'>
        <div>
          <Link to="/" className="font-sans"> <img src={logo} alt="Logo" className="h-16 w-auto" /> </Link>
        </div>
        <div className="flex flex-row space-x-6 justify-between items-center">
          <Link to="/about-me" className="hover:text-gray-300 font-sans">About Me</Link>
          <Link to="/experience" className="hover:text-gray-300 font-sans">Experience</Link>
          {/* <Link to="/resume" className="hover:text-gray-300 font-sans">Resumé</Link> */}
          <button
            onClick={downloadResume} 
            className="hover:text-gray-300 font-sans"
          >
            Resumé
          </button>
          <Link 
            to="/contact" className="bg-gray-800 text-white font-sans px-4 py-1 rounded hover:bg-gray-500 hover:text-white transition-colors duration-200">Contact</Link>
      </div>
      </div>
    </div>
  );
}

export default Navbar;