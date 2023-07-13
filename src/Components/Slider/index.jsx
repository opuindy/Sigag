import { useRef } from 'react';
import styles from './sliderStyles.module.scss';
import AliceCarousel from 'react-alice-carousel';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import { UseWindowResize } from '../../hooks/UseWindowResize';
import { sliderList } from '../../Utilities/sliderList';
import ChevronArrow from '../Svgs/ChevronArrow';

const Slider = () => {
  const carousel = useRef(null);
  const windowSize = UseWindowResize();

  return (
    <section className={styles.slider}>
      <AliceCarousel
        ref={carousel}
        duration={500}
        autoPlay={true}
        startIndex={0}
        mouseDragEnabled={true}
        disableDotsControls={true}
        keyboardNavigation={true}
        mouseTracking
        animationType='fadeout'
        autoPlayInterval={3000}
        autoPlayDirection='ltr'
        autoPlayActionDisabled={true}
        disableButtonsControls={true}
        freezable={false}
        infinite={true}
      >
        {sliderList.map((list) => {
          const { id, img1, img2 } = list;

          return (
            <article className={styles.slider__slideItems} key={id}>
              <img
                src={img2 && windowSize.width < 920 ? img2 : img1}
                alt='image'
                className={styles.slider__sliderImage}
              />
              <div
                className={`${
                  styles.slider__sliderContent
                } sliderActiveContent ${
                  id === 1 ? 'sliderActiveContent_center' : ''
                }`}
              >
                {id === 1 && <FirstContent />}
                {id === 2 && <SecondContent />}
                {id === 3 && <ThirdContent />}
              </div>
            </article>
          );
        })}
      </AliceCarousel>

      <div
        className={styles.slider__leftArrow}
        onClick={(e) => carousel?.current?.slidePrev(e)}
      >
        <ChevronArrow />
      </div>
      <div
        className={styles.slider__rightArrow}
        onClick={(e) => carousel?.current?.slideNext(e)}
      >
        <ChevronArrow />
      </div>
    </section>
  );
};

export default Slider;
