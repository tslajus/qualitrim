import { scrollToId } from "@/utils";
import { TextBlock } from "@/layouts";
import { Heading, Paragraph, Button } from "@/components";

function ClientsHeader({ data }: ClientsData) {
  return (
    <div className="clients__text-box">
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
          <Button onClick={() => scrollToId(data.CTA.scrollTo)}>
            {data.CTA.text}
          </Button>
        </TextBlock>
      </div>
    </div>
  );
}

export default ClientsHeader;
