import React from "react";
import {NavLink} from 'react-router-dom';

function HtmlCourse() {
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

    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* Course Header */}
      <div
        style={{
          background: "#ffffff",
          padding: "35px",
          borderRadius: "15px",
          marginBottom: "25px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 5px 20px rgba(0,0,0,0.05)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "6px 14px",
            background: "#eff6ff",
            color: "#2563eb",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "15px",
          }}
        >
          HTML5
        </span>

        <h1
          style={{
            fontSize: "35px",
            color: "#111827",
            margin: "0 0 15px",
          }}
        >
          HTML Complete Course
        </h1>

        <p
          style={{
            color: "#64748b",
            lineHeight: "1.7",
            fontSize: "16px",
            margin: 0,
          }}
        >
          Learn HTML from the basics and build a strong foundation
          for modern web development.
        </p>
      </div>


      {/* Course Stats */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "25px",
        }}
      >

        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "22px",
              color: "#2563eb",
              marginBottom: "5px",
            }}
          >
            25+
          </strong>

          <span
            style={{
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Lessons
          </span>
        </div>


        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "22px",
              color: "#2563eb",
              marginBottom: "5px",
            }}
          >
            6 Hours
          </strong>

          <span
            style={{
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Duration
          </span>
        </div>


        <div
          style={{
            background: "#ffffff",
            padding: "25px",
            borderRadius: "12px",
            textAlign: "center",
            border: "1px solid #e5e7eb",
          }}
        >
          <strong
            style={{
              display: "block",
              fontSize: "22px",
              color: "#2563eb",
              marginBottom: "5px",
            }}
          >
            Beginner
          </strong>

          <span
            style={{
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            Level
          </span>
        </div>

      </div>


      {/* Course Content */}
      <div
        style={{
          background: "#ffffff",
          padding: "30px",
          borderRadius: "15px",
          border: "1px solid #e5e7eb",
          marginBottom: "25px",
        }}
      >

        <h2
          style={{
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          What You Will Learn
        </h2>

        <ul
          style={{
            paddingLeft: "20px",
            margin: 0,
          }}
        >
          <li style={{ marginBottom: "12px", color: "#475569" }}>
            HTML document structure
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            Headings, paragraphs and links
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            Images and multimedia
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            Lists and tables
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            HTML Forms
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            Semantic HTML
          </li>

          <li style={{ marginBottom: "12px", color: "#475569" }}>
            HTML5 features
          </li>
        </ul>

      </div>


      {/* Start Button */}
      <button
        className="start-course-btn"
        style={{
          border: "none",
          padding: "13px 25px",
          background: "#2563eb",
          color: "#ffffff",
          borderRadius: "7px",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Start Course →
      </button>

    </div>
  </>
  );
}

export default HtmlCourse;