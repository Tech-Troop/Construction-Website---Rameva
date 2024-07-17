import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from "./Welcome.module.css";



export default function Welcome({ isLoad }) {
  return (
    <div className={styles.mainContainer} id='home' >
    <div className={styles.welcomeContext}>
        <div className={styles.welcomeTop}>
            <motion.h1
                initial={{ x: "-100px", opacity: 0 }}
                animate={{ x: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className={`${styles.welcomeTitle}`}
            >Excellence in Construction<br />Innovation in Design</motion.h1>

            <motion.p 
                className={`${styles.welcomeText}`}
                initial={{ x: "-100px", opacity: 0 }}
                animate={{ x: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                We believe in the power of architecture to shape the world around us. Step into a world of architectural marvels and limitless possibilities with Rameva Construction.
            </motion.p>
        </div>
        <div className={styles.welcomeBottom}>
            <motion.div 
                className={styles.welcomeCard}
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: isLoad? 0 : "", opacity: isLoad ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
            >
                <h2>BUILDING</h2>
                <p>Building Your Dreams, One Brick at a Time</p>
                <a href="#">Learn More</a>
                <i className='fa-solid fa-building'></i>
            </motion.div>
            <motion.div 
                className={styles.welcomeCard}
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
            >
                <h2>INDUSTRIAL</h2>
               <p>Where Industrial Expertise Drives Success</p>
                <a href="#">Learn More</a>
                <i className='fa-solid fa-industry'></i>
            </motion.div>
            <motion.div 
                className={styles.welcomeCard}
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: isLoad ? 0 : "", opacity: isLoad ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <h2>FUTURE</h2>
                <p>Innovative Construction for Tomorrow</p>
                <a href="#">Learn More</a>
                <i className='fa-solid fa-seedling'></i>
            </motion.div>
        </div>

        
    </div>
</div>
  )
}
