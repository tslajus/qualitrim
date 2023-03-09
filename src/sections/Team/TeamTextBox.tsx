import data from "@/data/teamData.json";
import { splitHeading } from "@/utils";

type Props = {};

function TeamTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 1);

  return (
    <>
      <div className="team__text-box">
        <h2 className="heading color--primary">
          <span className="heading color--tertiary">{headingStart} </span>
          {headingEnd}
        </h2>
        <p className="paragraph color--light">{data.paragraph}</p>
      </div>
    </>
  );
}

export default TeamTextBox;
