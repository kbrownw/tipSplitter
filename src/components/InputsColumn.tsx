import { useAppContext } from "../context/AppContext";
import Input from "./Input";
import Label from "./Label";
import { useEffect, useState } from "react";

const InputsColumn = () => {
  const { bill, setBill } = useAppContext();
  const [billNotNumber, setBillNotNumber] = useState<boolean>(false);

  useEffect(() => {
    setBillNotNumber(Number.isNaN(bill));
    console.log(parseFloat(bill));
  }, [bill]);

  return (
    <div className="w-full p-2">
      <div className="flex justify-between">
        <Label>Bill</Label>
        {billNotNumber && (
          <p className=" text-red-500 text-[16px]">
            Please enter a valid number.
          </p>
        )}
      </div>

      <Input
        placeholder="0"
        handleChange={(e) => setBill(e.target.value)}
        value={bill}
      />
    </div>
  );
};

export default InputsColumn;
