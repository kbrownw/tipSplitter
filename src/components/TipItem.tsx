import { useRef } from "react";

interface Props {
  value: string;
  valueUpdater: (value: string) => void;
}

const TipItem = ({ value, valueUpdater }: Props) => {
  const element = useRef<HTMLInputElement | null>(null);

  const changeHandler = () => {
    if (element.current?.checked) {
      valueUpdater(value);
    }
  };

  return (
    <li className="flex">
      <input
        ref={element}
        type="radio"
        name="tip"
        id={value}
        value={value}
        className="hidden peer"
        onChange={changeHandler}
      />
      <label
        htmlFor={value}
        className="w-full py-1 bg-very-dark-cyan rounded-md text-white text-center
        hover:cursor-pointer peer-checked:bg-strong-cyan peer-checked:text-very-dark-cyan"
      >
        {value}%
      </label>
    </li>
  );
};

export default TipItem;
