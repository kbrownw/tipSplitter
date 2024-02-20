import { CSSProperties } from "react";
import { isANumber } from "../shared/functions";

interface Props {
  iconElement?: React.ReactNode | undefined;
  placeholder?: string;
  image?: string;
  altText?: string;
  name?: string;
  style?: CSSProperties | undefined;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

const Input = ({
  image,
  altText,
  placeholder,
  style,
  value,
  name,
  handleChange,
  handleBlur,
}: Props) => {
  const handleChangeFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isANumber(e.target.value)) {
      handleChange(e);
    } else if (e.target.value === "") {
      handleChange(e);
    }
  };

  return (
    <div className="relative">
      <div className="absolute w-[15px] h-[15px] top-[10px] left-3">
        <img className="w-full" src={image} alt={altText} />
      </div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={handleChangeFunction}
        value={value}
        className="w-full py-1 px-5 bg-very-light-grayish-cyan rounded-md text-right text-very-dark-cyan outline-none
        placeholder:text-grayish-cyan focus:outline-strong-cyan"
        style={style}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;
