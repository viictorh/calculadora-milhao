import { Typography } from "@material-ui/core";

const DetailByTime = () => {
  return (
    <div>
      <Typography variant="h5" style={{ paddingTop: "30" }}>
        Primeiro milhão - Tempo necessário
      </Typography>

      <Typography variant="body2">
        Para calcular o tempo necessário para ficar rico, é necessário informar:
      </Typography>

      <ul>
        <li>
          <Typography variant="body2"> Idade atual. </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Aporte mensal: quanto você consegue investir mensalmente.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Valor inicial: quanto você já acumulou até o presente momento.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Taxa de juros: rentabilidade aproximada/esperada de sua carteira de
            investimentos.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Inflação anual: expectativa de inflação (utilizei 4% ao ano, por se
            tratar da inflação atual aproximada).
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            Imposto de renda: incidência do IR sobre seus investimentos
            (utilizei a alíquota de 15%).
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default DetailByTime;
