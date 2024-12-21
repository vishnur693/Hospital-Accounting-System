import React from "react";
import { Link } from "react-router-dom"; // Import React Router Link component

const ForgotPassword = () => {
  return (
    <div className="page-container">
      {/* Full-Width Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="hospital-name">Hospital Accounting System</h1>
          <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/login" className="navbar-link">Sign In</Link>
            <Link to="/register" className="navbar-link">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Forgot Password Form */}
      <div className="forgot-password-container">
        <div className="form-container">
          <h2>Forgot Your Password?</h2>
          <p>Please enter your email address below and we'll send you instructions to reset your password.</p>
          <form className="forgot-password-form">
            <div className="input-box">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="button-container">
              <button type="submit">Send Reset Link</button>
            </div>
            <div className="back-to-login">
              <p>Remember your password? <Link to="/login">Login now</Link></p>
            </div>
          </form>
        </div>
      </div>

      {/* Full-Width Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hospital. All Rights Reserved.</p>
        <p>Contact Us: +123 456 7890 | info@hospital.com</p>
      </footer>

      <style jsx>{`
        /* Google Font Link */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        body, html {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #f4f6f9;
        }

        /* Main Page Container (ensures full height and fixed footer) */
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh; /* Ensures the page takes up at least the full height */
        }

        /* Navbar */
        .navbar {
          background-color: #2c3e50;
          padding: 20px;
          color: white;
          width: 100%;
        }
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hospital-name {
          font-size: 24px;
          font-weight: bold;
        }
        .navbar-links a {
          color: white;
          text-decoration: none;
          margin: 0 15px;
          font-size: 16px;
        }
        .navbar-links a:hover {
          text-decoration: underline;
        }

        /* Forgot Password Form */
        .forgot-password-container {
          max-width: 600px;
          margin: 50px auto;
          background: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .forgot-password-container h2 {
          text-align: center;
          font-size: 24px;
          color: #333;
        }
        .forgot-password-container p {
          text-align: center;
          font-size: 16px;
          color: #555;
          margin-top: 10px;
        }
        .forgot-password-form {
          margin-top: 30px;
        }
        .input-box {
          width: 100%;
          margin-bottom: 20px;
        }
        .input-box label {
          display: block;
          color: #333;
          margin-bottom: 5px;
          font-weight: 500;
        }
        .input-box input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 16px;
          color: #333;
        }
        .input-box input:focus {
          border-color: #7d2ae8;
          box-shadow: 0 0 5px rgba(125, 42, 232, 0.5);
        }

        .button-container {
          text-align: center;
        }
        .button-container button {
          padding: 14px 30px;
          background: #2c3e50;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .button-container button:hover {
          background: #34495e;
        }

        .back-to-login {
          text-align: center;
          margin-top: 20px;
        }
        .back-to-login a {
          color: #7d2ae8;
          text-decoration: none;
        }
        .back-to-login a:hover {
          text-decoration: underline;
        }

        /* Footer */
        .footer {
          background-color: #2c3e50;
          color: white;
          text-align: center;
          padding: 20px 0;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .forgot-password-container {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;
