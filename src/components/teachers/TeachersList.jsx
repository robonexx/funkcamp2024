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
import Teacher from './Teacher';

const teacherData = [
  {
    name: 'P-Lock The Thunderman',
    title: 'Super Powers',
    description:
      'Style and Grace - Attitude- Perfectionist, Stunts, Trix, Show stopping moves',
    image: Img1,
    id: 1,
  },
  {
    name: 'Willow Evann',
    title: 'Super Powers',
    description:
      'Pure Funk - Character - Grooves, Playfullness, Sooouuul brotha no.1',
    image: Img3,
    id: 2,
  },
  {
    name: 'Lady Charlock',
    title: 'Super Powers',
    description: 'Style and Grace - Attitude - Maturity, Fierce, Powerful',
    image: Img4,
    id: 3,
  },
  {
    name: 'A-Train',
    title: 'Super Powers',
    description:
      'Pure Funk - Attitude - Unique, powerful, playfullness, perfectionism',
    image: Img5,
    id: 4,
  },
  {
    name: 'Funky Asparagus',
    title: 'Super Powers',
    description:
      'Character - Style and Grace - Flawless technique, precision, stunts, fundamentals',
    image: Img2,
    id: 5,
  },
];

const TeachersList = () => {
  const desktop = useMediaQuery(768);
  return (
    <div className={styles.teachers_wrapper} id='teachers'>
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
          opacity: 1,
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
            <p>P-Lock The Thunderman</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Character - Grooves, Playfullness, Sooouuul brotha no.1'
          >
            <p>Willow Evann</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Attitude - Style and Grace - Maturity, Fierce, Powerful impact on the scene'
          >
            <p>Charlie - Lady Charlock</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Pure Funk - Attitude - Unique, powerful, playfullness, perfectionism'
          >
            <p>Alex - A-train</p>
          </ToolT>
        </div>
        <div className={styles.grid_item}>
          <ToolT
            title='Super Powers'
            description='Character - Style and Grace - Flawless technique, precision, stunts, fundamentals'
          >
            <p>Manne - Funky Asparagus</p>
          </ToolT>
        </div>
      </div>
      <motion.div className={styles.teachers_images}>
        {teacherData.map(({ id, image, name }) => (
          <Teacher key={id} id={id} name={name} image={image} />
        ))}
      </motion.div>
      {/*    <motion.div
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
        className={styles.img_1}
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
        className={styles.img_1}
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
        className={styles.img_1}
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
        className={styles.img_1}
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
      </motion.div> */}
    </div>
  );
};

export default TeachersList;
