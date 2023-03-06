import { useContext } from "react";
import PageContext from "@/context/PageContext";

const usePageContext = <T extends keyof PageContextTypes>(
  variableName: T
): PageContextTypes[T] => {
  const variable = useContext(PageContext)[variableName];
  return variable;
};

export default usePageContext;
