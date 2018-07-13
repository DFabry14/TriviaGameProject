import React, { Component } from "react"
import { Row, Input, Modal, Footer } from "react-materialize"
import {auth} from "../../firebase"
// import Question from "../Questions"

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
    width: '225px',
    padding: '0 40px',
};
const footerStyle = {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "grey",
    height: "80px",
    width: "100%",
    marginTop: "0px",
    borderTopStyle: "solid",
    borderTopColor: "orange"
}
const font = {
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: "24px",
    fontFamily: 'Contrail One',
    textShadow: "1px 1px orange",
    height: "500px"
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
const diff = {
    fontFamily: 'Contrail One',
    fontSize: '32px',
    color: 'orange',
    backgroundColor: 'black',
    marginLeft: '42.5%',
    height: '50px',
    width: '225px',
    marginBottom: '20px',
    textAlign: 'center'
};

class StartPage extends Component {

    state = { email: "", password: "", error:null }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleCreateUser = event => {
          event.preventDefault();
          auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(()=>this.setState({email:"", password:"", error:null}))
          .catch(error =>{
              this.setState({error})
          });
      }

      handleUserLogin = event => {
          event.preventDefault();
          auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
          .then(()=>this.setState({email:"", password:"", error:null}))
          .catch(error =>{
              this.setState({error})
          });
      }

      handleUserLogout = event => {
          event.preventDefault();
          auth.doSignOut();
      }

    render() {
        return (

            <div className="start" style={style}>
                <div className="button">
                    <p className="instructions" style={headline}>
                        Instructions:
                <ul style={inst}>
                            <li>Login to your account above.</li>
                            <li>Invite friends to play with you!</li>
                            <li>You will be shown ten questions and get five seconds to answer each one.</li>
                            <li>Choose your desired difficulty in the dropdown.</li>
                            <li>Click "Start Game" when you're ready to begin!</li>
                        </ul>
                    </p>
                    <Row style={diff}>
                        <Input s={12} type='select' defaultValue='easy' style={diff}>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </Input>
                    </Row>
                    <Modal
            style={font}
            header='Please login or create a profile:'
            trigger={<a className="waves-effect waves-light btn-large"  href="" style={button}>Login</a>}>
            <div className="modal-content">
                <div className="modal-header">
                    <h6 className="modal-title" id="exampleModalLongTitle">Sign In</h6>

                </div>

                <div className="modal-body">
                    <form>
                        <input id="txtEmail" type="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email" />
                        <input id="txtPassword" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} placeholder="Password" />
                    </form>
                </div>

                <div className="modal-footer">
                    <button id="btnLogin" onClick={this.handleUserLogin} className="btn btn-action" disabled={!this.state.email || !this.state.password}>Log in</button>
                    <button id="btnSignUp" onClick={this.handleCreateUser} disabled={!this.state.email || !this.state.password} className="btn btn-secondary">Sign up</button>
                    <button id="btnLogout" onClick={this.handleUserLogout} className={this.props.username?"btn btn-action":"btn btn-action hide"}>Log out</button>
                </div>
            { this.state.error && <p>{this.state.error.message}</p> }
            </div>
        </Modal><br/>
                </div>
                <a className="waves-effect waves-light btn-large" href="/game" onClick={console.log("CLICKED")} style={button}>Start Game</a>
                <div>
        <Footer style={footerStyle}></Footer>
        </div>
            </div>
        );
    }
}

export default StartPage;
