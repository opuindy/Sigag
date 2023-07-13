import { BANNER5 } from '../../assets/images';
import AliceCarousel from 'react-alice-carousel';
import styles from './musicStyles.module.scss';
import Listening from '../Listening';
import { musicList } from '../../Utilities/musicList';
import { motion } from 'framer-motion';

const Music = () => {
  const responsive = {
    0: {
      items: 2,
    },
    768: {
      items: 2,
    },
    920: { items: 3 },
    1024: {
      items: 3,
    },
  };

  return (
    <section className={styles.music}>
      <div className={styles.music__container}>
        <AliceCarousel
          duration={1000}
          autoPlay={true}
          startIndex={0}
          mouseDragEnabled={true}
          keyboardNavigation={true}
          responsive={responsive}
          mouseTracking
          animationEasingFunction='ease'
          animationType='linear'
          autoPlayInterval={2500}
          autoPlayDirection='ltr'
          autoPlayActionDisabled={true}
          disableButtonsControls={true}
          disableDotsControls={false}
          freezable={true}
          infinite={true}
        >
          {musicList &&
            musicList.map((list) => {
              const { src, title, id, image } = list;
              return (
                <div className={styles.music__ItemContainer} key={id}>
                  <div className={styles.music__musicImageContainer}>
                    <p className={styles.music__musicTitle}>
                      {title ? title : ''}
                    </p>
                    <img
                      src={image ? image : BANNER5}
                      alt='music-image'
                      className={styles.music__musicImage}
                    />
                  </div>
                  <div className={styles.music__linkContainer}>
                    <Listening link={src} smallFont={true} />
                  </div>
                </div>
              );
            })}
        </AliceCarousel>
      </div>
      <h2 className={styles.music__musicText}>MUSIC</h2>
      <a
        href='https://fanlink.to/jdEN'
        target='_blank'
        rel='noopener noreferrer'
      >
        <motion.p className={styles.music__viewText} whileTap={{ scale: 0.9 }}>
          View All <span>&rarr;</span>
        </motion.p>
      </a>
    </section>
  );
};

export default Music;
