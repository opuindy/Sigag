import { useState, useEffect } from 'react';
import styles from './generalLayoutStyles.module.scss';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
import ScrollToTop from '../../hooks/ScrollToTop';
import { BallTriangle } from 'react-loader-spinner';

const GeneralLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(delay);
  }, []);

  return isLoading ? (
    <div className={styles.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color='#4fa94d'
        ariaLabel='ball-triangle-loading'
        wrapperClass={{}}
        wrapperStyle=''
        visible={true}
      />
    </div>
  ) : (
    <>
      <Nav activeSection={activeSection} setActiveSection={setActiveSection} />
      <ScrollToTop />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default GeneralLayout;
