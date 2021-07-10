export const toMoney = (value) => {
  let number = parseFloat(value);
  console.log("depoisparse", value);
  return number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};
