import Pai from './components/atividade01/questao01/01Pai';
import * as PC from './components/atividade01/02MeuPC';
import { Hero, Enemy, Arena, World } from './components/atividade01/03Batalha'
function App() {
  return (
    <div>
      <World>
        <Arena></Arena>
        <Arena></Arena>
        <Arena></Arena>
      </World>
    </div>
  );

}
export default App;
