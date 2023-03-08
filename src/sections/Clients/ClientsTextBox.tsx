import data from "@/data/clientsData.json";
import { splitHeading } from "@/utils";
import { Button } from "@/components";

type Props = {};

function ClientsTextBox({}: Props) {
  const [headingStart, headingEnd] = splitHeading(data.heading, 2);

  return (
    <>
      <div className="clients__text-box">
        <h2 className="heading color--secondary">
          <span className="heading color--dark">{headingStart} </span>
          {headingEnd}
        </h2>
        <p className="paragraph color--dark">{data.paragraph}</p>
        <Button>{data.CTA}</Button>
      </div>
    </>
  );
}

export default ClientsTextBox;
