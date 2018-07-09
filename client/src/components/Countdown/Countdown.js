import React, { Component } from "react";


class Countdown extends Component {
  state = { currentCount: 5 }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 1) {
      // clearInterval(this.intervalId);
      console.log('timer expired, playerWrong ++')
      this.setState({currentCount: 5})
      this.props.handleTimeout();
    } else if (this.state.onClick) {
        this.setState({currentCount: this.state.currentCount + 1})
  } else {
      console.log(this.state.currentCount);
    }
  }
  componentDidMount() {
    this.intervalId = setInterval(this.timer, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>{this.state.currentCount}</div>
    );
  }
}



export default Countdown