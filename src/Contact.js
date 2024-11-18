import React from 'react';
import Navbar from './NavBar';
import { FaLinkedin} from 'react-icons/fa'; // React Icons (FontAwesome icons)
import { Button, Tooltip } from '@mui/material';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';


function Contact() {
  const email = 'jl2748@cornell.edu';
  const linkedin = 'https://www.linkedin.com/in/joannalin1116';

  // Function to copy email to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    alert('Email copied to clipboard!');
  };

  // Function to open LinkedIn in a new tab
  const openLinkedIn = () => {
    window.open(linkedin, '_blank');
  };

  return (
    <>
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-4">Get in touch!</h1>
        <p className="text-gray-700 mb-4 pt-2">
            Feel free to connect with me via email or LinkedIn. I'm always open to new opportunities and collaborations!
        </p>

        <div className="flex flex-col items-center justify-center gap-6 pt-10">
        {/* Email Section */}
        <div className="flex items-center gap-4 justify-center">
          <EmailOutlinedIcon className="text-gray-800" /> {/* Email icon */}
          <span className="text-xl text-gray-700">{email}</span>

          {/* Copy Button */}
          <Tooltip title="Copy Email" arrow>
            <Button
              onClick={copyToClipboard}
              variant="uncontained"
              color="primary"
              startIcon={<ContentCopyOutlinedIcon style={{ color: '#6B7280' }} />}
            >
            </Button>
          </Tooltip>
        </div>

        {/* LinkedIn Section */}
        <div className="flex items-center gap-4 justify-center">
          <FaLinkedin className="text-2xl" style={{ color: '#0077B5' }} /> {/* LinkedIn icon */}
          <span className="text-xl text-gray-700">{linkedin}</span>

          {/* Open LinkedIn in New Tab Button */}
          <Tooltip title="Open LinkedIn Profile" arrow>
            <Button
              onClick={openLinkedIn}
              variant="uncontained"
              color="success"
              startIcon={<OpenInNewOutlinedIcon style={{ color: '#6B7280' }} />}
            >
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
    </>
  );
}


export default Contact;
