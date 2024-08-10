import React from 'react';

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleAddTodo}>
        <input 
          type="text" 
          value={this.props.todoText}
          onChange={this.props.handleInputChange} 
        />
        <button type="submit">Add Todo</button>
        <button type="button" onClick={this.props.handleClearCompleted}>
          Clear Completed
        </button>
      </form>
    );
  }
}
