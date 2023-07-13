import { ERROR } from '../../assets/images';
import styles from './errorStyles.module.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <section className={styles.error}>
      <div className={styles.error__imageContainer}>
        <img src={ERROR} alt='error-image' className={styles.error__image} />
      </div>
      <h3 className={styles.error__errorText}>Error: page not found.</h3>
      <motion.button
        onClick={handleNavigate}
        className={styles.error__backHome}
        whileTap={{ scale: 0.9 }}
      >
        Back Home
      </motion.button>
    </section>
  );
};

export default ErrorPage;
