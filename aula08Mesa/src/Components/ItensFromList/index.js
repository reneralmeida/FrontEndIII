import { Component } from "react";
import fruit from '../Images/fruta.jpg';
import cleanP from '../Images/limpeza.jpg';

export default class ItensFromList extends Component {
    constructor() {
        super();
        const listagemCompras = [
                {
                    id: 1,
                    img: {fruit},
                    tipo: 'Fruta'
                },
                {
                    id: 2,
                    img: {cleanP},
                    tipo: 'Produto de Limpeza'
                }
            ]
            this.state = {
                listagemCompras: listagemCompras,
                listaPadrao: listagemCompras
            };
    }

    resetar = () => {
        this.setState({
          listamCompras: this.state.listaPadrão
        })
      }
    

    removeCompra = (idCompra) => {
        const listaNova = this.state.listagemCompras.filter(({ id }) => {
          return id !== idCompra
        });
        this.setState({
          listagemCompras: listaNova
        });
      }

    render() {
        return (
            <>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
            <button className="btn" onClick={this.resetar}>Resetar</button>
            {this.state.listagemCompras.map(({id, img, tipo}) => {
                return (
                    <div key={id} onClick={() => this.removeCompra(id)}>
                        <img src={img} alt={tipo} />
                        <h3>{tipo}</h3>
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}