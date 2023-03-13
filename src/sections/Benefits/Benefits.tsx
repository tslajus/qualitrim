import data from "@/data/benefitsData.json";
import BenefitsHeader from "./parts/BenefitsHeader";
import BenefitsFeatures from "./parts/BenefitsFeatures";

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <BenefitsHeader data={data} />
      <BenefitsFeatures data={data} />
    </section>
  );
}

export default Benefits;
