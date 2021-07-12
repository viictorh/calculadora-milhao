import React, { useState } from "react";
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
  let tempo = 0;
  let jurosreal = 0;

  return (
    <div>
      <h1>Calculadora do primeiro milhão</h1>
      <form noValidate>
        <div>
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
          Juros reais:
          {(jurosreal = calcRealInterestRate(interestRate, taxes, inflation))}
          {
            (tempo = calcNPER(
              calcRate(jurosreal),
              -contribution,
              -moneyStart,
              1_000_000,
              0
            ))
          }
          <br></br>
          Meses: {tempo}
          <br></br>
          Idade ao atingir objetivo: {calcAge(age, tempo)}
          <br></br>
          Montante acumulado:
          {-calcFV(calcRate(interestRate), tempo, contribution, moneyStart, 0)}
        </div>
      </form>
    </div>
  );
};

export default App;
