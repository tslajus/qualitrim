import data from "@/data/benefitsData.json";
import BenefitsTextBox from "./BenefitsTextBox";
import { FeatureBox } from "@/components";

const renderedFeature = data.boxes.map((feature) => {
  return <FeatureBox key={feature.id} data={feature} />;
});

function Benefits() {
  return (
    <div className="benefits">
      <BenefitsTextBox />
      <div className="benefits__features">{renderedFeature}</div>
    </div>
  );
}

export default Benefits;
