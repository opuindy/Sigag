import { TOTALRAVE } from '../../../assets/images';
import styles from './thirdContentStyles.module.scss';

const ThirdContent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.slider__sliderImageContainer}>
        <img
          src={TOTALRAVE}
          alt='total-rave-logo'
          className={styles.content__sliderImage}
        />
      </div>
      <div className={styles.content__textContainer}>
        <p className={styles.content__slidertext2}>
          Prepare for the Ultimate Spectacle!
        </p>
      </div>
    </div>
  );
};

export default ThirdContent;
