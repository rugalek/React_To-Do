import React from "react";

export class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div style={{ fontSize: "50px" }}>
        <h1>ЧАСИКИ</h1>
        <h2>{time} O'clock</h2>
      </div>
    );
  }
}
