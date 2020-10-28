import React, { Component } from 'react';
import { unmountComponentAtNode} from "react-dom";
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
                <h1 id="application" class="title">TODO LIST</h1>  
            <div style={{height: '500px', overflow: 'auto'}}>
                <ul class = "todoGroup">
                  {todos}
                </ul>
            </div>
            </div>
        );
    }
}        

export default TodoGroup;