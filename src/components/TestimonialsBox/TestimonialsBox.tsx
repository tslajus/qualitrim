import { useState, useEffect } from "react";
import { makeUpperCase } from "@/utils";
import {
  GoChevronRight as IconRight,
  GoChevronLeft as IconLeft,
} from "react-icons/go";

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
    <div className="testimonials-box paragraph color--light">
      <div className="testimonials-box__content ">
        <img
          src={`src/assets/clients/${client.img}`}
          alt={`image of our customer ${client.name}`}
        />
        <p>{`"${client.text}"`}</p>
      </div>

      <p>- {makeUpperCase(client.name)} -</p>

      <div className="testimonials-box__arrows">
        <IconLeft onClick={() => handleClientNumber("back")} />
        <IconRight onClick={() => handleClientNumber("next")} />
        {/* <span >&larr;</span> */}
        {/* <span onClick={() => handleClientNumber("next")}>&rarr;</span> */}
      </div>
    </div>
  );
}

export default TestimonialsBox;
