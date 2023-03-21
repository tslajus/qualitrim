import { useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { motion } from "framer-motion";
import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";

function HomeIllustration() {
  const isDesktopBig = useMediaQuery(portSize.desktopBig);
  const { fadeInReverseFaster } = useContext(PageContext);

  const renderedImg = (
    <img
      src={`/assets/home/home_img_${isDesktopBig ? "720" : "1080"}.webp`}
      alt="bearded man"
    />
  );

  return (
    <motion.div className="home__asset" {...fadeInReverseFaster}>
      {renderedImg}
    </motion.div>
  );
}

export default HomeIllustration;
