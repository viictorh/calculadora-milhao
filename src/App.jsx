import "./layout/app.css";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import Header from "./components/Header";
import NumberInput from "./components/NumberInput";
import {
  calcRate,
  calcRealInterestRate,
  calcNPER,
  calcAge,
  calcFV,
  calcPMT,
} from "./util/Math";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PersonIcon from "@material-ui/icons/Person";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import IconLabel from "./components/IconLabel";
import MillionDetail from "./components/MillionDetail";
import { roundUp, toMoney } from "./util/Formatter";
import { Payment } from "@material-ui/icons";

const GOAL = 1_000_000;

const calculateResult = (inputData) => {
  const {
    type,
    yearsToGoal,
    moneyStart,
    contribution,
    age,
    interestRate,
    inflation,
    taxes,
  } = inputData;

  const realInterestRate = calcRealInterestRate(interestRate, taxes, inflation);

  let goalAge = 0;
  let time = 0;
  let pmt;
  if (type === "INVEST") {
    pmt = -calcPMT(
      calcRate(realInterestRate),
      yearsToGoal * 12,
      -moneyStart,
      GOAL,
      0
    );
    goalAge = age + yearsToGoal;

    time = calcNPER(calcRate(realInterestRate), -pmt, -moneyStart, GOAL, 0);
  } else {
    time = calcNPER(
      calcRate(realInterestRate),
      -contribution,
      -moneyStart,
      GOAL,
      0
    );
    goalAge = calcAge(age, time);
  }

  time = calcNPER(
    calcRate(realInterestRate),
    -contribution,
    -moneyStart,
    GOAL,
    0
  );

  const value = -calcFV(
    calcRate(interestRate),
    time,
    contribution,
    moneyStart,
    0
  );

  return { realInterestRate, time, goalAge, value, pmt };
};

const renderResult = (result) => {
  const { realInterestRate, time, goalAge, value, pmt } = result;

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
        {pmt ? (
          <IconLabel
            Icon={Payment}
            label="Aporte mensal"
            value={toMoney(pmt)}
          />
        ) : (
          <IconLabel
            Icon={CalendarTodayIcon}
            label="Meses"
            value={roundUp(time)}
          />
        )}

        <IconLabel
          Icon={PersonIcon}
          label="Idade ao atingir objetivo"
          value={goalAge}
        />
        <IconLabel
          Icon={AttachMoneyIcon}
          label="Valor acumulado"
          value={toMoney(value)}
        />
      </div>
    </div>
  );
};

const App = () => {
  const [age, setAge] = useState(30);
  const [moneyStart, setMoneyStart] = useState(10000);
  const [contribution, setContribution] = useState(1000);
  const [yearsToGoal, setYearsToGoal] = useState(10);
  const [interestRate, setInterestRate] = useState(8);
  const [inflation, setInflation] = useState(4);
  const [taxes, setTaxes] = useState(15);
  const [type, setType] = useState("TIME");

  const inputData = {
    type,
    moneyStart,
    contribution,
    age,
    interestRate,
    inflation,
    taxes,
    yearsToGoal,
  };
  const result = calculateResult(inputData);

  return (
    <div>
      <Header />
      <Container className="styled">
        <form noValidate>
          <ButtonGroup disableElevation variant="contained">
            <Button
              color={type === "TIME" ? "primary" : ""}
              onClick={() => setType("TIME")}
            >
              Tempo necessário
            </Button>
            <Button
              color={type === "INVEST" ? "primary" : ""}
              onClick={() => setType("INVEST")}
            >
              Aporte mensal
            </Button>
          </ButtonGroup>

          <div className="input-data">
            <NumberInput
              id="idade"
              label="Sua idade"
              value={age}
              handleChange={setAge}
              adorment=""
            />
            {type === "TIME" ? (
              <NumberInput
                id="aporte"
                label="Aporte mensal"
                value={contribution}
                handleChange={setContribution}
              />
            ) : (
              <NumberInput
                id="time"
                label="Anos para o objetivo"
                value={yearsToGoal}
                handleChange={setYearsToGoal}
                adorment=""
              />
            )}

            <NumberInput
              id="dinheiro-inicial"
              label="Valor inicial"
              value={moneyStart}
              handleChange={setMoneyStart}
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

        <MillionDetail type={type} />
      </Container>
    </div>
  );
};

export default App;
