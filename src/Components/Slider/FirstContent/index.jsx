import styles from './firstContentStyles.module.scss';
import Listening from '../../Listening';

const FirstContent = () => {
  return (
    <div className={styles.content}>
      <Listening
        link='https://fanlink.to/jbDV'
        color='#ffffff'
        increaseFontSize={true}
      />
    </div>
  );
};

export default FirstContent;
