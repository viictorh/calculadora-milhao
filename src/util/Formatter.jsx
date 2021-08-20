export const toMoney = (value) => {
  let number = parseFloat(value);

  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const roundUp = (value) => {
  return Math.ceil(value);
};
