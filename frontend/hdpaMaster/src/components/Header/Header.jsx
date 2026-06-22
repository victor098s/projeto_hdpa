import logoImage from "../../assets/logo.png";
import pdfSimulado from "../../assets/SIMULADOS.pdf";
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

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  const navigate = useNavigate();

  const menuToggle = () => {
    setMenuAberto((aberto) => !aberto);
  };

  const irPara = (rota) => {
    navigate(rota);
    setMenuAberto(false);
  };

  const abrirSimulados = () => {
    window.open(pdfSimulado, "_blank", "noopener,noreferrer");
    setMenuAberto(false);
  };

  const abrirManual = () => {
    window.open("/manual.pdf", "_blank");
    setPerfilAberto(false);
  };

  const sair = () => {
    localStorage.clear(); // ou remova apenas o token
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <Link to="/home">
          <img src={logoImage} alt="Logo" className={styles.logoImage} />
        </Link>
      </div>

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
          <div className={styles.profileMenu}>
            <span className={styles.profileTitle}>Perfil</span>

            <button
              className={styles.profileMenuButton}
              onClick={abrirManual}
            >
              Manual do Usuário
            </button>

            <button
              className={styles.logoutButton}
              onClick={sair}
            >
              Sair
            </button>
          </div>
        )}
      </div>

      <button className={styles.menuToggle} type="button" onClick={menuToggle}>
        {menuAberto ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Header;