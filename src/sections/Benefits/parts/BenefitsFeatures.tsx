import { FeatureBox } from "@/components";

function BenefitsFeatures({ data }: BenefitsData) {
  const renderedFeature = data.boxes.map((feature) => {
    return <FeatureBox key={feature.id} data={feature} />;
  });

  return <div className="benefits__features">{renderedFeature}</div>;
}

export default BenefitsFeatures;
