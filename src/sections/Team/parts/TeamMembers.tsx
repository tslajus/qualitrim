import { useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
import MemberBox from "./MemberBox";

function TeamMembers({ data }: TeamData) {
  const { fadeInSlower } = useContext(PageContext);

  const renderedMembers = data.members.map((member) => {
    return (
      <motion.div key={member.id} {...fadeInSlower}>
        <MemberBox data={member} />
      </motion.div>
    );
  });

  return <div className="team__members">{renderedMembers}</div>;
}

export default TeamMembers;
