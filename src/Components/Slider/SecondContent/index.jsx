import styles from './secondContentStyles.module.scss';

const SecondContent = () => {
  return (
    <div className={styles.content}>
      <h2 className={styles.content__TitleText}>
        Total Rave Trilogy Continues
      </h2>
      <p className={styles.content__sliderText}>
        Brace Yourself for the Most Epic Party Yet!
      </p>
    </div>
  );
};

export default SecondContent;
