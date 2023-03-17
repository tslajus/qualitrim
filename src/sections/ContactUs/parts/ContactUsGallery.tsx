import { useState, useEffect } from "react";
import { useInterval } from "@/hooks";
import { makeUpperCase } from "@/utils";

type Props = { gallery: { id: string; img: string }[]; shadow: string };

function ContactUsGallery({ gallery, shadow }: Props) {
  const [imageNumber, setImageNumber] = useState(1);
  const image = gallery[imageNumber - 1].img;

  useInterval(() => {
    setImageNumber(imageNumber === gallery.length ? 1 : imageNumber + 1);
  }, 3000);

  const renderedImg = (
    <img src={`src/assets/gallery/${image}`} alt="image of a barber shop" />
  );

  return (
    <>
      <div className="contacts__gallery">
        <figure className="contacts__gallery-img">{renderedImg}</figure>
        <span className="text-shadow contacts__gallery-shadow">
          {makeUpperCase(shadow)}
        </span>
      </div>
    </>
  );
}

export default ContactUsGallery;
