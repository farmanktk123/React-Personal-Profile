import React from "react";
import './Javascript.css';
import { NavLink } from "react-router-dom";

function JavaScriptCourse() {
  return (
    <>
        
      {/* ================= Main Course Page ================= */}

      <div className="js-course-page">

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

        {/* ================= Course Header ================= */}

        <div className="js-course-header">

          <span className="js-course-badge">
            JavaScript
          </span>

          <h1>
            JavaScript Complete Course
          </h1>

          <p>
            Learn JavaScript from fundamentals to modern
            ES6+ features and DOM manipulation.
          </p>

        </div>


        {/* ================= Course Stats ================= */}

        <div className="js-course-stats">

          <div className="js-course-stat">
            <strong>45+</strong>
            <span>Lessons</span>
          </div>

          <div className="js-course-stat">
            <strong>12 Hours</strong>
            <span>Duration</span>
          </div>

          <div className="js-course-stat">
            <strong>Intermediate</strong>
            <span>Level</span>
          </div>

        </div>


        {/* ================= What You Will Learn ================= */}

        <div className="js-course-content">

          <h2>
            What You Will Learn
          </h2>

          <ul>
            <li>JavaScript Variables</li>
            <li>Data Types</li>
            <li>Functions</li>
            <li>Arrays and Objects</li>
            <li>DOM Manipulation</li>
            <li>Events</li>
            <li>ES6 Features</li>
            <li>Async JavaScript</li>
            <li>Fetch API</li>
          </ul>

        </div>


        {/* ================= Start Button ================= */}

        <button className="js-start-course-btn">
          Start Course →
        </button>

      </div>
    </>
  );
}

export default JavaScriptCourse;