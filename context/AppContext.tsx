import { WithChildren } from "@/utils/interfaces";
import React, { createContext, useState } from "react";

interface AppContextValue {
  selectedProfile: string | null;
  setSelectedProfile: (profile: string | null) => void;
}

export const AppContext = createContext<AppContextValue>({
  selectedProfile: null,
  setSelectedProfile: () => {},
});

export const AppContextProvider: React.FC<WithChildren> = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      {children}
    </AppContext.Provider>
  );
};
