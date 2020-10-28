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
            <div>
                <h1 id="application" class="title">TODO LIST</h1>  
                <h1 id="application" class="title">DONE LIST</h1>
                <ul class="todoDoneGroup">
                  {todos}
                </ul>
            </div>
            </div>
        );
    }
}        

export default TodoDoneGroup;