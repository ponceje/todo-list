import { combineReducers } from 'redux';

const todos = (state = [], action) => {

    if (action.type === "ADD_TO_DO_LIST"){
        return [...state, action.payload];
    }
    else if (action.type === "DELETE_TO_DO"){
        const list = [...state];
        state =  list.filter(item => item.id !== action.payload)
        return state;
    }
    return state;
}



export default combineReducers({
    todos
});