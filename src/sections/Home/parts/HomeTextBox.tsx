import { useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { scrollToId } from "@/utils";
import { Heading, Paragraph, Button, LearnMore } from "@/components";

function HomeTextBox({ data }: HomeData) {
  const isMobile = useMediaQuery(portSize.tabPort);

  const { fadeIn, fadeInFaster, fadeInSlower, fadeInStatic } =
    useContext(PageContext);

  return (
    <div className="home__text-block">
      <div className="home__heading-box">
        <motion.div {...fadeInFaster}>
          <Heading
            text={data.heading}
            h="h1"
            color="primary"
            extraClasses="home__heading"
          />
          {!isMobile && (
            <motion.span
              {...fadeInStatic}
              className="text-shadow home__heading-shadow"
            >
              {data.shadow}
            </motion.span>
          )}
        </motion.div>

        <motion.p className="subheading home__subheading" {...fadeIn}>
          {data.subheading}
        </motion.p>
      </div>

      {!isMobile && (
        <motion.div {...fadeIn}>
          <Paragraph color="primary">{data.paragraph}</Paragraph>
        </motion.div>
      )}

      <motion.div className="home__buttons" {...fadeInSlower}>
        <Button onClick={() => scrollToId(data.CTA.scrollTo)}>
          {data.CTA.text}
        </Button>
        {!isMobile && (
          <LearnMore onClick={() => scrollToId(data.CTA.scrollTo)} />
        )}
      </motion.div>
    </div>
  );
}

export default HomeTextBox;
