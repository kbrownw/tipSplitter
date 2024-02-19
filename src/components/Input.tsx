import { CSSProperties } from "react";

interface Props {
  iconElement?: React.ReactNode | undefined;
  placeholder?: string;
  style?: CSSProperties | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

const Input = ({
  iconElement,
  placeholder,
  style,
  value,
  handleChange,
}: Props) => {
  return (
    <div className="relative">
      <div>{iconElement}</div>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={value}
        className="w-full py-1 px-5 bg-very-light-grayish-cyan rounded-md text-right text-very-dark-cyan
        placeholder:text-grayish-cyan"
        style={style}
      />
    </div>
  );
};

export default Input;
