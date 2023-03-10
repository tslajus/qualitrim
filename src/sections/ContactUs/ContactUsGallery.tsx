import { useState, useEffect } from "react";
import { makeUpperCase } from "@/utils";

type Props = { data: { id: string; img: string }[]; shadow: string };

function ContactUsGallery({ data, shadow }: Props) {
  const [imageNumber, setImageNumber] = useState(1);
  const image = data[imageNumber - 1].img;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageNumber(imageNumber === data.length ? 1 : imageNumber + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageNumber]);

  return (
    <>
      <div className="contacts__gallery">
        <img src={`src/assets/gallery/${image}`} alt="image of a barber shop" />
        <span className="text-shadow contacts__gallery-shadow">
          {makeUpperCase(shadow)}
        </span>
      </div>
    </>
  );
}

export default ContactUsGallery;
