import React, { Component } from 'react'
import "./style.scss";

export default class Card extends Component {
    render(props) {
        return (
            <div>
                <div className="card">
                    <img src={this.props.imgUrl} />
                    <div className="info">
                        <h1>{this.props.projectname}</h1>
                        <p>{this.props.title}</p>
                        <a href={this.props.code} target="blank">Github</a> |
                        <a href={this.props.page} target="blank"> Page</a>
                    </div>
                </div>
            </div>
        )
    }
}