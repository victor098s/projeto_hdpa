import React from "react";
import styles from "./Menu.module.css";
import Usp from "../../pages/faculdades/usp/Usp";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.container}>
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
        <NavLink to="/puc">
          <p className="textMenu">PUC</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
