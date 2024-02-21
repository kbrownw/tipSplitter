export const useZeroChecker = () => {
  const checkNotZero = (value: string) => {
    const valAsNum = Number(value);
    if (valAsNum === 0 || Number.isNaN(valAsNum)) {
      return false;
    } else {
      return true;
    }
  };

  return { checkNotZero };
};
