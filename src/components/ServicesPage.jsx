import React from "react";
import "./ServicesPage.css";
import { NavLink, Link } from "react-router-dom";
import profileImage from "../assets/farman.jpeg";

function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Modern, responsive and fast websites built according to your requirements.",
    },
    {
      icon: "⚛️",
      title: "React Development",
      description:
        "Interactive and dynamic web applications using React and modern frontend techniques.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Clean, attractive and user-friendly interfaces that provide a great experience.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Websites that look perfect on desktops, tablets and mobile devices.",
    },
    {
      icon: "⚡",
      title: "Website Optimization",
      description:
        "Improving website speed, performance and overall user experience.",
    },
    {
      icon: "🔧",
      title: "Website Maintenance",
      description:
        "Regular updates, bug fixing and improvements to keep your website running smoothly.",
    },
  ];

  return (
    <div className="services-page">

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
      <section className="services-hero">
        <div className="services-hero-content">

          <p className="services-label">
            WHAT I DO
          </p>

          <h1>
            My <span>Services</span>
          </h1>

          <p>
            I provide modern and reliable web development services
            to help businesses and individuals build a strong online presence.
          </p>

        </div>
      </section>


      {/* Services Section */}
      <section className="services-section">

        <div className="services-heading">
          <h2>What I Can Do For You</h2>

          <p>
            From simple websites to interactive React applications,
            I can help turn your ideas into functional digital experiences.
          </p>
        </div>


        {/* Service Cards */}
        <div className="services-container">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#">
                Learn More →
              </a>

            </div>
          ))}

        </div>

      </section>


      {/* CTA Section */}
      <section className="services-cta">

        <div>
          <h2>Need a Website?</h2>

          <p>
            Let's discuss your idea and create something amazing together.
          </p>
        </div>

        <Link to="/contact">
          Contact Me
        </Link>

      </section>

    </div>
  );
}

export default Services;
