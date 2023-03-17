import { useState, useEffect } from "react";
import { useInterval } from "@/hooks";
import { makeUpperCase } from "@/utils";
import { Paragraph, ArrowIcon } from "../";

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

  useInterval(() => {
    handleClientNumber("next");
  }, 10000);

  return (
    <article className="testimonials-box">
      <div className="testimonials-box__photo ">
        <img
          src={`src/assets/clients/${client.img}`}
          alt={`image of our customer ${client.name}`}
        />
      </div>

      <div className="testimonials-box__text">
        <div className="client">
          <Paragraph color={"light"}>{`"${client.text}"`}</Paragraph>
        </div>

        <div className="testimonials-box-arrows">
          <ArrowIcon
            direction="left"
            label="testimonial"
            onClick={() => handleClientNumber("back")}
            small
          />

          <Paragraph color="light">- {makeUpperCase(client.name)} -</Paragraph>

          <ArrowIcon
            direction="right"
            label="testimonial"
            onClick={() => handleClientNumber("next")}
            small
          />
        </div>
      </div>
    </article>
  );
}

export default TestimonialsBox;
