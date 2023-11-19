import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './teacher.module.scss';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const Teacher = ({ id, name, image }) => {
  const desktop = useMediaQuery(768);
  return (
    <motion.div
      // plock 2
      className={styles.teacher}
      initial={{
        x: 0,
        opacity: 0,
        /* width: desktop ? '100vw' : '20vw',
        height: desktop ? '50vh' : '50vh', */
      }}
      animate={{
        x: 0,
        opacity: 1,
       /*  width: desktop ? '100vw' : '20vw',
        height: desktop ? '50vh' : '50vh', */
      }}
      transition={{ duration: 0.4, delay: 2, ease: 'easeInOut' }}
    >
      <Link href={'/teacher/' + id}></Link>
      <Image
        className={styles.img}
        src={image}
        alt={name}
        /* style={{
        objectFit: 'cover',
        objectPosition: 'top center',
        zIndex: '-1',
      }} */
        fill
        priority
      />
    </motion.div>
  );
};

export default Teacher;
