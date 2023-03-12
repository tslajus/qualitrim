import { TextBlock } from "@/layouts";
import { MessageForm, Heading, Paragraph } from "@/components";

function ContactUsForm({ data }: ContactUsData) {
  return (
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
  );
}

export default ContactUsForm;
