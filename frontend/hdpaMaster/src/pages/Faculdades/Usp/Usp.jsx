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

      <main className={styles.mainContent}>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        
        <img className={styles.uspImg} src={uspImg} alt="imgUsp" />

        <section className={styles.sectionText}>
          <p>
            A Universidade de São Paulo (USP) é uma das mais importantes
            instituições de ensino superior do Brasil e da América Latina, reconhecida 
            pela excelência acadêmica, produção científica e contribuição para o 
            desenvolvimento do país. Fundada em 1934, a universidade reúne diversas faculdades,
            institutos e centros de pesquisa, oferecendo uma ampla variedade de cursos de 
            graduação e pós-graduação em diferentes áreas do conhecimento.
          </p>
          
          <p>
            Ao longo de sua história, a USP se consolidou como referência em
            ensino, pesquisa e extensão, formando profissionais altamente qualificados e 
            incentivando a inovação e o pensamento crítico. Além disso, a universidade
            desempenha um papel fundamental na geração de conhecimento científico e tecnológico, 
            impactando diretamente a sociedade por meio de projetos, pesquisas e parcerias 
            nacionais e internacionais.
          </p>

          <p>
            Ingressar na Universidade de São Paulo é um objetivo almejado por milhares de 
            estudantes todos os anos, principalmente devido ao prestígio e à qualidade 
            reconhecida da instituição. Esse destaque, no entanto, está diretamente ligado 
            ao alto nível de concorrência de seus cursos, especialmente em áreas como Medicina, 
            Direito, Engenharia e Tecnologia, que apresentam uma das maiores relações candidato 
            por vaga do país. 
          </p>

          <p>
            Esse cenário torna o ingresso na universidade um grande desafio, exigindo dos
            candidatos não apenas domínio dos conteúdos do ensino médio, mas também 
            habilidades como interpretação, pensamento crítico e raciocínio lógico. O principal 
            processo seletivo da USP é realizado pela Fundação Universitária para o Vestibular, 
            cuja prova é conhecida por sua complexidade e profundidade.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>.</p>
      </footer>
    </div>
  );
}

export default Usp;