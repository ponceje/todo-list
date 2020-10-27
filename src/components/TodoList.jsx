import React, { Component } from 'react';
import TodoGroup from './TodoGroup'
import TodoGenerator from './TodoGenerator'


class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoGroup />
                <TodoGenerator />
            </div>
        );
    }
}

export default TodoList;