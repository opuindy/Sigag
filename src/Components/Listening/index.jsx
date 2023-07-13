import ListenSvg from '../Svgs/ListenSvg';
import styles from './listening.module.scss';
import { motion } from 'framer-motion';
import { UseWindowResize } from '../../hooks/UseWindowResize';

const Listening = (props) => {
  const windowSize = UseWindowResize();

  const reSize = () => {
    if (windowSize.width < 480 && Boolean(props.smallFont)) {
      return 'smallFont';
    }

    return '';
  };

  return (
    <div className={styles.listen}>
      <div className={styles.listen__svgContainer}>
        <ListenSvg color={props.color} />
        <span
          className={`${styles.listen__span} ${
            props.increaseFontSize ? styles.listen__increaseSpanFontSize : ''
          }`}
          style={{ color: props.color }}
        >
          &rarr;
        </span>
      </div>
      <a href={props.link} target='_blank' rel='noopener noreferrer'>
        <motion.div
          className={styles.listen__textContainer}
          whileTap={{ scale: 0.9 }}
        >
          <p
            className={`${styles.listen__text} ${styles.listen__text_1} ${
              props.increaseFontSize ? styles.listen__increaseFontSize : ''
            } ${styles[reSize(props.smallFont)]}`}
            style={{ color: props.color }}
          >
            Play/Download
          </p>
          <p
            className={`${styles.listen__text} ${styles.listen__text_1} ${
              props.increaseFontSize ? styles.listen__increaseFontSize : ''
            } ${styles[reSize(props.smallFont)]}`}
            style={{ color: props.color }}
          >
            Play/Download
          </p>
        </motion.div>
      </a>
    </div>
  );
};

export default Listening;
