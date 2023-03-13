import { useContext, ReactNode } from "react";
import { SectionContext } from "@/context/sectionContext";

function Wrapper({ children }: { children: ReactNode }) {
  const { selectedSection } = useContext(SectionContext);

  return (
    <div className={`wrapper wrapper--${selectedSection}`}>{children}</div>
  );
}

export default Wrapper;
