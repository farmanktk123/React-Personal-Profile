import './ProjectPage.css'
import { Link, NavLink } from "react-router-dom";
import profileImage from "../assets/farman.jpeg";

function Projects() {
  const projects = [
    {
      title: "Currency Converter",
      description:
        "A modern currency converter application that converts currencies using real-time exchange rates.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0o1U1rG2mF7bn8aN_GZ4WSCXPd0vhuPdnednqUy3ySA&s=10",
      tech: "React, API, CSS",

      LiveDemo: 'https://currency-converter-repository.vercel.app/',
      Github: 'https://github.com/farmanktk123/Currency-Converter-Repository',
    },

    {
      title: "Rock Paper Scissors",
      description:
        "A responsive weather application that displays current weather information for different cities.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2iudl9btAFsKJngZGiCspdvxyvdKN9GjI56zwHz1rx9tTWUwdI1oZH4&s=10",
      tech: "JavaScript, API, CSS",

      LiveDemo: 'https://rock-paper-scissors-pi-red-10.vercel.app/',
      Github: 'https://github.com/farmanktk123/RockPaperScissors',
    },

    {
      title: "Password Generator",
      description:
        "A secure password generator with customizable password length, numbers and special characters.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eis4wRtHY55OY_rP1Hw95V0mFvcz2OnsTpQTbfyQdQ&s=10",
      tech: "React, JavaScript, CSS",

      LiveDemo: 'https://password-generator-app-tqeu.vercel.app/',
      Github: 'https://github.com/farmanktk123/Password-Generator-App',
    },

    {
      title: "Qoute Generator",
      description:
        "A simple and responsive todo application for adding, completing and deleting daily tasks.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      tech: "HTML, CSS, JavaScript",

      LiveDemo: 'https://qoute-generator-gray.vercel.app/',
      Github: 'https://github.com/farmanktk123/Qoute-Generator',
    },

    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio website showcasing skills, projects and contact information.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      tech: "React, CSS, JavaScript",

      LiveDemo:'https://protofolio-com.vercel.app/',
      Github: 'https://github.com/farmanktk123/protofolio.com',
    },

    {
      title: "Calculator",
      description:
        "A clean and responsive calculator application with basic arithmetic operations.",
      image:
        "https://images.unsplash.com/photo-1587145820266-a5951ee6f620",
      tech: "HTML, CSS, JavaScript",

      LiveDemo: 'https://final-calculator-com.vercel.app/',
      Github: 'https://github.com/farmanktk123/Final-Calculator.com',
    },
  ];

  return (
    <section className="projects-section">

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

      {/* Heading */}
      <div className="projects-heading">
        <h2>Latest Projects</h2>
        <span>
          Here are some of the projects I have created using modern
          web technologies.
        </span>
      </div>

      {/* Projects */}
      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span className="project-tech">
                {project.tech}
              </span>

              <div className="project-buttons">
                <button>
                  <a href={project.LiveDemo}>Live Demo</a>
                </button>

                <button className="github-btn">
                  <a href={project.Github}>GitHub</a>
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
