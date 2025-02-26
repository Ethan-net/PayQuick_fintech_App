// import React from 'react';
import MailIcon from "../../assets/HeroSection Assets/icons/Mail Icon.svg";
import Verified from "../../assets/HeroSection Assets/icons/Verified Icon.svg";

import CircleBG from "../../assets/HeroSection Assets/images/Yellow Circle.svg";
import UserDashboard from "../../assets/HeroSection Assets/images/Dashboard.svg";
import Hub from "../../assets/HeroSection Assets/images/Hub.svg";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Quick, Fast, Secure Payments</h2>
        <p>
          A super fast and easy way to make payments. Easy, affordable,
          reliable, and secure.
        </p>

        <img className="Mail-Icon" src={MailIcon} alt="" />

        <div className="input-container">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Started</button>
        </div>

        <div className="stats">
          <div className="stat-item">
            <img src={Verified} alt="Verified Shield Icon" className="icon" />
            <div className="stat-content">
            <span className="stat-number">
        $
        <CountUp
          start={1}
          end={12}
          duration={3} 
          suffix="M+"
        />
      </span>
      <span className="stat-label">Transactions</span>

            </div>
          </div>

          <div className="stat-item">
            <div className="stat-content">
            <span className="stat-number">
        <CountUp start={0} end={1200} duration={2} separator="," suffix="+" />
      </span>
      <span className="stat-label">Active Users</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-content-b">
        {/* Yellow Circle Background */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="circle-bg" src={CircleBG} alt="Background Circle" />
        </motion.div>

        {/* User Dashboard Image */}
        <motion.img
          className="dashboard-img"
          src={UserDashboard}
          alt="User Dashboard"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Hub Image Overlay */}
        <motion.img
          className="hub-overlay"
          src={Hub}
          alt="Hub Icon"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </section>
  );
}

export default HeroSection;





