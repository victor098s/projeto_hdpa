import { useState } from "react";
import {
  FaBookOpen,
  FaChartPie,
  FaBars
} from "react-icons/fa";

import {
  MdQuiz
} from "react-icons/md";

import "./BancoQuestoes.css";

export default function BancoQuestoes() {

  const [menuMobile, setMenuMobile] = useState(false);

  const [disciplina, setDisciplina] = useState("");

  const [banca, setBanca] = useState("enem");

  const [dificuldade, setDificuldade] = useState("todas");

  const [assunto1, setAssunto1] = useState("");
  const [assunto2, setAssunto2] = useState("");
  const [assunto3, setAssunto3] = useState("");

  const filtrarQuestoes = () => {

    const filtros = {
      disciplina,
      banca,
      dificuldade,
      assunto1,
      assunto2,
      assunto3
    };

    console.log(filtros);

    // backend futuramente
  };

  return (
    <div className="banco-page">

      <header className="header">

        <div className="logo">

          <div className="logo-icon">
            <FaBookOpen />
          </div>

          <div className="logo-text">
            <span>Entre</span>
            <span>Linhas.</span>
          </div>

        </div>

        <nav className="desktop-menu">

          <a className="active">
            <MdQuiz />
            Banco de Questões
          </a>

          <a>
            <FaBookOpen />
            Simulados
          </a>

          <a>
            <FaChartPie />
            Meu Desempenho
          </a>

        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuMobile(!menuMobile)}
        >
          <FaBars />
        </button>

      </header>

      {menuMobile && (
        <div className="mobile-menu">
          <a>Banco de Questões</a>
          <a>Simulados</a>
          <a>Meu Desempenho</a>
        </div>
      )}

      <div className="secondary-bar">
        📚 Banco de Questões
      </div>

      <main className="content">

        <h1>Banco de Questões</h1>

        <hr />

        <p className="description">
          Aqui você encontra todas as questões disponíveis na plataforma
          para praticar quando quiser. Explore por disciplinas,
          assuntos ou dificuldade e responda no seu ritmo.
        </p>

        <section className="filter-card">

          <div className="filter-group">

            <h3>TEMAS</h3>

            <span>
              Selecione uma disciplina para ativar os filtros de assunto.
            </span>

            <select
              value={disciplina}
              onChange={(e) =>
                setDisciplina(e.target.value)
              }
            >
              <option value="">
                Selecione uma disciplina
              </option>
            </select>

          </div>

          <div className="filter-group">

            <h3>BANCA</h3>

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  checked={banca === "todas"}
                  onChange={() =>
                    setBanca("todas")
                  }
                />
                Todas
              </label>

              <label>
                <input
                  type="radio"
                  checked={banca === "enem"}
                  onChange={() =>
                    setBanca("enem")
                  }
                />
                ENEM
              </label>

              <label>
                <input
                  type="radio"
                  checked={banca === "vestibulares"}
                  onChange={() =>
                    setBanca("vestibulares")
                  }
                />
                Vestibulares
              </label>

            </div>

          </div>

          <div className="filter-group">

            <h3>NÍVEL DE DIFICULDADE</h3>

            <div className="radio-group">

              <label>
                <input
                  type="radio"
                  checked={dificuldade === "todas"}
                  onChange={() =>
                    setDificuldade("todas")
                  }
                />
                Todas
              </label>

              <label>
                <input
                  type="radio"
                  checked={dificuldade === "facil"}
                  onChange={() =>
                    setDificuldade("facil")
                  }
                />
                Fácil
              </label>

              <label>
                <input
                  type="radio"
                  checked={dificuldade === "medio"}
                  onChange={() =>
                    setDificuldade("medio")
                  }
                />
                Médio
              </label>

              <label>
                <input
                  type="radio"
                  checked={dificuldade === "dificil"}
                  onChange={() =>
                    setDificuldade("dificil")
                  }
                />
                Difícil
              </label>

            </div>

          </div>

          <div className="filter-group">

            <h3>ASSUNTOS</h3>

            <span>
              Selecione os assuntos para filtrar questões.
            </span>

            <div className="subjects-grid">

              <div className="subject">

                <div className="badge">1</div>

                <h4>Assunto primário</h4>

                <select
                  value={assunto1}
                  onChange={(e) =>
                    setAssunto1(e.target.value)
                  }
                >
                  <option>
                    Selecione assunto
                  </option>
                </select>

              </div>

              <div className="subject">

                <div className="badge">2</div>

                <h4>Assunto secundário</h4>

                <select
                  value={assunto2}
                  onChange={(e) =>
                    setAssunto2(e.target.value)
                  }
                >
                  <option>
                    Selecione assunto
                  </option>
                </select>

              </div>

              <div className="subject">

                <div className="badge">3</div>

                <h4>Assunto terciário</h4>

                <select
                  value={assunto3}
                  onChange={(e) =>
                    setAssunto3(e.target.value)
                  }
                >
                  <option>
                    Selecione assunto
                  </option>
                </select>

              </div>

            </div>

          </div>

          <div className="btn-container">

            <button
              onClick={filtrarQuestoes}
              className="filter-btn"
            >
              FILTRAR QUESTÕES
            </button>

          </div>

        </section>

      </main>

      <footer />

    </div>
  );
}