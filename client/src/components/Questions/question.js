import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'
import './question.css'
import ResultsPage from '../ResultsPage';
import Footer from '../Footer'


const style = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    height: "60px",
    marginTop: "0px",
    borderTopStyle: "solid",
    borderTopColor: "orange"
}

class Question extends Component {
    state = {
        questions: null,
        counter: 0,
        playerScore: 0,
        playerWrong: 0,
        answerCorrect: null,
        isDisabled: false
    };

    componentWillMount() {
        API.getQuestions("easy")
            .then(res => {
                const questions = [];
                for (let i = 0; i < 10; i++) {
                    questions.push({
                        question: res.data.results[i].question,
                        correctAnswers: res.data.results[i].correct_answer,
                        wrongAnswers: res.data.results[i].incorrect_answers
                    });
                }
                this.setState({ questions });
            })
    }

    handleTimeout = () => {
        if (this.state.answerCorrect) {
            this.setState({
                playerScore: this.state.playerScore + 1,
                counter: this.state.counter + 1,
                isDisabled: false,
                answerCorrect: null
            })
        } else {
            this.setState({
                playerWrong: this.state.playerWrong + 1,
                counter: this.state.counter + 1,
                isDisabled: false,
                answerCorrect: null
            })
        }
    }

    endGame = () => {
        if ((this.state.playerScore + this.state.playerWrong) === 10) {
            console.log("TOTAL IS TEN");
        }
    }

    clickCheck = event => {
        let answer = event.target.id

        if (answer === "correct") {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: true });
        } else {
            this.setState({ isDisabled: !this.state.isDisabled, answerCorrect: false });
        }
    }

    render() {
        // this.shuffle()
        return (
            <div className="container center">
                <div className="row">
                    {/* {console.log("score is", this.state.playerScore)}
                    {console.log("wrong guesses:", this.state.playerWrong)} */}
                    {/* {console.log("questions array", this.state.questions)} */}
                    {console.log("counter:", this.state.counter)}
                    {}
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
                                <div>
                                    {this.state.questions && this.state.counter < 10 ? this.state.questions[this.state.counter].question : this.endGame()}<br /><br />
                                    <div><Button type="submit" id="correct" disabled={this.state.isDisabled} onClick={this.clickCheck}>{this.state.questions && this.state.counter < 10 ? this.state.questions[this.state.counter].correctAnswers : this.endGame()}</Button></div>
                                    <br />
                                    {this.state.questions && this.state.counter < 10 ? this.state.questions[this.state.counter].wrongAnswers.map(answer => (
                                        <div><Button type="submit" id="wrong" disabled={this.state.isDisabled} onClick={this.clickCheck}>{answer}</Button><br /><br /></div>
                                    )) : this.endGame()}

                                    < br />
                                    <ResultsPage playerScore={this.state.playerScore}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer style={style} playerScore={this.state.playerScore} playerWrong={this.state.playerWrong}></Footer>
            </div >
        );
    }
}

export default Question     