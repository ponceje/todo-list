import './App.css';
import TodoList from './components/TodoList';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import TodoGroupContainer from './containers/TodoGroupContainer';
import TodoDoneGroupContainer from './containers/TodoDoneGroupContainer';
import {connect} from 'react-redux' ;
import React, { Component } from 'react';
import { getTodos } from './apis/todos';
import {initTodos} from "./actions";
import errorFile from './components/errorFile';

class App extends Component {

  componentDidMount(){
    getTodos().then(response=>{
      console.log(response.data);
      this.props.initTodos(response.data);
    })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <header className="App-header">
            <ul class ="linkList">
                <li class ="inline"><Link class="link" to="/list" style={{ textDecoration: 'none' }}>TODO LIST</Link></li>
                <li class ="inline"><Link class="link" to="/done" style={{ textDecoration: 'none' }}>DONE LIST</Link></li>
                <li class ="inline"><Link class="link" to="/" style={{ textDecoration: 'none' }}>MAIN</Link></li>
            </ul>
            <Switch>
              <Route exact path="/" component={TodoList}></Route>
              <Route exact path="/list" component={TodoGroupContainer}></Route>
              <Route exact path="/done" component={TodoDoneGroupContainer}></Route>
              <Route exact path="/*" component={errorFile}></Route>
            </Switch>
          </header>
          </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null,mapDispatchToProps)(App);
