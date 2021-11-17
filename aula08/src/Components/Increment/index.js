import { Component } from "react";

export default class Increment extends Component {
    constructor() {
        super();
        this.state = {
            valor: 0
        }
    } 

    valor = 0;

    somaUm = () => {
        this.setState({
            valor: this.state.valor +1
        })
        console.log(this.valor);
    }
    render() {
        return (
            <>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
            <h2>{this.state.valor}</h2>
            <button className="btn btn-primary" onClick={this.somaUm}>Soma Um</button>
            </div>
            </>
        )
    }
}