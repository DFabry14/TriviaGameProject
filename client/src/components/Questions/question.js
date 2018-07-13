import React, { Component } from 'react'
import API from '../../utils/API'
import Countdown from '../Countdown/Countdown'
import { Button } from 'react-materialize'
import './question.css'
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
                const questions = []
                for (let i = 0; i < 10; i++) {

                    const answers = [
                        {
                            correct: "correct",
                            answer: res.data.results[i].correct_answer
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[0]
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[1]
                        },
                        {
                            correct: "not-correct",
                            answer: res.data.results[i].incorrect_answers[2]
                        },
                    ];
                        questions.push({
                        question: res.data.results[i].question,
                        answers: this.shuffle(answers)
                    });
                }
                this.setState({ questions }) 
            })
    }


    shuffle = data => {
        let i = data.length - 1;
        while (i > 0) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = data[i];
          data[i] = data[j];
          data[j] = temp;
          i--;
        }
        return data;
      };

    handleTimeout = () => {
        if (this.state.isDisabled === true) {
            this.setState({
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
 
    }

    clickCheck = event => {
        let answer = event.target.id

        if (answer === "correct") {
            this.setState({ 
                isDisabled: !this.state.isDisabled,
                answerCorrect: true,
                playerScore: this.state.playerScore + 1,
                // counter: this.state.counter + 1
             });
        } else {
            this.setState({ 
                isDisabled: !this.state.isDisabled,
                answerCorrect: null,
                playerWrong: this.state.playerWrong + 1,

                // counter: this.state.counter + 1
            });
        }
    }

    render() {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <h2><Countdown handleTimeout={this.handleTimeout} /></h2>
                                <div>
                                    {this.state.questions && this.state.counter < 10 ? this.state.questions[this.state.counter].question : ''}<br /><br />
                                    {this.state.questions && this.state.counter < 10 ? this.state.questions[this.state.counter].answers.map(({correct, answer}) => (
                                        <div><Button type="submit" id={correct} disabled={this.state.isDisabled} onClick={this.clickCheck}>{answer}</Button><br /><br /></div>
                                    )) : ''}
                                    < br />
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