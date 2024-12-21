import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div id="parallax-world-of-ugg">
    {/* Fixed Navbar */}
    <div className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img src="https://png.pngtree.com/template/20190314/ourmid/pngtree-hospital-logo-image_70558.jpg" alt="Logo" className="logo" />
      </div>

      {/* Sign In Button */}
      <div className="container-eg-btn-2">
    <Link className="button button-3" to="/login">Sign In</Link>
</div>
    </div>
      <section>
        <div className="title"style={{marginTop:'40px'}}>
          <h3>Let's do some</h3>
          <h1>ACCOUNTS SYSTEMS</h1>
        </div>
      </section>

      <section>
        <div className="parallax-one">
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            margin: '0',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            Streamline Your Hospital's Financial Operations
          </p>
        </div>
      </section>

      <section>
        <div className="block">
          <p><span className="first-character sc">M</span>anaging the finances of a hospital can be complex and time-consuming, but with our Hospital Accounting Software, you can simplify and automate your financial processes, saving time and reducing errors. Our intuitive software is specifically designed to meet the unique needs of healthcare organizations, allowing you to manage billing, payments, reimbursements, and accounting in one seamless system.

            In a healthcare setting, hospitality takes on an even more profound meaning, as it directly impacts the well-being and recovery of patients. The kindness and attentiveness shown by healthcare workers, from doctors to nurses to support staff, plays a significant role in the healing process. When patients are treated with respect and care, not only does it provide emotional comfort, but it can also alleviate stress, reduce anxiety, and contribute to a more positive and faster recovery. Hospitality in healthcare is about making patients feel heard, valued, and supported throughout their entire journey—from the moment they walk in the door to their discharge and beyond.</p>
          <p className="margin-top-10">True hospitality is also about anticipating needs before they are expressed, creating an atmosphere where people feel seen and understood. It requires an intuitive understanding of others and the ability to adapt to different situations with grace and flexibility. Whether it’s providing a warm meal, offering a quiet place to rest, or simply offering a smile or kind words, hospitality is about fostering a sense of belonging and safety. It creates a space where people feel not only cared for but also honored in their humanity, making it an essential aspect of any service-oriented industry, especially in healthcare, where the emotional and physical well-being of patients is the top priority. In its highest form, hospitality enriches lives, builds relationships, and fosters a sense of community that transcends the transactional nature of any service.</p>
        </div>
      </section>

      <section>
        <div className="parallax-two">
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            margin: '0',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            Simplify Compliance and Security
          </p>
        </div>
      </section>

      <section>
        <div className="block">
          <p><span className="first-character ny">O</span>ur software is built to ensure your hospital complies with the latest healthcare regulations and standards, including HIPAA. With built-in security features, your patient and financial data is protected, giving you peace of mind while you focus on providing excellent care.</p>
          <p className="line-break margin-top-10"></p>
          <p className="margin-top-10">Fueled by celebrities from coast to coast wearing UGG boots and slippers on their downtime, an entirely new era of fashion was carved out. As a result, the desire and love for UGG increased as people wanted to go deeper into this relaxed UGG experience. UGG began offering numerous color and style variations on their sheepskin boots and slippers. Cold weather boots for women and men and leather casuals were added with great success. What started as a niche item, UGG sheepskin boots were now a must-have staple in everyone's wardrobe. More UGG collections followed, showcasing everything from knit boots to sneakers to wedges, all the while maintaining that luxurious feel UGG is known for all over the world. UGG products were now seen on runways and in fashion shoots from coast to coast. Before long, the love spread even further.</p>
        </div>
      </section>

      <section>
        <div className="parallax-three">
          <p style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '30px',
            fontWeight: 'bold',
            letterSpacing: '2px',
            margin: '0',
            color: '#FFFFFF',
            textAlign: 'center'
          }}>
            Scalable and Flexible
          </p>
        </div>
      </section>

      <section>
        <div className="block">
          <p><span className="first-character atw">W</span>hether you are a small clinic or a large hospital network, our software scales to fit your needs. Easily add new users, integrate with other hospital systems, and adapt the software as your organization grows. We offer flexible pricing plans to suit hospitals of all sizes.</p>
          <p className="line-break margin-top-10"></p>
          <p className="margin-top-10">By automating routine accounting tasks, our software reduces the administrative burden on your finance team, freeing up valuable time to focus on high-priority tasks. With better financial management, your hospital can improve cash flow, reduce errors, and minimize billing delays, ultimately leading to lower operational costs and improved financial performance.</p>
        </div>
      </section>
        {/* Footer */}
        <footer className="footer">
        <div className="footer-container">
          <p>&copy; 2024 Hospital Accounting Systems. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy" className="footer-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="footer-link">
              Terms of Service
            </Link>
            <Link to="/contact" className="footer-link">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      <style jsx>{`

#parallax-world-of-ugg .parallax-one,
#parallax-world-of-ugg .parallax-two,
#parallax-world-of-ugg .parallax-three {
  width: 100%;
  height: auto; /* Ensure the background images scale appropriately */
}

#parallax-world-of-ugg .block {
  width: 100%;
  padding: 20px;
  margin: 0 auto;
}
      #parallax-world-of-ugg {
  padding-top: 80px;
  width: 100%;
  overflow-x: hidden; /* To prevent horizontal scrolling */
}
       .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 120px;
    height: auto;
  }
      .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }


 
       .container-eg-btn-2 {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
 .container-eg-btn-2 .button {
    color: #4c7179;
    margin: 10px;
    padding: 12px 20px;
    border: 2px solid #4c7179;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    transition: .3s;
  }

 .container-eg-btn-2 .button:hover {
    cursor: pointer;
    color: #e7ffcb;
    background: #4c7179;
    border: 2px solid #4c7179;
  }


.container-eg-btn-2 .button-1:hover {
    box-shadow: inset 0 0 0 2em #4c7179; /* Change the shadow color to #4c7179 */
}

.container-eg-btn-2 .button-2:hover {
    box-shadow: inset 0 3.5em 0 0 #4c7179; /* Change the shadow color to #4c7179 */
}

.container-eg-btn-2 .button-3:hover {
    box-shadow: inset 8.5em 0 0 0 #4c7179; /* Change the shadow color to #4c7179 */
}

.container-eg-btn-2 .button-4:hover {
    box-shadow: inset -5em 0 0 0 #4c7179, inset 5em 0 0 0 #4c7179; /* Change the shadow color to #4c7179 */
}

.container-eg-btn-2 .button-5:before {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    background: #4c7179; /* Background color for the pseudo-element */
    height: 120%;
    left: -10%;
    transform: skewX(20deg);
    z-index: -1;
}

.container-eg-btn-2 .button-5:hover:before {
    width: 120%;
}

.container-eg-btn-2 .button-6:before {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    bottom: 0;
    background: #4c7179; /* Background color for the pseudo-element */
    height: 120%;
    left: -10%;
    transform: skewX(20deg);
    z-index: -1;
}

.container-eg-btn-2 .button-6:hover:before {
    width: 62%;
}

.container-eg-btn-2 .button-6:after {
    position: absolute;
    transition: .3s;
    content: '';
    width: 0;
    right: 50%;
    bottom: 0;
    height: 4px;
    background: #4c7179; /* Background color for the pseudo-element */
}

.container-eg-btn-2 .button-6:after {
    height: 120%;
    right: -10%;
    transform: skewX(20deg);
    z-index: -1;
}

.container-eg-btn-2 .button-6:hover:after {
    width: 62%;
}

.container-eg-btn-2 .button-7:before {
    position: absolute;
    transition: .3s;
    content: '';
    top: 50%;
    background: #4c7179; /* Background color for the pseudo-element */
    border-radius: 50%;
    width: 0;
    height: 0;
    left: 50%;
    z-index: -1;
    transform-origin: center;
    transform: translate(-50%, -50%);
}

.container-eg-btn-2 .button-7:hover:before {
    width: 11em;
    height: 11em;
}

.container-eg-btn-2 .button-8:before, .container-eg-btn-2 .button-8:after {
    position: absolute;
    top: 50%;
    content: "";
    width: 20px;
    height: 20px;
    background-color: #4c7179; /* Background color for the pseudo-elements */
    border-radius: 50%;
    z-index: -1;
}

.container-eg-btn-2 .button-8:before {
    left: -20px;
    transform: translate(-50%, -50%);
}

.container-eg-btn-2 .button-8:after {
    right: -20px;
    transform: translate(50%, -50%);
}

.container-eg-btn-2 .button-8:hover:before {
    -webkit-animation: circle-left 0.7s both;
    animation: circle-left 0.7s both;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}

@keyframes circle-left {
  0% {
    left: -20px;
  }

  50% {
    left: 50%;
    width: 20px;
    height: 20px;
  }

  100% {
    left: 50%;
    width: 375px;
    height: 375px;
  }
}

.container-eg-btn-2 .button-8:hover:after {
    -webkit-animation: circle-right 0.7s both;
    animation: circle-right 0.7s both;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}

@keyframes circle-right {
  0% {
    right: -20px;
  }
  
  50% {
    right: 50%;
    width: 20px;
    height: 20px;
  }
  
  100% {
    right: 50%;
    width: 375px;
    height: 375px;
  }
}

        @import url('https://fonts.googleapis.com/css?family=Oswald:300,400,700');
        @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900,200italic,300italic,400italic,600italic,700italic,900italic');

        #parallax-world-of-ugg {
    padding-top: 80px;
  }
        .content-asset p {
          margin: 0 auto;
        }
        .breadcrumb {
          display: none;
        }

        .margin-top-10 {
          padding-top: 10px;
        }
        .margin-bot-10 {
          padding-bottom: 10px;
        }

        #parallax-world-of-ugg h1 {
          font-family: 'Oswald', sans-serif;
          font-size: 24px;
          font-weight: 400;
          text-transform: uppercase;
          color: black;
          padding: 0;
          margin: 0;
        }
        #parallax-world-of-ugg h2 {
          font-family: 'Oswald', sans-serif;
          font-size: 70px;
          letter-spacing: 10px;
          text-align: center;
          color: white;
          font-weight: 400;
          text-transform: uppercase;
          z-index: 10;
          opacity: .9;
        }
        #parallax-world-of-ugg h3 {
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          line-height: 0;
          font-weight: 400;
          letter-spacing: 8px;
          text-transform: uppercase;
          color: black;
        }
        #parallax-world-of-ugg p {
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 24px;
        }
        .first-character {
          font-weight: 400;
          float: left;
          font-size: 84px;
          line-height: 64px;
          padding-top: 4px;
          padding-right: 8px;
          padding-left: 3px;
          font-family: 'Source Sans Pro', sans-serif;
        }

        .sc {
          color: #3b8595;
        }
        .ny {
          color: #3d3c3a;
        }
        .atw {
          color: #c48660;
        }

        #parallax-world-of-ugg .title {
    background: white;
    padding: 60px;
    margin: 0 auto;
    text-align: center;
  }
        #parallax-world-of-ugg .title h1 {
          font-size: 35px;
          letter-spacing: 8px;
        }

        #parallax-world-of-ugg .block {
          background: white;
          padding: 60px;
          width: 820px;
          margin: 0 auto;
          text-align: justify;
        }
        #parallax-world-of-ugg .block-gray {
          background: #f2f2f2;
          padding: 60px;
        }
        #parallax-world-of-ugg .section-overlay-mask {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.70;
        }

        #parallax-world-of-ugg .parallax-one {
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
          position: relative;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
          background-attachment: fixed;
          background-size: cover;
          -moz-background-size: cover;
          -webkit-background-size: cover;
          background-repeat: no-repeat;
          background-position: top center;
        }

        #parallax-world-of-ugg .parallax-two {
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
          position: relative;
          width: 100%;
          background-image: url('https://images.pexels.com/photos/3470032/pexels-photo-3470032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-attachment: fixed;
          background-size: cover;
          -moz-background-size: cover;
          -webkit-background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }

        #parallax-world-of-ugg .parallax-three {
          padding-top: 200px;
          padding-bottom: 200px;
          overflow: hidden;
          position: relative;
          width: 100%;
          background-image: url('https://images.pexels.com/photos/28123710/pexels-photo-28123710/free-photo-of-ambulance-on-road-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-attachment: fixed;
          background-size: cover;
          -moz-background-size: cover;
          -webkit-background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }

        #parallax-world-of-ugg .line-break {
          border-bottom: 1px solid black;
          width: 150px;
          margin: 0 auto;
        }

        /* Styling for the SignIn and SignUp links */
        .sign-links {
          position: fixed; /* Changed to fixed to stay at the top */
          top: 10px; /* Ensures it stays at the top */
          right: 10px; /* Positioned at the top-right corner */
          z-index: 1000;
   background: #48c9b0;




          padding: 10px;
          border-radius: 5px;
        }
        
        .sign-link {
          margin-left: 20px;
          font-family: 'Source Sans Pro', sans-serif;
          font-weight: 600;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 18px;
          margin-right:20px
        }

        .sign-link:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 959px) and (min-width: 768px) {
          #parallax-world-of-ugg .block {
            padding: 40px;
            width: 620px;
          }
        }

        @media screen and (max-width: 767px) {
          #parallax-world-of-ugg .block {
            padding: 30px;
            width: 420px;
          }
          #parallax-world-of-ugg h2 {
            font-size: 30px;
          }
          #parallax-world-of-ugg .block {
            padding: 30px;
          }
          #parallax-world-of-ugg .parallax-one,
          #parallax-world-of-ugg .parallax-two,
          #parallax-world-of-ugg .parallax-three {
            padding-top: 100px;
            padding-bottom: 100px;
          }
        }

        @media screen and (max-width: 479px) {
          #parallax-world-of-ugg .block {
            padding: 30px 15px;
            width: 290px;
          }
        }
           .footer {
          background-color: #4c7179;
          color: white;
          text-align: center;
          padding: 20px 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-links {
          margin-top: 10px;
        }

        .footer-link {
          color: #e7ffcb;
          margin: 0 15px;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-link:hover {
          text-decoration: underline;
        }
          
      `}</style>
    </div>
  );
};

export default Index;
