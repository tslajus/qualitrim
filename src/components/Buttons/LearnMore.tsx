type Props = {
  [key: string]: any;
};

function LearnMore({ ...props }: Props) {
  return (
    <div className="text-narrow text-narrow--link" {...props}>
      Learn more
    </div>
  );
}

export default LearnMore;
