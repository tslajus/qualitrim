import { CSSProperties } from "react";
import { Paragraph, LearnMore } from "../";

type Props = {
  data: {
    id: string;
    title: string;
    paragraph: string;
    btn: string;
    icon?: string;
    background?: string;
  };
  action: () => void;
};

function FeatureBox({ data, action }: Props) {
  const backgroundStyle: CSSProperties = {
    background: `url(/src/assets/benefits/${data.background})`,
  };

  return (
    <div className="feature" style={backgroundStyle}>
      <img className="feature-icon" src={`src/assets/icons/${data.icon}`} />

      <div className="feature__text">
        <h4 className="text-narrow">{data.title}</h4>
        <Paragraph color="light">{data.paragraph}</Paragraph>
        <LearnMore onClick={action} />
      </div>
    </div>
  );
}

export default FeatureBox;
