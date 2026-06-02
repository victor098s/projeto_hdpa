import React from "react";
import styles from "./Usp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import uspImg from "../../../assets/usp.png";

function Usp() {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.uspImg} src={uspImg} alt="imgUsp" />

        <section className={styles.sectionText}>
          <p>
            A Universidade de São Paulo (USP) é uma das mais importantes
            instituições de ensino superior do Brasil e da América<br></br>
            Latina, reconhecida pela excelência acadêmica, produção científica e
            contribuição para o desenvolvimento do país.<br></br>
            Fundada em 1934, a universidade reúne diversas faculdades,
            institutos e centros de pesquisa, oferecendo uma ampla<br></br>{" "}
            variedade de cursos de graduação e pós-graduação em diferentes áreas
            do conhecimento.<br></br>
            Ao longo de sua história, a USP se consolidou como referência em
            ensino, pesquisa e extensão, formando<br></br>
            profissionais altamente qualificados e incentivando a inovação e o
            pensamento crítico. Além disso, a universidade<br></br>
            desempenha um papel fundamental na geração de conhecimento
            científico e tecnológico, impactando diretamente<br></br>a sociedade
            por meio de projetos, pesquisas e parcerias nacionais e
            internacionais.<br></br> Ingressar na Universidade de São Paulo é um
            objetivo almejado por milhares de estudantes todos os anos,<br></br>
            principalmente devido ao prestígio e à qualidade reconhecida da
            instituição. Esse destaque, no entanto, está <br></br>
            diretamente ligado ao alto nível de concorrência de seus cursos,
            especialmente em áreas como Medicina, Direito,<br></br>
            Engenharia e Tecnologia, que apresentam uma das maiores relações
            candidato por vaga do país. Esse cenário<br></br>
            torna o ingresso na universidade um grande desafio, exigindo dos
            candidatos não apenas domínio dos conteúdos do<br></br>
            ensino médio, mas também habilidades como interpretação, pensamento
            crítico e raciocínio lógico.<br></br>O principal processo seletivo
            da USP é realizado pela Fundação Universitária para o Vestibular,
            cuja prova é <br></br>
            conhecida por sua complexidade e profundidade. Além do vestibular
            tradicional, a universidade também oferece<br></br>
            vagas por meio do ENEM, ampliando as possibilidades de acesso, mas
            sem reduzir o nível de exigência. Diante disso,<br></br>
            muitos estudantes dedicam anos de preparação, participando de
            cursinhos e mantendo uma rotina intensa<br></br>
            de estudos, o que evidencia o quanto o ingresso na USP demanda
            esforço, disciplina e persistência.<br></br>
            Nesse contexto, a conquista de uma vaga na USP vai muito além de uma
            simples aprovação. Ela representa o<br></br>
            resultado de uma trajetória marcada por dedicação, superação de
            dificuldades e comprometimento com os<br></br>
            estudos. Para muitos, é a realização de um sonho e um passo decisivo
            para o futuro profissional e pessoal. Essa<br></br>
            conquista também traz consigo novas responsabilidades, já que o
            estudante passa a fazer parte de uma das<br></br>
            instituições mais exigentes do país, onde o aprendizado contínuo e o
            alto desempenho são constantemente<br></br>
            estimulados.<br></br>
            Assim, a dificuldade para ingressar na USP não deve ser vista apenas
            como um<br></br>
            obstáculo, mas também como um fator que valoriza ainda mais a
            conquista. Ser aprovado significa não apenas ter superado um
            processo altamente<br></br>
            competitivo, mas também estar preparado para enfrentar os desafios
            acadêmicos e aproveitar as oportunidades<br></br>
            que a universidade oferece.
          </p>
        </section>
      </main>

      <footer>
        <p>.</p>
      </footer>
    </div>
  );
}

export default Usp;
