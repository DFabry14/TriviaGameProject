import React, { Component } from 'react'
import API from '../../utils/API'
// import { Route } from 'react-router-dom'
import Countdown from '../Countdown/Countdown'
import './question.css'
import Footer from '../Footer'
import Button from '../../../node_modules/react-materialize/lib/Button';
import ResultsPage from '../ResultsPage'
// import StartPage from '../StartPage'



const footerStyle = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    height: "60px",
    marginTop: "0px",
    borderTopStyle: "solid",
    borderTopColor: "orange"
}
const style = {
    display: "flex",
    textAlign: "center",
    backgroundColor: "blue",
    height: "700px",
    marginTop: "-30px"
};
const button = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    height: '50px',
    width: 'auto',
    padding: '0 40px',

};
const inst = {
    textAlign: "center",
    fontFamily: "Contrail One",
    fontSize: "30px",
    color: "orange",
    paddingTop: "30px"
};
// const headline = {
//     fontSize: "42px",
//     color: "orange",
//     textAlign: "center",
//     fontFamily: 'Contrail One',
//     paddingTop: '50px'
// };
// const diff = {
//     fontFamily: 'Contrail One',
//     fontSize: '32px',
//     color: 'orange',
//     backgroundColor: 'black',
//     marginLeft: '42.5%',
//     height: '50px',
//     width: '225px',
//     marginBottom: '20px',
//     textAlign: 'center'
// };

class Question extends Component {
 

    state = {
        questions: null,    
        counter: 0,
        playerScore: 0,
        playerWrong: 0,
        answerCorrect: null,
        isDisabled: false, 
    };
   
    componentWillMount() {
        // console.log(this.props.children)
        API.getQuestions('easy')
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
                        question: decodeURI(res.data.results[i].question),
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
            <div className="center" style={style}>
                <div className="row">
                    <div className="col s12 m6">
                                <div style={inst}>
                                <h2><Countdown
                                 handleTimeout={this.handleTimeout} /></h2>
                                 <div id="question">
                                    {this.state.questions && this.state.counter < 10 ? 
                                    this.state.questions[this.state.counter].question : ''}
                                    </div>
                                    {this.state.questions && this.state.counter < 10 ? 
                                     this.state.questions[this.state.counter].answers.map(({correct, answer}) => (
                                        <div><Button 
                                         id={correct}
                                         disabled={this.state.isDisabled}
                                         onClick={this.clickCheck} 
                                         style={button}>
                                         {answer}</Button><br /><br /></div>
                                    )) : <ResultsPage playerScore={this.state.playerScore}/>}
                                    < br />
                        </div>
                    </div>
                </div>
                <Footer style={footerStyle} 
                playerScore={this.state.playerScore} 
                playerWrong={this.state.playerWrong}>
                </Footer>
            </div >
        );
    }
}

export default Question     