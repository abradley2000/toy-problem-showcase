import React, {Component} from 'react';

export default class Sum extends Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }
    updateNumOne(val) {
        this.setState({
            num1: parseInt(val, 10)
        })
    }
    updateNumTwo(val) {
        this.setState({
            num2: parseInt(val, 10)
        })
    }
    add(num1, num2) {
        this.setState({
            sum: (num1 + num2)
        })
    }
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={(e) => this.updateNumOne(e.target.value)}/>
                <input className="inputLine" type="number" onChange={(e) => this.updateNumTwo(e.target.value)}/>
                <button className="confirmationButton" onClick={() => {this.add(this.state.num1, this.state.num2)}}>Add</button>
                <span className="resultsBox">Sum: {this.state.sum}</span>
            </div>
        )
    }
};