import { useAppContext } from "../context/AppContext";
import LabelWithNumberInput from "./LabelWithNumberInput";
import TipSection from "./TipSection";
import PersonIcon from "../assets/images/icon-person.svg";
import DollarSign from "../assets/images/icon-dollar.svg";
import { toInteger, toTwoDecimals } from "../shared/functions";

const InputsColumn = () => {
  const { bill, setBill, peopleAmount, setPeopleAmount } = useAppContext();

  return (
    <div className="flex flex-col w-full p-2 gap-6">
      <LabelWithNumberInput
        labelText="Bill"
        value={bill}
        setValue={setBill}
        image={DollarSign}
        altText="Dollar sign icon"
        keyName="bill"
        handleBlur={() => setBill(toTwoDecimals(bill))}
      />
      <TipSection />
      <LabelWithNumberInput
        labelText="Number of People"
        value={peopleAmount}
        setValue={setPeopleAmount}
        image={PersonIcon}
        altText="Person Icon"
        keyName="people"
        handleBlur={() => setPeopleAmount(toInteger(peopleAmount))}
      />
    </div>
  );
};

export default InputsColumn;
