import './AboutPage.css'
import { Link, NavLink } from "react-router-dom";
import profileImage from "../assets/farman.jpeg";
import { useNavigate } from 'react-router-dom';

function AboutPage() {

  const Navigation = useNavigate ();
  function HandleClick() {
    Navigation("/contact");
  }

  return (
    <div className="about-page">

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

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            We are passionate about creating modern, beautiful and
            user-friendly digital experiences.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
            alt="Our Team"
          />
        </div>

        <div className="about-text">
          <h2>Who We Are</h2>

          <p>
            Welcome to our website! We are a team of creative developers
            and designers who love building modern and responsive websites.
          </p>

          <p>
            Our goal is to provide high-quality digital solutions that
            are simple, fast, attractive and easy to use.
          </p>

          <button>Learn More</button>
        </div>

      </section>

      {/* Mission & Vision */}
      <section className="mission-section">

        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create innovative digital solutions that
            help people and businesses grow online.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>
            We want to become a trusted platform known for creativity,
            quality and excellent user experience.
          </p>
        </div>

        <div className="mission-card">
          <h2>Our Values</h2>
          <p>
            We believe in quality, honesty, creativity, teamwork and
            continuous learning.
          </p>
        </div>

      </section>

      {/* Statistics */}
      <section className="stats-section">

        <div className="stat">
          <h2>5+</h2>
          <p>Years Experience</p>
        </div>

        <div className="stat">
          <h2>100+</h2>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h2>50+</h2>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h2>10+</h2>
          <p>Team Members</p>
        </div>

      </section>

      {/* Call To Action */}
      <section className="about-cta">
        <h2>Let's Build Something Amazing</h2>

        <p>
          Have a project in mind? Let's work together and turn your
          idea into reality.
        </p>

        <button onClick={HandleClick}>
          Contact Us
        </button>
      </section>

    </div>
  );
}

export default AboutPage;
