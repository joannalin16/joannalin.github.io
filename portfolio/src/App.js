// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

// Navbar Component
function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6 text-white">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about-me" className="hover:text-gray-300">About Me</Link>
        </li>
        <li>
          <Link to="/experience" className="hover:text-gray-300">Experience</Link>
        </li>
        <li>
          <Link to="/resume" className="hover:text-gray-300">Resume</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Page Components
function Home() {
  return <h2>Welcome to my Home Page</h2>;
}

function AboutMe() {
  return <h2>About Me</h2>;
}

function Experience() {
  return <h2>Experience</h2>;
}

function Resume() {
  return <h2>Resume</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;



// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Link } from 'react-router-dom';
// import resumePDF from './assets/resume.pdf';

// function App() {
//   return (
//     <div className="min-h-screen">
//         <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
//           <Link to="/" className="text-2xl font-bold">
//             Joanna Lin
//           </Link>
//           <div className="space-x-4">
//             <Link to="/about" className="hover:underline">About Me</Link>
//             <Link to="/experience" className="hover:underline">Experience</Link>
//             <a href={resumePDF} download className="hover:underline">Resumé</a>
//             <Link to="/contact" className="hover:underline">Contact</Link>
//           </div>
//         </nav>
//         </div>
//   );
// }

// export default App;
