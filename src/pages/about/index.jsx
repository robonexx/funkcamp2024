import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IMG from '/public/fc05.jpg';

// styles
import styles from './About.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <motion.p
        initial={{ opacity: 0, x: 800, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 40 }}
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
        <Image
          className={styles.img}
          src={IMG}
          alt='skeeter and greg 2005'
          fill
        />
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
        Funkcamp 2005 ✨ First ever dance camp dedicated to locking in Sweden and Europe.
        <br />
        From there the rest is history, we are now coming in to our 20th anniversay in 2024.
        <br />
        Original idea to camp was from me working on a kids show for UR utbildnings radion in Sweden, I was the producer of that show and was asked to have my students teach different "street styles", me asking the organisation to get hold of Don Campbell (who sadly never responded), OG Skeeter Rabbit, Greg Campbellock Jr for me.
        <br />
        We (me and Skeeter) had a few emails sent back and forth, I asked him to come and teach the foundation and history in Sweden, he said shure and said he connect me with Greg.
        <br />
        With the help of OG Skeeter Rabbit & Greg Campbellock Jr, we put the ideas together and set the plans in motion for what was to become FUNKCAMP (sweden)
        <br />
      </motion.p>
      <p>
        The past soon 19 years has been remarkable, learning from the pioneers,
        connecting the youth and future lockers to the pioneers and to be able
        to learn from some of the sources directly has been an honor, to see
        some lockers grow from beeing kids at the first camps to being some of
        the top dancers in the world.
        <br />
        The camp has always had 3 pioneers with roots to the Locking community,
        the clubs, soul train and yes GOGO Brothers family. Many have been
        supporting the camp for years now, but without these 3 pillars, OG
        Skeeter Rabbit, TONY GOGO and Campbellock JR, This camp would have not
        existed. So Im deeply honered and humbled by the help, continued support
        and the brother hood you have shown us.
        <br />
        <br />
        Other people who helped me from the start has been Manne Schutt and Amine Baraka, they where always helping out and fixing around the camp. A-train was also helping out with the camp when he was still a teenager. Funky 4 brothers was always supportive and helped alot. Also some other pioneers has been involved in several camps, such as Damon Frost, Patrik "PRIME" Helge.  
        <br />
        We had the honor to have Loose Caboose, Lock Smith, Anthony Edwards come teach at the camp too. And our brother Willow has been playing a mayor part of the camp the past years.
        <br />
        <br />
        And we have had the honor to keep having the assosiasion and collaboration with Danscenter stockholm and now Danscenter Fryshuset were the school continues to live its legacy. This is also the venue for Funkcamp 2024. 
        <br />
        <br />
        We wanna thank all of you who has come to the camps. Connecting with lockers from around the world and have direct conversations and teachings from our finest lockers and pioneers of locking. Our guest teachers who is a pillar holding high level at the camp and teaching their passion with us. 
        <br /><br /> 
        We hope to see you at the next camp in 2024 & we already started planing an upcoming camp with some great guests that never visited us before. :D
      </p>
    </div>
  );
};

export default About;
