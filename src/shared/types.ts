interface AppContext {
  bill: string;
  setBill: (value: string) => void;
  peopleAmount: string;
  setPeopleAmount: (value: string) => void;
  tipPercent: string;
  setTipPercent: (value: string) => void;
  error: {
    [key: string]: string;
  };
  setError: React.Dispatch<React.SetStateAction<{}>>;
}
