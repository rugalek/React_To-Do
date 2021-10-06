import React from "react";
import { Button } from "../Button";
import { Form } from "../Form";
import { ListItem } from "../ListItem/ListItem";
import styles from "./TodoList.module.css";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      type: "ALL",
      filteredTodos: [],
      isLoading: true,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     const todos = JSON.parse(localStorage.getItem("todos"));

  //     this.setState({ todos, filteredTodos: todos, isLoading: false });
  //   }, 3000);
  // }

  // componentDidUpdate() {
  //   localStorage.setItem("todos", JSON.stringify(this.state.todos));
  // }
  onClickAdd = (todoshka) => {
    const newTodos = [...this.state.todos, todoshka];

    this.setState({ todos: newTodos });
    this.setState({ filteredTodos: newTodos });
  };

  onClickDelete = (id) => {
    const deletedTodos = this.state.todos.filter((item) => item.id !== id);

    this.setState({ todos: deletedTodos });
    this.setState({ filteredTodos: deletedTodos });
  };
  onClickDone = (id) => {
    const checkedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
    );
    this.setState({ todos: checkedTodos });
    this.setState({ filteredTodos: checkedTodos });
  };
  onClickSelect = (id) => {
    const selectedTodos = this.state.todos.map((todo) =>
      todo.id === id ? { ...todo, selected: !todo.selected } : { ...todo }
    );
    this.setState({ todos: selectedTodos });
    this.setState({ filteredTodos: selectedTodos });
  };
  onEditText = (id, newText) => {
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
        return todo;
      }
      return todo;
    });
    this.setState({ todos: newTodos });
    this.setState({ filteredTodos: newTodos });
  };
  onDoneBtn = () => {
    const doneTodos = this.state.todos.filter((todo) => todo.checked);
    this.setState({ filteredTodos: doneTodos });
    this.setState({ type: "DONE" });
  };
  onUndoneBtn = () => {
    const undoneTodos = this.state.todos.filter((todo) => !todo.checked);
    this.setState({ filteredTodos: undoneTodos });
    this.setState({ type: "UNDONE" });
  };
  onAllBtn = () => {
    const allTodos = this.state.todos;
    this.setState({ filteredTodos: allTodos });
    this.setState({ type: "ALL" });
  };

  render() {
    const { todos, isLoading, filteredTodos, type } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          {isLoading ? <div>"Loading..."</div> : null}
          <h1 className={styles.title}>Задач к выполнению: {todos.length}</h1>
          <div style={{ display: "flex", flexDirection: "row", padding: "5px 5px" }}>
            <Button text={"All"} onClick={this.onAllBtn} />
            <Button text={"Undone"} onClick={this.onUndoneBtn} />
            <Button text={"Done"} onClick={this.onDoneBtn} />
          </div>
          <Form onClick={this.onClickAdd} />
          {filteredTodos.map((item) => {
            return (
              <ListItem
                key={item.id}
                text={item.text}
                id={item.id}
                checked={item.checked}
                selected={item.selected}
                onEditText={this.onEditText}
                onClickSelect={this.onClickSelect}
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
