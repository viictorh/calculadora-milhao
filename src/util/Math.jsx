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

/**
 * Copy of Excel's PMT function.
 * Credit: http://stackoverflow.com/questions/2094967/excel-pmt-function-in-js
 *
 * @param rate_per_period       The interest rate for the loan.
 * @param number_of_payments    The total number of payments for the loan in months.
 * @param present_value         The present value, or the total amount that a series of future payments is worth now;
 *                              Also known as the principal.
 * @param future_value          The future value, or a cash balance you want to attain after the last payment is made.
 *                              If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param type                  Optional, defaults to 0. The number 0 (zero) or 1 and indicates when payments are due.
 *                              0 = At the end of period
 *                              1 = At the beginning of the period
 * @returns {number}
 */
export const calcPMT = (
  rate_per_period,
  number_of_payments,
  present_value,
  future_value,
  type
) => {
  future_value = typeof future_value !== "undefined" ? future_value : 0;
  type = typeof type !== "undefined" ? type : 0;

  if (rate_per_period != 0.0) {
    // Interest rate exists
    var q = Math.pow(1 + rate_per_period, number_of_payments);
    return (
      -(rate_per_period * (future_value + q * present_value)) /
      ((-1 + q) * (1 + rate_per_period * type))
    );
  } else if (number_of_payments != 0.0) {
    // No interest rate, but number of payments exists
    return -(future_value + present_value) / number_of_payments;
  }

  return 0;
};
