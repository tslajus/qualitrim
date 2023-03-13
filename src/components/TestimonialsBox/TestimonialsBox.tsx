import { useState, useEffect } from "react";
import { makeUpperCase } from "@/utils";
import {
  GoChevronRight as IconRight,
  GoChevronLeft as IconLeft,
} from "react-icons/go";
import { Paragraph } from "../";

type Props = {
  data: Testimonials;
};

function TestimonialsBox({ data }: Props) {
  const [clientNumber, setClientNumber] = useState(1);
  const client = data[clientNumber - 1];

  const handleClientNumber = (direction: string | undefined) => {
    direction === "back"
      ? setClientNumber(clientNumber === 1 ? data.length : clientNumber - 1)
      : setClientNumber(data.length === clientNumber ? 1 : clientNumber + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleClientNumber("next");
    }, 10000);

    return () => clearInterval(intervalId);
  }, [clientNumber]);

  return (
    <article className="testimonials-box">
      <div className="testimonials-box__content ">
        <img
          src={`src/assets/clients/${client.img}`}
          alt={`image of our customer ${client.name}`}
        />
        <Paragraph color={"light"}>{`"${client.text}"`}</Paragraph>
      </div>
      <Paragraph color="light">- {makeUpperCase(client.name)} -</Paragraph>

      <div className="testimonials-box__arrows">
        <button className="testimonials-box__arrow">
          <IconLeft onClick={() => handleClientNumber("back")} />
          <span className="sr-only">Previous testimonial</span>
        </button>
        <button className="testimonials-box__arrow">
          <IconRight onClick={() => handleClientNumber("next")} />
          <span className="sr-only">Next testimonial</span>
        </button>
      </div>
    </article>
  );
}

export default TestimonialsBox;
