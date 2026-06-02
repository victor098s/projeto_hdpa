import React from "react";
import styles from "./Menu.module.css";
import Usp from "../../pages/faculdades/usp/Usp";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <NavLink to="/enem">
          <p>ENEM</p>
        </NavLink>
        <NavLink to="/usp">
          <p>USP</p>
        </NavLink>
        <NavLink to="/unicamp">
          <p>UNICAMP</p>
        </NavLink>
        <NavLink to="/unesp">
          <p>UNESP</p>
        </NavLink>
        <NavLink to="/puc">
          <p>PUC</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
