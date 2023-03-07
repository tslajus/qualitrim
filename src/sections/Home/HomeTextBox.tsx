import data from "@/data/homeData.json";
import { makeUpperCase } from "@/utils";
import { Button, LearnMore } from "@/components";

const heading = makeUpperCase(data.heading);

function HomeTextBox() {
  return (
    <div className="home__text-block">
      <div className="home__heading-box">
        <h1 className="heading home__heading">{heading}</h1>
        <p className="subheading">{data.subheading}</p>
        <span className="text-shadow home__heading-shadow">{data.shadow}</span>
      </div>

      <p className="paragraph color--primary">{data.paragraph}</p>
      <div className="home__buttons">
        <Button>{data.CTA}</Button>
        <LearnMore />
      </div>
    </div>
  );
}

export default HomeTextBox;
