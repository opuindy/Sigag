import { WHITELOGO } from '../../assets/images';
import SocialIcons from '../SocialIcons';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './footerStyles.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <motion.div
        className={styles.footer__logoContainer}
        whileTap={{ scale: 0.9 }}
      >
        <NavLink>
          <img src={WHITELOGO} alt='footerLogo' />
        </NavLink>
      </motion.div>
      <div className={styles.footer__copyright}>
        <p className={styles.footer__copyrightText}>
          &copy; {currentYear} sigag lauren{' '}
        </p>
      </div>
      <div className={styles.footer__socialsContainer}>
        <SocialIcons row={true} />
      </div>
    </div>
  );
};

export default Footer;
