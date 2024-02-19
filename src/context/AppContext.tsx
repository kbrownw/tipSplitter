import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextWrapper = ({ children }: Props) => {
  const [bill, setBill] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        peopleAmount,
        setPeopleAmount,
        tipPercent,
        setTipPercent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const isAppContext = useContext(AppContext);

  if (!isAppContext) {
    throw new Error(
      "useAppContext must be used inside the AppContextWrapper element."
    );
  }

  return isAppContext;
};
