import React, { useState, useRef } from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'

// styles
import styles from './Media.module.scss'


const Media = () => {

  return (
    <div className={styles.media}>
      <motion.h2
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeOut'}}
      >Media</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.6, ease: 'easeOut'}}
      >Images</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.8, ease: 'easeOut'}}
      >Videos</motion.h2>
      <motion.div
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 0.6, delay: 1, ease: 'easeOut'}}
      >
        <h4>Media gallery coming up</h4>
      </motion.div>
    </div>
  )
}

export default Media