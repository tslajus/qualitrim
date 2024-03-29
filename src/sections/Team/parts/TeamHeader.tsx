import { TextBlock } from "@/layouts";
import { Heading, Paragraph } from "@/components";

function TeamHeader({ data }: TeamData) {
  return (
    <TextBlock fullWidth={false}>
      <Heading
        text={data.heading}
        h="h2"
        color="accent"
        firstWords={1}
        color2="primary"
      />

      <Paragraph color="light">{data.paragraph}</Paragraph>
    </TextBlock>
  );
}

export default TeamHeader;
