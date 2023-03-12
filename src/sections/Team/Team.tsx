import data from "@/data/teamData.json";
import TeamTextBox from "./parts/TeamTextBox";
import TeamMembers from "./parts/TeamMembers";

function Team() {
  return (
    <div className="team">
      <TeamTextBox data={data} />
      <TeamMembers data={data} />
    </div>
  );
}

export default Team;
