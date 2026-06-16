import styles from "./Desempenho.module.css";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";

export default function Desempenho() {
  const [dados, setDados] = useState({
    total: 0,
    acertos: 0,
    erros: 0,
    percentual: 0,
  });

  useEffect(() => {
    const respostas =
      JSON.parse(localStorage.getItem("respostas")) || [];

    const total = respostas.length;

    const acertos = respostas.filter(
      (r) => r.acertou
    ).length;

    const erros = total - acertos;

    const percentual =
      total > 0
        ? ((acertos / total) * 100).toFixed(2)
        : 0;

    setDados({
      total,
      acertos,
      erros,
      percentual,
    });
  }, []);

  const porcentagemErros =
    dados.total > 0
      ? ((dados.erros / dados.total) * 100).toFixed(0)
      : 0;

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.topBar}></div>

      <div className={styles.content}>
        <h1>Meu Desempenho</h1>

        <div className={styles.line}></div>

        <div className={styles.cards}>
          {/* CARD 1 */}
          <div className={styles.card}>
            <h3>TAXA DE ACERTOS</h3>

            <div className={styles.card1Content}>
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

            <div
              className={styles.pie}
              style={{
                background: `conic-gradient(
                  #1707c5 0deg ${(porcentagemErros / 100) * 360}deg,
                  #506aff ${(porcentagemErros / 100) * 360}deg 360deg
                )`,
              }}
            ></div>

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

      <div className={styles.bottomBar}></div>
    </div>
  );
}