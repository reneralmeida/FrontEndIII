import test from './img.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={test} className="App-logo" alt="logo" />
        <p>
          Dollar dollar bill yo
        </p>
      </header>
      <div>
      <iframe width="720" height="576" src="https://www.youtube.com/embed/sXJXLq1lN7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default App;
