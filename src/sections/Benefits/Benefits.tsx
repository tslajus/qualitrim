import data from "@/data/benefitsData.json";
import BenefitsHeader from "./parts/BenefitsHeader";
import BenefitsFeatures from "./parts/BenefitsFeatures";

function Benefits() {
  return (
    <div className="benefits">
      <BenefitsHeader data={data} />
      <BenefitsFeatures data={data} />
    </div>
  );
}

export default Benefits;
