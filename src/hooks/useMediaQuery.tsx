import { useEffect, useState } from "react";

type portSize = {
  mobile: string;
  tabPort: string;
  tabLand: string;
  desktopSmall: string;
  desktopBig: string;
};

const portSize = {
  mobile: "(max-width: 350px)",
  tabPort: "(max-width: 767px)",
  tabLand: "(max-width: 1023px)",
  desktopSmall: "(max-width: 1279px)",
  desktopBig: "(max-width: 1439px)",
};

function useMediaQuery(query: string): boolean {
  const getMatches = (query: string): boolean => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  function handleChange() {
    setMatches(getMatches(query));
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener("change", handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener("change", handleChange);
      }
    };
  }, [query]);

  return matches;
}

export { portSize };
export default useMediaQuery;
