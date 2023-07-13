import { useEffect, useState } from 'react';

export const useScrollDistance = () => {
  const [scrollDistance, setScrollDistance] = useState(0);

  const handleScroll = () => {
    setScrollDistance(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDistance;
};

// export default useScrollDistance;
