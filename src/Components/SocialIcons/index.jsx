import styles from './socialIconStyles.module.scss';
import AppleIcon from '../Svgs/AppleSvg';
import SpotifySvg from '../Svgs/SpotifySvg';
import InstagramSvg from '../Svgs/InstagramSvg';
import FacebookSvg from '../Svgs/FacebookSvg';
import TwitterSvg from '../Svgs/TwitterSvg';
import YoutubeSvg from '../Svgs/YoutubeSvg';
import { motion } from 'framer-motion';

const SocialIcons = ({ color = '#ffffff', row }) => {
  return (
    <div
      className={`${styles.socialIconsContainer} ${row ? styles.rowOnly : ''}`}
    >
      <motion.a
        href='https://music.apple.com/ng/artist/sigag-lauren/1443085885'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <AppleIcon color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <AppleIcon color={color} />
          </div>
        </div>
      </motion.a>

      <motion.a
        href='https://open.spotify.com/artist/0CYHsfVyqOajHaAn2uqZzA?si=ZTkRADl0T-O3-g1C--wLWQ&nd=1'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <SpotifySvg color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <SpotifySvg color={color} />
          </div>
        </div>
      </motion.a>

      <motion.a
        href='https://www.instagram.com/sigaglauren/'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        {' '}
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <InstagramSvg color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <InstagramSvg color={color} />
          </div>
        </div>
      </motion.a>

      <motion.a
        href='https://www.facebook.com/SigagLauren'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        {' '}
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <FacebookSvg color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <FacebookSvg color={color} />
          </div>
        </div>
      </motion.a>

      <motion.a
        href='https://twitter.com/SigagLauren'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        {' '}
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <TwitterSvg color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <TwitterSvg color={color} />
          </div>
        </div>
      </motion.a>

      <motion.a
        href='https://www.youtube.com/channel/UCZXjTj23HMox1CUZsppPpUw'
        target='_blank'
        rel='noopener noreferrer'
        whileTap={{ scale: 0.85 }}
      >
        <div
          className={`${styles.socialIconsContainer__socialsContainer} ${
            row ? styles.socialIconsContainer__noRotate : ''
          }`}
        >
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_1}`}
          >
            <YoutubeSvg color={color} />
          </div>
          <div
            className={`${styles.socialIconsContainer__socialIcon} ${styles.socialIconsContainer__socialIcon_2}`}
          >
            <YoutubeSvg color={color} />
          </div>
        </div>
      </motion.a>
    </div>
  );
};

export default SocialIcons;
