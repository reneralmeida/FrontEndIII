import logo from './logo.svg';
import './App.css';

function App() {

  const user = {
    firstName: 'Turma',
    lastName: '03',
  }

  const greeting = () => {
    (user.firstName) ? <h1>Olá, {user.firstName} {user.lastName}</h1> : <h1>Olá, desconhecido</h1>
  }

  const main = <main><h2>Testando react</h2></main>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rener Almeida
          31 anos, coluna de 60.
          {user.firstName} {user.lastName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
      {main}
      {greeting()}
    </div>
  );
}

export default App;
