import { ReactNode } from "react";

function Wrapper({ children }: { children: ReactNode }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
