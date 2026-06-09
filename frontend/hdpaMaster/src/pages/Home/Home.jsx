import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

// CORREÇÃO: Adicionado o nome do arquivo 'LOGO2.png' ao final do caminho
import logoImage from "../../assets/LOGO2.png";
import banner from "../../assets/banner2.png";
import enemLogo from "../../assets/enem.png";
import uspLogo from "../../assets/usp.png";
import unicampLogo from "../../assets/unicamp.png";
import unespLogo from '../../assets/Logo_Unesp.svg';
import pucLogo from "../../assets/puc.png";

import tupiImage from "../../assets/tupi.png";

import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const universityCards = [
    { nome: "ENEM", logo: enemLogo },
    { nome: "USP", logo: uspLogo },
    { nome: "UNICAMP", logo: unicampLogo },
    { nome: 'UNESP', logo: unespLogo },
    { nome: "PUC", logo: pucLogo },
  ];

  const visibleCards = universityCards.slice(currentSlide, currentSlide + 3);

  const nextSlide = () => {
    if (currentSlide < universityCards.length - 3) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className={styles.container}>
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

          <Link to="/desempenho" className={styles.menuLink}>
            <div className={styles.menuItem}>
              <BarChart3 size={24} />
              <span>Meu Desempenho</span>
            </div>
          </Link>
        </div>

        <button className={styles.profileButton}>
          <UserCircle2 size={34} />
        </button>
      </header>

      <section className={styles.hero}>
        <img src={banner} alt="Banner" className={styles.heroImage} />
      </section>

      <section className={styles.section}>
        <h2>Escolas Universitárias</h2>

        <div className={styles.carouselWrapper}>
          <button className={styles.arrowButton} onClick={prevSlide}>
            <ChevronLeft size={22} />
          </button>

          <div className={styles.carousel}>
            {visibleCards.map((university) => (
              <div key={university.nome} className={styles.uniCard}>
                <img
                  src={university.logo}
                  alt={university.nome}
                  className={styles.uniLogo}
                />
              </div>
            ))}
          </div>

          <button className={styles.arrowButton} onClick={nextSlide}>
            <ChevronRight size={22} />
          </button>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Visão Geral</h2>
        <div className={styles.overview}>
          <div className={styles.card}>
            <h3>ABRIL</h3>
            <div className={styles.pieChart}></div>
            <div className={styles.progressArea}>
              <div className={styles.progress}>
                <span>ACERTOS</span>
                <strong>87%</strong>
              </div>
              <div className={`${styles.progress} ${styles.progressDark}`}>
                <span>ERROS</span>
                <strong>13%</strong>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <h3>GRÁFICO DE EVOLUÇÃO</h3>

            <div className={styles.barChart}>
              <div className={styles.barRow}>
                <span>ABR</span>
                <div className={`${styles.bar} ${styles.bar1}`} />
              </div>

              <div className={styles.barRow}>
                <span>MAR</span>
                <div className={`${styles.bar} ${styles.bar2}`} />
              </div>

              <div className={styles.barRow}>
                <span>FEV</span>
                <div className={`${styles.bar} ${styles.bar3}`} />
              </div>

              <div className={styles.barRow}>
                <span>JAN</span>
                <div className={`${styles.bar} ${styles.bar4}`} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <h2>Avaliações</h2>
        <div className={styles.reviewCard}>
          <img src={tupiImage} alt="Usuário" />
          <div className={styles.reviewContent}>
            <div className={styles.reviewTop}>
              <h4>ANTÔNIO TUPINAMBÁ</h4>
              <div className={styles.stars}>★★★★★</div>
            </div>
            <p>
              Usei recentemente um site de questões de vestibulares focado em
              Linguagens e tive uma experiência muito positiva. A plataforma é
              bem organizada, com exercícios atualizados e separados por temas.
            </p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}></footer>
    </div>
  );
}
