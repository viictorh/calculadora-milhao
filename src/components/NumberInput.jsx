import React, { useState } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import { toMoney } from "../util/Formatter";

const NumberInput = ({ id, label, value, handleChange, adorment = "R$" }) => {
  const formatMoney = (e) => {
    //trata e formata o número

    handleChange(e.target.value);
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
