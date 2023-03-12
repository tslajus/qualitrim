import data from "@/data/contactUsData.json";
import ContactUsGallery from "./ContactUsGallery";
import { splitHeading } from "@/utils";
import { TextBlock } from "@/layouts";
import { MessageForm, Paragraph } from "@/components";

type Props = {};

function Form({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 3);

  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__form">
          <TextBlock fullWidth>
            <h2 className="heading">
              {headingStart}
              <span className="color--tertiary"> {headingEnd}</span>
            </h2>
            <Paragraph color="light">{data.paragraph}</Paragraph>
          </TextBlock>
          <MessageForm CTA={data.CTA} />
        </div>
        <ContactUsGallery data={data.gallery} shadow={data.shadow} />
      </div>
    </div>
  );
}

export default Form;
