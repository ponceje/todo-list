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

export const updateTodos = ({id, done}) => 
    api.put('/api/todos/' + id, {done: !done})
    debugger;
