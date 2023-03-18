import MemberBox from "./MemberBox";

function TeamMembers({ data }: TeamData) {
  const renderedMembers = data.members.map((member) => {
    return <MemberBox data={member} />;
  });

  return <div className="team__members">{renderedMembers}</div>;
}

export default TeamMembers;
