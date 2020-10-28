import {connect} from "react-redux";
import TodoDoneGroup from "../components/TodoDoneGroup";

const mapStateToProps = state => ({
    todos: state.todos
});

const TodoDoneGroupContainer = connect(mapStateToProps)(TodoDoneGroup);

export default TodoDoneGroupContainer;