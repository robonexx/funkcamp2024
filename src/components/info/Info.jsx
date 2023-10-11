import Video from '@/components/videoscomponent/Video';
import { videoData } from '@/assets/data/pageData';

export const Info = () => {
  return (
    <div className={styles.info}>
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
