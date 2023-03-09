import { makeUpperCase } from "@/utils";

type Props = {
  data: {
    img: string;
    name: string;
    text: string;
  };
};

function TeamMemberBox({ data }: Props) {
  return (
    <div className="team__members-profile">
      <img
        src={`src/assets/team/${data.img}`}
        alt={`image of our team member ${data.name}`}
      />
      <span className="paragraph color--primary">
        - {makeUpperCase(data.name)} -
      </span>
      <div className="team__members-info">{data.text}</div>
    </div>
  );
}

export default TeamMemberBox;
