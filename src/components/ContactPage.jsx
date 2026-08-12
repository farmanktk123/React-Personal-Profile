import React from "react";
import "./ContactPage.css";
import { Link, NavLink } from "react-router-dom";
import profileImage from "../assets/farman.jpeg";
import { useState } from "react";

function Contact() {
  const [sentmessage, setSentmessage] = useState(false);

  function HandleMessage (e) 
  {
    e.preventDefault();

    setSentmessage(true);

    e.target.reset();
  }
  return (
    <div className="contact-page">

    {/* ================= Navbar ================= */}
    <nav className="navbar">

        <div className="logo">
        <img src={profileImage} alt="Logo image" className="profileimg"/>
        <span>F</span>arman Nabi
        </div>

        <ul>
        <li><NavLink to="/" className ={({isActive}) => isActive ? 'active': ""}>
        Home
        </NavLink></li>
        <li><NavLink to="/about" className ={({isActive}) => isActive ? 'active': ""}>
        About
        </NavLink></li>
        <li><NavLink to="/services" className ={({isActive}) => isActive ? 'active': ""}>
        Services
        </NavLink></li>
        <li><NavLink to="/projects" className ={({isActive}) => isActive ? 'active': ""}>
        Projects
        </NavLink></li>
        <li><NavLink to="/contact" className ={({isActive}) => isActive ? 'active': ""}>
        Contact
        </NavLink></li>
        <li><NavLink to="/courses" className ={({isActive}) => isActive ? 'active': ""}>
        Courses
        </NavLink></li>
        </ul>

    </nav>

      {/* Contact Hero */}
      <section className="contact-hero">
        <p>GET IN TOUCH</p>
        <h1>Let's <span>Talk</span></h1>
        <p className="hero-text">
          Have a project in mind or want to work together?
          I'd love to hear from you.
        </p>
      </section>


      {/* Contact Section */}
      <section className="contact-section">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Let's Work Together</h2>

          <p>
            I'm always interested in hearing about new projects,
            creative ideas and opportunities. Feel free to contact me
            and I'll get back to you as soon as possible.
          </p>


          <div className="info-item">
            <div className="info-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>farmannabi58@gmail.com</p>
            </div>
          </div>


          <div className="info-item">
            <div className="info-icon">📱</div>
            <div>
              <h3>Phone</h3>
              <p>0332-9481324</p>
            </div>
          </div>


          <div className="info-item">
            <div className="info-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Pakistan</p>
            </div>
          </div>


          {/* Social Links */}
          <div className="social-links">
            <a href="#">GitHub</a>
            <a href="https://www.linkedin.com/in/farman-nabi-1aa9713a2?utm_source=share_via&utm_content=profile&utm_medium=member_android">LinkedIn</a>
            <a href="#">Facebook</a>
          </div>

        </div>


        {/* Right Side - Form */}
        <div className="contact-form">

        <h2>Send Me a Message</h2>

          {sentmessage && (
            <div className="success-message">
              Message Sent Successfully!
              <br />
              Please wait for confirmation message.
            </div>
          )}

          <form onSubmit={HandleMessage}>

            <div className="form-row">

              <div className="input-group">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                />
              </div>

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

            </div>


            <div className="input-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
              />
            </div>


            <div className="input-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>


            <button type="submit">
              Send Message →
            </button>

          </form>

        </div>

      </section>


      {/* Bottom CTA */}
      <section className="contact-bottom">

        <h2>Have an idea? Let's make it happen.</h2>

        <p>
          I'm ready to help you build something amazing.
        </p>

      </section>

    </div>
  );
}

export default Contact;
