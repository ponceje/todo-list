import React, { Component } from 'react';
import { v4 as uuidv4} from 'uuid';

class TodoGenerator extends Component {
    
onSubmit = (event) => {
    event.preventDefault();
    const text = event.target.todoText.value;
    const id = uuidv4();
    const todo ={ id:id, text: text, done: false};

    this.props.toAddTodo(todo);
}
    render() {
        return (
            <div id="toDoGenerator">
                <form onSubmit={this.onSubmit}>
                    <span>
                         <input type="text" 
                         name="todoText" 
                         id ="todoText"
                         />
                         <input type="submit" 
                         value="Add"
                         />
                    </span> 
                </form>
            </div>
        );
    }
}

export default TodoGenerator;