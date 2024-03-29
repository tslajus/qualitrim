import { useState, useContext, useEffect } from "react";
import { PageContext } from "@/context/PageContext";
import { AnimatePresence, motion } from "framer-motion";
import { makeUpperCase, swipeHandler } from "@/utils";
import { Paragraph, ArrowIcon } from "@/components";

type Props = {
  data: Testimonials;
};

function TestimonialsBox({ data }: Props) {
  const [clientNumber, setClientNumber] = useState(1);
  const [arrowDisabled, setArrowDisabled] = useState(false);
  const client = data[clientNumber - 1];
  const [imageLoaded, setImageLoaded] = useState(false);
  const { fadeInReverse, slideShowReverse, exitAnimation } =
    useContext(PageContext);

  const handleClick = (direction: string | undefined) => {
    if (!arrowDisabled) {
      direction === "back"
        ? setClientNumber(clientNumber === 1 ? data.length : clientNumber - 1)
        : setClientNumber(data.length === clientNumber ? 1 : clientNumber + 1);
      setArrowDisabled(true);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setArrowDisabled(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  });

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.src = `/assets/clients/${client.img}`;
      await img.decode();
      setImageLoaded(true);
    };
    loadImage();
  }, [client]);

  const { swipeLeft, swipeRight } = swipeHandler({
    onSwipeLeft: () => handleClick("back"),
    onSwipeRight: () => handleClick("next"),
  });

  return (
    <article
      className="testimonials-box"
      onTouchStart={swipeLeft}
      onTouchEnd={swipeRight}
    >
      <motion.div {...fadeInReverse}>
        <AnimatePresence mode="wait">
          <motion.div
            className="testimonials-box__photo"
            key={client.id}
            {...slideShowReverse}
            {...exitAnimation}
          >
            <img
              src={`/assets/clients/${client.img}`}
              alt={`image of our customer ${client.name}`}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div className="testimonials-box__text" {...slideShowReverse}>
        <AnimatePresence mode="wait">
          <motion.div
            className="client"
            {...slideShowReverse}
            key={client.id}
            {...exitAnimation}
          >
            <Paragraph color={"light"}>{`"${client.text}"`}</Paragraph>
          </motion.div>
        </AnimatePresence>

        <motion.div className="testimonials-box-arrows" {...fadeInReverse}>
          <ArrowIcon
            direction="left"
            label="testimonial"
            onClick={() => handleClick("back")}
            disabled={arrowDisabled}
            small
          />

          <Paragraph color="light">- {makeUpperCase(client.name)} -</Paragraph>

          <ArrowIcon
            direction="right"
            label="testimonial"
            onClick={() => handleClick("next")}
            disabled={arrowDisabled}
            small
          />
        </motion.div>
      </motion.div>
    </article>
  );
}

export default TestimonialsBox;
