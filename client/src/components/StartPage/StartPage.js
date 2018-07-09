import React from "react"
import Question from "../Questions"

const style = {
    backgroundColor: "blue",
    height: "700px",
    marginTop: "-30px"
};
const button = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    marginLeft: '42.5%',
    height: '50px',
    width: '225px'
};
const inst = {
    textAlign: "center",
    fontFamily: "Contrail One",
    fontSize: "30px",
    color: "orange",
    paddingTop: "30px"
};
const headline = {
    fontSize: "42px",
    color: "orange",
    textAlign: "center",
    fontFamily: 'Contrail One',
    paddingTop: '50px'
};

const StartPage = () => (
    <div className="start" style={style}>
        <div className="button">
            <p className="instructions" style={headline}>
                Instructions:
                <ul style={inst}>
                    <li>Login to your account above.</li>
                    <li>Invite friends to play with you!</li>
                    <li>You will be shown ten questions and get five seconds to answer each one.</li>
                    <li>Click "Start Game" when you're ready to begin!</li>
                </ul>
            </p>
            <a class="waves-effect waves-light btn-large" onClick={this.startGame} style={button}>Start Game</a>
        </div>
    </div>
);

export default StartPage;
