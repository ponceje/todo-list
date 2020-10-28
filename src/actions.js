export const addTodos = (todo) => {
    return {type:"ADD_TO_DO_LIST", payload: todo};
    
}
export const removeFromList = (id) => {
    return {type:"DELETE_TO_DO", payload:id};
}

export const initTodos = todos =>({
    type:"INIT_TODO",
    payload: todos
})