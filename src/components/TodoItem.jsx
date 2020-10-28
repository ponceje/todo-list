import React, { Component } from 'react';



class TodoItem extends Component {
markList(event) {
    event.target.classList.toggle('checked');
    this.props.todo.done = "true";
}
removeItem = (todoid) => {
    this.props.removeFromList(todoid);
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}> {this.props.todo.done}
                <span class="close" onClick={()=> this.removeItem(this.props.todo.id)}>&times;</span>
                </li>
            </div>
        );
    }
}

export default TodoItem;