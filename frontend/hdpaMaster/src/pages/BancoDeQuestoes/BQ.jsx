import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { authenticatedFetch } from "../../utils/auth";

const API_URL = "https://project-hdpavictor098s.onrender.com/porVest";

// alternativa começa nula para não quebrar o código se nada for passado 
// Extrai a letra inicial de alternativas no formato "a)", "B.", "c:" ou parecido.
function extrairLetra(alternativa = "") {

// Remove os espaços em branco com o trim() e usa o match para ver o o padrao das alternativa 
  const match = alternativa.trim().match(/^([a-eA-E])[).:-]/);

//Se for verdade retorna a alternativa, senão vazio 
  return match ? match[1].toLowerCase() : "";
}

// Converte as linhas vindas da API em questões completas com suas alternativas agrupadas.
function agruparQuestoes(linhas) {

// Criar um objeto Map para armazenar as questões 

  const grupos = new Map();

  linhas.forEach((linha, index) => {

// Criação de chave única  
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
      textoApoio: null,
      alternativas: [],
    };

    // Remover espaços em branco e extrair a letra da alternativa
    const alternativaTexto = String(
      linha.enunciado_da_alternativa || "",
    ).trim();

// Uso da função extrairLetra para pegar a letra da alternativa e remover o prefixo da alternativa
    const letraExtraida = extrairLetra(alternativaTexto);

//Uso da constante textoSemPrefixo para remover o prefixo da alternativa e manter apenas o texto da alternativa 
    const textoSemPrefixo = alternativaTexto
      .replace(/^([a-eA-E])[).:-]\s*/, "")
      .trim();

//Faz um push no array de alternativas da questão, adicionado o texto da alternativa, se é correta ou não, a letra original e o texto cru para depuração 
    questao.alternativas.push({
      texto: textoSemPrefixo || alternativaTexto,
      correta:
        String(linha.validacao || "").toUpperCase() === "S" ||
        String(linha.validacao || "").toUpperCase() === "C",
      originalLetra: letraExtraida || null,

// Mantém o texto cru da alternativa para depuração e referência futura
      rawTexto: alternativaTexto,
    });

    if (linha.comentario_do_especialista) {
      questao.comentario = linha.comentario_do_especialista;
    }

    if (!questao.textoApoio && linha.texto) {
      questao.textoApoio = { texto: linha.texto };
    }

    grupos.set(chave, questao);
  });

// Retorna um array de questões agrupadas, com alternativas ordenadas e letras atribuídas 
  return Array.from(grupos.values()).map((questao, index) => {

// Usa o operador spread para criar uma cópia da questão e ordena as alternativas com base na letra original,
//  garantindo que as alternativas sejam exibidas na ordem correta, mesmo que a letra original esteja ausente ou fora de ordem.
// O método sort vai comparar as letras originais das alternativas, depois vai retornar a letra usando a função
// localeCompare para comparar qual letra vem primeiro. 
    const alternativasOrdenadas = [...questao.alternativas].sort((a, b) => {
      if (a.originalLetra && b.originalLetra) {
        return a.originalLetra.localeCompare(b.originalLetra);
      }
      if (a.originalLetra) return -1;
      if (b.originalLetra) return 1;
      return 0;
    });

//Essa constante vai guardar uma função que vai mapear as alternativas ordenadas e adicionar a letra correspondente (a, b, c, d, e) a cada alternativa.
// O 97 vem da tabela ASCII, onde 97 é o código para a letra 'a'. A função String.fromCharCode() converte o código ASCII de volta para a letra correspondente. 
    const alternativasComLetra = alternativasOrdenadas.map((alt, i) => ({
      ...alt,
      letra: String.fromCharCode(97 + i),
    }));

    return {
      ...questao,
      numero: index + 1,
      alternativas: alternativasComLetra,
    };
  });
}

// Recebe um array de objetos,
// Recebe o nome do campo que queremos extrair,
// Retorna um array com os valores únicos desse campo, removendo os valores nulos ou vazios.

function opcoesUnicas(dados, campo) {
  return Array.from(new Set(dados.map((item) => item[campo]).filter(Boolean)));
}


// Definições dos useState
function BQ() {
  // Guarda os dados crus da API, estado de carregamento, mensagens e controles da tela atual.
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

  const navigate = useNavigate();

  // Busca as questões quando a página carrega e redireciona se a sessão expirar.
  useEffect(() => {
    async function buscarQuestoes() {
      try {
        const resposta = await authenticatedFetch(API_URL);

        if (resposta.status === 401) {
          setErro("Sessão expirada. Faça login novamente.");
          navigate("/");
          return;
        }

        if (!resposta.ok) {
          throw new Error("Não foi possível buscar as questões.");
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
  }, [navigate]);

  // Monta opções únicas para os filtros principais sempre que os dados da API mudam.
  const temas = useMemo(() => opcoesUnicas(dados, "nome_do_tema"), [dados]);
  const bancas = useMemo(
    () => ["Todos", ...opcoesUnicas(dados, "nome_do_vestibular")],
    [dados],
  );
  const relevancias = useMemo(
    () => ["Todas", ...opcoesUnicas(dados, "relevancia_da_questao")],
    [dados],
  );

  // Atualiza a lista de assuntos com base no tema escolhido.
  const assuntos = useMemo(() => {
    if (!filtros.tema) {
      return [];
    }

    const dadosFiltradosPorTema = dados.filter(
      (item) => item.nome_do_tema === filtros.tema,
    );

    return opcoesUnicas(dadosFiltradosPorTema, "nome_topico");
  }, [dados, filtros.tema]);

  // Aplica todos os filtros selecionados e transforma as linhas em questões agrupadas.
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

  // Facilita o acesso à questão exibida e à resposta já marcada nela.
  const questaoAtual = questoesFiltradas[indiceAtual];
  const respostaAtual = questaoAtual ? respostas[questaoAtual.id] : null;

  // Atualiza um campo específico do objeto de filtros preservando os demais.
  function atualizarFiltro(campo, valor) {
    setFiltros((estadoAtual) => ({ ...estadoAtual, [campo]: valor }));
  }

  // Reinicia navegação/respostas e troca da tela de filtros para a tela de questões.
  function filtrarQuestoes() {
    setIndiceAtual(0);
    setRespostas({});
    setTela("questoes");
  }

  // Registra a alternativa escolhida usando o id da questão como chave.
  function responder(questaoId, letra) {
    setRespostas((estadoAtual) => ({ ...estadoAtual, [questaoId]: letra }));
  }

  // Avança para a próxima questão sem ultrapassar o fim da lista filtrada.
  function proximaQuestao() {
    setIndiceAtual((atual) =>
      Math.min(atual + 1, questoesFiltradas.length - 1),
    );
  }

  // Retorna para a questão anterior sem passar do primeiro item.
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
                para praticar quando quiser. Explore por disciplinas, assuntos
                ou dificuldade e responda no seu ritmo.
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
                    <span>
                      Assunto {["primário", "secundário", "terciário"][index]}
                    </span>
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
                      {questaoAtual.textoApoio.titulo && (
                        <span>{questaoAtual.textoApoio.titulo}</span>
                      )}
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
                      const mostrarErrada = selecionada && !alternativa.correta;
                      const mostrarCorreta =
                        respostaAtual && alternativa.correta && !mostrarErrada;

                      return (
                        <button
                          key={alternativa.letra || alternativa.texto}
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
                          <span>
                            <strong
                              style={{
                                marginRight: 8,
                                textTransform: "lowercase",
                              }}
                            >
                              {alternativa.letra})
                            </strong>
                            {alternativa.texto}
                          </span>
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
