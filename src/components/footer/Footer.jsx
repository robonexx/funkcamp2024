import React from 'react'

// styles
import styles from './Footer.module.scss'

export default function Footer(props) {
  return (
    
    <footer className={styles.footer}>
      {props.children}
    </footer>

  )
}
