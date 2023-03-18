import { scrollToId } from "@/utils";
import { TextBlock } from "@/layouts";
import { Heading, Paragraph, Button } from "@/components";

function ClientsHeader({ data }: ClientsData) {
  return (
    <div className="clients__text-box">
      <div className="clients__text-box-content">
        <TextBlock rightToLeft>
          <div>
            <Heading
              text={data.heading}
              h="h2"
              color="accent"
              firstWords={2}
              color2="dark"
            />
          </div>

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
