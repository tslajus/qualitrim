import { CSSProperties } from "react";
import { LearnMore } from "../";
import { TextBlock } from "@/layouts";

type Props = {
  data: {
    id: string;
    title: string;
    paragraph: string;
    btn: string;
    icon?: string;
    background?: string;
  };
};

function FeatureBox({ data }: Props) {
  const backgroundStyle: CSSProperties = {
    background: `url(/src/assets/benefits/${data.background})`,
  };

  return (
    <div className="feature" style={backgroundStyle}>
      <img className="feature-icon" src={`src/assets/icons/${data.icon}`} />

      <div className="feature__text">
        <h4 className="text-narrow">{data.title}</h4>
        <p className="paragraph color--light">{data.paragraph}</p>
        <LearnMore />
      </div>
    </div>
  );
}

export default FeatureBox;
