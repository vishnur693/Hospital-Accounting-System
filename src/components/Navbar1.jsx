import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Mobile Toggle Button on the left */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <Link to="/" className="navbar-logo">
          Hospital Accounts
        </Link>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
         
          <li className="navbar-item">
            <Link to="/register" className="navbar-link">
            SignUp
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          width: 100%;
          background-color: #2c3e50;
          padding: 10px 20px;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          font-size: 24px;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
        }

        .navbar-links {
          display: flex;
          list-style: none;
        }

        .navbar-item {
          margin: 0 15px;
        }

        .navbar-link {
          color: #fff;
          text-decoration: none;
          font-size: 18px;
          padding: 5px 10px;
          transition: color 0.3s ease;
        }

        .navbar-link:hover {
          color: #7d2ae8;
        }

        /* Mobile Toggle Button */
        .navbar-toggle {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .navbar-toggle .bar {
          width: 25px;
          height: 3px;
          background-color: #fff;
          margin: 4px 0;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar-links {
            display: ${isOpen ? "flex" : "none"};
            flex-direction: column;
            width: 100%;
            position: absolute;
            top: 39px;
            left: 0;
            background-color: #2c3e50;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          }

          .navbar-item {
            margin: 15px 0;
          }

          /* Position the toggle button to the left */
          .navbar-toggle {
            display: flex;
            position: absolute;
            top: 10px;
            left: 20px;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
