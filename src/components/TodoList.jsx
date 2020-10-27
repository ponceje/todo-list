import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroupContainer'
import TodoGeneratorContainer from '../containers/TodoGeneratorContainer'


class TodoList extends Component {
    render() {
        return (
            <div>
                <h1 id="application">TodoList</h1>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;