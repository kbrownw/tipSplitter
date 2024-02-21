export const isANumber = (input: string) => {
  let inputAsNumber = Number(input);
  if (!Number.isNaN(inputAsNumber)) {
    return input;
  }
};

export const toTwoDecimals = (input: string) => {
  let value = parseFloat(input).toFixed(2);
  let valueAsNumber = Number(value);

  if (Number.isNaN(valueAsNumber)) {
    return "0.00";
  } else {
    return value;
  }
};

export const toInteger = (input: string) => {
  let value = parseInt(input);

  if (Number.isNaN(value)) {
    return "0";
  } else {
    return value.toString();
  }
};
