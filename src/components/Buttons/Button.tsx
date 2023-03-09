type Props = {
  children: string;
  [key: string]: any;
};

function Button({ children, ...props }: Props) {
  return (
    <button className="button " {...props}>
      {children}
    </button>
  );
}

export default Button;
