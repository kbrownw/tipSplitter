import { useAppContext } from "../context/AppContext";
import LabelWithNumberInput from "./LabelWithNumberInput";
import TipSection from "./TipSection";
import PersonIcon from "../assets/images/icon-person.svg";
import DollarSign from "../assets/images/icon-dollar.svg";
import { toInteger, toTwoDecimals } from "../shared/functions";

const InputsColumn = () => {
  const {
    bill,
    setBill,
    billIsBlurred,
    setBillIsBlurred,
    peopleAmount,
    setPeopleAmount,
    peopleIsBlurred,
    setPeopleIsBlurred,
  } = useAppContext();

  return (
    <div className="flex flex-col w-full mb-5 p-2 gap-6 md:mb-0">
      <LabelWithNumberInput
        labelText="Bill"
        value={bill}
        setValue={setBill}
        image={DollarSign}
        altText="Dollar sign icon"
        keyName="bill"
        blurred={billIsBlurred}
        handleBlur={() => {
          setBill(toTwoDecimals(bill));
          setBillIsBlurred(true);
        }}
      />
      <TipSection />
      <LabelWithNumberInput
        labelText="Number of People"
        value={peopleAmount}
        setValue={setPeopleAmount}
        image={PersonIcon}
        altText="Person Icon"
        keyName="people"
        blurred={peopleIsBlurred}
        handleBlur={() => {
          setPeopleAmount(toInteger(peopleAmount));
          setPeopleIsBlurred(true);
        }}
      />
    </div>
  );
};

export default InputsColumn;
