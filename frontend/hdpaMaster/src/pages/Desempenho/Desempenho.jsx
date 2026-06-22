import styles from "./Desempenho.module.css";
import Header from "../../components/Header/Header";
import { useNavigate, Link } from "react-router-dom";

// Página de desempenho com indicadores visuais estáticos de acertos, evolução e erros.
export default function Desempenho() {
  return (
    <div className={styles.container}>
      <Header />

      {/* Barras visuais que enquadram a área de conteúdo. */}
      <div className={styles.topBar}></div>

      <div className={styles.content}>
        <h1>Meu Desempenho</h1>

        <div className={styles.line}></div>

        <div className={styles.cards}>
          {/* Agrupa os três painéis principais do desempenho do estudante. */}
          {/* Card 1 */}
          <div className={styles.card}>
            <h3>TAXA DE ACERTOS</h3>

            <div className={styles.card1Content}>
              <div className={styles.circle}>
                <span>57,14%</span>
              </div>

              <div className={styles.info}>
                <div className={styles.infoBox}>
                  <strong>336</strong>
                  <small>Questões Respondidas</small>
                </div>

                <div className={styles.infoBox}>
                  <strong>192</strong>
                  <small>Acertos</small>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3>GRÁFICO DE EVOLUÇÃO</h3>

            {/* Cada linha representa um mês, e a largura inline simula o avanço do desempenho. */}
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
                  <div style={{ width: "88%" }}></div>
                </div>
              </div>

              <div className={styles.row}>
                <span>FEV</span>
                <div className={styles.bar}>
                  <div style={{ width: "68%" }}></div>
                </div>
              </div>

              <div className={styles.row}>
                <span>JAN</span>
                <div className={styles.bar}>
                  <div style={{ width: "42%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3>ABRIL</h3>

            {/* O gráfico de pizza é desenhado via CSS usando gradiente cônico. */}
            <div className={styles.pie}></div>

            <div className={styles.legend}>
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

      {/* Rodapé visual da página. */}
      <div className={styles.bottomBar}></div>
    </div>
  );
}
