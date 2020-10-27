import { combineReducers } from 'redux';

const todos = (state = [], action) => {

    if (action.type === "ADD_TO_DO_LIST"){
        return [...state, action.payload];
    }
    else if (action.type === "DELETE_TO_DO"){
        return [...state, action.payload.state.todos.id]
    }
    return state;
}



export default combineReducers({
    todos
});