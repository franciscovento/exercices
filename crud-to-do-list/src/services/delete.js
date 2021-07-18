import axios from 'axios'

export const deleteTask = async (id) =>{
    const resp = await axios({
        method: 'DELETE',
        baseURL: 'https://todos-go.herokuapp.com/api',
        url: `/todos/${id}`
    })
    return resp
}

