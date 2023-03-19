import benefits from "@/data/benefitsData.json";
import { useContext, CSSProperties, ReactNode } from "react";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
import { Paragraph, LearnMore } from "../";

type Props = {
  data: {
    id: string;
    title: string;
    paragraph: string;
    btn: string;
    icon?: string;
    background?: string;
  };
  action: () => void;
  children?: ReactNode;
};

function FeatureBox({ data, children, action }: Props) {
  const { fadeInSlower, exitAnimation } = useContext(PageContext);

  const isMobile = useMediaQuery(portSize.desktopSmall);

  const mobileBackground = "benefits_2.jpg";
  const backgroundStyle: CSSProperties = {
    background: `url(/assets/benefits/${
      isMobile ? mobileBackground : data.background
    })`,
  };

  return (
    <article
      className="feature"
      style={backgroundStyle}
      aria-labelledby={`title-${data.id}`}
    >
      <motion.img
        className="feature-icon"
        src={`/assets/icons/${data.icon}`}
        key={data.background}
        {...fadeInSlower}
        {...exitAnimation}
      />

      <motion.div
        className="feature__text"
        key={data.id}
        {...fadeInSlower}
        {...exitAnimation}
      >
        <h4 className="text-narrow color--accent">{data.title}</h4>

        <Paragraph color="light">{data.paragraph}</Paragraph>

        <LearnMore onClick={action} />
      </motion.div>

      {children}
    </article>
  );
}

export default FeatureBox;
