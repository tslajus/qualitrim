import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type SectionContextType = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

const SectionContext = createContext<SectionContextType>({
  selectedSection: "home",
  setSelectedSection: () => {},
});

const SectionContextProvider = ({ children }: Props) => {
  const [selectedSection, setSelectedSection] = useState("home");

  return (
    <SectionContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </SectionContext.Provider>
  );
};

export { SectionContextProvider, SectionContext };
