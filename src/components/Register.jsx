import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import Navbar from "./Navbar2";

const Register = () => {
  // States for form inputs and validation
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // Navigate function for redirecting
  const navigate = useNavigate();

  // Handle real-time validation for email
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|in|org|net|edu)$/;

    if (value && !emailPattern.test(value)) {
      setEmailError("Please enter a valid email address (e.g., example@domain.com).");
    } else {
      setEmailError(""); // Clear the error if email is valid
    }
  };

  // Handle real-time validation for phone number
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    const phonePattern = /^\d{10}$/;

    if (value && !phonePattern.test(value)) {
      setPhoneError("Phone number must be exactly 10 digits.");
    } else {
      setPhoneError(""); // Clear the error if phone number is valid
    }
  };

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError(""); // Clear the error if password is valid
    }
  };

  // Handle confirm password change and validation
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError(""); // Clear the error if passwords match
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If there's any validation error, prevent submission
    if (emailError || phoneError || passwordError || confirmPasswordError) {
      alert("Please fix the errors before submitting.");
      return;
    }

    // Simulating form submission
    alert("Registration Successful!");

    // After successful form submission, redirect to the login page
    navigate("/login"); // Use navigate() instead of history.push()
  };

  return (
    <div className="page-container">
      {/* Full-Width Navbar */}
      <Navbar />
      {/* Main Form Section */}
      <section className="container">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" required />
          </div>

          <div className="input-box">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <span className="error-text">{emailError}</span>}
          </div>

          <div className="input-box">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
            {phoneError && <span className="error-text">{phoneError}</span>}
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <span className="error-text">{passwordError}</span>}
          </div>

          <div className="input-box">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {confirmPasswordError && <span className="error-text">{confirmPasswordError}</span>}
          </div>

          <div className="column">
            <div className="input-box">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" required />
            </div>
          </div>

          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" id="check-male" name="gender" checked />
                <label htmlFor="check-male">Male</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-female" name="gender" />
                <label htmlFor="check-female">Female</label>
              </div>
              <div className="gender">
                <input type="radio" id="check-other" name="gender" />
                <label htmlFor="check-other">Prefer not to say</label>
              </div>
            </div>
          </div>

          <div className="input-box address">
            <label>Address</label>
            <input type="text" placeholder="Enter street address" required />
            <input type="text" placeholder="Enter street address line 2" required />
            <div className="column">
              <div className="select-box">
                <select>
                  <option hidden>Designation</option>
                  <option>Doctor</option>
                  <option>Technician</option>
                  <option>Pharmacist</option>
                  <option>Therapist</option>
                  <option>Nurse</option>
                </select>
              </div>
            
              <div className="select-box">
                <select>
                  <option hidden>Department</option>
                  <option>Outpatient department </option>
                  <option>Surgical department</option>
                  <option>Inpatient service</option>
                  <option>Nursing department</option>
                  <option>Rehabilitation department</option>
                </select>
              </div>
              
            </div>
            <div className="column">
              <input type="text" placeholder="Enter your Staff ID" required />
            </div>
          </div>
          <button type="submit" disabled={!!emailError || !!phoneError || !!passwordError || !!confirmPasswordError}>
            Submit
          </button>
        </form>
      </section>

      {/* Full-Width Footer */}
      <footer className="footer">
        <p>&copy; 2024 Hospital. All Rights Reserved.</p>
        <p>Contact Us: +123 456 7890 | info@hospital.com</p>
      </footer>

      <style jsx>{`
        /* Import Google font - Poppins */
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");

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

        /* Navbar Container styles for small screens including iPad Mini */
        @media screen and (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            text-align: center;
          }
        }

        /* Form Section */
        .container {
          position: relative;
          max-width: 700px;
          width: 100%;
          background: #fff;
          padding: 25px;
          border-radius: 8px;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          margin: 30px auto;
          flex-grow: 1; /* This allows the content to push footer down */
          margin-top:130px
        }

        .container header {
          font-size: 1.5rem;
          color: #333;
          font-weight: 500;
          text-align: center;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .input-box {
          display: flex;
          flex-direction: column;
        }

        .input-box label {
          color: #333;
        }

        .form :where(.input-box input, .select-box) {
          position: relative;
          height: 50px;
          width: 100%;
          outline: none;
          font-size: 1rem;
          color: #707070;
          margin-top: 8px;
          border: 1px solid #ddd;
          border-radius: 6px;
          padding: 0 15px;
        }

        .form .gender-box {
          margin-top: 20px;
        }

        .gender-box h3 {
          color: #333;
          font-size: 1rem;
          font-weight: 400;
          margin-bottom: 8px;
        }

        .form :where(.gender-option, .gender) {
          display: flex;
          align-items: center;
          column-gap: 50px;
          flex-wrap: wrap;
        }

        .form .gender {
          column-gap: 5px;
        }

        .form .gender input {
          accent-color: rgb(130, 106, 251);
        }

        .form :where(.gender input, .gender label) {
          cursor: pointer;
        }

        .gender label {
          color: #707070;
        }

        .address :where(input, .select-box) {
          margin-top: 15px;
        }

        .select-box select {
          height: 100%;
          width: 100%;
          outline: none;
          border: none;
          color: #707070;
          font-size: 1rem;
        }

        .form button {
          height: 55px;
          width: 100%;
          color: #fff;
          font-size: 1rem;
          font-weight: 400;
          margin-top: 30px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background-color:  #2c3e50;
        }

        .form button:hover {
          background-color: #34495e;
        }

        /* Error Text Styling */
        .error-text {
          color: red;
          font-size: 0.875rem;
          margin-top: 5px;
        }

        /* Full-Width Footer */
        .footer {
          background: #2c3e50;
          color: white;
          text-align: center;
          padding: 20px 0;
          width: 100%;
        }

        .footer p {
          margin: 5px 0;
        }

        /* Responsive Design */
        @media screen and (max-width: 768px) {
          .form .column {
            flex-wrap: wrap;
          }

          .form :where(.gender-option, .gender) {
            row-gap: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;
