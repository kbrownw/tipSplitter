import React from "react";

interface Props {
  children: React.ReactNode;
}

const ErrorText = ({ children }: Props) => {
  return <p className=" text-red-500 text-[16px]">{children}</p>;
};

export default ErrorText;
