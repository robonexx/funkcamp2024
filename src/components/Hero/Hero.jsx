import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';

// images
import Img1 from '/public/images/plock.webp';
import Img2 from '/public/images/manne.webp';
import Img3 from '/public/images/willowparis.webp';
import Img4 from '/public/images/charlie.webp';
import Img5 from '/public/images/atrain-fc24.png';

// styles
import styles from './Hero.module.scss';
import LinkBtn from '../button/LinkBtn';

const Hero = () => {
  const desktop = useMediaQuery(768);

  return (
    <motion.div className={styles.hero}>
      <motion.div
        className={styles.hero_btn_wrapper}
        initial={{ opacity: 0, y: 300 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 0.6, delay: 3, ease: 'easeInOut' }}
      >
        <Link href='#info' className={styles.link}>Info</Link>
        <LinkBtn title='Register' link='/contact' />
      </motion.div>
      <motion.p
        className={styles.hero_subtitle}
        initial={{ opacity: 0, x: -400 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
      >
        4 da lockers
      </motion.p>
      <motion.h1
        className={`${styles.hero_title} ${styles.largest}`}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          width: '100%',
        }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
      >
        Funk
      </motion.h1>
      <motion.h1
        className={styles.hero_title}
        initial={{ opacity: 0, x: 2000 }}
        animate={{
          opacity: 1,
          x: 0,
          width: '100%',
        }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
      >
        Camp
      </motion.h1>
      <motion.p
        className={styles.desc}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          width: '100%',
        }}
        transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}
      >
        Swedens first locking camp, bringing the pioneers to share with the
        locking community
      </motion.p>
      <motion.div
        // plock 2
        className={styles.img_1}
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: desktop ? '80vw' : '40vw',
          height: desktop ? '40vh' : '40vh',
        }}
        transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 1}></Link>
        <Image
          className={styles.img}
          src={Img1}
          alt='patrick'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '-1',
          }}
          loading='lazy'
        />
      </motion.div>

      <motion.div
        // manne 1
        className={styles.img_2}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '40vw' : '25vw',
          height: desktop ? '50vh' : '40vh',
        }}
        transition={{ duration: 0.4, delay: 1, ease: 'easeInOut' }}
      >
        {' '}
        <Link href={'/teacher/' + 5}></Link>
        <Image
          className={styles.img}
          src={Img2}
          alt='manny'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '1',
          }}
          loading='lazy'
        />
      </motion.div>

      <motion.div
        // willow 4
        className={styles.img_3}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '60vw' : '40vw',
          height: desktop ? '30vh' : '40vh',
        }}
        transition={{ duration: 0.4, delay: 0.8, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 2}></Link>
        <Image
          className={styles.img}
          src={Img3}
          alt='willow'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '-1',
          }}
          loading='lazy'
        />
      </motion.div>

      <motion.div
        className={styles.img_4}
        initial={{ opacity: 0, width: '100vw', height: '100vh' }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '100vw',
          height: desktop ? '100vh' : '100vh',
        }}
        transition={{ duration: 0.2, delay: 0.6, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 3}></Link>
        <Image
          className={styles.img}
          src={Img4}
          alt='charlie'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: desktop ? '60%' : 'center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.img_5}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '40vw' : '30vw',
          height: desktop ? '40vh' : '50vh',
        }}
        transition={{ duration: 0.4, delay: 1.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 4}></Link>
        <Image
          className={styles.img}
          src={Img5}
          alt='atrain'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            zIndex: '1',
          }}
          priority
        />
      </motion.div>

      <motion.div
        className={styles.icon}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 0.6, delay: 1.6, ease: 'easeInOut' }}
      >
        <Link href='#teachers' scroll={false}>
          <FiArrowDownCircle />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
