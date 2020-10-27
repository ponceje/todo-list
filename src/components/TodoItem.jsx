import React, { Component } from 'react';



class TodoItem extends Component {
    constructor(props){
        super(props)
    }

markList(event) {
    event.target.classList.toggle('checked');
}
removeItem = (todoid) => {
    // var x = document.getElementById(this.props.todo.id);
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    this.props.removeFromList(todoid);
}

    render() {
        return (
            <div id={this.props.todo.id}> 
                <li onClick={this.markList}> {this.props.todo.text} 
                <input type="button" value="X" onClick={()=> this.removeItem(this.props.todo.id)} class="buttonList"/>
                </li>
            </div>
        );
    }
}

export default TodoItem;