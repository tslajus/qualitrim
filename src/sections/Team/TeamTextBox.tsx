import data from "@/data/teamData.json";
import { splitHeading } from "@/utils";
import { TextBlock } from "@/layouts";
import { Paragraph } from "@/components";

type Props = {};

function TeamTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 1);

  return (
    <TextBlock fullWidth={false}>
      <h2 className="heading color--primary">
        <span className="heading color--tertiary">{headingStart} </span>
        {headingEnd}
      </h2>
      <Paragraph color="light">{data.paragraph}</Paragraph>
    </TextBlock>
  );
}

export default TeamTextBox;
