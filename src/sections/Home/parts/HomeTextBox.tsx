import useMediaQuery, { portSize } from "@/hooks/useMediaQuery";
import { scrollToId } from "@/utils";
import { Heading, Paragraph, Button, LearnMore } from "@/components";

function HomeTextBox({ data }: HomeData) {
  const isMobile = useMediaQuery(portSize.tabPort);

  return (
    <div className="home__text-block">
      <div className="home__heading-box">
        <Heading
          text={data.heading}
          h="h1"
          color="primary"
          extraClasses="home__heading"
        />
        <p className="subheading home__subheading">{data.subheading}</p>
        {!isMobile && (
          <span className="text-shadow home__heading-shadow">
            {data.shadow}
          </span>
        )}
      </div>

      {!isMobile && <Paragraph color="primary">{data.paragraph}</Paragraph>}

      <div className="home__buttons">
        <Button onClick={() => scrollToId(data.CTA.scrollTo)}>
          {data.CTA.text}
        </Button>
        {!isMobile && (
          <LearnMore onClick={() => scrollToId(data.CTA.scrollTo)} />
        )}
      </div>
    </div>
  );
}

export default HomeTextBox;
