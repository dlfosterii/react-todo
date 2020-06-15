import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {
          task: 'Do this',
          complete: false,
        },
        {
          task: 'Do that',
          complete: true,
        },
        {
          task: 'Do another thing',
          complete: false,
        },

      ]
    }
  }


  onFormSubmit = (data) => {
    this.setState(
      { todos: this.state.todos.concat(data) }
    )
  }

  onComplete = (index) => {
    let newTodos = [...this.state.todos] //makes a separate copy of the array
    newTodos[index].complete = true
    this.setState({
      todos: newTodos
    }
    )
  }

  onRevert = (index) => {
    let curTodos = [...this.state.todos] //makes a separate copy of the array
    curTodos[index].complete = false
    this.setState({
      todos: curTodos
    }
    )
  }

  onDelete = (index) => {
    let curTodos = [...this.state.todos] //makes a separate copy of the array
      curTodos.splice(index, 1);
      this.setState({todos: curTodos})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo Form App</h1>
        </header>
        <TodoForm onFormSubmit={this.onFormSubmit} />

        <div>
          <h1>Task List</h1>
        </div>
        {this.state.todos.map((todo, index) => {
          if (todo.complete == false) {
            return (
              <li key={index}> {todo.task} <button onClick={() => this.onComplete(index)}>Complete</button> <button onClick={()=>this.onDelete(index)}>Delete</button></li>
            )
          }
        })}

        <h1>Completed Tasks</h1>
        {this.state.todos.map((todo, index) => {
          if (todo.complete)
            return (
              <li style={{ textDecoration: 'line-through' }} key={index}> {todo.task} <button onClick={() => this.onRevert(index)}>Not Done</button> <button onClick={()=>this.onDelete(index)}>Delete</button></li>
            )
        })}
      </div>
    )


  }
}



export default App;
