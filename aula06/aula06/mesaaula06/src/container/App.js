import ClassComponent from '../components/ClassComponent';
import FunctionComponent from '../components/FunctionComponent';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
     <h3>Convidado:</h3>
     <ClassComponent nome="Xinunga" estaNaLista={true} />
     <ClassComponent nome="Xinoga" estaNaLista={false} />
     <ClassComponent nome="Xinserst" estaNaLista={true} />
     <h3>Tarefas: </h3>
     <FunctionComponent nome="Xinarpa" tarefa="batata-frita" />
     <FunctionComponent nome="Xinset" tarefa="pizza" />
     <FunctionComponent nome="Xinstas" tarefa="bebidas" />
   </div>
    );
}

export default App;
