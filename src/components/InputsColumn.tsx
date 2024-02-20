import BillSection from "./BillSection";
import TipSection from "./TipSection";

const InputsColumn = () => {
  return (
    <div className="w-full p-2">
      <BillSection />
      <TipSection />
    </div>
  );
};

export default InputsColumn;
