// Importação de Hooks essenciais do React para gerenciamento de estado e ciclo de vida
import { useState, useEffect } from "react";
// Importação do Hook do react-router-dom para gerenciar o redirecionamento de páginas
import { useNavigate } from "react-router-dom";

// Importações de estilização (CSS Modules) e arquivos de imagens/logos locais
import styles from "./home.module.css";
import logoImage from "../../assets/logo.png";
import banner from "../../assets/banner2.png";
import enemLogo from "../../assets/enem.png";
import uspLogo from "../../assets/usp.png";
import unicampLogo from "../../assets/unicamp.png";
import unespLogo from "../../assets/Logo_Unesp.svg";
import pucLogo from "../../assets/puc.png";
import tupiImage from "../../assets/tupi.png";
import Enem from "../Faculdades/Enem/Enem";
import Header from "../../components/Header/Header";
// Importação dos componentes das páginas internas de cada faculdade
import Usp from "../Faculdades/Usp/Usp";
import Unicamp from "../Faculdades/Unicamp/Unicamp";
import Unesp from "../Faculdades/Unesp/Unesp";
import Puccamp from "../Faculdades/Puccamp/Puccamp";

// Importação de ícones vetoriais da biblioteca lucide-react
import pdfSimulado from "../../assets/SIMULADOS.pdf";
import {
  BookOpen,
  ClipboardPen,
  BarChart3,
  UserCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  // Estados para controlar o índice do carrossel e detectar se o dispositivo é mobile (< 900px)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const [perfilAberto, setPerfilAberto] = useState(false);
  const navigate = useNavigate();

  const universityCards = [
    { nome: "ENEM", logo: enemLogo, path: "/enem" },
    { nome: "USP", logo: uspLogo, path: "/usp" },
    { nome: "UNICAMP", logo: unicampLogo, path: "/unicamp" },
    { nome: "UNESP", logo: unespLogo, path: "/unesp" },
    { nome: "PUC", logo: pucLogo, path: "/puccamp" },
  ];

  // Lógica de paginação do carrossel: define quantos cards exibir e extrai o pedaço correto do array
  const cardsToShow = isMobile ? 2 : 3;
  const visibleCards = universityCards.slice(
    currentSlide,
    currentSlide + cardsToShow,
  );

  const irParaBancoDeQuestoes = () => {
    navigate("/bq");
  };

  const irParaDesempenho = () => {
    navigate("/desempenho");
  };

  const irParaSimulado = () => {
    window.open(pdfSimulado, "_blank", "noopener,noreferrer");
  };

  const abrirManualDoUsuario = () => {
    window.open(manualDoUsuario, "_blank", "noopener,noreferrer");
    setPerfilAberto(false);
  };

  const nextSlide = () => {
    if (currentSlide < universityCards.length - cardsToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Detectar mudanças de tamanho de tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    // Remove o listener quando o componente for desmontado para evitar vazamento de memória
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleUniversityClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      {/* Cabeçalho principal com logo, links do menu superior e botão de perfil */}
      <Header />

      {/* Seção Hero: Banner de destaque da página inicial */}
      <section className={styles.hero}>
        <img src={banner} alt="Banner" className={styles.heroImage} />
      </section>

      {/* Seção do Carrossel Dinâmico de Faculdades */}
      <section className={styles.section}>
        <h2>Escolas Universitárias</h2>

        <div className={styles.carouselWrapper}>
          <button className={styles.arrowButton} onClick={prevSlide}>
            <ChevronLeft size={22} />
          </button>

          <div className={styles.carousel}>
            {/* Mapeia apenas os cartões que estão visíveis no momento atual do slide */}
            {visibleCards.map((university) => (
              <div
                key={university.nome}
                className={styles.uniCard}
                onClick={() => handleUniversityClick(university.path)}
                style={{ cursor: "pointer" }}
              >
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

      {/* Seção de Estatísticas: Gráficos de rendimento simulados via CSS */}
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
            {/* Card com histórico de evolução mensal (Barras de progresso) */}
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

      {/* Seção de Depoimentos/Avaliações dos usuários da plataforma */}
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
