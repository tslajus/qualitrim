import { useState, useEffect } from "react";
import { makeUpperCase } from "@/utils";
import {
  GoChevronRight as IconRight,
  GoChevronLeft as IconLeft,
} from "react-icons/go";
import { Paragraph } from "../";

type Props = {
  data: { id: string; name: string; text: string; img: string }[];
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
    <div className="testimonials-box">
      <div className="testimonials-box__content ">
        <img
          src={`src/assets/clients/${client.img}`}
          alt={`image of our customer ${client.name}`}
        />
        <Paragraph color={"light"}>{`"${client.text}"`}</Paragraph>
      </div>
      <Paragraph color="light">- {makeUpperCase(client.name)} -</Paragraph>

      <div className="testimonials-box__arrows">
        <IconLeft onClick={() => handleClientNumber("back")} />
        <IconRight onClick={() => handleClientNumber("next")} />
      </div>
    </div>
  );
}

export default TestimonialsBox;
