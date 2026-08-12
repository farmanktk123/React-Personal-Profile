import React from "react";
import { NavLink } from "react-router-dom";

function ReactCourse() {
  return (
    <>
      {/* ================= Internal CSS ================= */}

      <style>
        {`
          .react-course-page {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          /* Course Header */

          .react-course-header {
            background: #ffffff;
            padding: 35px;
            border-radius: 15px;
            margin-bottom: 25px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
          }

          .react-course-badge {
            display: inline-block;
            padding: 6px 14px;
            background: #ecfeff;
            color: #0891b2;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .react-course-header h1 {
            font-size: 35px;
            color: #111827;
            margin: 0 0 15px;
          }

          .react-course-header p {
            color: #64748b;
            line-height: 1.7;
            font-size: 16px;
            margin: 0;
          }


          /* Course Stats */

          .react-course-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 25px;
          }

          .react-course-stat {
            background: #ffffff;
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #e5e7eb;
            transition: 0.3s ease;
          }

          .react-course-stat:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          }

          .react-course-stat strong {
            display: block;
            font-size: 22px;
            color: #0891b2;
            margin-bottom: 5px;
          }

          .react-course-stat span {
            color: #64748b;
            font-size: 14px;
          }


          /* Course Content */

          .react-course-content {
            background: #ffffff;
            padding: 30px;
            border-radius: 15px;
            border: 1px solid #e5e7eb;
            margin-bottom: 25px;
          }

          .react-course-content h2 {
            color: #111827;
            margin-bottom: 20px;
          }

          .react-course-content ul {
            padding-left: 20px;
            margin: 0;
          }

          .react-course-content li {
            margin-bottom: 12px;
            color: #475569;
          }


          /* Start Button */

          .react-start-course-btn {
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

          .react-start-course-btn:hover {
            background: #0e7490;
            transform: translateY(-2px);
          }


          /* Responsive */

          @media (max-width: 700px) {

            .react-course-stats {
              grid-template-columns: 1fr;
            }

            .react-course-header h1 {
              font-size: 28px;
            }

            .react-course-page {
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

      <div className="react-course-page">

        {/* Course Header */}

        <div className="react-course-header">

          <span className="react-course-badge">
            React JS
          </span>

          <h1>
            React JS Complete Course
          </h1>

          <p>
            Build modern and interactive web applications
            using React and its powerful features.
          </p>

        </div>


        {/* Course Stats */}

        <div className="react-course-stats">

          <div className="react-course-stat">
            <strong>40+</strong>
            <span>Lessons</span>
          </div>

          <div className="react-course-stat">
            <strong>15 Hours</strong>
            <span>Duration</span>
          </div>

          <div className="react-course-stat">
            <strong>Intermediate</strong>
            <span>Level</span>
          </div>

        </div>


        {/* Course Content */}

        <div className="react-course-content">

          <h2>
            What You Will Learn
          </h2>

          <ul>

            <li>React Components</li>

            <li>JSX</li>

            <li>Props</li>

            <li>useState Hook</li>

            <li>useEffect Hook</li>

            <li>useRef Hook</li>

            <li>React Router</li>

            <li>Context API</li>

            <li>API Integration</li>

          </ul>

        </div>


        {/* Start Button */}

        <button className="react-start-course-btn">
          Start Course →
        </button>

      </div>
    </>
  );
}

export default ReactCourse;