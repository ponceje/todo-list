import React, { Component } from 'react';
import { removeFromList } from '../apis/todos';
import { updateTodos } from '../apis/todos';


class TodoItem extends Component {

markList = (event) => {
    event.target.classList.toggle('checked');
    updateTodos(this.props.todo).then(response=>{
        this.props.updateTodos(response.data.id);
        

    })


}
removeItem = (todoid) => {
    removeFromList(todoid).then(response=>{
        this.props.removeFromList(response.data.id);
    })
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}  class={this.props.todo.done == true ? "checked" : "unchecked"}>
                 {this.props.todo.text}
                    <span class="close" onClick={()=> this.removeItem(this.props.todo.id)}>&times;</span>
                </li>
            </div>
        );
    }
}

export default TodoItem;