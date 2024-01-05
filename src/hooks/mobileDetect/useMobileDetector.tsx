import { useEffect, useState } from 'react';

const useMobileDetector = () => {
  const [isiOS, setisiOS] = useState(false);
  const [isAndroid, setisAndroid] = useState(false);

  useEffect(() => {
    setisiOS(/iPhone|iPad|iPod/i.test(navigator.userAgent));
    setisAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  return { isiOS, isAndroid };
};

export default useMobileDetector;
