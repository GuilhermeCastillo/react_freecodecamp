import "./App.css";
import Depoimento from "./componentes/Depoimento";

function App() {
  return (
    <div className="App">
      <div className="conteudo-principal">
        <h1>FreeCodeCamp Pessoas Genéricas e suas descrições: </h1>
        <Depoimento
          nome="Emma White"
          pais="Suecia"
          imagem="emma"
          cargo="Atriz"
          empresa="NetflixHub"
          depoimento="Atriz de filmes"
        />

        <Depoimento
          nome="Sarah White"
          pais="Brasil"
          imagem="sarah"
          cargo="Jogador"
          empresa="Corinthians"
          depoimento="Atacante"
        />

        <Depoimento
          nome="Shawn"
          pais="China"
          imagem="shawn"
          cargo="marketing"
          empresa="Facebook"
          depoimento="Marketing Digital"
        />
      </div>
    </div>
  );
}

export default App;
