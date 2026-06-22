import React from "react";
import styles from "./Unicamp.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import unicampImg from "../../../assets/unicamp.png";

// Página informativa da Unicamp, sem estado interno: apenas estrutura e conteúdo.
function Unicamp() {
  return (
    <div className={styles.container}>
      {/* Header principal e menu de universidades reaproveitados. */}
      <Header />
 <Menu />

      <main>
        {/* Cabeçalho visual da página com título e imagem da universidade. */}
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.unicampImg} src={unicampImg} alt="imgUp" />

        {/* Seção de leitura com os parágrafos explicativos sobre a instituição. */}
        <section className={styles.sectionText}>
          <p>
            A Universidade Estadual de Campinas, conhecida como Unicamp, é uma das instituições de ensino superior mais 
             prestigiadas do Brasil, destacando-se principalmente pela excelência em pesquisa científica, inovação tecnológica e 
              qualidade acadêmica. Fundada em 1966, a universidade está localizada em Campinas, no estado de São Paulo, 
               e oferece diversos cursos de graduação, pós-graduação e programas de pesquisa em áreas como Saúde, Engenharia,
          </p>

<p>
Ao longo de sua trajetória, a Unicamp consolidou-se como referência nacional e internacional em produção
 científica, sendo responsável por importantes pesquisas e avanços tecnológicos que impactam diretamente a 
  sociedade. A universidade também possui forte ligação com centros de inovação e empresas, incentivando o 
   desenvolvimento científico, empreendedor e tecnológico de seus estudantes e pesquisadores.
  </p>

  <p>
            Ingressar na Unicamp é um grande objetivo para milhares de estudantes devido ao reconhecimento e à qualidade
             da instituição. Entretanto, o alto nível acadêmico da universidade está diretamente relacionado à intensa 
              concorrência de seus cursos, especialmente Medicina, Engenharia, Ciência da Computação e Arquitetura, que
              apresentam elevada relação candidato por vaga. Esse cenário exige dos candidatos uma preparação aprofundada,
             domínio dos conteúdos escolares e grande capacidade de interpretação e raciocínio.
  </p>

<p>
            O principal processo seletivo da universidade é realizado pela Comissão Permanente para os Vestibulares, responsável por 
            aplicar provas conhecidas pelo alto nível de dificuldade e pela valorização do pensamento crítico e interdisciplinaridade.
             Além do vestibular tradicional, a Unicamp também disponibiliza formas alternativas de ingresso, incluindo vagas destinadas 
             ao ENEM e programas de inclusão social, ampliando o acesso ao ensino superior sem diminuir o rigor acadêmico exigido.
 </p>

<p>
            Nesse contexto, conquistar uma vaga na Unicamp representa muito mais do que apenas aprovação em um vestibular. 
            Significa alcançar um objetivo construído com esforço, disciplina e dedicação aos estudos. Para muitos estudantes,
            essa conquista simboliza a realização de um sonho e a oportunidade de estudar em uma das universidades mais
              respeitadas do país, reconhecida por estimular a pesquisa, a criatividade e a formação de profissionais altamente 
               qualificados.
        </p>
  
    <p>
            Assim, a dificuldade para ingressar na Unicamp não deve ser vista apenas como um desafio, mas também como um elemento
             que valoriza ainda mais a conquista dos estudantes aprovados. Fazer parte da universidade significa estar preparado para 
            enfrentar uma formação acadêmica exigente e aproveitar as inúmeras oportunidades oferecidas pela instituição. 
           
          </p>
        </section>
      </main>

      <footer>
        <p>.</p>
      </footer>
    </div>
  );
}

export default Unicamp;

