import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  fullWidth?: boolean;
};

function TextBlock({ children, fullWidth = true }: Props) {
  return <div className={`tb ${!fullWidth && "tb--narrow"}`}>{children}</div>;
}

export default TextBlock;
