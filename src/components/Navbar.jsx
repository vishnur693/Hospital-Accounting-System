import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom for routing

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // Sidebar is initially closed for mobile
    const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false); // Toggle for the Departments dropdown

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDepartments = () => {
        setIsDepartmentsOpen(!isDepartmentsOpen);
    };

    return (
        <div>
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                {/* Logo at the top of the sidebar */}
                <div className="logo-container">
                    <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Logo" className="logo" />
                </div>

                {/* Close button for mobile view */}
                <button className="close-btn" onClick={toggleSidebar}>&times;</button>
                <ul>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/payroll-management">Payroll Management</Link></li>
                    <li><Link to="/attendance-leave">Attendance & Leave</Link></li>

                    {/* Departments Dropdown */}
                    <li className="dropdown-container">
                        <a href="#" onClick={toggleDepartments}>
                            Departments <span className={`arrow ${isDepartmentsOpen ? 'open' : ''}`}>&#9660;</span>
                        </a>
                        <div className={`dropdown ${isDepartmentsOpen ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/hr">HR</Link></li>
                                <li><Link to="/sales">Sales</Link></li>
                            </ul>
                        </div>
                    </li>

                    <li><Link to="/expense-billing">Expense & Billing</Link></li>
                </ul>
            </div>

            {/* Open button for smaller screens */}
            <button className="open-btn" onClick={toggleSidebar}>
                &#9776; 
            </button>

            {/* Internal CSS */}
        <style jsx>{`
    /* Basic reset and styling */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f7fb;
    }

    /* Sidebar Styles */
    .sidebar {
        height: 100%;
        width: 250px;
        position: fixed;
        top: 0;
        left: -250px; /* Sidebar is hidden by default on mobile */
        background: linear-gradient(145deg, #2c3e50, #34495e);
        color: white;
        transition: left 0.4s ease-in-out, box-shadow 0.3s ease-in-out;
        padding-top: 60px;
        box-shadow: 4px 0 8px rgba(0, 0, 0, 0.3);
       
        z-index: 999;
    }

    .sidebar.open {
        left: 0; /* Sidebar is shown when open */
        box-shadow: 4px 0 8px rgba(0, 0, 0, 0.6);
    }

    /* Logo Styles */
    .logo-container {
        text-align: center;
        margin-bottom: 30px;
        background-color: white; /* White background for logo portion */
        padding: 50px;
        border-radius: 5px;
         height: 100px;
          width: 249px;
    }

    .logo {
        width: 110px; /* Adjust this to the size of your logo */
        height: 100px;
         margin-top:-50px;
    }

    /* Sidebar menu items */
    .sidebar ul {
        list-style-type: none;
        padding: 0;
        margin-top: 50px;
    }

    .sidebar ul li {
        padding: 15px;
        text-align: center;
        transition: background-color 0.3s ease, transform 0.3s ease;
        position: relative;
        margin-top: 20px;
    }

    .sidebar ul li a {
        color: white;
        text-decoration: none;
        display: block;
        font-size: 18px;
        font-weight: 600;
        position: relative;
        padding-bottom: 4px; /* Space for the underline */
        transition: transform 0.2s ease-in-out, color 0.3s ease;
    }

    /* On hover, create an underline effect with a transition */
    .sidebar ul li a::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%; /* Start with no underline */
        height: 2px; /* Height of the underline */
        background-color: #e74c3c; /* Underline color */
        transition: width 0.3s ease, left 0.3s ease;
        transform: translateX(-50%); /* Center the underline */
    }

    .sidebar ul li a:hover {
        color: #e74c3c; /* Hover color */
        transform: scale(1.1);
    }

    .sidebar ul li a:hover::after {
        width: 50%; /* Set width of the underline */
        left: 50%; /* Position the underline */
    }

    /* Departments Dropdown */
    .dropdown-container {
        position: relative;
    }

    .dropdown {
        display: none; /* Hide dropdown by default */
        position: absolute;
        top: -170px;
        left: 0;
        width: 100%;
        background-color: #34495e;
        border-radius: 5px;
        z-index: 1;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    .dropdown.open {
        display: block; /* Show dropdown when open */
    }

    .dropdown ul {
        list-style-type: none;
        padding: 10px;
        margin: 0;
    }

    .dropdown ul li {
        padding: 10px;
        text-align: left;
    }

    .dropdown ul li a {
        font-size: 16px;
        font-weight: 500;
        color: white;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .dropdown ul li a:hover {
        color: #e74c3c;
    }

    /* Dropdown Arrow */
    .arrow {
        font-size: 12px;
        margin-left: 5px;
        transition: transform 0.3s ease;
    }

    .arrow.open {
        transform: rotate(180deg); /* Rotate the arrow when dropdown is open */
    }

    /* Close button for mobile */
    .sidebar .close-btn {
        position: absolute;
        top: 20px;
        right: 25px;
        font-size: 36px;
        color: white;
        background: none;
        border: none;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    .sidebar .close-btn:hover {
        transform: rotate(90deg);
    }

    /* Open button for mobile */
    .open-btn {
     font-weight: bold;
        font-size: 10px;
        color: #333;
        background-color: #f0f0f0;
        border: none;
        padding: 12px 18px;
        cursor: pointer;
        position: fixed;
        top: 10px;
        left: 20px;
        z-index: 1000;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .open-btn:hover {
        background-color: #ddd;
        transform: scale(1.1);
    }

    /* For smaller screens like mobile and tablets */
    @media screen and (max-width: 1024px) {
        .sidebar {
            width: 250px;
        }

        .sidebar.open {
            left: 0;
        }

        .open-btn {
            display: block;
        }
            .content {
            margin-top:30px}

        .sidebar ul li {
            padding: 15px;
        }

        /* Show the close button on mobile */
        .sidebar .close-btn {
            display: block;
        }
    }

    /* Always show sidebar on larger screens (desktop) */
    @media screen and (min-width: 1024px) {
        .sidebar {
            left: 0;
        }

        .open-btn {
            display: none;
        }

        .content {
            margin-left: 250px;
        }

        /* Hide the close button on desktop */
        .sidebar .close-btn {
            display: none;
        }
    }
`}</style>

        </div>
    );
};

export default Sidebar;
