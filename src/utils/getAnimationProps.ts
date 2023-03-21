function getAnimationProps(
  x: number = 0,
  duration: number = 0.5,
  delay: number = 0,
  opacity: number = 0,
  offScreen: boolean = false
) {
  const animationVariants = {
    hidden: { opacity: opacity, x: x },
    visible: { opacity: 1, x: 0 },
  };

  const animationProps: any = {
    initial: "hidden",
    transition: { duration: duration, delay: delay },
    variants: animationVariants,
  };

  if (offScreen) {
    animationProps.animate = "visible";
  } else {
    animationProps.whileInView = "visible";
    animationProps.viewport = { once: true, amount: 0.5 };
  }

  return animationProps;
}

export default getAnimationProps;
