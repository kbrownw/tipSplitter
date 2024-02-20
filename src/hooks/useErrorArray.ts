import { useAppContext } from "../context/AppContext";

export const useErrorArray = () => {
  const { error, setError } = useAppContext();

  const addError = (name: string) => {
    const alreadyInArray = error.find((item) => item === name);

    if (!alreadyInArray) {
      let newErrors = error;
      newErrors.push(name);
      setError(newErrors);
    }
  };

  const removeError = (name: string) => {
    const alreadyInArray = error.find((item) => item === name);

    if (alreadyInArray) {
      let newErrors = error.filter((item) => item !== name);
      setError(newErrors);
    }
  };

  return { addError, removeError };
};
