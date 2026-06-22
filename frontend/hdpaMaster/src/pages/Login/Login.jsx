import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
import "../../index.css";
import logo from "../../assets/logo.png";
import emailImg from "../../assets/email.png";
import senhaImg from "../../assets/padlock.png";
import { useNavigate } from "react-router-dom";
import { getToken, isTokenExpired, setToken } from "../../utils/auth";

// Tela de autenticação: coleta e-mail/senha, chama a API e salva o token retornado.
function Login() {
  // Estados ligados aos inputs do formulário.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Se já existir um token válido, evita mostrar o login novamente.
  useEffect(() => {
    const token = getToken();
    if (token && !isTokenExpired(token)) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  // Envia as credenciais para o backend e trata sucesso ou erro de autenticação.
  async function handleLogin(event) {
    event.preventDefault();

    // Validação simples para não chamar a API com campos vazios.
    if (!email || !password) {
      alert("Preencha e-mail e senha.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || data.mensagem || "Falha no login");
      }

      const data = await response.json();
      setToken(data.token);
      navigate("/home");

    } catch (error) {
      // Mostra para o usuário a mensagem enviada pela API ou o erro padrão.
      alert(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        {/* Área visual do logo acima do formulário. */}
        <div className={styles.alignLogo}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </div>

        {/* Formulário controlado: cada input atualiza seu respectivo estado. */}
        <form className={styles.LoginBox} id="loginForm" onSubmit={handleLogin}>
          <h2>Acesse a plataforma</h2>

          <label className={styles.label}>
            E-mail
            <div className={styles.inputImg}>
              <img src={emailImg} alt="email" />

              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="Digite o seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </label>

          <label className={styles.label}>
            Senha
            <div className={styles.inputImg}>
              <img src={senhaImg} alt="senha" />
              <input
                id="password"
                type="password"
                className={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>

          <input className={styles.btnSubmit} type="submit" value="ENTRAR" />
        </form>
      </div>
    </div>
  );
}

export default Login;
