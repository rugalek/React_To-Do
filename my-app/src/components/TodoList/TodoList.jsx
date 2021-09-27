import React from "react";
import { useState } from "react";
import { Form } from "../Form";
import { ListItem } from "../ListItem/ListItem";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
  };

  onClickDelete = (id) => {
    const filteredTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({ todos: filteredTodos });
  };
  onClickDone = (id) => {
    const checkedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
    );
    this.setState({ todos: checkedTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1 className={styles.title}>Задач к выполнению: {todos.length}</h1>
          <Form onClick={this.onClickAdd} />
          {todos.map((item) => {
            return (
              <ListItem
                key={item.id}
                text={item.text}
                id={item.id}
                checked={item.checked}
                onClickDelete={this.onClickDelete}
                onClickDone={this.onClickDone}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
