import {connect} from "react-redux";
import TodoItem from "../components/TodoItem";
import {deleteTodo} from "../actions";

const mapDispatchToProps = dispatch => ({
    deleteTodo:(id) => {dispatch(deleteTodo(id))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;