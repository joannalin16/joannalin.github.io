import React from 'react';
import Navbar from './NavBar';
import profileImage from './images/profile.jpg';


// Page Components
function Home() {
    return (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 w-full">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-6">Joanna Lin</h1>
          <p className="text-xl text-gray-700">📚 Cornell University</p>
          <p className="text-xl text-gray-700">💻 Software Engineer / Product Manager</p>
          <p className="text-xl text-gray-700">📍 New York, NY</p>
        </div>
        <div className="w-60 h-60 rounded-full overflow-hidden">
          <img src={profileImage} alt="Joanna Lin" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
        </>
    );
  }

export default Home;