export const toPercent = (number, decimal) => {
  let f = decimal | 2;
  return (number * 100).toFixed(f);
};

export const calcAge = (current, months) => {
  return Math.round(current + months / 12);
};

export const calcRealInterestRate = (interestRate, incomeTax, inflation) => {
  const interestRatePercent = interestRate / 100;
  const incomeTaxPercent = incomeTax / 100;
  const inflationPecent = inflation / 100;
  const result =
    interestRatePercent * (1 - incomeTaxPercent) +
    1 / (inflationPecent + 1) -
    1;
  return toPercent(result);
};

export const calcRate = (realInterestRate) => {
  const a = realInterestRate / 100 + 1;
  const b = 1.0 / 12.0;
  return Math.pow(a, b) - 1;
};

export const calcNPER = (rate, payment, present, future, type) => {
  rate = eval(rate);
  // Return number of periods
  var num = payment * (1 + rate * type) - future * rate;
  var den = present * rate + payment * (1 + rate * type);
  return Math.log(num / den) / Math.log(1 + rate);
};

export const calcFV = (rate, nper, pmt, pv, type) => {
  let pow = Math.pow(1 + rate, nper),
    fv;
  if (rate) {
    fv = (pmt * (1 + rate * type) * (1 - pow)) / rate - pv * pow;
  } else {
    fv = -1 * (pv + pmt * nper);
  }
  return fv.toFixed(2);
};
