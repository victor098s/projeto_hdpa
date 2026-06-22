import logoImage from "../../assets/logo.png";
import pdfSimulado from "../../assets/SIMULADOS.pdf";
import manualDoUsuario from "../../assets/MANUAL DO USUÁRIO.pdf";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  Menu,
  X,
} from "lucide-react";

// Cabeçalho reutilizado nas páginas internas, com logo, atalhos, perfil e menu mobile.
function Header() {
  // Controla a abertura do menu de navegação e do dropdown de perfil.
  const [menuAberto, setMenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  const navigate = useNavigate();

  // Alterna a visibilidade do menu em telas menores.
  const menuToggle = () => {
    setMenuAberto((aberto) => !aberto);
  };

  // Navega para uma rota interna e fecha o menu para evitar que ele fique aberto no destino.
  const irPara = (rota) => {
    navigate(rota);
    setMenuAberto(false);
  };

  // Abre o PDF de simulados em uma nova aba do navegador.
  const abrirSimulados = () => {
    window.open(pdfSimulado, "_blank", "noopener,noreferrer");
    setMenuAberto(false);
  };

  // Abre o manual do usuário e fecha o dropdown de perfil.
  const abrirManualDoUsuario = () => {
    window.open(manualDoUsuario, "_blank", "noopener,noreferrer");
    setPerfilAberto(false);
    setMenuAberto(false);
  };

  // Encerra a sessão local e redireciona o usuário para o login.
  const sair = () => {
    localStorage.clear(); // ou remova apenas o token
    setPerfilAberto(false);
    setMenuAberto(false);
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <Link to="/home">
          {/* Logo também funciona como atalho para retornar à página inicial autenticada. */}
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

      {/* Menu principal com ações de estudo e desempenho. */}
      <div className={menuAberto ? styles.menuAberto : styles.menu}>
        <button
          className={styles.menuItem}
          type="button"
          onClick={() => irPara("/bq")}
        >
          <BookOpen size={24} />
          <span>Banco de Questões</span>
        </button>

        <button
          className={styles.menuItem}
          type="button"
          onClick={abrirSimulados}
        >
          <ClipboardPen size={24} />
          <span>Simulados</span>
        </button>

        <button
          className={styles.menuItem}
          type="button"
          onClick={() => irPara("/desempenho")}
        >
          <BarChart3 size={24} />
          <span>Meu Desempenho</span>
        </button>

        {/* Ações do perfil exibidas dentro do menu hambúrguer em telas de celular. */}
        <div className={styles.mobileProfileActions}>
          <span className={styles.mobileProfileTitle}>Perfil</span>

          <button
            className={styles.profileMenuButton}
            type="button"
            onClick={abrirManualDoUsuario}
          >
            Manual do Usuário
          </button>

          <button className={styles.logoutButton} type="button" onClick={sair}>
            Sair
          </button>
        </div>
      </div>

      {/* Perfil */}
      <div className={styles.profileContainer}>
        <button
          className={styles.profileButton}
          type="button"
          onClick={() => setPerfilAberto(!perfilAberto)}
        >
          <UserCircle2 size={34} />
        </button>

        {perfilAberto && (
          // Dropdown exibido apenas quando o usuário clica no ícone de perfil.
          <div className={styles.profileMenu}>
            <span className={styles.profileTitle}>Perfil</span>

            <button
              className={styles.profileMenuButton}
              onClick={abrirManualDoUsuario}
            >
              Manual do Usuário
            </button>

            <button className={styles.logoutButton} onClick={sair}>
              Sair
            </button>
          </div>
        )}
      </div>

      {/* Botão hambúrguer troca entre abrir e fechar o menu responsivo. */}
      <button className={styles.menuToggle} type="button" onClick={menuToggle}>
        {menuAberto ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;
