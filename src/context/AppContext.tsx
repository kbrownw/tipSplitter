import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const AppContext = createContext<AppContext | undefined>(undefined);

export const AppContextWrapper = ({ children }: Props) => {
  const [bill, setBill] = useState("");
  const [peopleAmount, setPeopleAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("");
  const [error, setError] = useState({});
  const [billIsBlurred, setBillIsBlurred] = useState<boolean>(false);
  const [peopleIsBlurred, setPeopleIsBlurred] = useState<boolean>(false);
  const [customTip, setCustomTip] = useState<string>("");
  return (
    <AppContext.Provider
      value={{
        bill,
        setBill,
        peopleAmount,
        setPeopleAmount,
        tipPercent,
        setTipPercent,
        error,
        setError,
        billIsBlurred,
        setBillIsBlurred,
        peopleIsBlurred,
        setPeopleIsBlurred,
        customTip,
        setCustomTip,
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
