import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        };
    }

    pulsame(e) {
        this.emitSearch();
    }

    buscar(e) {
        this.setState({
            searchText: e.target.value
        });

        if (e.key === "Enter") {
            this.emitSearch();
        }
    }

    emitSearch() {
        if (typeof this.props.onSearch === "function") {
            this.props.onSearch(this.state.searchText);
        }
    }

    render() {
        return (
            <div>
                <input onKeyPress={e => this.buscar(e) } type="text" placeholder="burcar..." />
                <button onClick={e => this.pulsame(e)} >pulsame</button>
            </div>
        );
    }

}