import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todoText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: this.state.todoText,
      completed: false
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      todoText: ''
    }));
  };

  handleToggleCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(todo => 
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  handleClearCompleted = () => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(todo => !todo.completed)
    }));
  };

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <Form 
          todoText={this.state.todoText}
          handleInputChange={this.handleInputChange}
          handleAddTodo={this.handleAddTodo}
          handleClearCompleted={this.handleClearCompleted}
        />
        <TodoList 
          todos={this.state.todos}
          handleToggleCompleted={this.handleToggleCompleted}
        />
      </div>
    );
  }
}
