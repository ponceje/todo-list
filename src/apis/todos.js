import api from './api'
 
export const getTodos = () => {
    return api.get('/api/todos')
}

export const addTodos = (text) => {
    return api.post('/api/todos', {text})
    }

export const removeFromList = (id) => {
    return api.delete('/api/todos/'+id)
    }