import logoImage from "../../assets/LOGO2.png";
import React from "react";
import styles from "./Header.module.css";

import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoArea}>
        <img src={logoImage} alt="Logo" className={styles.logoImage} />
      </div>

      <div className={styles.menu}>
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
    </header>
  );
}

export default Header;
