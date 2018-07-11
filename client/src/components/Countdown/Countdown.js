import React, { Component } from "react";


class Countdown extends Component {
  state = { currentCount: 10 }

  timer = () => {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if (this.state.currentCount < 1 || this.state.onClick === true) {
      // clearInterval(this.intervalId);
      console.log('timer expired, playerWrong ++')
      this.setState({currentCount: 10})
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