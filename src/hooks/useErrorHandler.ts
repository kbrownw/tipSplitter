import { useAppContext } from "../context/AppContext";

export const useErrorHandler = () => {
  const { error, setError } = useAppContext();

  const addError = (key: string, message: string) => {
    if (!error[key]) {
      setError({ ...error, [key]: message });
    }
  };

  const removeError = (key: string) => {
    if (error[key]) {
      setError((current: AppContext["error"]) => {
        delete current[key];
        return current;
      });
    }
  };

  return { addError, removeError };
};
