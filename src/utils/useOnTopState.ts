import { useState, useEffect } from "react";

const handleScroll = (setIsOnTop: (value: boolean) => void) => () => {
  if (window.scrollY === 0) {
    setIsOnTop(true);
  } else {
    setIsOnTop(false);
  }
};

const useOnTopState = () => {
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollHandler = handleScroll(setIsOnTop);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return isOnTop;
};

export default useOnTopState;
