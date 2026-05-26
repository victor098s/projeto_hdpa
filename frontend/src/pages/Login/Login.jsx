import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.alignLogo}>
          <div className={styles.logo}>#</div>
        </div>

        <div className={styles.LoginBox}>
          <h2>Acesse a plataforma</h2>

          <label className={styles.label}>
            E-mail
            <input
              type="email"
              className={styles.input}
              placeholder="Digite o seu e-mail"
            />
          </label>

          <label className={styles.label}>
            Senha
            <input
              type="password"
              className={styles.input}
              placeholder="Digite sua senha"
            />
          </label>

          <input type="submit" placeholder="ENTRAR" />
        </div>
      </div>
    </div>
  );
}

export default Login;
