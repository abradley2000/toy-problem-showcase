import React, {Component} from 'react';

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }
    assignEvenAndOdds(userInput) {
        let userInputArr = userInput.split(',');
        let evens = [];
        let odds = [];
        for (let i = 0; i < userInputArr.length; i++) {
            if (userInputArr[i] % 2 === 0) {
                evens.push(parseInt(userInputArr[i], 10));
            }
            else {
                odds.push(parseInt(userInputArr[i], 10));
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        });
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Even And Odds</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}/>
                <button className="confirmationButton" onClick={() => this.assignEvenAndOdds(this.state.userInput)}>Split</button>
                {/*Without it your array would not display as [1,2,3,4] but rather 1234. JSON.stringify gives our display a more readable format.*/}
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>            
            </div>
        )
    }
}; 