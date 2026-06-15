import { useEffect, useMemo, useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./BQ.module.css";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Circle,
  Loader2,
  XCircle,
} from "lucide-react";

const API_URL = "http://localhost:3000/porVest";

const textosDasQuestoes = {
  "https://app.estuda.com/questoes/?id=6085416": {
    titulo: "A volta do marido prodigo",
    texto: `— Bom dia, seu Marrinha! Como passou de ontem?
— Bem. Já sabe, não é? Só ganha meio dia. [...]
Lá além, Generoso cotuca Tercino:
— [...] Vai em festa, dorme que-horas, e, quando chega, ainda é todo enfeitado e salamistrão!...
— Que é que hei de fazer, seu Marrinha... Amanheci com uma nevralgia... Fiquei com cisma de apanhar friagem...
— Hum...
— Mas o senhor vai ver como eu toco o meu serviço e ainda faço este povo trabalhar... [...]
Pintão suou para desprender um pedrouço, e teve de pular para trás, para que a laje lhe não esmagasse um pé. Pragueja:
— Quem não tem brio engorda!
— É... Esse sujeito só é isso, e mais isso... — opina Sidu.
— Também, tudo p'ra ele sai bom, e no fim dá certo... — diz Correia, suspirando e retomando o enxadão. — "P'ra uns, as vacas morrem ... p'ra outros até boi pega a parir...".
Seu Marra já concordou:
— Está bem, seu Laio, por hoje, como foi por doença, eu aponto o dia todo. Que é a última vez!... E agora, deixa de conversa fiada e vai pegando a ferramental.`,
    fonte: "ROSA, J. G. Sagarana. Rio de Janeiro: Jose Olympio, 1967.",
  },
  "https://app.estuda.com/questoes/?id=6475122": {
    titulo: "Morte e vida Severina e Vidas secas",
    texto:
      "A migracao esta no centro de duas obras importantes na nossa literatura: o poema dramatico Morte e vida Severina, de Joao Cabral de Melo Neto, e o romance Vidas secas, de Graciliano Ramos.",
  },
  "https://app.estuda.com/questoes/?id=10527624": {
    titulo: "Campo Geral",
    texto:
      "“Todos os dias que depois vieram, eram tempo de doer. Miguilim tinha sido arrancado de uma porção de coisas, e estava no mesmo lugar. Quando chegava o poder de chorar, era até bom – enquanto estava chorando, parecia que a alma toda se sacudia, misturando ao vivo todas as lembranças, as mais novas e as muito antigas. Mas, no mais das horas, ele estava cansado. Cansado e como que assustado. Sufocado. Ele não era ele mesmo. Diante dele, as pessoas, as coisas, perdiam o peso de ser. Os lugares, o Mutum – se esvaziavam, numa ligeireza, vagarosos. E Miguilim mesmo se achava diferente de todos. Ao vago, dava a mesma ideia de uma vez, em que, muito pequeno, tinha dormido de dia, fora de seu costume – quando acordou, sentiu o existir do mundo em hora estranha, e perguntou assustado: – ‘Uai, Mãe, hoje já é amanhã?!’”",
    fonte: "Joao Guimaraes Rosa. Campo Geral.",
  },
  "https://app.estuda.com/questoes/?id=8490840": {
    titulo: "A menina, as aves e o sangue",
    texto: `Aconteceu, certa vez, uma menina a quem o coração batia só de quando em enquantos. A mãe sabia que o sangue estava parado pelo roxo dos lábios, palidez nas unhas. Se o coração estancava por demasia de tempo a menina começava a esfriar e se cansava muito. A mãe, então, se afligia: roía o dedo e deixava a unha intacta. Até que o peito da filha voltava a dar sinal:
— Mãe, venha ouvir: está a bater!
A mãe acorria, debruçando a orelha sobre o peito estreito que soletrava pulsação. E pareciam, as duas, presenciando pingo de água em pleno deserto. Depois, o sangue dela voltava a calar, resina empurrando a arrastosa vida.
Até que, certa noite, a mulher ganhou para o susto. Foi quando ela escutou os pássaros. Sentou na cama: não eram só piares, chilreinações. Eram rumores de asas, brancos drapejos de plumas. A mãe se ergueu, pé descalço pelo corredor. Foi ao quarto da menina e joelhou-se junto ao leito. Sentiu a transpiração, reconheceu o seu próprio cheiro. Quando lhe ia tocar na fronte a menina despertou:
— Mãe, que bom, me acordou! Eu estava sonhar pássaros.
A mãe sortiu-se de medo, aconchegou o lençol como se protegesse a filha de uma maldição. Ao tocar no lençol uma pena se desprendeu e subiu, levinha, volteando pelo ar. A menina suspirou e a pluma, algodão em asa, de novo se ergueu, rodopiando por alturas do tecto. A mãe tentou apanhar a errante plumagem. Em vão, a pena saiu voando pela janela. A senhora ficou espreitando a noite, na ilusão de escutar a voz de um pássaro. Depois, retirou-se, adentrando-se na solidão do seu quarto. Dos pássaros selou-se o segredo, só entre as duas.[...]
Com o tempo, porém, cada vez menos o coração se fazia frequente. Quase deixou de dar sinais à vida. Até que essa imobilidade se prolongou por consecutivas demoras. A menina falecera? Não se vislumbravam sinais dessa derradeiragem. Pois ela seguia praticando vivências, brincando, sempre cansadinha, resfriorenta. Uma só diferença se contava.
Já à noite a mãe não escutava os piares.
— Agora não sonha, filha?
— Ai mãe, está tão escuro no meu sonho!
Só então a mãe arrepiou decisão e foi à cidade:
— Doutor, lhe respeito a permissão: queria saber a saúde de minha única. É seu peito... nunca mais deu sinal.
O médico corrigiu os óculos como se entendesse rectificar a própria visão. Clareou a voz, para melhor se autorizar. E disse:
— Senhora, vou dizer: a sua menina já morreu.
— Morta, a minha menina? Mas, assim...?
— Esta é a sua maneira de estar morta.
A senhora escutou, mãos juntas, na educação do colo. Anuindo com o queixo, ia esbugolhando o médico. Todo seu corpo dizia sim, mas ela, dentro do seu centro, duvidava. Pode-se morrer assim com tanta leveza, que nem se nota a retirada da vida? E o médico, lhe amparando, já na porta:
— Não se entristonhe, a morte é o fim sem finalidade.
A mãe regressou à casa e encontrou a filha entoando danças, cantarolando canções que nem existem. Se chegou a ela, tocou-lhe como se a miúda inexistisse. A sua pele não desprendia calor.
— Então, minha querida não escutou nada?
Ela negou. A mãe percorreu o quarto, vasculhou recantos. Buscava uma pena, o sinal de um pássaro. Mas nada não encontrou. E assim, ficou sendo, então e adiante.
Cada vez mais fria, a moça brinca, se aquece na torreira do sol. Quando acorda, manhã alta, encontra flores que a mãe depositou ao pé da cama. Ao fim da tarde, as duas, mãe e filha, passeiam pela praça e os velhos descobrem a cabeça em sinal de respeito.
E o caso se vai seguindo, estória sem história. Uma única, silenciosa, sombra se instalou: de noite, a mãe deixou de dormir. Horas a fio a sua cabeça anda em serviço de escutar, a ver se regressam as vozearias das aves.`,
    fonte: "Mia Couto. A menina sem palavra, 2013.",
  },
  "https://app.estuda.com/questoes/?id=000000": {
    titulo: "Niketche",
    texto:
      "Tudo na vida e mortal, tudo se apaga. Se a tua chama se apaga e em ti que esta a falta. Faz o que te digo e magia nenhuma te derrubara nesta vida. Tu es feitico por excelencia e nao deves procurar mais magia nenhuma. Corpo de mulher e magia. Forca. Fraqueza. Salvacao. Perdicao. O universo inteiro cabe nas curvas de uma mulher.",
    fonte: "Paulina Chiziane, Niketche: uma historia de poligamia.",
  },
  "https://app.estuda.com/questoes/?id=15207874": {
    titulo: "Homenagem a Ricardo Reis",
    texto: `Não creias, Lídia, que nenhum estio¹
Por nós perdido possa regressar
Oferecendo a flor
Que adiamos colher.

Cada dia te é dado uma só vez
E no redondo círculo da noite
Não existe piedade
Para aquele que hesita.

Mais tarde será tarde e já é tarde.
O tempo apaga tudo menos esse
Longo indelével rasto²
Que o não-vivido deixa.

Não creias na demora em que te medes.
Jamais se detém Kronos³ cujo passo
Vai sempre mais à frente
Do que o teu próprio passo.

1 estio: verão. 2 rasto: rastro. 3 Kronos: do grego khrónos, “tempo”. Na mitologia grega, titã do tempo.`,
    fonte: "Sophia de Mello Breyner Andresen. Coral e outros poemas.",
  },
  "https://app.estuda.com/questoes/?id=14290264": {
    titulo: "Um retrato sem moldura",
    texto: `Aconteceu num debate, num país europeu. Da assistência alguém me lançou a seguinte pergunta:
- Para si, o que é ser africano?
Falava-se, inevitavelmente, de identidade versus globalização. Respondi com uma pergunta:
- E para si, o que é ser europeu?
O homem gaguejou. Não sabia responder. Mas o interessante é que, para ele, a questão da identidade se colocava naturalmente para os africanos. Não para os europeus. Ele nunca tinha colocado a questão no espelho.

Recordo o episódio porque me parece que ele toca uma questão central: quando se fala de África, de qual África estamos falando? Terá o continente africano uma essência facilmente capturável? Haverá uma substância exótica que os caçadores de identidades possam recolher como sendo a alma africana?”`,
    fonte: "COUTO, Mia. Um retrato sem moldura.",
  },
  "https://app.estuda.com/questoes/?id=1442502": {
    titulo: "Historia do Cerco de Lisboa",
    texto:
      "Ao descrever a rotina do protagonista Raimundo Silva, o narrador da História do Cerco de Lisboa afirma que só restaram fragmentos dos sonhos noturnos, “imagens insensatas aonde a luz não chega, indevassáveis até para os narradores, que as pessoas mal informadas acreditam terem todos os direitos e disporem de todas as chaves.”",
    fonte: "Jose Saramago, Historia do Cerco de Lisboa.",
  },
  "https://app.estuda.com/questoes/?id=15388195": {
    titulo: "A descoberta do mundo",
    texto:
      "Quando não estou escrevendo, eu simplesmente não sei como se escreve. E se não soasse infantil e falsa a pergunta das mais sinceras, eu escolheria um amigo escritor e lhe perguntaria: como é que se escreve? Por que, realmente, como é que se escreve? que é que se diz? e como dizer? e como é que se começa? e que é que se faz com o papel em branco nos defrontando tranquilo? Sei que a resposta, por mais que intrigue, é a única: escrevendo. Sou a pessoa que mais se surpreende ao escrever. Porque, fora das horas em que escrevo, não sei absolutamente escrever. Será que escrever não é um ofício? Não há aprendizagem, então? O que é? Só me considerarei escritora no dia em que eu disser: sei como se escreve.",
    fonte: "LISPECTOR, C. A descoberta do mundo.",
  },
  "https://app.estuda.com/questoes/?id=44251": {
    titulo: "Vivendo e...",
    texto: `Eu sabia fazer pipa e hoje não sei mais. Duvido que
se hoje pegasse uma bola de gude conseguisse
equilibrá-la na dobra do dedo indicador sobre a unha do
polegar, quanto mais jogá-la com a precisão que tinha
[5] quando era garoto. (...)
Juntando-se as duas mãos de um determinado jeito,
com os polegares para dentro, e assoprando pelo
buraquinho, tirava-se um silvo bonito que inclusive
variava de tom conforme o posicionamento das mãos.
[10] Hoje não sei mais que jeito é esse. Eu sabia a fórmula
de fazer cola caseira. Algo envolvendo farinha e água e
muita confusão na cozinha, de onde éramos expulsos
sob ameaças. Hoje não sei mais. A gente começava
a contar depois de ver um relâmpago e o número a que
[15] chegasse quando ouvia a trovoada, multiplicado por
outro número, dava a distância exata do relâmpago.
Não me lembro mais dos números. (...)
Lembro o orgulho com que consegui, pela primeira
vez, cuspir corretamente pelo espaço adequado entre
[20] os dentes de cima e a ponta da língua de modo que o
cuspe ganhasse distância e pudesse ser mirado. Com
prática, conseguia-se controlar a trajetória elíptica da
cusparada com uma mínima margem de erro. Era puro
instinto. Hoje o mesmo feito requereria complicados
[25] cálculos de balística, e eu provavelmente só acertaria a
frente da minha camisa. Outra habilidade perdida.
Na verdade, deve-se revisar aquela antiga frase. É
vivendo e .................... . Não falo daquelas coisas que
deixamos de fazer porque não temos mais as condições
[30] físicas e a coragem de antigamente, como subir em
bonde andando – mesmo porque não há mais bondes
andando. Falo da sabedoria desperdiçada, das artes
que nos abandonaram. Algumas até úteis. Quem nunca
desejou ainda ter o cuspe certeiro de garoto para
[35] acertar em algum alvo contemporâneo, bem no olho, e
depois sair correndo? Eu já.`,
    fonte: "Luis Fernando Verissimo, Comedias para se ler na escola.",
  },
  "https://app.estuda.com/questoes/?id=75971": {
    titulo: "Jogar limpo",
    texto:
      "Argumentar não é ganhar uma discussão a qualquer preço. Convencer alguém de algo é, antes de tudo, uma alternativa à prática de ganhar uma questão no grito ou na violência física — ou não física. Não física, dois pontos. Um político que mente descaradamente pode cativar eleitores. Uma publicidade que joga baixo pode constranger multidões a consumir um produto danoso ao ambiente. Há manipulações psicológicas não só na religião. E é comum pessoas agirem emocionalmente, porque vítimas de ardilosa — e cangoteira — sedução. Embora a eficácia a todo preço não seja argumentar, tampouco se trata de admitir só verdades científicas — formar opinião apenas depois de ver a demonstração e as evidências, como a ciência faz. Argumentar é matéria da vida cotidiana, uma forma de retórica, mas é um raciocínio que tenta convencer sem se tornar mero cálculo manipulativo, e pode ser rigoroso sem ser científico.",
  },
  "https://app.estuda.com/questoes/?id=1373433": {
    titulo: "Twitter e fake news",
    texto:
      "O Twitter é uma das redes sociais mais importantes no Brasil e no mundo. (...) Um estudo identificou que as fake news são 70% mais propensas a serem retweetadas do que fatos verdadeiros. (...) Outra conclusão importante do trabalho diz respeito aos famosos bots: ao contrário do que muitos pensam, esses robôs não são os grandes responsáveis por disseminar notícias falsas. Nem mesmo comparando com outros robozinhos: tanto os que espalham informações mentirosas quanto aqueles que divulgam dados verdadeiros alcançaram o mesmo número de pessoas.",
  },
  "https://app.estuda.com/questoes/?id=6475090": {
    titulo: "Relativismos e divisoes",
    texto: `Costuma ser irritante a expressão “ah, isso é relativo”, especialmente quando aplicada sobre uma verdade que julgamos absoluta. Mas o relativismo vive, exatamente, da desconfiança quanto a qualquer absoluto. O relativista suspende julgamentos definitivos, como Sócrates já fazia nos diálogos com seus pares, na Grécia antiga.

O certo é que os praticantes do relativismo não têm vida fácil. O que foi mais importante no caminho da civilização: o domínio do fogo ou a invenção da roda? Do ângulo da cozinheira ou de um motorista, a resposta não parece difícil, mas um relativista não apenas hesitará na resposta como duvidará do mérito da pergunta. E se tivéssemos que escolher entre o princípio das alavancas ou o da propulsão nuclear? E se formos até à Bíblia, para perguntar: quem pecou mais, Adão ou Eva? O relativista responderá: mas o que é pecado? Numa rebelião popular contra uma ditadura chovem pedras e paus no ar, todo mundo está em risco – e o dono da vidraçaria, apolítico, sorri. Numa eleição é frequente que o relativista se abstenha. Ah, a política, que prato cheio para os relativistas: quem tinha razão na guerra da Criméia? Por que caiu Napoleão? Personalidades conduzem as massas ou estas fundam as lideranças? No Brasil do século passado: a queda do primeiro governo Vargas foi o fim de uma ditadura ou novo golpe? Os historiadores, por vezes, têm que enfrentar o duro dilema da escolha, esta que é o inferno dos relativistas.

O relativismo comparece em todas as áreas. Quem foi maior: o Newton, com suas três leis fundamentais, ou o Einstein, ao demonstrar, entre outras coisas, que “É preciso estar em constante movimento para manter o equilíbrio”? No campo das fábulas, muitas têm duas versões conclusivas, como a da cigarra e da formiga. As religiões dividem-se quanto aos valores e perfis divinos; na política, o embate é a lei, e as posições de classe relativizam o valor de um fato. Aliás o fato também se relativiza, ao ser rebaixado a opinião. O fenômeno contemporâneo das migrações em massa abre discussão sobre o papel ou a existência mesma de fronteiras nacionais. Não era para apagá-las que nasceu a decantada globalização?

No campo das artes, as divisões e os ângulos são incontáveis. Prosa ou poesia? Realismo ou romantismo? A consagração religiosa na disciplina de Bach ou a energia individualista e trágica de Beethoven? Música para ouvir ou para dançar? A revolução russa ganha força num filme histórico ou a denúncia revolucionária se vê melhor num filme de Carlitos? A fotografia e o cinema, fotogramas isolados ou em movimento regular, diminuem a arte da pintura naturalista? A pureza do som digital revela-se mais artificial do que o som das gravações em vinil?

Um teste vocacional parece ser concebido por relativistas. O jovem que faz o teste pode ter como resultado a indicação de duas carreiras muito distintas: biólogo ou economista. Talvez ele acabe fazendo Letras, em vez de se decidir pelas leis de Mendel, decisivas para a compreensão da hereditariedade, ou de Adam Smith, pai do liberalismo econômico. Num de seus maiores contos, Machado de Assis escolheu como protagonista um festejado compositor de polcas, música alegre e dançante, que preferiria ser o autor de sisudas sonatas ou de prelúdios clássicos – e o narrador de Machado concluiu que esse pobre pianista era “uma eterna peteca entre a ambição e a vocação”, amargando esse duro movimento do pêndulo, tão característico das pessoas divididas.

Jornalismo profissional ou redes sociais? Por onde passa a força decisiva das informações, nos dias que correm? A reserva de cotas nas escolas públicas é um duradouro instrumento de justiça ou medida emergencial? O Estado é laico em sentido absoluto ou deve ceder espaço para diferentes manifestações religiosas? Os currículos escolares devem se orientar por princípios centralizadores ou seguir inclinações regionais? Têm os homens algum papel nas afirmações do feminismo? A sexualidade tem a ver com gêneros, e há definições a fixar nesse campo delicado dos desejos e das identidades?

É possível que no século XXI desenvolvam-se as contradições próprias do relativismo: a permanência na posição relativista acaba sendo sua condenação a um absoluto, o do adiamento sistemático da escolha. O intimismo confidencial e a vida privada não combinam muito com a internet e os smartphones; as noções mesmas de interesse público e interesse privado parecem pouco nítidas, ou mesmo desnecessárias. O crescente avanço das ciências e das várias tecnologias parece favorecer uma posição relativista planetária, segundo a qual tudo parece condenado a ser efêmero, tudo parece estar à espera de sua imediata superação. Uma multidão de pessoas entretidas cada uma em seu celular é um cenário que confirma uma orientação geral para a pluralidade de interesses, dentro da qual tudo parece ser tão decisivo quanto relativo. É essa nossa marca de modernos?`,
    fonte: "Aristeu Gonçalves Filho, inédito.",
  },
  "https://app.estuda.com/questoes/?id=6481786": {
    titulo: "Cronista sem assunto",
    texto: `Difícil é ser cronista regular de algum periódico. Uma crônica por semana, havendo ou não assunto... É buscar na cabeça uma luzinha, uma palavra que possa acender toda uma frase, um parágrafo, uma página inteira – mas qual? Onde o ímã que atraia uma boa limalha? Onde a farinha que proverá o pão substancioso? O relógio está correndo e o assunto não vem. Cronos, cronologia, crônica, tempo, tempo, tempo... Que tal falar da falta de assunto? Mas isso já aconteceu umas três vezes... Há cronista que abre a Bíblia em busca de um grande tema: os mandamentos, um faraó, o Egito antigo, as pragas, as pirâmides erguidas pelo trabalho escravo? Mas como atualizar o interesse em tudo isso? O leitor de jornal ou de revista anda com mais pressa do que nunca, e aliás está munido de um celular que lhe coloca o mundo nas mãos a qualquer momento.

Sim, a internet! O Google! É a salvação. Lá vai o cronista caçar assunto no computador. Mas aí o problema fica sendo o excesso: ele digita, por exemplo, “Liberdade”, e lá vem a estátua nova-iorquina com seu facho de luz saudando os navegantes, ou o bairro do imigrante japonês em São Paulo, ou a letra de um hino cívico, ou um tratado filosófico, até mesmo o “Libertas quae sera tamen” dos inconfidentes mineiros... Tenta-se outro tema geral: “Política”. Aí mesmo é que não para mais: vêm coisas desde a polis grega até um poema de Drummond, salta-se da política econômica para a financeira, chega-se à política de preservação de bens naturais, à política ecológica, à partidária, à política imperialista, à política do velho Maquiavel, ufa.

Que tal então a gastronomia, mais na moda do que nunca? O velho bifinho da tia ou o saudoso picadinho da vovó, receitas domésticas guardadas no segredo das bocas, viraram nomes estrangeiros, sob molhos complicados, de apelido francês. Nesse ramo da alimentação há também que considerar o que sejam produtos transgênicos, orgânicos, as ameaças do glúten, do sódio, da química nociva de tantos fertilizantes. Tudo muito sofisticado e atingindo altos níveis de audiência nos programas de TV: já seremos um país povoado por cozinheiros, quer dizer, por chefs de cuisine?

Temas palpitantes, certamente de interesse público, estão no campo da educação: há, por exemplo, quem veja nos livros de História uma orientação ideológica conduzida pelos autores; há quem defenda uma neutralidade absoluta diante de fatos que seriam indiscutíveis. Que sentido mesmo tiveram a abolição da escravatura e a proclamação da República? E o suicídio de Getúlio Vargas? E os acontecimentos de 1964? Já a literatura e a redação andam questionadas como itens de vestibular: mas sob quais argumentos o desempenho linguístico e a arte literária seriam dispensáveis numa formação escolar de verdade?

Enfim, o cronista que se dizia sem assunto de repente fica aflito por ter de escolher um no infinito cardápio digital de assuntos. Que esperará ler seu leitor? Amenidades? Alguma informação científica? A quadratura do círculo encontrada pelo futebol alemão? A situação do cinema e do teatro nacionais, dependentes de financiamento por incentivos fiscais? Os megatons da última banda de rock que visitou o Brasil? O ativismo político das ruas? Uma viagem fantasiosa pelo interior de um buraco negro, esse mistério maior tocado pela Física? A posição do Reino Unido diante da União Europeia?

Houve época em que bastava ao cronista ser poético: o reencontro com a primeira namoradinha, uma tarde chuvosa, um passeio pela infância distante, um amor machucado, tudo podia virar uma valsa melancólica ou um tango arrebatador. Mas hoje parece que estamos todos mais exigentes e utilitaristas, e os jovens cronistas dos jornais abordam criticamente os rumores contemporâneos, valem-se do vocabulário ligado a novos comportamentos, ou despejam um humor ácido em seus leitores, num tempo sem nostalgia e sem utopias.

É bom lembrar que o papel em que se imprimem livros, jornais e revistas está sob ameaça como suporte de comunicação. O mesmo ocorre com o material das fitas, dos CDs e DVDs: o mundo digital armazena tudo e propaga tudo instantaneamente. Já surgem incontáveis blogs de cronistas, onde os autores discutem on-line com seus leitores aspectos da matéria tratada em seus textos. A interatividade tornou-se praticamente uma regra: há mesmo quem diga que a própria noção de autor, ou de autoria, já caducou, em função da multiplicidade de vozes que se podem afirmar num mesmo espaço textual. Num plano cósmico: quem é o autor do Universo? Deus? O Big Bang? A Física é que explica tudo ou deixemos tudo com o criacionismo?

Enquanto não chega seu apocalipse profissional, o cronista de periódico ainda tem emprego, o que não é pouco, em tempo de crise. Pois então que arrume assunto, e um bom assunto, para não perder seus leitores. Como não dá para ser sempre um Machado de Assis, um Rubem Braga, um Luis Fernando Verissimo, há que se contentar com um mínimo de estilo e uma boa escolha de tema. A variedade da vida há de conduzi-lo por um bom caminho; é função do cronista encontrar algum por onde possa transitar acompanhado de muitos e, de preferência, bons leitores.`,
  },
};

