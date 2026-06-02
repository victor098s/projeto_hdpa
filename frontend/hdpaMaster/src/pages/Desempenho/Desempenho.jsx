import styles from "./Desempenho.module.css";

export default function Desempenho() {
  return (
    <div className={styles.container}>
      <h1>Meu Desempenho</h1>

      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>TAXA DE ACERTOS</h3>

          <div className={styles.circle}>
            <span>57,14%</span>
          </div>

          <div className={styles.info}>
            <div>
              <strong>336</strong>
              <p>Questões Respondidas</p>
            </div>

            <div>
              <strong>192</strong>
              <p>Acertos</p>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>GRÁFICO DE EVOLUÇÃO</h3>

          <div className={styles.grafico}>
            <div>
              <span>ABR</span>
              <div className={styles.bar}>
                <div style={{ width: "100%" }} />
              </div>
            </div>

            <div>
              <span>MAR</span>
              <div className={styles.bar}>
                <div style={{ width: "85%" }} />
              </div>
            </div>

            <div>
              <span>FEV</span>
              <div className={styles.bar}>
                <div style={{ width: "65%" }} />
              </div>
            </div>

            <div>
              <span>JAN</span>
              <div className={styles.bar}>
                <div style={{ width: "40%" }} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h3>ABRIL</h3>

          <div className={styles.pizza}></div>

          <div className={styles.legenda}>
            <div className={styles.acertos}>
              <span>ACERTOS</span>
              <strong>87%</strong>
            </div>

            <div className={styles.erros}>
              <span>ERROS</span>
              <strong>13%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}