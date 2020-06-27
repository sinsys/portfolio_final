// Section component - Hero
import React from 'react';
import { motion } from "framer-motion"

// Files / Assets
import ProfilePic from 'assets/images/profile_pic.jpg';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <motion.div 
        className="Hero-image"
        animate={{ 
          opacity: 1,
          marginBottom: 0 
        }}
        transition={{ duration: 1.0 }}
      >
        <img src={ProfilePic} alt="Nicholas Hazel" />
      </motion.div>
      <motion.div
        className="Hero-text"
        style={{
          opacity: 0,
          scaleY: 0,
          skewX: 30,
          marginRight: -200
        }}
        animate={{
          opacity: 1,
          scaleY: 1,
          skewX: 0,
          marginRight: 0
        }}
        transition={{ duration: 1.0, delay: 1.0 }}
      >
        <h1 className="Hero-title">Hello, I'm&nbsp;
          <span className="color blue">Nicholas</span>
        </h1>
        <p className="Hero-description">
          I develop&nbsp;
          <span className="color js-one">Java</span>
          <span className="color js-two">Script</span>
          &nbsp;Web Applications
        </p>
      </motion.div>
    </section>
  )
}

export default Hero;