import data from "@/data/contactUsData.json";
import ContactUsGallery from "./ContactUsGallery";
import { TextBlock } from "@/layouts";
import { MessageForm, Heading, Paragraph } from "@/components";

function Form() {
  return (
    <div className="contacts">
      <div className="contacts__form">
        <TextBlock fullWidth>
          <Heading
            text={data.heading}
            h="h2"
            color="tertiary"
            firstWords={3}
            color2="primary"
          />
          <Paragraph color="light">{data.paragraph}</Paragraph>
        </TextBlock>
        <MessageForm CTA={data.CTA} />
      </div>
      <ContactUsGallery data={data.gallery} shadow={data.shadow} />
    </div>
  );
}

export default Form;
