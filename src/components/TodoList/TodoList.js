import React, { Component } from 'react';
import TodoItem from '../../components/TodoItem/TodoItem';

class TodoList extends Component {
    render() {
        const list = this.props.tasks.map(todo => {
            return <TodoItem {...todo} key={todo.id} />
        });
        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;