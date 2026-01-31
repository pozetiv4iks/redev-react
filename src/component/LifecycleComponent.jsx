import React, { Component } from "react";
import getTodo from "../service/get-data";

export default class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.getData = getTodo;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = nextState.count % 2 === 0;
    return shouldUpdate;
  }

  componentDidUpdate() {
    console.log("componentShouldDidUpdate");
    console.log(this.state.count);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>Классовый компонент с методами жизненного цикла</h2>
        <div>
          <h3>Счетчик: {count}</h3>
          <button onClick={this.handleIncrement}>Увеличить</button>
        </div>
      </div>
    );
  }
}
