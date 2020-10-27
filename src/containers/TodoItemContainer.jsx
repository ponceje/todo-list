import {connect} from "react-redux";
import TodoItem from "../components/TodoItem";
import {removeFromList} from "../actions";

const mapDispatchToProps = dispatch => ({
    removeFromList:(id) => {dispatch(removeFromList(id))}
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;