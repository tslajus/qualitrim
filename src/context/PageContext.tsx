import { createContext, ReactNode } from "react";

interface PageContextTypes {
  test: { id: string; title: string }[];
}

const test = [{ id: "t1", title: "test" }];

const PageContext = createContext<PageContextTypes>({ test });

const Provider = ({ children }: { children: ReactNode }) => {
  const sharedValues = { test };

  return (
    <PageContext.Provider value={sharedValues}>{children}</PageContext.Provider>
  );
};

export default PageContext;
export { Provider };
