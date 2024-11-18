// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Experience from './Experience';

// App Component
function App() {
  return (
    <Router>
      <div>
        <div className="">
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


function Resume() {
  return <h2>Resume</h2>;
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
