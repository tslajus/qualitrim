function getAnimationProps(
  x: number = 0,
  duration: number = 0.5,
  delay: number = 0
) {
  const animationVariants = {
    hidden: { opacity: 0, x: x },
    visible: { opacity: 1, x: 0 },
  };

  const animationProps = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { duration: duration, delay: delay },
    variants: animationVariants,
  };

  return animationProps;
}

export default getAnimationProps;
