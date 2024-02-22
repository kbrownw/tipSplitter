import { useEffect, useRef, useState } from "react";
import { useAppContext } from "../context/AppContext";

const Reset = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null!);
  const {
    bill,
    setBill,
    tipPercent,
    setTipPercent,
    peopleAmount,
    setPeopleAmount,
    setBillIsBlurred,
    setPeopleIsBlurred,
    setCustomTip,
    setError,
  } = useAppContext();

  const handleClick = () => {
    setBill("");
    setTipPercent("");
    setPeopleAmount("");
    setCustomTip("");
    setBillIsBlurred(false);
    setPeopleIsBlurred(false);
    let radioElements = document.getElementsByTagName("input");
    // Deselect any radio elements in the group
    for (let i = 0; i < radioElements.length; i++) {
      if (radioElements[i].type == "radio") {
        radioElements[i].checked = false;
      }
    }
    setError({});
  };

  useEffect(() => {
    if (bill !== "" || tipPercent !== "" || peopleAmount !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  useEffect(() => {
    if (btnRef) {
      isDisabled
        ? (btnRef.current.disabled = true)
        : (btnRef.current.disabled = false);
    }
  }, [isDisabled]);

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="h-14 self-end bg-strong-cyan text-very-dark-cyan rounded-md
    hover:bg-light-grayish-cyan disabled:opacity-25 disabled:hover:bg-strong-cyan"
    >
      RESET
    </button>
  );
};

export default Reset;
