import styles from "./Desempenho.module.css";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

// Página responsável por mostrar o resumo de desempenho do usuário.
export default function Desempenho() {
  // Guarda os números principais calculados a partir das respostas salvas no navegador.
  const [dados, setDados] = useState({
    total: 0,
    acertos: 0,
    erros: 0,
    percentual: 0,
  });

  // Ao carregar a página, busca as respostas no localStorage e calcula total, acertos e erros.
  useEffect(() => {
    // Se não houver nada salvo, usa um array vazio para evitar erro no JSON/filter.
    const respostas =
      JSON.parse(localStorage.getItem("respostas")) || [];

    // Quantidade total de questões respondidas.
    const total = respostas.length;

    // Conta apenas as respostas marcadas como corretas.
    const acertos = respostas.filter(
      (r) => r.acertou
    ).length;

    // Tudo que não foi acerto entra como erro.
    const erros = total - acertos;

    // Calcula a porcentagem de acertos; quando não há respostas, mantém 0.
    const percentual =
      total > 0
        ? ((acertos / total) * 100).toFixed(2)
        : 0;

    // Atualiza o estado para que os cards e gráficos sejam renderizados com os novos valores.
    setDados({
      total,
      acertos,
      erros,
      percentual,
    });
  }, []);

  // Calcula a porcentagem de erros usada no gráfico circular do card de resultado.
  const porcentagemErros =
    dados.total > 0
      ? ((dados.erros / dados.total) * 100).toFixed(0)
      : 0;

  return (
    <div className={styles.container}>
      {/* Cabeçalho padrão da aplicação. */}
      <Header />

      {/* Barra decorativa superior da página. */}
      <div className={styles.topBar}></div>

      {/* Conteúdo central com título e cards de desempenho. */}
      <div className={styles.content}>
        <h1>Meu Desempenho</h1>

        <div className={styles.line}></div>

        <div className={styles.cards}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <h3>TAXA DE ACERTOS</h3>

            <div className={styles.card1Content}>
              {/* Círculo de progresso criado com gradientes CSS usando o percentual de acertos. */}
              <div
                className={styles.circle}
                style={{
                  background: `
                    radial-gradient(
                      closest-side,
                      #efefef 88%,
                      transparent 89%
                    ),
                    conic-gradient(
                      #0d4cff ${dados.percentual}%,
                      #c7c7c7 0
                    )
                  `,
                }}
              >
                <span>{dados.percentual}%</span>
              </div>

              {/* Números resumidos ao lado do gráfico: total respondido e quantidade de acertos. */}
              <div className={styles.info}>
                <div className={styles.infoBox}>
                  <strong>{dados.total}</strong>
                  <small>Questões Respondidas</small>
                </div>

                <div className={styles.infoBox}>
                  <strong>{dados.acertos}</strong>
                  <small>Acertos</small>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className={styles.card}>
            <h3>GRÁFICO DE EVOLUÇÃO</h3>

            {/* Barras estáticas representando uma evolução mensal visual. */}
            <div className={styles.chart}>
              <div className={styles.row}>
                <span>ABR</span>
                <div className={styles.bar}>
                  <div style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className={styles.row}>
                <span>MAR</span>
                <div className={styles.bar}>
                  <div style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className={styles.row}>
                <span>FEV</span>
                <div className={styles.bar}>
                  <div style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className={styles.row}>
                <span>JAN</span>
                <div className={styles.bar}>
                  <div style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className={styles.card}>
            <h3>RESULTADO</h3>

            {/* Gráfico de pizza que divide erros e acertos conforme os dados calculados. */}
            <div
              className={styles.pie}
              style={{
                background: `conic-gradient(
                  #1707c5 0deg ${(porcentagemErros / 100) * 360}deg,
                  #506aff ${(porcentagemErros / 100) * 360}deg 360deg
                )`,
              }}
            ></div>

            {/* Legenda com os percentuais exibidos no gráfico de pizza. */}
            <div className={styles.legend}>
              <div className={styles.acertos}>
                <span>ACERTOS</span>
                <strong>{dados.percentual}%</strong>
              </div>

              <div className={styles.erros}>
                <span>ERROS</span>
                <strong>{porcentagemErros}%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra decorativa inferior da página. */}
      <div className={styles.bottomBar}></div>
    </div>
  );
}
