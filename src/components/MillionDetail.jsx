import { Divider, Typography } from "@material-ui/core";

const MillionDetail = () => {
  return (
    <div>
      <Typography variant="h4" align="center">
        Alcançando o primeiro milhão
      </Typography>
      <Typography variant="body">
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

      <Typography variant="body">Calculadora do Milhão</Typography>

      <Typography variant="body">
        Para realizar a simulação voce pode utilizar duas formas:
      </Typography>
      <ul>
        <li>
          <Typography variant="body">
            Tempo necessário - Quanto tempo voce demoraria para chegar a 1
            milhão de reais baseando-se, primordialmente, no valor que voce
            consegue aportar mensalmente.
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Aporte mensal - Quanto voce deveria aportar (investir mensalmente)
            para chegar a 1 milhão de reais dentro do prazo estipulado.
          </Typography>
        </li>
      </ul>
      <Typography variant="body">Tempo necessário</Typography>

      <Typography variant="body">
        Para calcular o tempo necessário para ficar rico, é necessário informar:
      </Typography>

      <ul>
        <li>
          <Typography variant="body">
            Valor inicial: quanto você já acumulou até o presente momento.
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Aporte mensal: quanto você consegue investir mensalmente.
          </Typography>
        </li>
        <li>
          <Typography variant="body"> Idade atual. </Typography>
        </li>
        <li>
          <Typography variant="body">
            Taxa de juros: rentabilidade aproximada/esperada de sua carteira de
            investimentos.
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Inflação anual: expectativa de inflação (utilizei 5% ao ano, por se
            tratar da inflação atual aproximada).
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Imposto de renda: incidência do IR sobre seus investimentos
            (utilizei a alíquota de 15%).
          </Typography>
        </li>
      </ul>

      <Typography variant="body">Aporte necessário para ficar rico </Typography>

      <Typography variant="body">
        Para calcular o aporte mensal necessário para alcançar o primeiro
        milhão, é necessário informar:
      </Typography>

      <ul>
        <li>
          <Typography variant="body">
            Valor inicial: quanto você já acumulou até o presente momento.
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Período para atingir objetivo: em quanto tempo você pretende
            alcançar o primeiro milhão.
          </Typography>
        </li>
        <li>
          <Typography variant="body"> Idade atual. </Typography>
        </li>
        <li>
          <Typography variant="body">
            Taxa de juros: rentabilidade aproximada/esperada de sua carteira de
            investimentos.
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Inflação anual: expectativa de inflação (utilizei 5% ao ano, por se
            tratar da inflação atual aproximada).
          </Typography>
        </li>
        <li>
          <Typography variant="body">
            Imposto de renda: incidência do IR sobre seus investimentos
            (utilizei a alíquota de 15%).
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default MillionDetail;
