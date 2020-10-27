import {connect} from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import {toAddTodo} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    toAddTodo: (todo) => {dispatch(toAddTodo(todo))}
})

const TodoGeneratorContainer = connect(null, mapDispatchToProps) (TodoGenerator)

export default TodoGeneratorContainer;