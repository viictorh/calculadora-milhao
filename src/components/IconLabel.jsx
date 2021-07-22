import "../layout/iconLabel.css";
import { Typography } from "@material-ui/core";
import React from "react";

const IconLabel = ({ Icon, label, value }) => {
  return (
    <div className="icon-label">
      <Icon fontSize="large" />
      <Typography
        display="block"
        variant="caption"
        className="icon-label-caption"
      >
        {label}
      </Typography>
      <Typography variant="body" className="icon-label-value">
        {value}
      </Typography>
    </div>
  );
};

export default IconLabel;
