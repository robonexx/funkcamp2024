import Head from 'next/head';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import Hero from '@/components/Hero/Hero';
import Info from '@/components/info/Info';
import S2 from '/public/images/dc.png';
import Videos from '@/components/videowrapper/VideoWrapper';
import TeachersList from '@/components/teachers/TeachersList';

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
        <Hero />
        <TeachersList />
        <Videos />
        <div className={styles.intro}>
          {/* <h2>Thank you everyone!</h2>
          <p>
            We are happy that you came and shared with US in 2023. <br />
            Thanks to all of you we are able to do this, I hope you felt the
            energy and vibe the same way we did. <br />
            It was a connection, and well needed after the past years where we
            have been separated to not enjoy the energy shared between us
            humans. We are made of energy and the energy this weekend did not
            lie. Soulful, connecting with others and your innerself to be able
            to become a better mover and feel what we actually are doing.
          </p> */}

          <div className={styles.bio}>
            <Info />
          </div>
          <h4>To contact us check contact page</h4>
        </div>

        <div className={styles.sponsors}>
          <h2>In collaboration with</h2>
          <Image
            src={S2}
            alt='danscenter'
            width='300px'
            height='auto'
            priority
          />
        </div>
      </main>
    </>
  );
}
