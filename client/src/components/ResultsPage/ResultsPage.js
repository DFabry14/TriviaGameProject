import React from "react"
// import './ResultsPage.css'

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
    height: '50px',
    width: '225px',
    paddingBottom: '50px'
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
// const footerStyle = {
//     position: "fixed",
//     bottom: "0px",
//     backgroundColor: "grey",
//     height: "60px",
//     marginTop: "0px",
//     borderTopStyle: "solid",
//     borderTopColor: "orange"
// }
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

const ResultsPage = (props) => (
    <div className="start" style={style}>
        <div className="button">
            <p className="instructions" style={headline}>
                End of Game!
                <ul style={inst}>
                    <li>You did great! </li>
                    <li>Your score is:</li><br/>
                    <li>{props.playerScore}</li>
                </ul>
            </p>
        </div>
        <a className="waves-effect waves-light btn-large" href="/" onClick={console.log("CLICKED")} style={button}>Play Again!</a>
    </div>
);

export default ResultsPage;
