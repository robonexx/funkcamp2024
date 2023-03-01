import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import IMGBIO from '/public/images/funkcamp_insta.jpg'

// styles
import styles from './Bio.module.scss'

const Bio = () => {
  return (
      <div className={styles.bio}>
      <h2>FUNKCAMP</h2>
      <h4>2023</h4>
          <p>
        A weekend of locking for the possionate lockers out there. 
        <br />
        Below you will find the schedule for the weekend. 
        <br/>
        This is for the people who booked there spot at funkcamp 2023. Enjoy the weekend
        </p>
      <br />
      <Image src={IMGBIO} alt="funkcamp"
      />
      <div className={styles.adress}>
        <h2>MAIN VENUE!</h2>
        <h2>DANSCENTER</h2>
        <p>Fryshuset</p>
      <h4 style={{textAlign: 'left', marginTop: '4rem'}}>Adress for venue:</h4>
      <p>Mårtensdalsgatan 2-8
        <br />
        <br />
        120 30 Stockholm
      </p>
      <Link rel="stylesheet" href="https://www.google.com/search?q=danscenter+fryshuset&rlz=1C1BYYL_svSE957SE957&tbm=lcl&sxsrf=AJOqlzVI_uc_6va0FmkQvNyRt5aJSPL4XQ%3A1677588052761&ei=VPb9Y5f6Leu_xc8P0OSzsAs&oq=dansce&gs_lcp=Cg1nd3Mtd2l6LWxvY2FsEAEYADIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgsIABCABBCxAxCDAToICAAQgAQQsQM6BAgAEEM6CggAELEDEIMBEEM6BwgAELEDEEM6CAgAELEDEIMBOg4IABCABBCxAxCDARDJAzoICAAQgAQQkgM6BwgAEIAEEApQsQhYiBxg_iVoBHAAeACAATeIAcEDkgEBOZgBAKABAcABAQ&sclient=gws-wiz-local#rlfi=hd:;si:10175385335132986439;mv:[[59.30119397731902,18.089164231936785],[59.30083402268096,18.088459168063217]]" target='_blank'>Adress link to Danscenter Stockholm</Link>     
      </div>

      <div className={styles.adress}>
        <p>Travel in Stockholm please follow the link</p>
        <Link rel="stylesheet" href="https://sl.se/en/in-english" target='_blank'>SL - public transport in Stockholm.</Link>
        <br /><br />
        <p>
        For hotels please check bookings.com, hotels.com or airbnb
        <br />
        Remember to eat so you have energy and rest after class so you can keep going the hole camp
        </p>
      </div>
      <br />
      <h3>Friday: At Danscenter</h3>
      <ul>
        <li>17.30 Welcome and registration - Danscenter</li>
        <li>18.00-21.00 workshops</li>
        <li>21.00 doors close</li>
        <li>Rest for saturday</li>
      </ul>
      
      <h3>Saturday: Mixed Venues</h3>
      <ul>
        <li>- A little re-scedule</li>
        <li>10.00 - 11.15 warm-up workshop with Rob-One <br/> - At Danscenter</li>
        <li>12.00 Workshop with Tony Gogo at LAVA + session <br/>- At Lava</li>
        <li>13.00 - 15.00 Session / Jam at DanceSpot Stockholm</li>
        <li>In association with Gatuverket</li>
        <li><Link rel="stylesheet" href="https://www.google.com/search?rlz=1C1BYYL_svSE957SE957&tbs=lf:1,lf_ui:4&tbm=lcl&sxsrf=AJOqlzXpH7fgBe5KQJ-g0ecPAdArq9VucA:1677588046862&q=lava+kulturhuset&rflfq=1&num=10&rldimm=9698059877802580866&ved=2ahUKEwil-_K8nrj9AhXXRfEDHTv0BsAQu9QIegQIGxAK#rlfi=hd:;si:6049330700982543529;mv:[[59.33311692937562,18.067333436924766],[59.33076380267133,18.06202266307528],null,[59.33194038639488,18.064678050000023],18]" target='_blank'>Adress link to Lava</Link></li>        
        <li>Adress: Lava, Sergels Torg, 111 57 Stockholm</li>
        <li>16.00-20.00 - Workshops continue for funkcamp <br/>- At Danscenter</li>
       <li>Teacher schedule coming up on friday</li>
      </ul>
      <h3>Sunday: At danscenter</h3>
      <ul>
        <li>11.00 - 12.30 Workshop</li>
        <li>12.30 - 14.00 Workshop</li>
        <li>14.00-15.00 Lunch</li>
        <li>15.00-16.30 Workshops + day will end with a Q & A</li>
      </ul>
    </div>
  )
}

export default Bio