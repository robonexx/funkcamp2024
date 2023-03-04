import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Bio from '@/components/bio/Bio';
import Video from '@/components/videoscomponent/Video';
import { videoData } from '@/assets/data/pageData';

import S1 from '/public/images/gatu.png';
import S2 from '/public/images/dc.png';
import S3 from '/public/images/asa.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Funkcamp 2023</title>
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
        <div className={styles.intro}>
          <div>
          <h1 style={{ margin: '0rem 0 3rem', color: '#ffa900' }}>Sunday: Last day of funkcamp</h1>
      <ul>
        <li>12.00 - 13.00 Manny</li>
        <li>13.00 - 14.00 Willow</li>
        <li>14.00-15.30 Break</li>
        <li>15.30-16.30 Tony Gogo </li>
        <li>16.30 Q & A</li>
      </ul>
            </div>
          <h2 style={{ marginTop: '5rem' }}>Thank you everyone </h2>
          <p>We are happy that you have come to share your energy with us!</p>
          <p>Without you guys, there would be no Funkcamp, So thank YOU!</p>
         
          <div id='bio'>
        <Bio />
        </div>
          <h2 style={{ margin: '2rem 0', color: '#ffa900' }}>
            MAIN VENUE IS DANSCENTER FRYSHUSET
          </h2>
          <p>
            We hope you visit will be a good one and that you will create
            memories that last
          </p>
          <p>
            We have an other opportunity to learn from a true pioneer so lets
            make the best of this weekend
          </p>
          <p>
            Read schedule further down for more info about changes and what is
            going on!
          </p>
          <p>To contact us check contact page</p>
        </div>
        
        <div className={styles.sponsors}>
          <h2>In association with</h2>
          <div className={styles.img}>
            <Image
              className={styles.img}
              src={S1}
              alt='gatuverket'
              fill
              priority
            />
          </div>
          <Image
            src={S2}
            alt='danscenter'
            width='300px'
            height='auto'
            priority
          />
          <h2>The DanceSpot</h2>
        </div>
        <Video>
          {videoData.map(({ vid, vtime, id }) => (
            <div key={id}>
              <iframe
                title='tony gogo'
                className={styles.video}
                type='text/html'
                src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
              ></iframe>
            </div>
          ))}
        </Video>
      </main>
    </>
  );
}
