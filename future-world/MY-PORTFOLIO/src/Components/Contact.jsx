import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import phone from '../hd-images/phone.png';
import mail from '../hd-images/mail.png';
import contact from '../hd-images/address.webp';
import cont from '../images/contact.avif';
import { FaArrowLeft } from 'react-icons/fa'; // Using react-icons for back arrow

function Contact() {
  const navigate = useNavigate(); // Hook for navigation

  const handleBackClick = () => {
    navigate('/port'); // Navigate to Port.jsx (you should have this route set up in your router)
  };

  return (
    <div className="fullbg">
    <div className="contact-page cbackground" >
      <div className="contact-content">
        <div className="contact-image">
          <img src={cont} alt="Contact" />
        </div>
        <div className="contact-details" >
          <h1>Contact Me</h1>
         
          <ul>
            <li>
              <img src={phone} alt="Phone" className="contact-icon" />
              <span>9360296093</span>
            </li>
            <li>
              <img src={mail} alt="Email" className="contact-icon" />
              <span><a style={{color: 'white'}} href="mailto:harishthangavelp@gmail.com">harishthangavelp@gmail.com</a></span>
            </li>
            <button className="back-button" onClick={handleBackClick}>
            <FaArrowLeft /> Back
          </button>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
