import data from "@/data/teamData.json";
import TeamHeader from "./parts/TeamHeader";
import TeamMembers from "./parts/TeamMembers";

function Team() {
  return (
    <section id="team" className="team">
      <TeamHeader data={data} />
      <TeamMembers data={data} />
    </section>
  );
}

export default Team;
