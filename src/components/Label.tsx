import React, { CSSProperties } from "react";

interface Props {
  children: React.ReactNode;
  style?: CSSProperties;
}

const Label = ({ children, style }: Props) => {
  return (
    <label className="text-[16px] text-dark-grayish-cyan" style={style}>
      {children}
    </label>
  );
};

export default Label;
