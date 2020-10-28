import React, { Component } from 'react';
import { unmountComponentAtNode} from "react-dom";
import TodoItemContainer from '../containers/TodoItemContainer';



class TodoDoneGroup extends Component {

    removeItem(event){
        unmountComponentAtNode(document.getElementById('todoItem'));
    }
    
    render() {
        const todos = this.props.todos.filter(todo => todo.done == true).map((todo)=> (
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

export default TodoDoneGroup;