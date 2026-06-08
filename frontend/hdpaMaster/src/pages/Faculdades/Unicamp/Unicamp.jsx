import React from "react";
import styles from "./Unicamp.module.css";
import Header from "../../../components/Header/Header";

function Unicamp() {
  return (
    <div className={styles.container}>
      <Header />
 <Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.unicampImg} src={unicampImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
            A Universidade Estadual de Campinas, conhecida como Unicamp, é uma das instituições de ensino superior mais <br></br>
             prestigiadas do Brasil, destacando-se principalmente pela excelência em pesquisa científica, inovação tecnológica e <br></br>
              qualidade acadêmica. Fundada em 1966, a universidade está localizada em Campinas, no estado de São Paulo, <br></br>
               e oferece diversos cursos de graduação, pós-graduação e programas de pesquisa em áreas como Saúde, Engenharia,<br></br>
          Tecnologia, Ciências Humanas e Exatas.

         
 
Ao longo de sua trajetória, a Unicamp consolidou-se como referência nacional e internacional em produção<br></br>
 científica, sendo responsável por importantes pesquisas e avanços tecnológicos que impactam diretamente a <br></br>
  sociedade. A universidade também possui forte ligação com centros de inovação e empresas, incentivando o <br></br>
   desenvolvimento científico, empreendedor e tecnológico de seus estudantes e pesquisadores.

            Ingressar na Unicamp é um grande objetivo para milhares de estudantes devido ao reconhecimento e à qualidade<br></br>
             da instituição. Entretanto, o alto nível acadêmico da universidade está diretamente relacionado à intensa <br></br>
              concorrência de seus cursos, especialmente Medicina, Engenharia, Ciência da Computação e Arquitetura, que<br></br>
              apresentam elevada relação candidato por vaga. Esse cenário exige dos candidatos uma preparação aprofundada,<br></br>
             domínio dos conteúdos escolares e grande capacidade de interpretação e raciocínio.


            O principal processo seletivo da universidade é realizado pela Comissão Permanente para<br></br>
            os Vestibulares, responsável por aplicar provas conhecidas pelo alto nível de dificuldade e<br></br>
             pela valorização do pensamento crítico e interdisciplinaridade. Além do vestibular <br></br>
             tradicional, a Unicamp também disponibiliza formas alternativas de ingresso, incluindo<br></br>
            vagas destinadas ao ENEM e programas de inclusão social, ampliando o acesso ao ensino<br></br>
              superior sem diminuir o rigor acadêmico exigido.


            Nesse contexto, conquistar uma vaga na Unicamp representa muito mais do que apenas<br></br>
            aprovação em um vestibular. Significa alcançar um objetivo construído com esforço,<br></br>
            disciplina e dedicação aos estudos. Para muitos estudantes, essa conquista simboliza a <br></br>
             realização de um sonho e a oportunidade de estudar em uma das universidades mais<br></br>
              respeitadas do país, reconhecida por estimular a pesquisa, a criatividade e a formação de <br></br>
             profissionais altamente qualificados.


            Assim, a dificuldade para ingressar na Unicamp não deve ser vista apenas como um <br></br>
            desafio, mas também como um elemento que valoriza ainda mais a conquista dos <br></br>
            estudantes aprovados. Fazer parte da universidade significa estar preparado para <br></br>
            enfrentar uma formação acadêmica exigente e aproveitar as inúmeras oportunidades<br></br>
            oferecidas pela instituição.
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

export default Unicamp;

