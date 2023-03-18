type Props = {
  [key: string]: any;
  accent?: boolean;
  darker?: boolean;
};

function LearnMore({ accent, darker, ...props }: Props) {
  return (
    <button
      className={`text-narrow text-narrow--link ${accent && "color--accent"} ${
        darker && "color--primary"
      }`}
      {...props}
    >
      Learn more
    </button>
  );
}

export default LearnMore;
