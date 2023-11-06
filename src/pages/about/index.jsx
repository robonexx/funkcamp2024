import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IMG from '/public/gregskeeter.JPG';
import IMG2 from '/public/2007.JPG';

// styles
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <motion.p
        initial={{ opacity: 0, x: 800, y: 40 }}
        animate={{ opacity: 1, x:100, y: 40 }}
        transition={{ duration: 1.6, delay: 1 }}
      >
        Founder of the funkcamp...
      </motion.p>
      <motion.div
        className={styles.img_wrapper}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Image className={styles.img} src={IMG} alt='skeeter and greg 2005' fill />
      </motion.div>
      <motion.h4
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        The OG's who was there,{' '}
      </motion.h4>
      <motion.h2
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
       From The Start ⚡️!{' '}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.6 }}
      >
        Funkcamp 2005 ✨ Frist ever locking only camp in Sweden and Europe.
        <br />
        From there the rest is history, we now have camps all over the world
        <br />
        Original idea to camp was from OG Skeeter Rabbit and with the help of Greg Campbellock Jr, 
        we put the ideas together and set the plans in motion
        <br />
        <br />
        While at the sametime the Elite camp started in LA, also original idea from Skeeter and Greg, today many are talking about what and who was first
        actually not even knowing what was said and planned before everything was set in motion. Still the Vegas camp was a good place for many and sadly not continued.
      </motion.p>
      <p>
        The past soon 20 years has been remarkable, learning from the pioneers, connecting the youth and future lockers to the pioneers and to be able to learn from some of the sources directly has been an honor, to see some lockers grow from beeing kids at the first camps to being some of the top dancers in the world. 
        <br />
        The camp has always had 3 pioneers with roots to the Locking community, the clubs, soul train and yes GOGO Brothers family.
        Many have been supporting the camp for years now, but without these 3 pillars, OG Skeeter Rabbit, TONY GOGO and Campbellock JR, This camp would have not existed. So Im deeply honered and humbled by the help, continues support and the brother hood you have shown us. 
        <br />
        <br />
        And non of this or the style with the original name Campellocking from the creator Don Campbellock Campbell, this style aka locking, has been spreading around the world and been enjoyed by many. 
        The fact that we are all a part of an afro-american legacy and it is our duty to pass it on to the new generations. 
        The Lockers, Campbellock dancers was well known groups in the 70s, and Don was a part of them
        <br />
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
