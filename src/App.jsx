import "./layout/app.css";
import { Container } from "@material-ui/core";
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

const App = () => {
  const [moneyStart, setMoneyStart] = useState(10000);
  const [contribution, setContribution] = useState(1000);
  const [age, setAge] = useState(30);
  const [interestRate, setInterestRate] = useState(8);
  const [inflation, setInflation] = useState(4.5);
  const [taxes, setTaxes] = useState(15);
  let jurosreal = calcRealInterestRate(interestRate, taxes, inflation);
  let tempo = calcNPER(
    calcRate(jurosreal),
    -contribution,
    -moneyStart,
    1_000_000,
    0
  );

  const showResult = () => {
    return <div>mooooney: {this.moneyStart}</div>;
  };

  return (
    <div>
      <Header />
      <Container>
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
            <br></br>
            Juros reais: {jurosreal}
            <br></br>
            Meses: {tempo}
            <br></br>
            Idade ao atingir objetivo: {calcAge(age, tempo)}
            <br></br>
            Montante acumulado:
            {
              -calcFV(
                calcRate(interestRate),
                tempo,
                contribution,
                moneyStart,
                0
              )
            }
          </div>

          {this.showResult()}
        </form>
      </Container>
    </div>
  );
};

export default App;
