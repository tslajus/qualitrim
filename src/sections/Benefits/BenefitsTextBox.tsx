import data from "@/data/benefitsData.json";
import { splitHeading } from "@/utils";

type Props = {};

function BenefitsTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 1);

  return (
    <>
      <div className="benefits__text-box">
        <h2 className="heading color--dark">
          <span className="heading color--secondary">{headingStart} </span>
          {headingEnd}
        </h2>
        <p className="paragraph color--dark">{data.paragraph}</p>
      </div>
    </>
  );
}

export default BenefitsTextBox;
