import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Label from "./Label";
import TipItem from "./TipItem";
import Input from "./Input";

const TipSection = () => {
  const { tipPercent, setTipPercent } = useAppContext();
  const [customTip, setCustomTip] = useState<string>("");

  const valueUpdater = (value: string) => {
    setTipPercent(value);
    setCustomTip("");
  };

  const handleCustomTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    let eventAsNumber = Number(event?.target.value);
    let radioElements = document.getElementsByTagName("input");
    // Deselect any radio elements in the group
    for (let i = 0; i < radioElements.length; i++) {
      if (radioElements[i].type == "radio") {
        radioElements[i].checked = false;
      }
    }
    // Set value to 100 if input is over 100, 0 if less than 0,
    // and allow empty value
    if (eventAsNumber > 100) {
      setCustomTip("100");
      setTipPercent("100");
    } else if (eventAsNumber < 0) {
      setCustomTip("0");
      setTipPercent("0");
    } else {
      setCustomTip(event.target.value);
      setTipPercent(event.target.value);
    }
  };

  useEffect(() => {
    console.log(tipPercent);
  }, [tipPercent]);

  return (
    <div className="my-5">
      <Label>Select Tip %</Label>
      <ul className="grid grid-cols-2 mt-2 gap-3 md:grid-cols-3">
        <TipItem value="5" valueUpdater={valueUpdater} />
        <TipItem value="10" valueUpdater={valueUpdater} />
        <TipItem value="15" valueUpdater={valueUpdater} />
        <TipItem value="25" valueUpdater={valueUpdater} />
        <TipItem value="50" valueUpdater={valueUpdater} />
        <Input
          name="tip"
          handleChange={(e) => {
            handleCustomTip(e);
          }}
          value={customTip}
          placeholder="Custom"
        />
      </ul>
    </div>
  );
};

export default TipSection;
