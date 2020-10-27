import React, { Component } from 'react';
import { v4 as uuidv4} from 'uuid';
import swordSound from '../sword-sound.mp3';
import heyhey from '../heyhey.mp3';

class TodoGenerator extends Component {
    
onSubmit = (event) => {
    const beep = new Audio(swordSound);
    const heya = new Audio(heyhey);
    beep.play();
    event.preventDefault();
    const text = event.target.todoText.value;
    const id = uuidv4();
    const todo ={ id:id, text: text, done: false};
    if (text === "cloud"){
        heya.play();
    }

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
                         class="button"/>
                    </span> 
                </form>
            </div>
        );
    }
}

export default TodoGenerator;