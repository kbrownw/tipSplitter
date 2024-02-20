import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import DollarSign from "../assets/images/icon-dollar.svg";
import ErrorText from "./ErrorText";
import Input from "./Input";
import Label from "./Label";
import { useErrorArray } from "../hooks/useErrorArray";
import { toTwoDecimals } from "../shared/functions";

const BillSection = () => {
  const { bill, setBill } = useAppContext();
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const [billNotNumber, setBillNotNumber] = useState<boolean>(false);
  const { addError, removeError } = useErrorArray();
  const errorStyle = (errorState: boolean) => {
    if (errorState) {
      return { outline: "2px solid #ef4444" };
    } else {
    }
  };

  const checkValidity = () => {
    if (Number(bill) === 0) {
      setBillNotNumber(true);
      addError("bill");
    } else {
      setBillNotNumber(false);
      removeError("bill");
    }
  };

  useEffect(() => {
    if (isBlurred) {
      checkValidity();
    }
  }, [bill, isBlurred]);

  return (
    <>
      <div className="flex mb-2 gap-2 justify-between">
        <Label>Bill</Label>
        {billNotNumber && <ErrorText>Can't be zero</ErrorText>}
      </div>

      <Input
        placeholder="0"
        handleChange={(e) => setBill(e.target.value)}
        value={bill}
        image={DollarSign}
        style={errorStyle(billNotNumber)}
        altText="Dollar sign icon"
        handleBlur={() => {
          setIsBlurred(true);
          setBill(toTwoDecimals(bill));
        }}
      />
    </>
  );
};

export default BillSection;
