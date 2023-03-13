import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type SectionContextType = {
  selectedSection: string;
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
};

export const SectionContext = createContext<SectionContextType>({
  selectedSection: "home",
  setSelectedSection: () => {},
});

export const SectionContextProvider = ({ children }: Props) => {
  const [selectedSection, setSelectedSection] = useState("home");

  return (
    <SectionContext.Provider value={{ selectedSection, setSelectedSection }}>
      {children}
    </SectionContext.Provider>
  );
};
