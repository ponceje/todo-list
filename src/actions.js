export const toAddTodo = (todo) => {
    return {type:"ADD_TO_DO_LIST", payload: todo};
    
}
export const removeFromList = (todo) => {
    return {type:"DELETE_TO_DO", payload:todo};
}