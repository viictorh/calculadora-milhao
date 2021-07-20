import { Typography } from "@material-ui/core";
import "../layout/header.css";

const Header = () => {
  return (
    <div className="header-bg">
      <Typography variant="h1" align="center" className="header-text">
        Calculadora do primeiro milhão
      </Typography>
    </div>
  );
};

export default Header;
