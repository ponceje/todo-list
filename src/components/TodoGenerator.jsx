import React, { Component } from 'react';
import { v4 as uuidv4} from 'uuid';

class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            id: uuidv4(),
            text : "",
            done : false
        }
    }
    

    toAddTodo=(text)=>{
        this.props.toAddTodo(this.state.text);
    }

    render() {
        const test = "test";
        return (
            <div>
                <input type="text" 
                name="todo" 
                id ="todo"
                value = {this.state.text}
                />
                <input type="button" 
                value="Add"
                onClick = {this.toAddTodo}/>
            </div>
        );
    }
}

export default TodoGenerator;