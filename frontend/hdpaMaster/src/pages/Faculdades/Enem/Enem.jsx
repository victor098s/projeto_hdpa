import React from "react";
import styles from "./Enem.module.css";
import Header from "../../../components/Header/Header";
import Menu from "../../../components/Menu/Menu";
import enemImg from "../../../assets/enem.png";

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
O Exame Nacional do Ensino Médio, conhecido como ENEM, é uma das principais formas de acesso ao 
 ensino superior no Brasil. Criado em 1998, o exame foi inicialmente desenvolvido para avaliar o desempenho 
dos estudantes ao final da educação básica, mas ao longo dos anos passou a desempenhar um papel fundamental 
</p>            

<p>
Atualmente, o ENEM é utilizado como critério de seleção em programas educacionais como o Sistema de Seleção 
Unificada (SISU), o Programa Universidade para Todos (PROUNI) e o Fundo de Financiamento Estudantil (FIES), além 
de servir como forma de ingresso em diversas instituições de ensino superior. Dessa forma, o exame tornou-se uma  
oportunidade importante para milhões de estudantes que desejam ingressar na faculdade. 
</p>

<p>
A prova é composta por questões de Linguagens, Ciências Humanas, Ciências da Natureza, Matemática e uma redação,  
exigindo dos candidatos não apenas conhecimento dos conteúdos escolares, mas também interpretação, raciocínio 
lógico e capacidade crítica. Por isso, muitos estudantes dedicam meses ou até anos de preparação para  alcançar  
uma boa pontuação, principalmente aqueles que desejam concorrer a cursos altamente disputados, como Medicina, 
Direito e Engenharia.
</p>

<p>
Além da ampla concorrência, o ENEM também se destaca pelo nível de exigência da redação, que avalia competências 
relacionadas à argumentação, organização das ideias e domínio da norma padrão da língua portuguesa. A nota obtida no 
exame pode definir o acesso dos estudantes às principais universidades do país, tornando o desempenho na prova extremamente 
importante para o futuro acadêmico e profissional dos candidatos. Nesse contexto, alcançar uma boa nota no ENEM representa 
muito mais do que um simples resultado em uma prova. 
</p> 

<p>
Para muitos estudantes, significa a oportunidade de transformar a própria realidade por meio da educação, conquistando 
acesso ao ensino superior e ampliando as possibilidades profissionais. O exame também simboliza dedicação, persistência 
e preparação diante de um processo altamente competitivo. 
</p>

<p>
Assim, o ENEM tornou-se um dos principais caminhos para o ingresso no ensino superior brasileiro, sendo reconhecido não
apenas pela sua importância acadêmica, mas também pelo impacto social que proporciona ao ampliar o acesso à educação em 
todo o país. 
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