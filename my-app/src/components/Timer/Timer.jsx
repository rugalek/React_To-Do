import React from "react";
import { Button } from "../Button";
import styles from "./Timer.module.css";
export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
  }

  startTimer = () => {
    this.timer = setInterval(() => this.setState({ timer: ++this.state.timer }), 1000);
  };
  stopTimer = () => {
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timer: 0,
    });
    this.stopTimer();
  };

  render() {
    const { timer } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.timerWrapper}>
          <div className={styles.header}>
            <h1>Timer</h1>
            <h2 className={styles.timerCounter}>{timer}</h2>
          </div>
          <div className={styles.buttons}>
            <Button text={"Start"} onClick={this.startTimer} />
            <Button text={"Stop"} onClick={this.stopTimer} />
            <Button text={"Reset"} onClick={this.resetTimer} />
          </div>
        </div>
      </div>
    );
  }
}
