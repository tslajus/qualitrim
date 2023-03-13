import { makeUpperCase } from "@/utils";
import { Paragraph } from "@/components";

type Props = {
  data: {
    img: string;
    name: string;
    text: string;
  };
};

function TeamMemberBox({ data }: Props) {
  return (
    <article className="team__members-profile">
      <img
        src={`src/assets/team/${data.img}`}
        alt={`image of our team member ${data.name}`}
      />
      <span
        className="paragraph color--primary"
        aria-label={`team member ${data.name}`}
      >
        - {makeUpperCase(data.name)} -
      </span>
      <div className="team__members-info">
        <Paragraph color="light">{data.text}</Paragraph>
      </div>
    </article>
  );
}

export default TeamMemberBox;
