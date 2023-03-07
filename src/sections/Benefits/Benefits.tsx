import BenefitsTextBox from "./BenefitsTextBox";
import { FeatureBox } from "@/components";

import data from "@/data/benefitsData.json";

type Props = {};

const renderedFeature = data.boxes.map((feature) => {
  return <FeatureBox key={feature.id} data={feature} />;
});

function Benefits({}: Props) {
  return (
    <div className="benefits">
      <BenefitsTextBox />

      <div>
        <div className="benefits__features">{renderedFeature}</div>
      </div>
    </div>
  );
}

export default Benefits;
