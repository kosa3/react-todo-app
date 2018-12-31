import React, { Component } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
            uniqueId: 1,
        };
    }

    addTodo = (title) => {
        if (! title.length) {
            return;
        }

        const {
            tasks,
            uniqueId
        } = this.state;

        tasks.push({
            title,
            id: uniqueId
        });

        this.setState({
            tasks,
            uniqueId: uniqueId + 1,
        });
    };

    resetTodo = () => {
        this.setState({
            tasks: [],
        })
    };

    render() {
        return (
            <div className="App">
                <h1>TODO APP</h1>
                <button onClick={this.resetTodo}>リセット</button>
                <TodoInput addTodo={this.addTodo} />
                <TodoList tasks={this.state.tasks} />
            </div>
        );
    }
}

export default App;
