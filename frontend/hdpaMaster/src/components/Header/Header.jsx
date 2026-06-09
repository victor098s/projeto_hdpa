import logoImage from "../../assets/logo.png";
import React from "react";
import styles from "./Header.module.css";
import { useState } from "react";

import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

function Header() {


  const [menuAberto, setMenuAberto] = useState(false);

  const menuToggle = () => {
    setMenuAberto(!menuAberto);
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>

      <div className={ menuAberto ? styles.menuAberto : styles.menu}>
        <div className={styles.menuItem}>
          <BookOpen size={24} />
          <span>Banco de Questões</span>
        </div>

        <div className={styles.menuItem}>
          <ClipboardPen size={24} />
          <span>Simulados</span>
        </div>

        <div className={styles.menuItem}>
          <BarChart3 size={24} />
          <span>Meu Desempenho</span>
        </div>
      </div>

      <button className={styles.profileButton}>
        <UserCircle2 size={34} />
      </button>


    <button className={styles.menuToggle} onClick={menuToggle}>
      {menuAberto ? <X size={24} /> : <Menu size={24} />}
    </button>

    </header>
  );
}

export default Header;
