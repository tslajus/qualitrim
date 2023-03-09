import data from "@/data/teamData.json";
import { splitHeading } from "@/utils";
import { TextBlock } from "@/layouts";

type Props = {};

function TeamTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 1);

  return (
    <TextBlock fullWidth={false}>
      <h2 className="heading color--primary">
        <span className="heading color--tertiary">{headingStart} </span>
        {headingEnd}
      </h2>
      <p className="paragraph color--light">{data.paragraph}</p>
    </TextBlock>
  );
}

export default TeamTextBox;
