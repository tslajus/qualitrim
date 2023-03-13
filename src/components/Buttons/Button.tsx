type Props = {
  children: string;
  [key: string]: any;
  type?: "button" | "submit" | "reset";
};

function Button({ children, type, ...props }: Props) {
  return (
    <button type={type} className="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
