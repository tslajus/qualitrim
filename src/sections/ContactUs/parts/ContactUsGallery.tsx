import { useState, useContext } from "react";
import { PageContext } from "@/context/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import { useInterval } from "@/hooks";
import { makeUpperCase } from "@/utils";

type Props = { gallery: { id: string; img: string }[]; shadow: string };

function ContactUsGallery({ gallery, shadow }: Props) {
  const [imageNumber, setImageNumber] = useState(1);
  const image = gallery[imageNumber - 1].img;

  const { fadeInReverseFaster, fadeInStatic, fadeInStaticLong, exitAnimation } =
    useContext(PageContext);

  useInterval(() => {
    setImageNumber(imageNumber === gallery.length ? 1 : imageNumber + 1);
  }, 6000);

  const renderedImg = (
    <AnimatePresence mode="wait">
      <motion.img
        {...fadeInStatic}
        {...exitAnimation}
        src={`src/assets/gallery/${image}`}
        alt="image of a barber shop"
        key={image}
      />
    </AnimatePresence>
  );

  return (
    <>
      <motion.div {...fadeInReverseFaster} className="contacts__gallery">
        <figure className="contacts__gallery-img">{renderedImg}</figure>
        <motion.span
          className="text-shadow contacts__gallery-shadow"
          {...fadeInStaticLong}
        >
          {makeUpperCase(shadow)}
        </motion.span>
      </motion.div>
    </>
  );
}

export default ContactUsGallery;
