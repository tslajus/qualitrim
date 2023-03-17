import { useState, useEffect } from "react";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { FeatureBox, ArrowIcon } from "@/components";
import { scrollToId } from "@/utils";

function BenefitsFeatures({ data }: BenefitsData) {
  const [benefitNumber, setBenefitNumber] = useState(1);
  const benefit = data.boxes[benefitNumber - 1];
  const desktopSmall = portSize.desktopSmall;
  const isSmallScreen = useMediaQuery(desktopSmall);

  const handleBenefitNumber = (direction: string | undefined) => {
    direction === "back"
      ? setBenefitNumber(
          benefitNumber === 1 ? data.boxes.length : benefitNumber - 1
        )
      : setBenefitNumber(
          data.boxes.length === benefitNumber ? 1 : benefitNumber + 1
        );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleBenefitNumber("next");
    }, 8000);

    return () => clearInterval(intervalId);
  }, [benefitNumber]);

  const forSmallScreen = (
    <FeatureBox
      key={benefit.id}
      data={benefit}
      action={() => scrollToId(benefit.scrollTo)}
    >
      <div className="benefits__features-arrows">
        <ArrowIcon
          direction="left"
          label="benefit"
          onClick={() => handleBenefitNumber("back")}
          small
        />
        <ArrowIcon
          direction="right"
          label="benefit"
          onClick={() => handleBenefitNumber("next")}
          small
        />
      </div>
    </FeatureBox>
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

  return <div className="benefits__features">{rendered}</div>;
}

export default BenefitsFeatures;
