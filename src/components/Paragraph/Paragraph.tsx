type Props = { children: string | string[]; color: string };

function Paragraph({ children, color }: Props) {
  return <p className={`paragraph color--${color}`}>{children}</p>;
}

export default Paragraph;
