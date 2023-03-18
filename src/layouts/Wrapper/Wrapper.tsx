import { useContext, ReactNode } from "react";
import { PageContext } from "@/context/PageContext";

function Wrapper({ children }: { children: ReactNode }) {
  const { selectedSection } = useContext(PageContext);

  return (
    <div className={`wrapper wrapper--${selectedSection}`}>{children}</div>
  );
}

export default Wrapper;
