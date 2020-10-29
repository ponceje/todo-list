import api from './api'
 
export const getTodos = () => {
    return api.get('/todos')
}

export const addTodos = (todoText) => {
    return api.post('/todos', {todoText})
    }

export const removeFromList = (id) => {
    return api.delete('/todos/'+id)
    }

export const updateTodos = ({id}) => 
    api.put('/todos/' + id)
