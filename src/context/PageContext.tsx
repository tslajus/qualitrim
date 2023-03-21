import React, { createContext, useState } from "react";
import { getAnimationProps } from "@/utils";
import { AnimationProps } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

type PageContextType = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;

  fadeIn: AnimationProps;
  fadeInFaster: AnimationProps;
  fadeInSlower: AnimationProps;
  fadeInReverseFaster: AnimationProps;
  fadeInReverse: AnimationProps;
  fadeInStatic: AnimationProps;
  fadeInStaticLong: AnimationProps;
  fadeInStaticFaster: AnimationProps;
  slideShowReverse: AnimationProps;
  menuOpen: AnimationProps;
  menuClosed: AnimationProps;
  exitAnimation: {
    exit: { opacity: number; transition: { duration: number } };
  };
};

const PageContext = createContext<PageContextType>({
  selectedSection: "home",
  setSelectedSection: () => {},

  fadeIn: {},
  fadeInFaster: {},
  fadeInSlower: {},
  fadeInReverse: {},
  fadeInReverseFaster: {},
  fadeInStatic: {},
  fadeInStaticLong: {},
  fadeInStaticFaster: {},
  menuOpen: {},
  menuClosed: {},
  slideShowReverse: {},

  exitAnimation: { exit: { opacity: 0, transition: { duration: 0.4 } } },
});

const PageContextProvider = ({ children }: Props) => {
  const [selectedSection, setSelectedSection] = useState("home");

  const fadeIn = getAnimationProps(-10, 1.2, 0.2);
  const fadeInFaster = getAnimationProps(-20, 1);
  const fadeInSlower = getAnimationProps(-10, 1.4, 0.4);
  const fadeInReverseFaster = getAnimationProps(20, 1.4, 0.3);
  const fadeInReverse = getAnimationProps(3, 1);
  const fadeInStatic = getAnimationProps(0, 1.8, 0.4);
  const fadeInStaticLong = getAnimationProps(0, 3, 0.8);
  const fadeInStaticFaster = getAnimationProps(0, 1.8, 0.2);
  const slideShowReverse = getAnimationProps(3, 1, 0, 0, true);

  const menuOpen = getAnimationProps(400, 0.5, 0, 1, true);
  const menuClosed = {
    exit: {
      opacity: 0,
      x: 300,
      transition: {
        duration: 0.4,
      },
    },
  };

  const exitAnimation = { exit: { opacity: 0, transition: { duration: 0.4 } } };

  const sharedValues = {
    selectedSection,
    setSelectedSection,

    fadeIn,
    fadeInFaster,
    fadeInSlower,
    fadeInReverse,
    fadeInReverseFaster,
    fadeInStatic,
    fadeInStaticLong,
    fadeInStaticFaster,
    slideShowReverse,

    menuOpen,
    menuClosed,

    exitAnimation,
  };

  return (
    <PageContext.Provider value={sharedValues}>{children}</PageContext.Provider>
  );
};

export { PageContextProvider, PageContext };
