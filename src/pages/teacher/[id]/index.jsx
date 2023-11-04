import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { teacherData } from '@/assets/data/pageData';
import Bio from './_components/bio/Bio';
import PageLoader from './_components/page-loader/PageLoader';
import ImageReveal from './_components/image-reveal/ImageReveal';
import styles from './teacherPage.module.scss';

const Teacher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const id = usePathname().replace('/teacher/', '');

  useEffect(() => {
    // Simulate an asynchronous data fetch
    const fetchData = async () => {
      try {
        // Assuming teacherData is a promise, or you can fetch data from an API
        const fetchedData = await teacherData.slice(0, 5);
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div className={styles.teacher}>
      show teacher here
      {!loading && (
        <>
          {data &&
            data.map((item) => {
              if (Number(id) === item.id) {
                return (
                  <div key={item.id}>
                    <PageLoader title={item.title} setLoading={setLoading} />
                    <ImageReveal
                      name={item.name}
                      country={item.country}
                      img={item.img}
                    />
                    <Bio
                      title={item.title}
                      subtitle={item.subtitle}
                      desc={item.desc}
                    />
                  </div>
                );
              }
              return null;
            })}
        </>
      )}
    </div>
  );
};

export default Teacher;
