import { Typography } from "@material-ui/core";
import DetailByTime from "./DetailByTime";
import DetailByInvestment from "./DetailByInvestment";

const MillionDetail = ({ type }) => {
  return (
    <div>
      <Typography variant="h4" align="center">
        Alcançando o primeiro milhão
      </Typography>
      <Typography variant="body2">
        Muitas pessoas desejam alcançar o primeiro milhão e muitas buscam
        calculadoras para mostrar quando e quanto poupar para alcançar este
        objetivo, porém muitas dessas calculadoras ignoram uma questão simples:
        inflação. Na calculadora acima, você verá quando atingirá seu objetivo e
        qual valor terá acumulado que permitirá manter o mesmo poder de compra
        de 1 milhão nos dias atuais. Explicando, voce deve notar que os R$100,00
        reais que voce tem hoje não consegue comprar as mesmas coisas que voce
        costumava comprar anos atras. Isso ocorre devido a inflação no periodo,
        que faz com que os preços aumentem. Sendo assim, daqui 10, 20 anos, 1
        milhão de reais não permitirá que voce compre, por exemplo, aquele
        apartamento de 1 milhão de reais hoje. Ao utilizar a calculadora do
        milhão acima, será identificado o Juros Real anual, que permitirá
        ajustar os valores de acordo.
      </Typography>

      <Typography variant="h5" style={{ paddingTop: "30" }}>
        Para calcular quando voce alcançará o primeiro milhão, voce pode
        utilizar 2 formas:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2">
            <b> Tempo necessário </b>- Quanto tempo voce demoraria para chegar à
            1 milhão de reais baseando-se, primordialmente, no valor que voce
            consegue aportar mensalmente.
          </Typography>
        </li>
        <li>
          <Typography variant="body2">
            <b> Aporte mensal </b>- Quanto voce deveria aportar (investir
            mensalmente) para chegar a 1 milhão de reais dentro do prazo
            estipulado.
          </Typography>
        </li>
      </ul>

      {type === "TIME" ? <DetailByTime /> : <DetailByInvestment />}
    </div>
  );
};

export default MillionDetail;
