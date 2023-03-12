import { Heading, Paragraph, Button, LearnMore } from "@/components";
import { scrollToId } from "@/utils";

function HomeTextBox({ data }: HomeData) {
  const handleClick = () => {
    scrollToId("contact-us");
  };

  return (
    <div className="home__text-block">
      <div className="home__heading-box">
        <Heading
          text={data.heading}
          h="h1"
          color="primary"
          extraClasses="home__heading"
        />
        <p className="subheading">{data.subheading}</p>
        <span className="text-shadow home__heading-shadow">{data.shadow}</span>
      </div>

      <Paragraph color="primary">{data.paragraph}</Paragraph>
      <div className="home__buttons">
        <Button onClick={handleClick}>{data.CTA}</Button>
        <LearnMore onClick={handleClick} />
      </div>
    </div>
  );
}

export default HomeTextBox;
