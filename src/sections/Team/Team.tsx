import data from "@/data/teamData.json";
import TeamTextBox from "./parts/TeamTextBox";
import TeamMembers from "./parts/TeamMembers";

function Team() {
  return (
    <div id="team" className="team">
      <TeamTextBox data={data} />
      <TeamMembers data={data} />
    </div>
  );
}

export default Team;
