import React, { Component } from 'react';
import { removeFromList } from '../apis/todos';


class TodoItem extends Component {
markList(event) {
    event.target.classList.toggle('checked');
    this.props.todo.done = "true";
}
removeItem = (todoid) => {
    removeFromList(todoid).then(response=>{
        this.props.removeFromList(response.data.id);
    })
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li>
                    <label onClick={this.markList}>{this.props.todo.text}</label>
                    <span class="close" onClick={()=> this.removeItem(this.props.todo.id)}>&times;</span>
                </li>
            </div>
        );
    }
}

export default TodoItem;