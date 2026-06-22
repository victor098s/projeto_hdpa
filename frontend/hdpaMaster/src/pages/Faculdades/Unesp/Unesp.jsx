import React from "react";
import styles from "./Unesp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import unespImg from "../../../assets/Logo_Unesp.svg";

// Página informativa da Unesp, com navegação comum e conteúdo estático.
function Unesp() {
  return (
    <div className={styles.container}>
      {/* Mantém o cabeçalho e o menu entre escolas sempre disponíveis. */}
      <Header />
<Menu />

      <main>
        {/* Área inicial com o título de categoria e a imagem/logo da Unesp. */}
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.unespImg} src={unespImg} alt="imgUp" />

        {/* Texto principal sobre a universidade e seu processo de ingresso. */}
        <section className={styles.sectionText}>
          <p>
A Universidade Estadual Paulista, conhecida como Unesp, é uma das maiores e mais importantes universidades 
públicas do Brasil. Criada em 1976, a instituição possui diversos campos distribuídos pelo estado de São Paulo
oferecendo cursos de graduação e pós-graduação em diferentes áreas do conhecimento, como Ciências Bio- 
lógicas, Engenharia, Medicina, Ciências Humanas, Tecnologia e Artes. 
</p>

<p>
A Unesp destaca-se pela qualidade acadêmica, pela forte atuação em pesquisas científicas e pelo compromisso
com o desenvolvimento social e educacional. Ao longo dos anos, a universidade consolidou-se como referência  
nacional em ensino, pesquisa e extensão universitária, formando profissionais qualificados e contribuindo  
significativamente para a produção de conhecimento científico no país.
</p>

<p>
Ingressar na Unesp é um objetivo bastante desejado por estudantes de todo o Brasil, principalmente devido ao 
prestígio e à qualidade reconhecida da instituição. A concorrência em diversos cursos é elevada, especialmente
em Medicina, Direito,Engenharia e áreas da saúde, exigindo dos candidatos grande preparação acadêmica e dedicação aos estudos. 
 </p>

<p>
O principal processo seletivo da universidade é realizado pela Fundação para o Vestibular da Unesp, responsável 
pela aplicação de provas conhecidas pelo alto nível de exigência e pela abordagem interdisciplinardos conteúdos.
Além do vestibular tradicional, a universidade também utiliza o ENEM como forma complementar de ingresso, ampliando
as oportunidades para os candidatos sem reduzir a qualidade do processo seletivo.
</p>

<p>
Nesse cenário, conquistar uma vaga na Unesp representa uma grande conquista pessoal  e acadêmica. Muitos estudantes dedicam anos de preparação para alcançar a aprovação, enfrentando uma rotina intensa de estudos e desafios.
Ser aprovado significa ingressar em uma universidade pública de excelência, reconhecida pela formação
acadêmica de alto nível e pelas oportunidades de crescimento profissional e científico.
</p>

<p>
Assim, a dificuldade para ingressar na Unesp valoriza ainda mais a conquista dos estudantes aprovados. Fazer parte da
universidade significa integrar uma instituição comprometida com a produção de conhecimento, a inovação e a formação 
de profissionais preparados para contribuir com a sociedade. 
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
