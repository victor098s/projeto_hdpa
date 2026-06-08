import React from "react";
import styles from "./Unesp.module.css";
import Header from "../../../components/Header/Header";

function Unesp() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.unespImg} src={unespImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
            A Universidade Estadual Paulista, conhecida como Unesp, é uma das maiores e mais<br></br> 
           importantes universidades públicas do Brasil. Criada em 1976, a instituição possui diversos <br></br> 
           campi distribuídos pelo estado de São Paulo, oferecendo cursos de graduação e pós-<br></br> 
           graduação em diferentes áreas do conhecimento, como Ciências Biológicas, Engenharia, <br></br> 
           Medicina, Ciências Humanas, Tecnologia e Artes.

A Unesp destaca-se pela qualidade acadêmica, pela forte atuação em pesquisas <br></br> 
científicas e pelo compromisso com o desenvolvimento social e educacional. Ao longo dos <br></br> 
anos, a universidade consolidou-se como referência nacional em ensino, pesquisa e <br></br> 
 extensão universitária, formando profissionais qualificados e contribuindo significativamente para a produção de conhecimento científico no país.

Ingressar na Unesp é um objetivo bastante desejado por estudantes de todo o Brasil,<br></br> 
 principalmente devido ao prestígio e à qualidade reconhecida da instituição. A <br></br> 
 concorrência em diversos cursos é elevada, especialmente em Medicina, Direito,<br></br> 
  Engenharia e áreas da saúde, exigindo dos candidatos grande preparação acadêmica e <br></br> 
  dedicação aos estudos.

O principal processo seletivo da universidade é realizado pela Fundação para o Vestibular <br></br> 
da Unesp, responsável pela aplicação de provas conhecidas pelo alto nível de exigência e <br></br> 
pela abordagem interdisciplinar dos conteúdos. Além do vestibular tradicional, a <br></br> 
universidade também utiliza o ENEM como forma complementar de ingresso, ampliando as <br></br> 
oportunidades para os candidatos sem reduzir a qualidade do processo seletivo.

Nesse cenário, conquistar uma vaga na Unesp representa uma grande conquista pessoal<br></br> 
 e acadêmica. Muitos estudantes dedicam anos de preparação para alcançar a <br></br> 
 aprovação, enfrentando uma rotina intensa de estudos e desafios. Ser aprovado significa <br></br> 
 ingressar em uma universidade pública de excelência, reconhecida pela formação<br></br> 
  acadêmica de alto nível e pelas oportunidades de crescimento profissional e científico.

Assim, a dificuldade para ingressar na Unesp valoriza ainda mais a conquista dos<br></br> 
estudantes aprovados. Fazer parte da universidade significa integrar uma instituição<br></br> 
comprometida com a produção de conhecimento, a inovação e a formação de <br></br> 
profissionais preparados para contribuir com a sociedade.
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

export default Unesp;