import React, { useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { toMoney } from "../util/Formatter";

const NumberInput = ({ id, label, value, handleChange, adorment = "R$" }) => {
  const formatMoney = (e) => {
    //trata e formata o número
    let result = e.target.value;
    console.log("numberinput", result, +result || 0, isNaN(result));
    result = +result ? handleChange(parseFloat(result)) : handleChange(0);
  };

  return (
    <TextField
      required
      id={id}
      label={label}
      value={value}
      onChange={formatMoney}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{adorment}</InputAdornment>
        ),
      }}
    />
  );
};

export default NumberInput;
