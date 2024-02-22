import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useErrorHandler } from "../hooks/useErrorHandler";
import { useZeroChecker } from "../hooks/useZeroChecker";
import Label from "./Label";
import ErrorText from "./ErrorText";
import Input from "./Input";

type Props = {
  value: string;
  setValue: (value: string) => void;
  keyName: string;
  image: string;
  altText: string;
  handleBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  labelText: string;
  blurred?: boolean;
};

const LabelWithNumberInput = ({
  value,
  setValue,
  keyName,
  labelText,
  image,
  altText,
  handleBlur,
  blurred = false,
}: Props) => {
  const { error } = useAppContext();
  const { checkNotZero } = useZeroChecker();
  const [inErrorState, setInErrorState] = useState<boolean>(false);
  const { addError, removeError } = useErrorHandler();
  const errorStyle = (errorState: boolean) => {
    if (errorState) {
      return { outline: "2px solid #ef4444" };
    }
  };

  useEffect(() => {
    if (blurred) {
      if (checkNotZero(value)) {
        removeError(keyName);
        setInErrorState(false);
      } else {
        addError(keyName, "Can't be zero");
        setInErrorState(true);
      }
    } else {
      setInErrorState(false);
    }
  }, [value, blurred]);

  return (
    <div>
      <div className="flex mb-2 gap-2 justify-between">
        <Label>{labelText}</Label>
        {error[keyName] && <ErrorText>{error[keyName]}</ErrorText>}
      </div>

      <Input
        placeholder="0"
        handleChange={(e) => setValue(e.target.value)}
        value={value}
        image={image}
        style={errorStyle(inErrorState)}
        altText={altText}
        handleBlur={(e) => {
          if (handleBlur) {
            handleBlur(e);
          }
        }}
      />
    </div>
  );
};

export default LabelWithNumberInput;
