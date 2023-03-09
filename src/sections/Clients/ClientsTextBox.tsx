import data from "@/data/clientsData.json";
import { splitHeading } from "@/utils";
import { Button } from "@/components";
import { TextBlock } from "@/layouts";

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
        <p className="paragraph color--dark">{data.paragraph}</p>
        <div>
          <Button>{data.CTA}</Button>
        </div>
      </TextBlock>
    </div>
  );
}

export default ClientsTextBox;
