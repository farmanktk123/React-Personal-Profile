import React from "react";
import { NavLink } from "react-router-dom";

function CssCourse() {
  return (
    <>


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
      {/* ================= Internal CSS ================= */}

      <style>
        {`
          .css-course-page {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          /* Course Header */

          .css-course-header {
            background: #ffffff;
            padding: 35px;
            border-radius: 15px;
            margin-bottom: 25px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          }

          .css-course-badge {
            display: inline-block;
            padding: 6px 14px;
            background: #eff6ff;
            color: #2563eb;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .css-course-header h1 {
            font-size: 35px;
            color: #111827;
            margin: 0 0 15px;
          }

          .css-course-header p {
            color: #64748b;
            line-height: 1.7;
            font-size: 16px;
            margin: 0;
          }


          /* Course Stats */

          .css-course-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 25px;
          }

          .css-course-stat {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: 0.3s ease;
          }

          .css-course-stat:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }

          .css-course-stat strong {
            display: block;
            font-size: 22px;
            color: #2563eb;
            margin-bottom: 5px;
          }

          .css-course-stat span {
            color: #64748b;
            font-size: 14px;
          }


          /* Course Content */

          .css-course-content {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid #e5e7eb;
            margin-bottom: 25px;
          }

          .css-course-content h2 {
            color: #111827;
            margin-bottom: 20px;
          }

          .css-course-content ul {
            padding-left: 20px;
            margin: 0;
          }

          .css-course-content li {
            margin-bottom: 12px;
            color: #475569;
          }


          /* Start Button */

          .css-start-course-btn {
            border: none;
            padding: 13px 25px;
            background: #2563eb;
            color: #ffffff;
            border-radius: 7px;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: 0.3s ease;
          }

          .css-start-course-btn:hover {
            background: #1d4ed8;
            transform: translateY(-2px);
          }


          /* Responsive */

          @media (max-width: 700px) {

            .css-course-stats {
              grid-template-columns: 1fr;
            }

            .css-course-header h1 {
              font-size: 28px;
            }

            .css-course-page {
              padding: 15px;
            }

          }
        `}
      </style>


      {/* ================= Course Page ================= */}

      <div className="css-course-page">

        {/* Header */}

        <div className="css-course-header">

          <span className="css-course-badge">
            CSS3
          </span>

          <h1>
            CSS Complete Course
          </h1>

          <p>
            Learn how to create beautiful, responsive and modern
            websites using CSS.
          </p>

        </div>


        {/* Stats */}

        <div className="css-course-stats">

          <div className="css-course-stat">
            <strong>30+</strong>
            <span>Lessons</span>
          </div>

          <div className="css-course-stat">
            <strong>8 Hours</strong>
            <span>Duration</span>
          </div>

          <div className="css-course-stat">
            <strong>Beginner</strong>
            <span>Level</span>
          </div>

        </div>


        {/* Course Content */}

        <div className="css-course-content">

          <h2>
            What You Will Learn
          </h2>

          <ul>

            <li>CSS Selectors</li>

            <li>Colors and Typography</li>

            <li>Box Model</li>

            <li>Flexbox</li>

            <li>CSS Grid</li>

            <li>Responsive Design</li>

            <li>Animations and Transitions</li>

          </ul>

        </div>


        {/* Button */}

        <button className="css-start-course-btn">
          Start Course →
        </button>

      </div>
    </>
  );
}

export default CssCourse;