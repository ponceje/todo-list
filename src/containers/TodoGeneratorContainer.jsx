import {connect} from "react-redux";
import TodoGenerator from "../components/TodoGenerator";
import {toAddTodo} from "../actions";

const mapDispatchToProps = (dispatch) =>({
    toAddTodo: (text) => {dispatch(toAddTodo(text))}
})

const TodoGeneratorContainer = connect(null, mapDispatchToProps) (TodoGenerator)

export default TodoGenerator;