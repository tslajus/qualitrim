import { FeatureBox } from "@/components";
import { scrollToId } from "@/utils";

function BenefitsFeatures({ data }: BenefitsData) {
  const renderedFeature = data.boxes.map((feature) => {
    return (
      <FeatureBox
        key={feature.id}
        data={feature}
        action={() => scrollToId(feature.scrollTo)}
      />
    );
  });

  return <div className="benefits__features">{renderedFeature}</div>;
}

export default BenefitsFeatures;
