import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IMG from '/public/images/p_lock.jpg';
import IMG2 from '/public/images/pc2bLogo.png';

// styles
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <motion.div
        className={styles.img_pos}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div>
          <Image className={styles.img} src={IMG2} alt='pc2b' fill />
        </motion.div>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: 800, y: 40 }}
        animate={{ opacity: 1, x:200, y: 40 }}
        transition={{ duration: 1.6, delay: 1 }}
      >
        Founder of the event...
      </motion.p>
      <motion.div
        className={styles.img_wrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Image className={styles.img} src={IMG} alt='p lock' fill />
      </motion.div>
      <motion.h4
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        The man himself,{' '}
      </motion.h4>
      <motion.h2
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        P.LOCK - The THUNDER MAN ⚡️!{' '}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.6 }}
      >
        Battle star ✨, Locker and Choreographer Patrick Pires, co-founding member
        of The Rockets 🚀, has preserved a high level and remarkable skill in the Art-form of locking.
        <br />
        <br />
        Originally from Portugal, P started learning dance the age of... He now
        lives in Paris and is one of the most prominant lockers of this new
        generation.
        <br />
        <br />
        While dancing with his partner J.Soul he quickly got in to winning
        several battles and as a Solo locker he is undisputed, won most
        competitions in the world.
      </motion.p>
      <p>
        Last years he has been member and founder of the Rockets and he also has
        his own event Payed the cost to be the Boss.
        <br />
        Being the only pioneer of Locking to reside in Japan, Tony has trained
        most Japanese Lockers who have gained international acclaim, but none
        more prominent than his two sons Yuu and Rei, better known as the Go Go
        Brothers of today. They have a strong synchronised locking background by
        which, one can tell, they learned from only the very best - Tony
        recalls, &apos;When Me, Skeet and Buddy got together in the early
        70&apos;s we worked on steps over and over again, and that&apos;s the
        way I taught them&apos;. It doesn&apos;t come as a surprise then that
        Yuu and Rei started dancing around the same time they started walking.
        They trained in Locking and Tap Dance from a very early age, performing
        with their father on numerous occasions throughout Japan.
        <br />
        Although Campbell can&apos;t lay claim to having the first Locking crew,
        that distinction belongs to Tony GoGo and the Go-Go, and Yo-Yo Brothers,
        Campbell&apos;s simply named group, The Lockers, can be considered the
        ones that spread the gospel of Locking all over the world.
      </p>
    </div>
  );
};

export default About;
