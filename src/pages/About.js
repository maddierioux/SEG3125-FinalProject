import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './About.css';

function About() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [meetingName, setMeetingName] = useState('');
  const [meetingEmail, setMeetingEmail] = useState('');
  const [meetingDate, setMeetingDate] = useState(null);
  const [meetingTime, setMeetingTime] = useState(null);
  const [isMeetingSubmitted, setIsMeetingSubmitted] = useState(false);
  const [isContactSubmitted, setIsContactSubmitted] = useState(false);
  const [meetingError, setMeetingError] = useState('');
  const [contactError, setContactError] = useState('');

  const handleMeetingSubmit = (e) => {
    e.preventDefault();
    if (!meetingName || !meetingEmail || !meetingDate || !meetingTime) {
      setMeetingError('Please fill in all required fields.');
      return;
    }
    setMeetingError('');
    console.log({ meetingName, meetingEmail, meetingDate, meetingTime });
    setIsMeetingSubmitted(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
      setContactError('Please fill in all required fields.');
      return;
    }
    setContactError('');
    console.log({ name, email, message });
    setIsContactSubmitted(true);
  };

  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="hero-image">
          <img src="/images/hero-cake.jpg" alt="About" />
        </div>
        <div className="hero-text">
          <h1>About</h1>
        </div>
      </div>
      <div className="about-content">
        <div className="about-info">
          <div className="owner-photo">
            <img src="/images/owner-photo.jpg" alt="Owner" />
          </div>
          <div className="company-info">
            <h2>Information and History about the Company</h2>
            <p>Cake Walk Bakery has been a beloved part of our community since we first opened our doors in 2005. Founded by pastry chef Emma Williams, who dreamed of creating a haven for dessert lovers, our bakery has grown from a small shop to a local favorite known for its warm atmosphere and exceptional treats. Emma's passion for baking, combined with her commitment to using only the highest quality ingredients, has made Cake Walk Bakery a go-to destination for custom cakes, pastries, and baked goods. Over the years, we've stayed true to our roots while constantly innovating, ensuring that every visit is a delightful experience. Thank you for being a part of our journey – we look forward to continuing to serve you the best desserts in town!</p>
          </div>
        </div>
        <h3>Have a Question?<br></br><button className="faq-button" onClick={() => navigate('/faq')}>Go to FAQ</button><br></br> Or....</h3>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>All fields with * are mandatory.</p>
          {isContactSubmitted ? (
            <div className="submission-message">Contact request submitted</div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your name *</label>
                <input type="text" id="name" placeholder="Abc" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address *</label>
                <input type="email" id="email" placeholder="Abc@def.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="This is an optional" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" placeholder="Hi! I’d like to ask about" required></textarea>
              </div>
              <button type="submit">Submit</button>
              {contactError && <div className="error-message">{contactError}</div>}
            </form>
          )}
        </div>
        <div className="meeting-section">
          <h2>Set Up a Meeting with an Expert</h2>
          <p>All fields with * are mandatory.</p>
          {isMeetingSubmitted ? (
            <div className="submission-message">Meeting request submitted</div>
          ) : (
            <form onSubmit={handleMeetingSubmit}>
              <div className="form-group">
                <label htmlFor="meeting-name">Your Name *</label>
                <input
                  type="text"
                  id="meeting-name"
                  value={meetingName}
                  onChange={(e) => setMeetingName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="meeting-email">Email Address *</label>
                <input
                  type="email"
                  id="meeting-email"
                  value={meetingEmail}
                  onChange={(e) => setMeetingEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="meeting-date">Select Date *</label>
                <DatePicker
                  id="meeting-date"
                  selected={meetingDate}
                  onChange={(date) => setMeetingDate(date)}
                  dateFormat="MMMM d, yyyy"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="meeting-time">Select Time *</label>
                <DatePicker
                  id="meeting-time"
                  selected={meetingTime}
                  onChange={(time) => setMeetingTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  required
                />
              </div>
              <button type="submit">Schedule Meeting</button>
              {meetingError && <div className="error-message">{meetingError}</div>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;




