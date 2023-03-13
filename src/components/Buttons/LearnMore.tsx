type Props = {
  [key: string]: any;
};

function LearnMore({ ...props }: Props) {
  return (
    <button className="text-narrow text-narrow--link" {...props}>
      Learn more
    </button>
  );
}

export default LearnMore;
