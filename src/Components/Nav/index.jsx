import { useState } from 'react';
import styles from './navStyles.module.scss';
import SocialIcons from '../SocialIcons';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { links } from '../../Utilities/Links';
import { WHITELOGO, BLACKLOGO } from '../../assets/images';
import { UseWindowResize } from '../../hooks/UseWindowResize';
import { useScrollDistance } from '../../hooks/UseScrollDistance';

const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  const windowSize = UseWindowResize();
  const scrollDistance = useScrollDistance();

  const handleCloseSidebar = () => {
    setOpen(false);
  };
  const activeSection = () => {
    if (scrollDistance <= windowSize.height) {
      return 'slider';
    }

    if (
      scrollDistance >= windowSize.height &&
      scrollDistance < windowSize.height * 2
    ) {
      return 'music';
    }
    if (
      scrollDistance >= windowSize.height * 2 &&
      scrollDistance < windowSize.height * 3
    ) {
      return 'video';
    }

    return 'subscribe';
  };

  const color = () => {
    if (activeSection() === 'music') {
      return '#000000';
    }

    if (activeSection() === 'subscribe') {
      return '#000000';
    }
    return '#ffffff';
  };

  return (
    <header
      className={`${styles.header}   ${
        (windowSize.width > 767 && scrollDistance > 600) ||
        (windowSize.width < 787 && scrollDistance > 180)
          ? styles.changeBackground
          : ''
      }`}
    >
      <div className={`${styles.header__navContainer}`}>
        <div className={styles.header__hamburgerLogoContainer}>
          <div className={styles.header__hamburger}>
            <Hamburger
              color={
                (windowSize.width > 767 && scrollDistance > 600) ||
                (windowSize.width < 787 && scrollDistance > 180)
                  ? '#000000'
                  : '#ffffff'
              }
              distance='sm'
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
          <motion.div
            className={styles.header__logoContainer}
            whileTap={{ scale: 0.9 }}
          >
            <NavLink to='/'>
              <img
                src={
                  (windowSize.width > 767 && scrollDistance > 600) ||
                  (windowSize.width < 787 && scrollDistance > 180)
                    ? BLACKLOGO
                    : WHITELOGO
                }
                alt='logo'
              />
            </NavLink>
          </motion.div>
        </div>
        <nav
          className={`${styles.header__nav} ${
            isOpen ? styles.header__isOpen : ''
          }`}
        >
          <div className={styles.header__LinksContainer}>
            <ul className={styles.header__LinkItems}>
              {links &&
                links.map((linkItem, index) => {
                  const { link, name, id, rel, target } = linkItem;
                  return (
                    <li
                      key={id}
                      className={`${styles.header__LinkList} ${
                        isOpen ? styles.header__LinkFadeIn : ''
                      } ${
                        windowSize.width > 767 && scrollDistance > 600
                          ? styles.changeLinksColor
                          : ''
                      }`}
                      style={{
                        transitionDelay: isOpen
                          ? `${0.3 * (index + 1)}s`
                          : '0s', // Add transition delay
                      }}
                      onClick={handleCloseSidebar}
                    >
                      <NavLink
                        to={link}
                        className={styles.header__Link}
                        target={target ?? ''}
                        rel={rel ?? ''}
                      >
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div
            className={`${styles.header__navSocialIconsContainer} ${
              isOpen ? styles.header__animateNav : ''
            }`}
          >
            <SocialIcons />
          </div>
        </nav>
      </div>
      <div className={styles.header__socialIconsContainer}>
        <SocialIcons color={color()} />
      </div>
    </header>
  );
};

export default Nav;
