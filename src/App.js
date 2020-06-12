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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <h1>Todo Form App</h1>
          </p>
        </header>
        <TodoForm onFormSubmit={this.onFormSubmit}/>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
            <li key={index}>{todo.task} ({todo.complete ? 'done' : 'not done'})</li>
            )
          })}
        </ul>
      </div>
    )


  }
}



export default App;
