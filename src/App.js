import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Copy,
  Mail,
  MapPin,
  Github,
  Linkedin
} from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("15mgkishorkumar@gmail.com");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // --- Animation Variants ---
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };

  const hoverEffect = {
    scale: 0.98,
    transition: {
      duration: 0.2
    }
  };

  return (
    <div className="main-wrapper">
      <motion.div
        className="bento-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* --- Module 1: HERO --- */}
        <motion.div
          className="module hero-module"
          variants={item}
        >
          <div className="status-pill">
            <span className="dot"></span> OPEN TO WORK
          </div>

          <h1>
            KISHOR
            <br />
            KUMAR<span className="accent">.</span>
          </h1>

          <p className="hero-sub">
            Computer Science Grad. <br />
            Java Specialist. <br />
            Problem Solver.
          </p>
        </motion.div>


        {/* --- Module 2: LOCATION --- */}
        <motion.div
          className="module location-module"
          variants={item}
          whileHover={hoverEffect}
        >
          <div className="icon-box">
            <MapPin size={24} />
          </div>

          <div>
            <h3>COIMBATORE</h3>
            <p>India, TN</p>
          </div>
        </motion.div>


        {/* --- Module 3: SOCIALS --- */}
        <motion.div
          className="module social-module"
          variants={item}
          whileHover={hoverEffect}
        >
          <div className="social-row">

            <a
              href="https://github.com/KISHORKUMAR-MG"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/kishor-kumar-mg-1a21312ba/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={28} />
            </a>

          </div>

          <p>STALK ME</p>
        </motion.div>


        {/* --- Module 4: PROJECT 1 --- */}
        <motion.div
          className="module project-module dark-bg"
          variants={item}
          whileHover={hoverEffect}
        >
          <div className="project-top">

            <div className="tags">
              <span>WEB APP</span>
              <span>AGRICULTURE</span>
            </div>

            <ArrowUpRight
              size={24}
              className="arrow"
            />

          </div>

          <div className="project-content">

            <h2>Agri-Rental System</h2>

            <p>
              Connecting farmers with equipment.
              Full-stack solution aiming to democratize
              farming tools.
            </p>

            <div className="tech-row">
              <span className="tech">HTML</span>
              <span className="tech">JS</span>
              <span className="tech">MySQL</span>
            </div>

          </div>
        </motion.div>


        {/* --- Module 5: SKILLS & TECHNOLOGIES --- */}
        <motion.div
          className="module stack-module"
          variants={item}
          whileHover={hoverEffect}
        >

          <h2>SKILLS & TECHNOLOGIES</h2>

          <div className="skills-container">

            {/* Languages */}
            <div className="skill-category">

              <h4>LANGUAGES</h4>

              <div className="skill-tags">
                <span>Java</span>
                <span>JavaScript (ES6+)</span>
                <span>HTML5</span>
                <span>CSS3</span>
              </div>

            </div>


            {/* Core CS */}
            <div className="skill-category">

              <h4>CORE CS</h4>

              <div className="skill-tags">
                <span>Data Structures & Algorithms</span>
                <span>Object-Oriented Programming</span>
                <span>Problem Solving</span>
                <span>Software Design Principles</span>
                <span>SDLC</span>
              </div>

            </div>


            {/* Frontend */}
            <div className="skill-category">

              <h4>FRONTEND</h4>

              <div className="skill-tags">
                <span>React.js</span>
              </div>

            </div>


            {/* Backend */}
            <div className="skill-category">

              <h4>BACKEND & APIs</h4>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>RESTful API Design</span>
                <span>JWT Concepts</span>
              </div>

            </div>


            {/* Database & Cloud */}
            <div className="skill-category">

              <h4>DATABASE & CLOUD</h4>

              <div className="skill-tags">
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Firebase Firestore</span>
                <span>Firebase Authentication</span>
                <span>Google Maps API</span>
              </div>

            </div>


            {/* Tools */}
            <div className="skill-category">

              <h4>TOOLS</h4>

              <div className="skill-tags">
                <span>Git/GitHub</span>
                <span>VS Code</span>
                <span>IntelliJ IDEA</span>
              </div>

            </div>

          </div>

        </motion.div>


        {/* --- Module 6: PROJECT 2 --- */}
        <motion.div
          className="module project-module light-bg"
          variants={item}
          whileHover={hoverEffect}
        >

          <div className="project-top">

            <div className="tags dark-tags">
              <span>REACT</span>
              <span>CIVIC TECH</span>
            </div>

            <ArrowUpRight
              size={24}
              className="arrow"
            />

          </div>

          <div className="project-content">

            <h2>Hyperlocal Alert</h2>

            <p>
              Real-time civic issue reporting platform.
              Community driven power outage & traffic tracking.
            </p>

            <div className="tech-row">

              <span className="tech dark-tech">
                React
              </span>

              <span className="tech dark-tech">
                Node
              </span>

              <span className="tech dark-tech">
                MongoDB
              </span>

            </div>

          </div>

        </motion.div>


        {/* --- Module 7: BIO --- */}
        <motion.div
          className="module bio-module"
          variants={item}
        >

          <p className="bio-text">
            "I don't just write code; I engineer logic.
            Currently obsessed with{" "}
            <span className="highlight">
              Software Development
            </span>{" "}
            and{" "}
            <span className="highlight">
              Full Stack Development
            </span>."
          </p>

          <div className="grad-year">
            CLASS OF '26
          </div>

        </motion.div>


        {/* --- Module 8: CONTACT --- */}
        <motion.div
          className="module contact-module"
          variants={item}
          whileHover={hoverEffect}
        >

          <div className="marquee">
            <span>
              LET'S TALK • HIRE ME • LET'S TALK • HIRE ME •
            </span>
          </div>

          <div className="contact-action">

            <button
              className="copy-btn"
              onClick={copyEmail}
            >
              {copied ? "COPIED!" : "COPY EMAIL"}
              <Copy size={18} />
            </button>

            <a
              href="mailto:15mgkishorkumar@gmail.com"
              className="mail-btn"
            >
              SEND MAIL
              <Mail size={18} />
            </a>

          </div>

        </motion.div>

      </motion.div>
    </div>
  );
};

export default Portfolio;

