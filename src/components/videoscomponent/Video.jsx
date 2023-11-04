import React from 'react'

import styles from './Video.module.scss'
const Video = ({children}) => {
  return (
    <div className={styles.video_wrapper}>
              {children}          
    </div>
  )
}

export default Video