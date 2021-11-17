import { Component } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Galeria from './Components/Galeria';
import Footer from './Components/Footer';
import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      temaEscuro: false
    };
  }
  nomeEmpresa = 'Rito Gomes';

  alternarTema = () => {
    this.setState({ temaEscuro: !this.state.temaEscuro });
  }

  render() {
    return (
      <>
        <Header empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
        <img src="https://cdn-icons-png.flaticon.com/512/702/702814.png" alt="Alterna Cor" onClick={this.alternarTema} />
        <main>
          <Banner>
            <h2>O que é Valorant?</h2>
            <p>
              A Riot Games apresenta VALORANT: um FPS tático 5x5 com personagens marcantes, mecânica de tiro precisa e habilidades únicas! Saiba mais sobre VALORANT e seu elenco incrível! Um jogo de tiro tático 5x5 com personagens originais
            </p>
          </Banner>
          <Galeria />
        </main>

        <Footer empresa={this.nomeEmpresa} temaEscuro={this.state.temaEscuro} />
      </>
    );
  }
}