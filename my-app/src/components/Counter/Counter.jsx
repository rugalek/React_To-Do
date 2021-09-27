import React from "react";
import logo from "./refresh_btn.png";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor ", props.background);
    this.state = {
      count: props.initialCount || 0,
    };

    this.onClickMinus = this.onClickMinus.bind(this);
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus = () => {
    this.setState({
      count: --this.state.count,
    });
  };

  onClickReset = () => {
    this.setState({
      count: (this.state.count = 0),
    });
  };

  render() {
    const { count } = this.state;
    const background = this.props.background;
    console.log("render ", this.props.background);
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background,
            color: "lightgray",
            fontWeight: "semi-bold",
            border: "1px solid black",
            width: "300px",
            height: "400px",
            margin: "30px",
          }}
        >
          <p
            style={{
              fontSize: 100,
            }}
          >
            {count}
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "300px",
              height: "300px",
              color: "white",
            }}
          >
            {
              <button
                style={{
                  fontSize: 50,
                  width: "100px",
                  backgroundColor: "red",
                }}
                onClick={this.onClickMinus}
              >
                -
              </button>
            }
            {
              <button
                style={{
                  fontSize: 50,
                  width: "100px",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "orange",
                }}
                onClick={this.onClickReset}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                ></img>
              </button>
            }

            {
              <button
                style={{
                  fontSize: 50,
                  width: "100px",
                  backgroundColor: "green",
                }}
                onClick={this.onClickPlus}
              >
                +
              </button>
            }
          </div>
        </div>
      </div>
    );
  }
}
