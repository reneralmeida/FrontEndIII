import Header from './Components/Header/index';
import Banner from './Components/Banner/index';
import Galeria from './Components/Galeria/index';
import Footer from './Components/Footer/index';
import './App.css';

function App() {
const nomeEmpresa = 'WhateverKing';

  return (
    <div>
      <Header empresa={nomeEmpresa} />
      <main>
        <Banner />
        <Galeria />
      </main>
      <Footer empresa={nomeEmpresa} />
    </div>
  );
}

export default App;
