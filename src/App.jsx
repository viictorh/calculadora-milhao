import "./layout/app.css";
import { Container, Divider, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Header from "./components/Header";
import NumberInput from "./components/NumberInput";
import {
  calcRate,
  calcRealInterestRate,
  calcNPER,
  calcAge,
  calcFV,
} from "./util/Math";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import IconLabel from "./components/IconLabel";
import MillionDetail from "./components/MillionDetail";

const calculateResult = (inputData) => {
  const { moneyStart, contribution, age, interestRate, inflation, taxes } =
    inputData;

  const realInterestRate = calcRealInterestRate(interestRate, taxes, inflation);
  const time = calcNPER(
    calcRate(realInterestRate),
    -contribution,
    -moneyStart,
    1_000_000,
    0
  );
  const goalAge = calcAge(age, time);
  const value = -calcFV(
    calcRate(interestRate),
    time,
    contribution,
    moneyStart,
    0
  );

  return { realInterestRate, time, goalAge, value };
};

const renderResult = (result) => {
  const { realInterestRate, time, goalAge, value } = result;

  return (
    <div className="result-block">
      <Typography variant="h4" align="center">
        Resultado
      </Typography>

      <div className="result-block-content">
        <IconLabel
          Icon={TrendingUpIcon}
          label="Juros reais"
          value={realInterestRate}
        />
        <IconLabel Icon={CalendarTodayIcon} label="Meses" value={time} />
        <IconLabel
          Icon={PersonIcon}
          label="Idade ao atingir objetivo"
          value={goalAge}
        />
        <IconLabel
          Icon={AttachMoneyIcon}
          label="Montante acumulado"
          value={value}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [moneyStart, setMoneyStart] = useState(10000);
  const [contribution, setContribution] = useState(1000);
  const [age, setAge] = useState(30);
  const [interestRate, setInterestRate] = useState(8);
  const [inflation, setInflation] = useState(4.5);
  const [taxes, setTaxes] = useState(15);

  const inputData = {
    moneyStart,
    contribution,
    age,
    interestRate,
    inflation,
    taxes,
  };
  const result = calculateResult(inputData);

  return (
    <div>
      <Header />
      <Container className="styled">
        <form noValidate>
          <div className="input-data">
            <NumberInput
              id="dinheiro-inicial"
              label="Montante inicial"
              value={moneyStart}
              handleChange={setMoneyStart}
            />
            <NumberInput
              id="aporte"
              label="Aporte mensal"
              value={contribution}
              handleChange={setContribution}
            />
            <NumberInput
              id="idade"
              label="Sua idade"
              value={age}
              handleChange={setAge}
              adorment=""
            />
            <NumberInput
              id="juros"
              label="Taxa de juros ao ano"
              value={interestRate}
              handleChange={setInterestRate}
              adorment="%"
            />
            <NumberInput
              id="inflacao"
              label="Inflação ao ano"
              value={inflation}
              handleChange={setInflation}
              adorment="%"
            />
            <NumberInput
              id="ir"
              label="Imposto de renda"
              value={taxes}
              handleChange={setTaxes}
              adorment="%"
            />
          </div>
        </form>
        {renderResult(result)}

        <MillionDetail />
      </Container>
    </div>
  );
};

export default App;
