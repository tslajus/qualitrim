import { useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
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
  const { fadeInStatic, fadeInSlower } = useContext(PageContext);

  return (
    <motion.article className="team__members-profile" {...fadeInStatic}>
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
    </motion.article>
  );
}

export default TeamMemberBox;
