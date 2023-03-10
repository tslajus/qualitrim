type Props = {
  children: string;
  [key: string]: any;
};

function Button({ children, ...props }: Props) {
  return (
    <div>
      <button className="button " {...props}>
        {children}
      </button>
    </div>
  );
}

export default Button;
