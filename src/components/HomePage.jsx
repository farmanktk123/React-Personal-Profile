import React from "react";
import "./HomePage.css";
import { Link, NavLink } from "react-router-dom";
import profileImage from "../assets/farman.jpeg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const Navigation = useNavigate ();

  function HandleClick (type) {
    if(type == "projects")
    {
      Navigation("/projects");
    }
    if(type === "contactme")
    Navigation("/contact");
    
  }
  return (
    <div className="home-page">

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


      {/* ================= Hero Section ================= */}
      <section className="hero">

        <div className="hero-content">

          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Farman Nabi</span>
          </h1>

          <h2>
            FrontEnd Web Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and user-friendly websites
            using HTML, CSS, JavaScript and React. I love turning
            creative ideas into beautiful digital experiences.
          </p>

          <div className="hero-buttons">
            <button className="btn primary-btn" onClick={() => HandleClick("projects")}>
              View My Projects
            </button>

            <button className="btn secondary-btn" onClick={() => HandleClick("contactme")}>
              Contact Me
            </button>
          </div>

        </div>


        {/* Hero Image */}
        <div className="hero-image">

          <div className="image-circle">
            <img
              src={profileImage}
            />
          </div>

        </div>

      </section>


      {/* ================= Introduction ================= */}
      <section className="intro">

        <div className="intro-content">

          <p className="section-title">
            ABOUT MY WORK
          </p>

          <h2>
            Building Digital Experiences
          </h2>

          <p>
            I'm passionate about web development and enjoy creating
            websites that are not only visually attractive but also
            fast, responsive and easy to use.
          </p>

          <p>
            I continuously improve my skills by working on real-world
            projects and learning modern technologies. My current focus
            is on React and frontend development.
          </p>

        </div>

        <div className="skills-box">

          <div className="skill">
            <strong>HTML</strong>
            <span>90%</span>
          </div>

          <div className="skill">
            <strong>CSS</strong>
            <span>85%</span>
          </div>

          <div className="skill">
            <strong>JavaScript</strong>
            <span>80%</span>
          </div>

          <div className="skill">
            <strong>React</strong>
            <span>75%</span>
          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="cta">

        <h2>
          Have a Project in Mind?
        </h2>

        <p>
          Let's work together and turn your idea into a modern
          and amazing website.
        </p>

        <a href="#" className="btn primary-btn">
          Let's Work Together
        </a>

      </section>

    </div>
  );
}

export default HomePage;
