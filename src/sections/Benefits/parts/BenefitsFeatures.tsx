import { useState, useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { useInterval } from "@/hooks";
import { scrollToId, swipeHandler } from "@/utils";
import { FeatureBox, ArrowIcon } from "@/components";

function BenefitsFeatures({ data }: BenefitsData) {
  const [benefitNumber, setBenefitNumber] = useState(1);
  const [clicked, setClicked] = useState(false);
  const benefit = data.boxes[benefitNumber - 1];

  const desktopSmall = portSize.desktopSmall;
  const isSmallScreen = useMediaQuery(desktopSmall);

  const { fadeInReverse } = useContext(PageContext);

  const handleClick = (direction: string | undefined) => {
    direction === "back"
      ? setBenefitNumber(
          benefitNumber === 1 ? data.boxes.length : benefitNumber - 1
        )
      : setBenefitNumber(
          data.boxes.length === benefitNumber ? 1 : benefitNumber + 1
        );

    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  useInterval(
    () => {
      handleClick("next");
    },
    clicked ? null : 6000
  );

  const { swipeLeft, swipeRight } = swipeHandler({
    onSwipeLeft: () => handleClick("back"),
    onSwipeRight: () => handleClick("next"),
  });

  const forSmallScreen = (
    <AnimatePresence mode="wait">
      <FeatureBox
        key={benefit.id}
        data={benefit}
        action={() => scrollToId(benefit.scrollTo)}
      >
        <div className="benefits__features-arrows">
          <ArrowIcon
            direction="left"
            label="benefit"
            onClick={() => handleClick("back")}
            small
          />
          <ArrowIcon
            direction="right"
            label="benefit"
            onClick={() => handleClick("next")}
            small
          />
        </div>
      </FeatureBox>
    </AnimatePresence>
  );

  const forBigScreen = data.boxes.map((feature) => {
    return (
      <FeatureBox
        key={feature.id}
        data={feature}
        action={() => scrollToId(feature.scrollTo)}
      />
    );
  });

  const rendered = isSmallScreen ? forSmallScreen : forBigScreen;

  return (
    <motion.div
      {...fadeInReverse}
      className="benefits__features"
      onTouchStart={swipeLeft}
      onTouchEnd={swipeRight}
    >
      {rendered}
    </motion.div>
  );
}

export default BenefitsFeatures;
