import React, { useState, useRef } from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'

// styles
import styles from './Contact.module.scss'


const Contact = () => {

  return (
    <div className={styles.contact}>
      <motion.h2
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeOut'}}
      >Contact</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.6, ease: 'easeOut'}}
      >&</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.8, ease: 'easeOut'}}
      >Questions</motion.h2>
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 0.6, delay: 1, ease: 'easeOut'}}
      >
        <h3>funkcampswe@gmail.com</h3>
        <h4>We will be at the venue to assist you</h4>
        <p>Fri 17.30-20.45</p>
        <p>Sun 11.30-19.45</p>
        <p>Fri 11.00-16.45</p>

        <h2>If its urgent</h2>
        <h4>robertwagar@gmail.com</h4>
      </motion.div>
    </div>
  )
}

export default Contact