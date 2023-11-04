import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap, Power2 } from 'gsap';
import styles from './imagereveal.module.scss';
import ScrollIndicator from '../../components/scrolldown/ScrollIndicator';

const ImageReveal = ({ name, country, img }) => {
  console.log('ImageReveal props:', name, country, img);
  const image = useRef(null);
  const container = useRef(null);
  const overlayRef = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    const imageReveal = overlayRef.current;
    const tl = gsap.timeline();
    tl.to(container.current, { opacity: 1 });
    tl.to(imageReveal, {
      duration: 1.4,
      width: '0%',
      ease: Power2.easeInOut,
    });
    tl.from(image.current, {
      duration: 1.4,
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });

    tl.fromTo(
      text.current,
      {
        opacity: 0,
      },
      {
        duration: 1,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: -0.5,
      }
    );

    // Kill the timeline to prevent memory leaks
    return () => {
      tl.kill();
    };
  }, [name, country, img]);

  if (!name || !country || !img) {
    // If data is not available yet, return null or a loading indicator
    return <div>Loading... </div>;
  }

  const imagePath = `/img/${img}`;

  return (
    <div className={`${styles['image-reveal']}`}>
      {console.log(name, img, country)}
      <h2 ref={text}>{name}</h2>
      <div className={`${styles['container']}`} ref={container}>
        <div className={`${styles['overlay']}`} ref={overlayRef}>
          <p>{country}</p>
        </div>
        <div className={`${styles['image-container']}`}>
          {img && (
            <Image
              src={imagePath}
              alt={name}
              width={600}
              height={500}
              priority
            />
          )}
        </div>
      </div>
      <ScrollIndicator />
    </div>
  );
};

export default ImageReveal;
