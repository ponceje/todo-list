import React, { Component } from 'react';



class TodoItem extends Component {

markList(event) {
    event.target.classList.toggle('checked');
}
removeItem = (event) => {
    var x = document.getElementById(this.props.todo.id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}> {this.props.todo.text} 
                <input type="button" value="X" onClick={this.removeItem}/>
                </li>
            </div>
        );
    }
}

export default TodoItem;