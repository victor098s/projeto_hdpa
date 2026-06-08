import React from "react";
import styles from "./Enem.module.css";
import Header from "../../../components/Header/Header";

function Enem() {
  return (
    <div className={styles.container}>
      <Header />
<Menu />

      <main>
        <div className={styles.escolasUniversitarias}>
          <h2>Escolas universitárias</h2>
        </div>
        <img className={styles.enemImg} src={enemImg} alt="imgUp" />

        <section className={styles.sectionText}>
          <p>
            O Exame Nacional do Ensino Médio, conhecido como ENEM, é uma das principais formas de<br></br> 
             acesso ao ensino superior no Brasil. Criado em 1998, o exame foi inicialmente desenvolvido <br></br> 
             para avaliar o desempenho dos estudantes ao final da educação básica, mas ao longo<br></br> 
              dos anos passou a desempenhar um papel fundamental no ingresso em universidades<br></br> 
             públicas e privadas de todo o país.

Atualmente, o ENEM é utilizado como critério de seleção em programas educacionais <br></br> 
como o Sistema de Seleção Unificada (SISU), o Programa Universidade para Todos<br></br> 
 (PROUNI) e o Fundo de Financiamento Estudantil (FIES), além de servir como forma de <br></br> 
 ingresso em diversas instituições de ensino superior. Dessa forma, o exame tornou-se <br></br> 
 uma oportunidade importante para milhões de estudantes que desejam ingressar na <br></br> 
 faculdade.

A prova é composta por questões de Linguagens, Ciências Humanas, Ciências da <br></br> 
Natureza, Matemática e uma redação, exigindo dos candidatos não apenas conhecimento<br></br> 
 dos conteúdos escolares, mas também interpretação, raciocínio lógico e capacidade <br></br> 
 crítica. Por isso, muitos estudantes dedicam meses ou até anos de preparação para <br></br> 
 alcançar uma boa pontuação, principalmente aqueles que desejam concorrer a cursos <br></br> 
altamente disputados, como Medicina, Direito e Engenharia.

Além da ampla concorrência, o ENEM também se destaca pelo nível de exigência da <br></br> 
redação, que avalia competências relacionadas à argumentação, organização das ideias <br></br> 
 e domínio da norma padrão da língua portuguesa. A nota obtida no exame pode definir o <br></br> 
  acesso dos estudantes às principais universidades do país, tornando o desempenho na <br></br> 
  prova extremamente importante para o futuro acadêmico e profissional dos candidatos.<br></br> 
Nesse contexto, alcançar uma boa nota no ENEM representa muito mais do que um<br></br> 
 simples resultado em uma prova. 

Para muitos estudantes, significa a oportunidade de transformar a própria realidade por<br></br> 
 meio da educação, conquistando acesso ao ensino superior e ampliando as<br></br> 
  possibilidades profissionais. O exame também simboliza dedicação, persistência e <br></br> 
  preparação diante de um processo altamente competitivo.

Assim, o ENEM tornou-se um dos principais caminhos para o ingresso no ensino superior <br></br> 
brasileiro, sendo reconhecido não apenas pela sua importância acadêmica, mas também <br></br> 
pelo impacto social que proporciona ao ampliar o acesso à educação em todo o país.
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

export default Enem;