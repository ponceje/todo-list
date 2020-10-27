import React, { Component } from 'react';



class TodoItem extends Component {

markList(event) {
    event.target.classList.toggle('checked');
}
removeItem = (event) => {
    this.props.removeItem(event.id);
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}> {this.props.todo.text} 
                <input type="button" value="X" onClick={this.removeItem} class="buttonList"/>
                </li>
            </div>
        );
    }
}

export default TodoItem;