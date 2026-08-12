import React from "react";
import profileImage from "../assets/farman.jpeg";
import { NavLink, Outlet } from 'react-router-dom';
import "./Courses.css";
import './CoursesDashboard.css';

function Courses() {

  const courses = [
    {
      title: "HTML Complete Course",
      description:
        "Learn HTML from basic structure to creating modern and semantic websites.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tech: "HTML5",
      level: "Beginner",
      link: "#",
    },

    {
      title: "CSS Complete Course",
      description:
        "Learn CSS including Flexbox, Grid, animations and responsive web design.",
      image:
        "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2",
      tech: "CSS3",
      level: "Beginner",
      link: "#",
    },

    {
      title: "JavaScript Course",
      description:
        "Master JavaScript fundamentals, DOM manipulation, events and modern ES6.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      tech: "JavaScript",
      level: "Intermediate",
      link: "#",
    },

    {
      title: "React JS Course",
      description:
        "Build modern interactive web applications using React and its powerful hooks.",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      tech: "React JS",
      level: "Intermediate",
      link: "#",
    },

    {
      title: "Tailwind CSS",
      description:
        "Create beautiful responsive interfaces quickly using Tailwind CSS utilities.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766",
      tech: "Tailwind CSS",
      level: "Intermediate",
      link: "#",
    },

    {
      title: "Git & GitHub",
      description:
        "Learn version control, Git commands, GitHub repositories and collaboration.",
      image:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      tech: "Git & GitHub",
      level: "Beginner",
      link: "#",
    },
  ];

  return (
    <section className="courses-section">
    {/* ================= Courses Navbar ================= */}

<nav className="courses-navbar">

  <div className="courses-logo">
  <h2>Learn<span>Hub</span></h2>
  </div>

    <div className="courses-nav-links">

      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "active" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/courses/html"
        className={({ isActive }) => isActive ? "course-active" : ""
        }
      >
        HTML
      </NavLink>

      <NavLink
        to="/courses/css"
        className={({ isActive }) => isActive ? "course-active" : ""
        }
      >
        CSS
      </NavLink>

      <NavLink
        to="/courses/javascript"
        className={({ isActive }) => isActive ? "course-active" : ""
        }
      >
        JavaScript
      </NavLink>

      <NavLink
        to="/courses/react"
        className={({ isActive }) => isActive ? "course-active" : ""
        }
      >
        React
      </NavLink>

      <NavLink
        to="/courses/tailwind"
        className={({ isActive }) => isActive ? "course-active" : ""
        }
      >
        Tailwind
      </NavLink>

    </div>

</nav>


{/* ================= Page Content ================= */}

<main className="courses-main">
<Outlet />
</main>


      <div className="courses-heading">
        <p className="section-tag">MY LEARNING</p>

        <h2>
          My <span>Courses</span>
        </h2>

        <p>
          Here are some of the courses I have completed to improve my
          web development skills.
        </p>
      </div>


      <div className="courses-container">

        {courses.map((course, index) => (

          <div className="course-card" key={index}>

            <div className="course-image">
              <img
                src={course.image}
                alt={course.title}
              />
            </div>


            <div className="course-content">

              <div className="course-info">
                <span>{course.tech}</span>
                <span>{course.level}</span>
              </div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <a
                href={course.link}
                className="course-btn"
              >
                View Course →
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Courses;
