import React, { Component } from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import TodoItemContainer from '../containers/TodoItemContainer';



class TodoGroup extends Component {

    removeItem(event){
        unmountComponentAtNode(document.getElementById('todoItem'));
    }
    
    render() {
        const todos = this.props.todos.map((todo)=> (
            <TodoItemContainer key={todo.id} todo={todo} />
        )) 
        return (
            <div>
                <ul>
                  {todos}
                </ul>
            </div>
        );
    }
}        

export default TodoGroup;