const textosPorEnunciado = [
  {
    contem: "O soneto de Gregório de Matos constitui um exemplo",
    apoio: {
      titulo: "Descreve o que era naquele tempo a cidade da Bahia",
      texto: `A cada canto um grande conselheiro,
Que nos quer governar cabana e vinha;
Não sabem governar sua cozinha,
E podem governar o mundo inteiro.

Em cada porta um bem frequente olheiro,
Que a vida do vizinho e da vizinha
Pesquisa, escuta, espreita e esquadrinha,
Para o levar à praça e ao terreiro.

Muitos mulatos desavergonhados,
Trazidos sob os pés os homens nobres¹,
Posta nas palmas toda a picardia,

Estupendas usuras nos mercados,
Todos os que não furtam muito pobres:
E eis aqui a cidade da Bahia.

1 Trazidos sob os pés os homens nobres: na visão de Gregório de Matos, os mulatos em ascensão subjugam com esperteza os verdadeiros “homens nobres”.`,
      fonte: "Gregório de Matos. Poemas escolhidos, 2010.",
    },
  },
];

function extrairLetra(alternativa = "") {
  const match = alternativa.trim().match(/^([a-eA-E])[).:-]/);
  return match ? match[1].toLowerCase() : "";
}

function obterTextoApoio(questao) {
  const apoioPorEnunciado = textosPorEnunciado.find((item) =>
    questao.enunciado.includes(item.contem),
  );

  return apoioPorEnunciado?.apoio || textosDasQuestoes[questao.link];
}

