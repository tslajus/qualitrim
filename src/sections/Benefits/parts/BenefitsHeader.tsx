import { TextBlock } from "@/layouts";
import { Heading, Paragraph } from "@/components";

function BenefitsHeader({ data }: BenefitsData) {
  return (
    <TextBlock fullWidth={false}>
      <Heading
        text={data.heading}
        h="h2"
        color="dark"
        firstWords={1}
        color2="secondary"
      />
      <Paragraph color="dark">{data.paragraph}</Paragraph>
    </TextBlock>
  );
}

export default BenefitsHeader;
