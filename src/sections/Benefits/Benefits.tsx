import data from "@/data/benefitsData.json";
import BenefitsHeader from "./parts/BenefitsHeader";
import BenefitsFeatures from "./parts/BenefitsFeatures";
import { LazyLoading } from "@/components";

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <BenefitsHeader data={data} />
      <LazyLoading>
        <BenefitsFeatures data={data} />
      </LazyLoading>
    </section>
  );
}

export default Benefits;
