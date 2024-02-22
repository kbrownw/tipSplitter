import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import Totals from "./Totals";
import { useZeroChecker } from "../hooks/useZeroChecker";
import Reset from "./Reset";

const TotalsColumn = () => {
  const { peopleAmount, bill, tipPercent } = useAppContext();
  const [tipAmount, setTipAmount] = useState<string>("0.00");
  const [totalAmount, setTotalAmount] = useState<string>("0.00");
  const { checkNotZero } = useZeroChecker();

  const calculate = () => {
    if (tipPercent !== "" && bill !== "" && peopleAmount !== "") {
      if (checkNotZero(bill) && checkNotZero(peopleAmount)) {
        const tipAsPercent = Number(tipPercent) / 100;
        const tipTotal = Number(bill) * tipAsPercent;
        const tipPerPerson = tipTotal / Number(peopleAmount);
        const totalPerPerson = (Number(bill) + tipTotal) / Number(peopleAmount);
        setTipAmount(tipPerPerson.toFixed(2));
        setTotalAmount(totalPerPerson.toFixed(2));
      } else {
        setTipAmount("0.00");
        setTotalAmount("0.00");
      }
    } else {
      setTipAmount("0.00");
      setTotalAmount("0.00");
    }
  };

  useEffect(() => {
    calculate();
  }, [tipPercent, bill, peopleAmount]);

  return (
    <div className="grid w-full py-12 px-10 bg-very-dark-cyan rounded-[25px]">
      <div className="flex flex-col mb-5 gap-5 overflow-x-auto">
        <Totals text="Tip Amount" amount={tipAmount} />
        <Totals text="Total" amount={totalAmount} />
      </div>
      <Reset />
    </div>
  );
};

export default TotalsColumn;
