import React from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

// Menu secundário usado nas páginas das universidades para alternar entre instituições.
function Menu() {
  return (
    <div className={styles.container}>
      {/* NavLink cria links internos sem recarregar a aplicação inteira. */}
      <div className={styles.navBar}>
        <NavLink to="/enem">
          <p className="textMenu">ENEM</p>
        </NavLink>
        <NavLink to="/usp">
          <p className="textMenu">USP</p>
        </NavLink>
        <NavLink to="/unicamp">
          <p className="textMenu">UNICAMP</p>
        </NavLink>
        <NavLink to="/unesp">
          <p className="textMenu">UNESP</p>
        </NavLink>
        <NavLink to="/puccamp">
          <p className="textMenu">PUC</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
