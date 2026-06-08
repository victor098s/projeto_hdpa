import React from "react";
import styles from "./Puccamp.module.css";
import Header from "../../../components/Header/Header";

function Puccamp() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.pucImg} src={pucImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
            A Pontifícia Universidade Católica de São Paulo, conhecida como PUC-SP, é uma das <br></br>
             instituições privadas de ensino superior mais tradicionais e reconhecidas do Brasil.  <br></br>
              Fundada em 1946, a universidade possui grande destaque nas áreas de Ciências<br></br>
               Humanas, Direito, Comunicação, Psicologia, Administração e Tecnologia, sendo referência <br></br>
               pela qualidade de ensino e pela formação crítica e humanizada de seus estudantes.

Ao longo de sua história, a PUC-SP consolidou-se como uma universidade de grande <br></br>
importância acadêmica, cultural e social, contribuindo para a formação de profissionais <br></br>
altamente qualificados e para o desenvolvimento do pensamento crítico e científico<br></br>
no país. A instituição também é conhecida por incentivar debates, pesquisas e projetos<br></br>
voltados às questões sociais, culturais e econômicas da sociedade brasileira.

Ingressar na PUC-SP é o objetivo de muitos estudantes que buscam uma formação de <br></br>
excelência em uma universidade reconhecida nacionalmente. Apesar de ser uma <br></br>
instituição privada, diversos cursos apresentam alta concorrência, principalmente Direito,<br></br>
Relações Internacionais, Psicologia e Comunicação Social. Dessa forma, os candidatos precisam demonstrar bom desempenho acadêmico e preparação adequada para <br></br>
enfrentar os processos seletivos.

O ingresso na universidade ocorre principalmente por meio do vestibular próprio, além da<br></br>
utilização da nota do ENEM em determinados cursos e programas de bolsas. A PUC-SP <br></br>
também oferece oportunidades de financiamento estudantil e bolsas de estudo,<br></br>
permitindo que mais estudantes tenham acesso ao ensino superior de qualidade. Ainda <br></br>
assim, a exigência acadêmica permanece elevada, refletindo o compromisso da<br></br>
instituição com a excelência educacional.

Nesse contexto, conquistar uma vaga na PUC-SP representa uma importante realização<br></br>
acadêmica e pessoal. Para muitos estudantes, estudar na universidade significa fazer <br></br>
parte de uma instituição tradicional, reconhecida pelo ambiente intelectual e pela<br></br>
 formação diferenciada oferecida aos seus alunos. Além disso, a universidade proporciona <br></br>
 diversas oportunidades de desenvolvimento profissional, científico e cultural.

Assim, o ingresso na PUC-SP representa não apenas o acesso ao ensino superior, mas<br></br>
 também a oportunidade de construir uma trajetória acadêmica sólida em uma das <br></br>
 universidades privadas mais respeitadas do Brasil. A dedicação necessária para alcançar<br></br>
  esse objetivo torna a conquista ainda mais significativa para os estudantes aprovados.
            <br></br> 
          </p>
        </section>
      </main>

      <footer>
        <p>.</p>
      </footer>
    </div>

  );
}

export default Puccamp;