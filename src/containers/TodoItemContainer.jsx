import {connect} from "react-redux";
import TodoItem from "../components/TodoItem";
import {removeFromList, updateTodos} from "../actions";

const mapDispatchToProps = dispatch => ({
    removeFromList:(id) => {dispatch(removeFromList(id))},
    updateTodos:(id, todo) => {dispatch(updateTodos(id, todo))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;