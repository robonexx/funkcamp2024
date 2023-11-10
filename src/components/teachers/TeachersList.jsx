import React from 'react';
import styles from './teachersList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

import Img1 from '/public/img/p1.png';
import Img2 from '/public/img/m1.png';
import Img3 from '/public/img/w1.png';
import Img4 from '/public/img/c1.png';
import Img5 from '/public/img/a1.png';
import ToolT from '../tooltip/ToolT';

const TeachersList = () => {
  const desktop = useMediaQuery(768);
  return (
    <div className={styles.teachers_wrapper}  id='videos'>
      <motion.h1
        className={`${styles.teachers_title}`}
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          width: '100%',
        }}
        transition={{ duration: 0.8, delay: 1.6, ease: 'easeInOut' }}
      >
        TEACHERS 2024
      </motion.h1>
      <motion.p
        className={styles.desc}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1
        }}
        transition={{ duration: 1.2, delay: 2, ease: 'easeInOut' }}
      >
        We are proud to have such a great line up for 2024, true masters at work
      </motion.p>
      <div className={styles.tooltip_wrapper}>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Style and Grace - Attitude- Perfectionist, Stunts, Trix, Show stopping moves'
          >
            P-Lock The Thunderman
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Character - Grooves, Playfullness, Sooouuul brotha no.1'
          >
            Willow Evann
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Attitude - Style and Grace - Maturity, Fierce, Powerful impact on the scene'
          >
            Charlie - Lady Charlock
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Attitude - Unique, powerful, playfullness, perfectionism'
          >
            Alex - A-train
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Character - Style and Grace - Flawless technique, precision, stunts, fundamentals'
          >
            Manne - Funky Asparagus
          </ToolT>
        </div>
      </div>
      <motion.div
        // plock 2
        className={styles.img_1}
        initial={{
          opacity: 0,
          width: 0,
        }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 2}></Link>
        {/*  <div className={styles.tooltip_wrap}> */}
        {/*   </div> */}
        <Image
          className={styles.img}
          src={Img1}
          alt='patrick'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>

      <motion.div
        // willow 4
        className={styles.img_3}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 4}></Link>
        <Image
          className={styles.img}
          src={Img3}
          alt='willow'
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: '-1',
          }}
          priority
        />
      </motion.div>
      <motion.div
        className={styles.img_4}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '25vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 3}></Link>
        <Image
          className={styles.img}
          src={Img4}
          alt='charlie'
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
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
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.2, ease: 'easeInOut' }}
      >
        <Link href={'/teacher/' + 5}></Link>
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
        // manne 1
        className={styles.img_2}
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: 1,
          width: desktop ? '100vw' : '30vw',
          height: desktop ? '50vh' : '60vh',
        }}
        transition={{ duration: 0.4, delay: 2.4, ease: 'easeInOut' }}
      >
        {' '}
        <Link href={'/teacher/' + 1}></Link>
        <Image
          className={styles.img}
          src={Img2}
          alt='manny'
          style={{
            objectFit: 'cover',
            objectPosition: 'top center',
            zIndex: '1',
          }}
          priority
        />
      </motion.div>
    </div>
  );
};

export default TeachersList;
