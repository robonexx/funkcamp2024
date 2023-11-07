import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IMGBIO from '/public/images/funkcamp_insta.jpg';
import DANCE from '/public/images/thedancespot.png';

// styles
import styles from './Info.module.scss';

const Info = () => {
  return (
    <div className={styles.bio}>
      <h2>FUNKCAMP</h2>
      <h2>2024</h2>

      <br />
      {/*  <Image src={IMGBIO} alt='funkcamp' width={'100%'} height={'auto'} /> */}
      <div className={styles.adress}>
        <h4>MAIN VENUE!</h4>
        <h2 style={{ margin: '2rem 0', color: '#ffa900' }}>DANSCENTER</h2>
        <p>Fryshuset</p>
        <p>DANSSTUDIO  1 or / and 2</p>
        <h4 style={{ textAlign: 'left', marginTop: '4rem' }}>
          Adress for venue:
        </h4>
        <p>
          Mårtensdalsgatan 2-8
          <br />
          <br />
          120 30 Stockholm
        </p>
        <Link
          rel='stylesheet'
          href='https://www.google.com/search?q=danscenter+fryshuset&rlz=1C1BYYL_svSE957SE957&tbm=lcl&sxsrf=AJOqlzVI_uc_6va0FmkQvNyRt5aJSPL4XQ%3A1677588052761&ei=VPb9Y5f6Leu_xc8P0OSzsAs&oq=dansce&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAEYADIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQgAQQsQM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CAgAELEDEIMBOg4IABCABBCxAxCDARDJAzoICAAQgAQQkgM6BwgAEIAEEApQsQhYiBxg_iVoBHAAeACAATeIAcEDkgEBOZgBAKABAcABAQ&sclient=gws-wiz-local#rlfi=hd:;si:10175385335132986439;mv:[[59.30119397731902,18.089164231936785],[59.30083402268096,18.088459168063217]]'
          target='_blank'
        >
          Adress link to Danscenter Stockholm
        </Link>
      </div>

      <div className={styles.adress}>
        <p>Travel in Stockholm please follow the link</p>
        <Link
          rel='stylesheet'
          href='https://sl.se/en/in-english'
          target='_blank'
        >
          SL - public transport in Stockholm.
        </Link>
        <br />
        <br />
      </div>
      <br />
      <p className={styles.schedulestart}>Here is a pre- schedule, changes might happen so be on the look out</p>
      <h3 /* style={{ textDecoration: 'line-through' }} */>
        Friday: At Danscenter{' '}
      </h3>
      {/*  <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p>1 st of march</p>
      <ul>
        <li>17.30 Welcome and registration - Danscenter</li>
        <li>18.00-21.00 Willow & Atrain</li>
        <li>21.00 doors close</li>
        <li>Rest for saturday</li>
      </ul>
      <h3 /* style={{ textDecoration: 'line-through' }} */>
        Saturday: At Dancer
      </h3>
      {/* <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p>2nd of march</p>
      <ul>
        <li>11.00-12.15 Workshop with Charlie</li>
        <li>13.30 - 14.45 Workshop with Manne</li>
        <li>15.00 - 17.00 Workshop with P.Lock</li>
        <li>More info coming soon... about saturday</li>
      </ul>
      <h3 /* style={{ textDecoration: 'line-through' }} */>
        Sunday: At danscenter
      </h3>
      {/*  <p style={{ color: 'tomato' }}>Done did with it</p> */}
      <p>3rd of march</p>
      <ul>
        <li>12.00 - 14.00 P.Lock</li>
        <li>14.00-15.00 Break</li>
        <li>15.00-17.00 Willow & Manne</li>
        <li>17.20 - Q & As </li>
        <li>THE END</li>
      </ul>
    </div>
  );
};

export default Info;

/* 
<li>- A little re-scedule</li>
        <li>
          12.00 Workshop with Tony Gogo at Studion Kulturhuset + session <br />-
          At STUDION
        </li>
        <li>13.00 - 15.00 Session / Jam - At STUDION</li>
        <li>In association with Gatuverket</li>
        <li>and the DANCESPOT</li>
        <li>
          <Link
            rel='stylesheet'
            href='https://www.google.com/maps/place/Kulturhuset/@59.3320447,18.0627552,17z/data=!3m2!4b1!5s0x465f9d5e6495902d:0x64dca853c2bd10ec!4m6!3m5!1s0x465f9d5e7cf16e05:0x5068230272fbf543!8m2!3d59.332042!4d18.0649439!16s%2Fm%2F027_kvs'
            target='_blank'
          >
            Adress link to Studion
          </Link>
        </li>
        <li>Adress: Studion, Sergels Torg, 111 57 Stockholm</li>
        <li>15-16.30 BREAK - change of venue</li>
        <li>
          16.30-20.00 - Workshops continue for funkcamp <br />- At Danscenter
        </li>
        <li>Teacher schedule coming up on friday</li>

*/
