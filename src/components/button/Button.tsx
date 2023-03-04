type Props = {
  children: string;
  [key: string]: any;
};

function Button({ children, ...props }: Props) {
  return (
    <button className="button link" {...props}>
      {children}
    </button>
  );
}

export default Button;
