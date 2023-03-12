import data from "@/data/clientsData.json";
import { TextBlock } from "@/layouts";
import { Heading, Paragraph, Button } from "@/components";

function ClientsTextBox() {
  return (
    <div className="clients__text-box-content">
      <TextBlock>
        <Heading
          text={data.heading}
          h="h2"
          color="secondary"
          firstWords={2}
          color2="dark"
        />
        <Paragraph color="dark">{data.paragraph}</Paragraph>
        <Button>{data.CTA}</Button>
      </TextBlock>
    </div>
  );
}

export default ClientsTextBox;
