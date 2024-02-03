import Video from '@/components/videoscomponent/Video';
import { videoData } from '@/assets/data/pageData';
import styles from './videowrapper.module.scss';

const VideoWrapper = () => {
  return (
    <div className={styles.info}>
      <h1>Our ⭐'s  in action!</h1>
      <Video>
        {videoData.map(({ vid, vtime, id, name }) => (
          <div key={id}>
            <h2>{name}</h2>
            <iframe
              title={`video of ${name}`}
              className={styles.video}
              type='text/html'
              src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full'
            ></iframe>
          </div>
        ))}
      </Video>
    </div>
  );
};

export default VideoWrapper;
