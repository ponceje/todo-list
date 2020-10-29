import React, { Component } from 'react';
import { removeFromList } from '../apis/todos';
import { updateTodos } from '../apis/todos';
import happy from '../happy.mp3';

class TodoItem extends Component {

markList = (event) => {
    const doThat = new Audio(happy);
    doThat.play();
    event.target.classList.toggle('checked');
    updateTodos(this.props.todo).then(response=>{
        this.props.updateTodos(response.data.id);
    })


}
removeItem = (todoid) => {
    removeFromList(todoid).then(response=>{
        this.props.removeFromList(todoid);
    })
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}  class={this.props.todo.done == true ? "checked" : "unchecked"}>
                 {this.props.todo.todoText}
                    <span class="close" onClick={()=> this.removeItem(this.props.todo.id)}>&times;</span>
                </li>
            </div>
        );
    }
}

export default TodoItem;