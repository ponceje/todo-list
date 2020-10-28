import './App.css';
import TodoList from './components/TodoList';
import {HashRouter, BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import TodoGroupContainer from './containers/TodoGroupContainer';
import TodoDoneGroupContainer from './containers/TodoDoneGroupContainer';
import {connect} from 'react-redux' ;
import React, { Component } from 'react';
import { getTodos } from './apis/todos';
import {initTodos} from "./actions";

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
        <header className="App-header">
          <BrowserRouter>
            <ul class ="linkList">
                <li class ="inline"><Link to="/list"> go to list page</Link></li>
                <li class ="inline"><Link to="/done"> go to done page</Link></li>
                <li class ="inline"><Link to="/"> go main page</Link></li>
            </ul>
            <Switch>
              <Route  path="/list" component={TodoGroupContainer}></Route>
              <Route  path="/done" component={TodoDoneGroupContainer}></Route>
              <Route  path="/" component={TodoList}></Route>
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  initTodos: todos => dispatch(initTodos(todos))
})

export default connect(null,mapDispatchToProps)(App);
