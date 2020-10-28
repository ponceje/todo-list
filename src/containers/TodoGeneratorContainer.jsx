import {connect} from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import {addTodos} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    addTodos: (todo) => {dispatch(addTodos(todo))}
})

const TodoGeneratorContainer = connect(null, mapDispatchToProps) (TodoGenerator)

export default TodoGeneratorContainer;