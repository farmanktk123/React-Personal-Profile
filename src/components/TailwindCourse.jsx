import React from "react";
import { NavLink } from "react-router-dom";


function TailwindCourse() {
  return (
    <>
      {/* ================= Internal CSS ================= */}

      <style>
        {`
          .tailwind-course-page {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          /* ================= Course Header ================= */

          .tailwind-course-header {
            background: #ffffff;
            padding: 35px;
            border-radius: 15px;
            margin-bottom: 25px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          }

          .tailwind-course-badge {
            display: inline-block;
            padding: 6px 14px;
            background: #ecfeff;
            color: #0891b2;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .tailwind-course-header h1 {
            font-size: 35px;
            color: #111827;
            margin: 0 0 15px;
          }

          .tailwind-course-header p {
            color: #64748b;
            line-height: 1.7;
            font-size: 16px;
            margin: 0;
          }


          /* ================= Course Stats ================= */

          .tailwind-course-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 25px;
          }

          .tailwind-course-stat {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: 0.3s ease;
          }

          .tailwind-course-stat:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }

          .tailwind-course-stat strong {
            display: block;
            font-size: 22px;
            color: #0891b2;
            margin-bottom: 5px;
          }

          .tailwind-course-stat span {
            color: #64748b;
            font-size: 14px;
          }


          /* ================= Course Content ================= */

          .tailwind-course-content {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid #e5e7eb;
            margin-bottom: 25px;
          }

          .tailwind-course-content h2 {
            color: #111827;
            margin-bottom: 20px;
          }

          .tailwind-course-content ul {
            padding-left: 20px;
            margin: 0;
          }

          .tailwind-course-content li {
            margin-bottom: 12px;
            color: #475569;
          }


          /* ================= Start Button ================= */

          .tailwind-start-course-btn {
            border: none;
            padding: 13px 25px;
            background: #0891b2;
            color: #ffffff;
            border-radius: 7px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s ease;
          }

          .tailwind-start-course-btn:hover {
            background: #0e7490;
            transform: translateY(-2px);
          }


          /* ================= Responsive ================= */

          @media (max-width: 700px) {

            .tailwind-course-stats {
              grid-template-columns: 1fr;
            }

            .tailwind-course-header h1 {
              font-size: 28px;
            }

            .tailwind-course-page {
              padding: 15px;
            }

          }
        `}
      </style>


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


      {/* ================= Course Page ================= */}

      <div className="tailwind-course-page">

        {/* Course Header */}

        <div className="tailwind-course-header">

          <span className="tailwind-course-badge">
            Tailwind CSS
          </span>

          <h1>
            Tailwind CSS Complete Course
          </h1>

          <p>
            Learn how to build modern responsive interfaces
            quickly using Tailwind CSS utility classes.
          </p>

        </div>


        {/* Course Stats */}

        <div className="tailwind-course-stats">

          <div className="tailwind-course-stat">
            <strong>25+</strong>
            <span>Lessons</span>
          </div>

          <div className="tailwind-course-stat">
            <strong>7 Hours</strong>
            <span>Duration</span>
          </div>

          <div className="tailwind-course-stat">
            <strong>Intermediate</strong>
            <span>Level</span>
          </div>

        </div>


        {/* Course Content */}

        <div className="tailwind-course-content">

          <h2>
            What You Will Learn
          </h2>

          <ul>

            <li>Tailwind Installation</li>

            <li>Utility Classes</li>

            <li>Colors and Typography</li>

            <li>Flexbox and Grid</li>

            <li>Responsive Design</li>

            <li>Spacing and Sizing</li>

            <li>Hover Effects</li>

            <li>Responsive Components</li>

          </ul>

        </div>


        {/* Start Button */}

        <button className="tailwind-start-course-btn">
          Start Course →
        </button>

      </div>
    </>
  );
}

export default TailwindCourse;