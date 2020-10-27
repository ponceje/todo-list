import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:0
        }
    }
    
    initArray=(items)=>{
        return Array.from(Array(Number(items)).keys);
    }

    render() {
        return (
            <div>
                <ul>    
                <TodoItem />
                </ul>
            </div>
        );
    }
}

export default TodoGroup;