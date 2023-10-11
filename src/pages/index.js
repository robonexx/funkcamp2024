import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Bio from '@/components/bio/Bio';
import S2 from '/public/images/dc.png';
import Info from '@/components/info/Info';

export default function Home() {
  return (
    <>
      <Head>
        <title>Funkcamp 2024</title>
        <meta name='description' content='Official funkcamp webiste' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.home}>
        <motion.div
          className={`${styles.overlay} ${styles.first}`}
          initial={{ width: '100%' }}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.2, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.second}`}
          initial={{ width: '100%' }}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.4, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className={`${styles.overlay} ${styles.third}`}
          initial={{ width: '100%' }}
          animate={{
            width: 0,
          }}
          transition={{ duration: 0.4, delay: 0.6, ease: 'easeInOut' }}
        ></motion.div>
        <Hero />
        <Info />
        <div className={styles.intro}>
          <h2>Thank you everyone!</h2>
          <p>
            We are happy that you came and shared with US in 2023. <br />
            Thanks to all of you we are able to do this, I hope you felt the
            energy and vibe the same way we did. <br />
            It was a connection, and well needed after the past years where we
            have been separated to not enjoy the energy shared between us
            humans. We are made of energy and the energy this weekend did not
            lie. Soulful, connecting with others and your innerself to be able
            to become a better mover and feel what we actually are doing.
          </p>

          <div className={styles.bio}>
            <Bio />
          </div>
          <h4>To contact us check contact page</h4>
        </div>

        <div className={styles.sponsors}>
          <h2>In association with</h2>
          <div className={styles.img}>
            {/* <Image
              className={styles.img}
              src={S1}
              alt='gatuverket'
              fill
              priority
            /> */}
          </div>
          <Image
            src={S2}
            alt='danscenter'
            width='300px'
            height='auto'
            priority
          />
          {/*  <h2>The DanceSpot</h2> */}
        </div>
      </main>
    </>
  );
}
