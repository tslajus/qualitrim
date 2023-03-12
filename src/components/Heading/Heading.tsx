import { splitHeading } from "@/utils";
type Props = {
  text: string;
  h: Heading;
  firstWords?: number;
  color: Colors;
  color2?: Colors;
  extraClasses?: string | string[];
};

function Heading({ text, h, firstWords, color, color2, extraClasses }: Props) {
  const numberOfWords: number = firstWords ? firstWords : 0;
  const [headingStart, headingEnd] = splitHeading(text, numberOfWords);
  const Tag = h;

  return (
    <Tag className={`heading color--${color} ${extraClasses}`}>
      <span className={`heading color--${color2 ? color2 : color}`}>
        {`${headingStart} `}
      </span>
      {headingEnd}
    </Tag>
  );
}

export default Heading;
