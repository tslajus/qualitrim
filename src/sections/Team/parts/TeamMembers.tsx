import MemberBox from "./MemberBox";

function TeamMembers({ data }: TeamData) {
  const renderedMembers = data.members.map((member) => {
    return (
      <div key={member.id}>
        <MemberBox data={member} />
      </div>
    );
  });

  return <div className="team__members">{renderedMembers}</div>;
}

export default TeamMembers;
