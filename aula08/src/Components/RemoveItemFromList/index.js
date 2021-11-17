import { Component } from "react";

export default class RemoveItemFromList extends Component {
    constructor() {
        super();
        this.state = {
            listagemAlunos: [
                {
                    id: 0,
                    firstName: 'John'
                },
                {
                    id: 564,
                    firstName: 'Doe'
                }
            ]
        };
    }

    remoteAluno = (idAluno) => {
        const listaNova = this.state.listagemAlunos.filter(({id}) => {
            this.setState({listagemAlunos: listaNova})
        }
        )}

    render() {
        return (
            <>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4">
            {this.state.listagemAlunos.map(({id, firstName}) => {
                return (
                    <div key={id} onClick={() => this.remoteAluno(id)}>
                        <h3>{firstName}</h3>
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}