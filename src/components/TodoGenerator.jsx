import 'antd/dist/antd.css'
import React, { Component } from 'react';
import { v4 as uuidv4} from 'uuid';
import swordSound from '../sword-sound.mp3';
import heyhey from '../heyhey.mp3';
import { addTodos } from '../apis/todos';
import { Button,Tooltip } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

class TodoGenerator extends Component {
    
constructor(props) {
    super(props);
    this.state={
        text:''
    }
}

onSubmit=(event)=>{
    event.preventDefault();
    addTodos(event.target.todoText.value).then(response=>{
        this.props.addTodos(response.data);
        this.setState({
            text: ''
        });
    })
}
    render() {
        

        return (
            <div id="toDoGenerator">
                <form onSubmit={this.onSubmit}>
                    <span>
                         <input type="text" 
                         name="todoText" 
                         id ="todoText"
                         required/>
                         
                         <Button class="plus-todo" 
                         shape="circle" 
                         htmlType="submit" 
                         ghost="true" 
                         size="large" 
                         icon={<PlusCircleOutlined />}/>
                    </span> 
                </form>
            </div>
        );
    }
}

export default TodoGenerator;