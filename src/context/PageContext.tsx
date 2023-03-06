import { createContext, ReactNode } from "react";
import data from "@/data/navData.json";

const portSize = {
  mobile: "(max-width: 350px)",
  tabPort: "(max-width: 768px)",
  tabLand: "(max-width: 1024px)",
  desktopSmall: "(max-width: 1280px)",
  desktopBig: "(max-width: 1440px)",
};

const navLinks = data.navLinks;

const PageContext = createContext<PageContextTypes>({
  portSize,
  navLinks,
});

const Provider = ({ children }: { children: ReactNode }) => {
  const sharedValues = { portSize, navLinks };

  return (
    <PageContext.Provider value={sharedValues}>{children}</PageContext.Provider>
  );
};

export default PageContext;
export { Provider };
