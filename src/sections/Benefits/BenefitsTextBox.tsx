import data from "@/data/benefitsData.json";
import { splitHeading } from "@/utils";
import { TextBlock } from "@/layouts";
import { Paragraph } from "@/components";

type Props = {};

function BenefitsTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 1);

  return (
    <TextBlock fullWidth={false}>
      <h2 className="heading color--dark">
        <span className="heading color--secondary">{headingStart} </span>
        {headingEnd}
      </h2>
      <Paragraph color="dark">{data.paragraph}</Paragraph>
    </TextBlock>
  );
}

export default BenefitsTextBox;
