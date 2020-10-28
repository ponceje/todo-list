import './App.css';
import TodoList from './components/TodoList';
import {HashRouter, BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import TodoGroupContainer from './containers/TodoGroupContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ul class ="linkList">
              <li><Link to="/list"> go to list page</Link></li>
              <li><Link to="/"> go main page</Link></li>
          </ul>
          <Switch>
            <Route path="/list" component={TodoGroupContainer}></Route>
            <Route  path="/" component={TodoList}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
