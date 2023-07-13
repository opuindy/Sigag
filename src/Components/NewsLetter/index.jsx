import { useState } from 'react';
import styles from './newLetterStyles.module.scss';
import { addFormData } from '../../Api/firebase';
import { ColorRing } from 'react-loader-spinner';
import {
  validateForm,
  validateEmailField,
  validateField,
} from '../../Utilities/validateInputs';
import { motion } from 'framer-motion';
import { ERRORICON, SUCCESSICON } from '../../assets/images';

const NewsLetter = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [responseMessage, setResponseMessage] = useState({
    message: '',
    success: null,
  });
  const [showResponseMsg, setShowResponseMsg] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    if (name === 'email') {
      validateEmailField(formData, errors, setErrors);
    } else {
      validateField(name, formData, errors, setErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      if (validateForm(formData, setErrors)) {
        await addFormData(formData);
        setFormData({ ...formData, name: '', email: '' });
        setResponseMessage({ message: 'sent successfully', success: true });
        setShowResponseMsg(true);
      } else {
        throw new Error('invalid details');
      }
    } catch (error) {
      setResponseMessage({ message: `${error.message}`, success: false });
      setShowResponseMsg(true);
    } finally {
      setIsloading(false);
      setTimeout(() => {
        setShowResponseMsg(false);
      }, 3000);
    }
  };

  return (
    <div className={styles.newsLetter}>
      <form
        className={styles.newsLetter__form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>
          Discover the world of music like never before! Subscribe to our
          newsletter and be the first to know about electrifying concerts,
          exclusive releases, and backstage secrets. Embark on a musical journey
          and explore our store for incredible merchandise that amplifies your
          love for music!
        </p>

        {showResponseMsg && (
          <p
            className={`${styles.newsLetter__responseMessage} ${
              responseMessage.success ? styles.success : styles.error
            }`}
          >
            <span className={styles.newsLetter__responseIcon}>
              <img
                src={responseMessage.success ? SUCCESSICON : ERRORICON}
                alt={responseMessage.success ? 'succcess-icon' : 'error-icon'}
              />
            </span>
            {responseMessage.message}
          </p>
        )}

        <div className={styles.newsLetter__formGroup}>
          <label htmlFor='name'>
            Name{' '}
            {errors.name && (
              <span className={styles.newsLetter__errorMessage}>
                {errors.name}
              </span>
            )}
          </label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.newsLetter__formGroup}>
          <label htmlFor='email'>
            Email{' '}
            {errors.email && (
              <span className={styles.newsLetter__errorMessage}>
                {errors.email}
              </span>
            )}
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <motion.button
          className={styles.newsLetter__button}
          onClick={handleSubmit}
          whileTap={{ scale: 0.96 }}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className={styles.newsLetter__loadingContainer}>
              <ColorRing
                visible={true}
                height='80'
                width='80'
                ariaLabel='blocks-loading'
                wrapperStyle={{}}
                wrapperClass='blocks-wrapper'
                colors={['#a6d49f', '#9ac2a6', '#87b6a7', '#76aba8', '#6b9ea7']}
              />
            </div>
          ) : (
            'subscribe'
          )}
        </motion.button>
      </form>
    </div>
  );
};

export default NewsLetter;
