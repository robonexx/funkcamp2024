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
        <h4>On urgent notice call : <span>number</span> coming up on friday </h4>
      </motion.div>
    </div>
  )
}

export default Contact