import NewsLetter from '../NewsLetter';
import styles from './susbscribe.Styles.module.scss';

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <NewsLetter />
      <h2 className={styles.subscribe__titleText}>NEWSLETTER</h2>
    </section>
  );
};

export default Subscribe;
