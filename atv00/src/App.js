import "./App.css";
import MeusDados from "./components/atividade00/MeusDados";
import MeusDados2 from "./components/atividade00/MeusDados2";
import Temperatura from "./components/atividade00/03Temperatura";

function App() {
  return (
    <div className="App">
      <div className="Quadro">
        <MeusDados />
      </div>
      <div style={{ borderTop: '3px solid ' }} />
      <div className="Quadro">
        <MeusDados2
          nome="Vitor Loula Silva"
          curso="Engenharia de Software"
          uni="UFC"
        />
      </div>
      <div style={{ borderTop: '3px solid ' }} />
        <div className="Quadro">
        <Temperatura k={373} c={100} f={212} />
      </div>
    </div>
  );
}

export default App;
