import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import IMG from '/public/fcamp05.jpg';

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
        The year it all started... 2005
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
        James 'OG Skeeter Rabbit' Higgins & Dave Gregory 'Campbellock Jr' Pope
      </motion.h4>
      <motion.h2
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        How it all began ⚡️ & continues
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.6 }}
      >
        Funkcamp 2005 ✨ First ever dance camp dedicated to locking in Sweden
        and Europe.
        <br />
        From there the rest is history, we are now coming in to our 19th year in
        2024. But actaully not 19th edition... due to some years falling off,
        most of us know why.
        <br />
        <br />
        Original idea to camp was from me working on a kids show for UR
        utbildnings radion in Sweden, I was the producer of that show and was
        asked to have my students teach different "street styles", me asking the
        organisation to get hold of Don Campbell (who sadly never responded), OG
        Skeeter Rabbit, Greg Campbellock Jr for me.
        <br />
        We (me and Skeeter) had a few emails sent back and forth, I asked him to
        come and teach the foundation and history in Sweden, he said shure I can
        help out and said he connect me with Greg. Then Greg also became a part
        of the process
        <br />
        <br />
        Also during this period Skeeter and Greg planned a camp in LA, a locking
        camp. It was moved to Vegas and the narrative was changed (Skeeter got
        sick) and people decided to go and do it with out Skeeter who was the
        original person behind the camp both idea & concept. I was invited ot US,
        but could not go to the camp in Vegas, so a friend from Sweden went and
        met with the OGs.
        <br />
        <br />
        The same year we decided to do the funkcamp in Sweden. Bringing the OG's
        so that our kids could learn directly from the source. With the help of
        OG Skeeter Rabbit & Greg Campbellock Jr, we put the ideas together and
        set the plans in motion for what was to become FUNKCAMP (sweden) This
        lighted a spark amongst many younger lockers and a groups like funky 4
        brothers was formed from this spark! And supported by many of the OG's.
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
        the clubs, soul train and yes{' '}
        <span style={{ color: '#ea781a' }}>GOGO Brothers</span>. <br /> Many
        have been supporting the camp for years now, but without these 3
        pillars,{' '}
        <span style={{ color: '#ea781a' }}>
          {' '}
          OG Skeeter Rabbit, TONY GOGO and Campbellock JR (R.I.P)
        </span>
        , This camp would have not existed. <br /> So Im deeply honered and
        humbled by the help, continued support and the brother hood you have
        shown us.
        <br />
        <br />
        Other people who helped me from the start has been{' '}
        <span style={{ color: '#ea781a' }}> Manne Schutt and Amine Baraka</span>
        , they where always helping out and fixing around the camp.{' '}
        <span style={{ color: '#ea781a' }}>Funky 4 brothers</span> was always
        supportive and helped alot ... <br />
        Also some other pioneers has been involved in several camps, such as
        <span style={{ color: '#ea781a' }}>
          {' '}
          Damon Frost, Patrik "PRIME" Helge
        </span>{' '}
        .
        <br />
        We had the honor to have{' '}
        <span style={{ color: '#ea781a' }}>
          {' '}
          Loose Caboose, Lock Smith, Anthony Edwards
        </span>{' '}
        come teach at the camp too. And our brother{' '}
        <span style={{ color: '#ea781a' }}> Willow</span> has been playing a
        mayor part of the camp the past years.
        <br />
        <br />
        And we have had the honor to keep having the assosiasion and
        collaboration with{' '}
        <span style={{ color: '#ea781a' }}> Danscenter stockholm</span> and now
        under the roof of <span style={{ color: '#ea781a' }}> Fryshuset </span>
        were the school continues to live its legacy. This is also the venue for
        Funkcamp 2024.
        <br />
        <br />
        We wanna thank all of you who has come to the camps. Connecting with
        lockers from around the world and have direct conversations and
        teachings from our finest lockers and pioneers of locking. Our guest
        teachers who is a pillar holding high level at the camp and teaching
        their passion with us.
        <br />
        <br />
        We hope to see you at the 2024 camp & we already started
        planning an upcoming camp in 2025! 20year anniversary! with some great
        guests that never visited us before. 🎉
      </p>
    </div>
  );
};

export default About;
