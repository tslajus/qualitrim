import data from "@/data/teamData.json";
import TeamTextBox from "./TeamTextBox";
import TeamMemberBox from "./TeamMemberBox";

type Props = {};

const renderedMembers = data.members.map((member) => {
  return (
    <div key={member.id}>
      <TeamMemberBox data={member} />
    </div>
  );
});

function Team({}: Props) {
  return (
    <div className="team">
      <TeamTextBox />
      <div className="team__members">{renderedMembers}</div>
    </div>
  );
}

export default Team;
