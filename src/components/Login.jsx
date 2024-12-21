import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "./Navbar1";

const Login = () => {
  // States for form inputs and validation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Initialize useNavigate hook
  const navigate = useNavigate();

  // Handle real-time validation for email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Updated email validation regex to check for extensions
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;

    // Validate the email and show error if invalid
    if (value && !emailPattern.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError(""); // Clear the error if email is valid
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If there's an email error, prevent submission
    if (emailError) {
      alert("Please fix the email error before submitting.");
      return;
    }

    // Check if email format is valid and password is not empty
    if (email && password) {
      alert("Login Successful!");

      // Navigate to /dashboard on successful login
      navigate("/dashboard");
    } else {
      alert("Please enter valid email and password.");
    }
  };

  return (
    <div className="page-container">
      <Navbar />
      {/* Login & Signup Form */}
      <div className="container">
        <div className="cover">
          <div className="front">
            <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="back"></div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                    {emailError && <span className="error-text">{emailError}</span>}
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="text">
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>

                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account? <Link to="/register">Sign up now</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
          margin: 0;
          padding: 0;
        }

        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        /* Form Section */
        .container {
          position: relative;
          max-width: 850px;
          width: 100%;
          background: #fff;
          padding: 40px 30px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
          perspective: 2700px;
          margin: 30px auto;
          margin-top: 90px;
        }

        .container .cover {
          position: absolute;
          top: 0;
          left: 50%;
          height: 100%;
          width: 50%;
          z-index: 98;
          transition: all 1s ease;
          transform-origin: left;
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }

        .container #flip:checked ~ .cover {
          transform: rotateY(-180deg);
        }

        .container #flip:checked ~ .forms .login-form {
          pointer-events: none;
        }

        .container .cover .front,
        .container .cover .back {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
        }

        .cover .back {
          transform: rotateY(180deg);
        }

        .container .cover img {
          position: absolute;
          height: 100%;
          width: 100%;
          object-fit: cover;
          z-index: 10;
        }

        .container .cover .text {
          position: absolute;
          z-index: 10;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .container .cover .text::before {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          opacity: 0.5;
          background: #7d2ae8;
        }

        .cover .text .text-1,
        .cover .text .text-2 {
          z-index: 20;
          font-size: 26px;
          font-weight: 600;
          color: #fff;
          text-align: center;
        }

        .cover .text .text-2 {
          font-size: 15px;
          font-weight: 500;
        }

        .container .forms {
          height: 100%;
          width: 100%;
          background: #fff;
        }

        .container .form-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .form-content .login-form,
        .form-content .signup-form {
          width: calc(100% / 2 - 25px);
        }

        .forms .form-content .title {
          position: relative;
          font-size: 24px;
          font-weight: 500;
          color: #333;
        }

        .forms .form-content .title:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 25px;
          background: #7d2ae8;
        }

        .forms .signup-form .title:before {
          width: 20px;
        }

        .forms .form-content .input-boxes {
          margin-top: 30px;
        }

        .forms .form-content .input-box {
          display: flex;
          align-items: center;
          height: 50px;
          width: 100%;
          margin: 10px 0;
          position: relative;
          flex-direction: column;  /* Stack input and error message vertically */
        }

        .form-content .input-box input {
          height: 40px;
          width: 100%;
          outline: none;
          border: none;
          padding: 0 30px;
          font-size: 16px;
          font-weight: 500;
          border-bottom: 2px solid rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .form-content .input-box input:focus,
        .form-content .input-box input:valid {
          border-color: #34495e;
        }

        .form-content .input-box i {
          position: absolute;
          color: #7d2ae8;
          font-size: 17px;
        }

        /* Error Text Styling */
        .error-text {
          color: red;
          font-size: 0.875rem;
          margin-top: 5px;
          text-align: left;  /* Align error text to the left */
          width: 100%;
        }

        .forms .form-content .text {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .forms .form-content .text a {
          text-decoration: none;
        }

        .forms .form-content .text a:hover {
          text-decoration: underline;
        }

        .forms .form-content .button {
          color: #fff;
          margin-top: 40px;
        }

        .forms .form-content .button input {
          color: #fff;
          background:  #2c3e50;
          border-radius: 6px;
          padding: 0;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .forms .form-content .button input:hover {
          background: #34495e;;
        }

        .forms .form-content label {
          color: #5b13b9;
          cursor: pointer;
        }

        .forms .form-content label:hover {
          text-decoration: underline;
        }

        .forms .form-content .login-text,
        .forms .form-content .sign-up-text {
          text-align: center;
          margin-top: 25px;
        }

        /* Footer */
        .footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: auto;
        }

        .footer p {
          margin: 5px;
        }

        /* Media Queries for Responsive Design */
        @media (max-width: 768px) {
          .container {
            padding: 20px 15px;
            margin-top: 160px; /* Add margin-top for mobile screens */
          }

          .container .cover {
            display: none;
          }

          .form-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .form-content .login-form,
          .form-content .signup-form {
            width: 100%;
          }

          .navbar-container {
            flex-direction: column;
            text-align: center;
          }

          .navbar-links {
            margin-top: 15px;
            flex-direction: column;
            align-items: center;
          }

          .navbar-link {
            margin: 5px 0;
          }
        }

        @media (max-width: 480px) {
          .form-content .input-box input {
            font-size: 14px;
          }

          .forms .form-content .button input {
            padding: 10px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
