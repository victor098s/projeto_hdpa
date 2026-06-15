import styles from "./Simulados.module.css";

export default function Simulados() {
  return (
    <div className={styles.container}>
      <h1>Simulados</h1>

      <h3>Novo Simulado</h3>

      <div className={styles.card}>
        <p>
          Atenção: Você poderá realizar o simulado uma única vez.
          Ao iniciá-lo, a contagem de tempo não poderá ser interrompida.
          Além disso, simulados iniciados serão finalizados automaticamente
          ao final do tempo disponível para resolução.
        </p>

        <div className={styles.form}>
          <label>TEMAS</label>

          <select>
            <option>Selecione uma disciplina</option>
            <option>Matemática</option>
            <option>Português</option>
            <option>História</option>
            <option>Geografia</option>
          </select>
        </div>

        <div className={styles.footer}>
          <button>INICIAR</button>
        </div>
      </div>
    </div>
  );
}