function agruparQuestoes(linhas) {
  const grupos = new Map();

  linhas.forEach((linha, index) => {
    const chave = `${linha.link || "sem-link"}-${linha.enunciado_da_questao}`;
    const questao = grupos.get(chave) || {
      id: chave,
      numeroOriginal: index + 1,
      enunciado: linha.enunciado_da_questao,
      ano: linha.ano,
      vestibular: linha.nome_do_vestibular,
      tema: linha.nome_do_tema,
      topico: linha.nome_topico,
      dificuldade: linha.relevancia_da_questao,
      comentario: "",
      link: linha.link,
      alternativas: [],
    };

    questao.alternativas.push({
      texto: linha.enunciado_da_alternativa,
      correta: linha.validacao === "S",
      letra: extrairLetra(linha.enunciado_da_alternativa),
    });

    if (linha.comentario_do_especialista) {
      questao.comentario = linha.comentario_do_especialista;
    }

    grupos.set(chave, questao);
  });

  return Array.from(grupos.values()).map((questao, index) => ({
    ...questao,
    numero: index + 1,
    textoApoio: obterTextoApoio(questao),
  }));
}

function opcoesUnicas(dados, campo) {
  return Array.from(new Set(dados.map((item) => item[campo]).filter(Boolean)));
}

function BQ() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [tela, setTela] = useState("filtros");
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [filtros, setFiltros] = useState({
    tema: "",
    banca: "Todos",
    dificuldade: "Todas",
    assunto1: "",
    assunto2: "",
    assunto3: "",
  });

  useEffect(() => {
    async function buscarQuestoes() {
      try {
        const resposta = await fetch(API_URL);
        if (!resposta.ok) {
          throw new Error("Nao foi possivel buscar as questoes.");
        }
        const resultado = await resposta.json();
        setDados(Array.isArray(resultado) ? resultado : []);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    buscarQuestoes();
  }, []);

  const temas = useMemo(() => opcoesUnicas(dados, "nome_do_tema"), [dados]);
  const bancas = useMemo(
    () => ["Todos", ...opcoesUnicas(dados, "nome_do_vestibular")],
    [dados],
  );
  const relevancias = useMemo(
    () => ["Todas", ...opcoesUnicas(dados, "relevancia_da_questao")],
    [dados],
  );
  const assuntos = useMemo(() => opcoesUnicas(dados, "nome_topico"), [dados]);

  const questoesFiltradas = useMemo(() => {
    const assuntoSelecionado = [
      filtros.assunto1,
      filtros.assunto2,
      filtros.assunto3,
    ].filter(Boolean);

    const linhasFiltradas = dados.filter((item) => {
      const temaOk = !filtros.tema || item.nome_do_tema === filtros.tema;
      const bancaOk =
        filtros.banca === "Todos" || item.nome_do_vestibular === filtros.banca;
      const dificuldadeOk =
        filtros.dificuldade === "Todas" ||
        item.relevancia_da_questao === filtros.dificuldade;
      const assuntoOk =
        assuntoSelecionado.length === 0 ||
        assuntoSelecionado.includes(item.nome_topico);

      return temaOk && bancaOk && dificuldadeOk && assuntoOk;
    });

    return agruparQuestoes(linhasFiltradas);
  }, [dados, filtros]);

  const questaoAtual = questoesFiltradas[indiceAtual];
  const respostaAtual = questaoAtual ? respostas[questaoAtual.id] : null;

  function atualizarFiltro(campo, valor) {
    setFiltros((estadoAtual) => ({ ...estadoAtual, [campo]: valor }));
  }

  function filtrarQuestoes() {
    setIndiceAtual(0);
    setRespostas({});
    setTela("questoes");
  }

  function responder(questaoId, letra) {
    setRespostas((estadoAtual) => ({ ...estadoAtual, [questaoId]: letra }));
  }

  function proximaQuestao() {
    setIndiceAtual((atual) => Math.min(atual + 1, questoesFiltradas.length - 1));
  }

  function questaoAnterior() {
    setIndiceAtual((atual) => Math.max(atual - 1, 0));
  }

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.content}>
        {tela === "filtros" ? (
          <section className={styles.filterView}>
            <div className={styles.heading}>
              <h1>Banco de Questões</h1>
              <p>
                Aqui você encontra todas as questões disponíveis na plataforma
                para praticar quando quiser. Explore por disciplinas, assuntos ou
                dificuldade e responda no seu ritmo.
              </p>
            </div>

            <div className={styles.filterPanel}>
              <div className={styles.fieldFull}>
                <span className={styles.label}>Temas</span>
                <span className={styles.hint}>
                  Selecione uma disciplina para ativar os filtros de assunto.
                </span>
                <label className={styles.selectBox}>
                  <ChevronDown size={16} />
                  <select
                    value={filtros.tema}
                    onChange={(event) =>
                      atualizarFiltro("tema", event.target.value)
                    }
                  >
                    <option value="">Selecione uma disciplina</option>
                    {temas.map((tema) => (
                      <option key={tema} value={tema}>
                        {tema}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.optionBlock}>
                <span className={styles.label}>Banca</span>
                <div className={styles.radioGroup}>
                  {bancas.map((banca) => (
                    <label key={banca} className={styles.radioItem}>
                      <input
                        type="radio"
                        name="banca"
                        checked={filtros.banca === banca}
                        onChange={() => atualizarFiltro("banca", banca)}
                      />
                      <span>{banca}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.optionBlock}>
                <span className={styles.label}>Relevância da questão</span>
                <div className={styles.radioGroup}>
                  {relevancias.map((relevancia) => (
                    <label key={relevancia} className={styles.radioItem}>
                      <input
                        type="radio"
                        name="dificuldade"
                        checked={filtros.dificuldade === relevancia}
                        onChange={() =>
                          atualizarFiltro("dificuldade", relevancia)
                        }
                      />
                      <span>{relevancia}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.assuntosHeader}>
                <span className={styles.label}>Assuntos</span>
                <span className={styles.hint}>
                  Selecione os assuntos primários ou secundários para filtrar
                  questões. Você pode selecionar 1 assunto primário por coluna.
                </span>
              </div>

              <div className={styles.subjectGrid}>
                {["assunto1", "assunto2", "assunto3"].map((campo, index) => (
                  <div key={campo} className={styles.subjectColumn}>
                    <strong>{index + 1}</strong>
                    <span>Assunto {["primário", "secundário", "terciário"][index]}</span>
                    <label className={styles.selectBox}>
                      <ChevronDown size={16} />
                      <select
                        value={filtros[campo]}
                        onChange={(event) =>
                          atualizarFiltro(campo, event.target.value)
                        }
                      >
                        <option value="">Selecione assunto</option>
                        {assuntos.map((assunto) => (
                          <option key={assunto} value={assunto}>
                            {assunto}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {erro && <p className={styles.message}>{erro}</p>}

            <button
              className={styles.primaryButton}
              type="button"
              onClick={filtrarQuestoes}
              disabled={carregando || questoesFiltradas.length === 0}
            >
              {carregando ? <Loader2 size={16} /> : "Filtrar questões"}
            </button>
          </section>
        ) : (
          <section className={styles.questionView}>
            <div className={styles.heading}>
              <h1>Questões</h1>
            </div>

            <div className={styles.answerKey}>
              <span>Gabarito de Questões</span>
              <div className={styles.keyTrack}>
                {questoesFiltradas.map((questao, index) => {
                  const resposta = respostas[questao.id];
                  const correta = questao.alternativas.find(
                    (alternativa) => alternativa.correta,
                  );
                  const status =
                    resposta && correta?.letra === resposta
                      ? styles.keyCorrect
                      : resposta
                        ? styles.keyWrong
                        : "";

                  return (
                    <button
                      key={questao.id}
                      className={`${styles.keyDot} ${status} ${
                        index === indiceAtual ? styles.keyCurrent : ""
                      }`}
                      type="button"
                      onClick={() => setIndiceAtual(index)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {!questaoAtual ? (
              <div className={styles.emptyState}>
                <p>Nenhuma questão encontrada para os filtros selecionados.</p>
                <button type="button" onClick={() => setTela("filtros")}>
                  Voltar aos filtros
                </button>
              </div>
            ) : (
              <>
                <div className={styles.navigation}>
                  <button
                    type="button"
                    onClick={questaoAnterior}
                    disabled={indiceAtual === 0}
                  >
                    <ArrowLeft size={17} />
                    Anterior
                  </button>

                  <strong>
                    Questão {indiceAtual + 1} de {questoesFiltradas.length}
                  </strong>

                  <button
                    type="button"
                    onClick={proximaQuestao}
                    disabled={indiceAtual === questoesFiltradas.length - 1}
                  >
                    Próxima
                    <ArrowRight size={17} />
                  </button>
                </div>

                <article className={styles.questionCard}>
                  <div className={styles.meta}>
                    <span>{questaoAtual.vestibular}</span>
                    <span>{questaoAtual.ano}</span>
                    <span>{questaoAtual.topico}</span>
                    <span>{questaoAtual.dificuldade}</span>
                  </div>

                  {questaoAtual.textoApoio && (
                    <div className={styles.supportText}>
                      <span>{questaoAtual.textoApoio.titulo}</span>
                      <p>{questaoAtual.textoApoio.texto}</p>
                      {questaoAtual.textoApoio.fonte && (
                        <small>{questaoAtual.textoApoio.fonte}</small>
                      )}
                    </div>
                  )}

                  <h2>{questaoAtual.enunciado}</h2>

                  <div className={styles.alternatives}>
                    {questaoAtual.alternativas.map((alternativa) => {
                      const selecionada = respostaAtual === alternativa.letra;
                      const mostrarCorreta = respostaAtual && alternativa.correta;
                      const mostrarErrada = selecionada && !alternativa.correta;

                      return (
                        <button
                          key={alternativa.texto}
                          type="button"
                          className={`${styles.alternative} ${
                            selecionada ? styles.selectedAlternative : ""
                          } ${mostrarCorreta ? styles.correctAlternative : ""} ${
                            mostrarErrada ? styles.wrongAlternative : ""
                          }`}
                          onClick={() =>
                            responder(questaoAtual.id, alternativa.letra)
                          }
                        >
                          {mostrarCorreta ? (
                            <CheckCircle2 size={16} />
                          ) : mostrarErrada ? (
                            <XCircle size={16} />
                          ) : (
                            <Circle size={16} />
                          )}
                          <span>{alternativa.texto}</span>
                        </button>
                      );
                    })}
                  </div>

                  {respostaAtual && questaoAtual.comentario && (
                    <div className={styles.feedback}>
                      {questaoAtual.comentario}
                    </div>
                  )}
                </article>

                <div className={styles.actions}>
                  <button type="button" onClick={() => setTela("filtros")}>
                    Responder outros filtros
                  </button>
                  <button
                    className={styles.outlineButton}
                    type="button"
                    onClick={proximaQuestao}
                    disabled={indiceAtual === questoesFiltradas.length - 1}
                  >
                    Próxima questão
                    <ArrowRight size={16} />
                  </button>
                </div>
              </>
            )}
          </section>
        )}
      </main>

      <footer className={styles.footer} />
    </div>
  );
}

export default BQ;
