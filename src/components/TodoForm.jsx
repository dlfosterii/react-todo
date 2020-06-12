import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: '',
            complete: false,
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState({
            task: '',
            complete: false,
        })
    }

    onNameChange = (e) => {
        this.setState(
            {
                name: e.target.value,
            })
    }

    onCompleteChange = (e) => {
        this.setState(
            {
                complete: e.target.checked
            })
    }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div>
                    <label htmlFor="task">Task: </label>
                    <input type="text" id="task"
                    value={ this.state.name } onChange={this.onNameChange}/>
                </div>
                <div>
                    <label htmlFor="complete">Complete?</label>
                    <input type="checkbox" id="complete" value="complete"
                    checked={this.state.complete} onChange={this.onCompleteChange}/>
                </div>
                <button type="submit">Add</button>

            </form>
        )
    }
}
