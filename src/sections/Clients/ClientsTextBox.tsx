import data from "@/data/clientsData.json";
import { splitHeading } from "@/utils";
import { TextBlock } from "@/layouts";
import { Button, Paragraph } from "@/components";

type Props = {};

function ClientsTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 2);

  return (
    <div className="clients__text-box-content">
      <TextBlock>
        <h2 className="heading color--secondary">
          <span className="heading color--dark">{headingStart} </span>
          {headingEnd}
        </h2>
        <Paragraph color="dark">{data.paragraph}</Paragraph>
        <div>
          <Button>{data.CTA}</Button>
        </div>
      </TextBlock>
    </div>
  );
}

export default ClientsTextBox;
