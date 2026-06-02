import React from "react";
import styles from "./Usp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";

function Usp() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
    </div>
  );
}

export default Usp;
