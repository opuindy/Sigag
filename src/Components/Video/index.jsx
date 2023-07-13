import { useState } from 'react';
import styles from './videoStyles.module.scss';
import useIntersectionObserver from '../../hooks/UserIntersectionObserver';
import { MUSICPHOTO, PLAYICON } from '../../assets/images';
import { motion } from 'framer-motion';

const Video = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver(0.7);
  const [playSong, setPlaySong] = useState(false);

  const handlePlaySong = () => {
    setPlaySong(!playSong);
  };

  return (
    <section className={styles.video}>
      <div className={styles.video__container} ref={containerRef}>
        <div
          className={`${styles.video__videoContainer} ${
            isContainerVisible ? styles.video__animate : ''
          }`}
        >
          <div className={styles.video__photoContainer}>
            {!playSong ? (
              <>
                {' '}
                <img
                  src={MUSICPHOTO}
                  alt='music-pic'
                  className={styles.video__photoContainerImage}
                />
                <div
                  className={styles.video__playIconContainer}
                  onClick={handlePlaySong}
                >
                  <img
                    src={PLAYICON}
                    alt='playIcon'
                    className={styles.video__playIconImage}
                  />
                </div>
              </>
            ) : (
              <>
                <iframe
                  width='100%'
                  height='100%'
                  src='https://www.youtube.com/embed/kWOPzelnZDU'
                  title='Sigag Lauren - We&#39;ll Dance Again (feat. Lex Ash) [Official Music Video]'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  style={{ border: 0 }}
                  allowfullscreen
                ></iframe>
              </>
            )}
          </div>
        </div>
      </div>

      <h2 className={styles.video__videoText}>VIDEOS</h2>
      <a
        href='http://www.youtube.com/@SigagLauren.'
        target='_blank'
        rel='noopener noreferrer'
      >
        <motion.div
          className={`${styles.video__viewMoreTextContainer} ${
            isContainerVisible ? styles.video__showViewMoreTextContainer : ''
          }`}
          whileTap={{ scale: 0.9 }}
        >
          <p className={styles.video__viewMoreText}>
            View More <span>&rarr;</span>
          </p>
        </motion.div>
      </a>
    </section>
  );
};

export default Video;
