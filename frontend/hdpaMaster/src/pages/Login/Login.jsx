import React, { useState } from "react";
import styles from "./Login.module.css";
import "../../index.css";
import logo from "../../assets/logo.png";
import emailImg from "../../assets/email.png";
import senhaImg from "../../assets/padlock.png";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

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
        throw new Error(data.mensagem || "Falha no login");
      }

      const data = await response.json();
      localStorage.setItem("jwtToken", data.token);
      navigate("/home")

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.alignLogo}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
        </div>

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
