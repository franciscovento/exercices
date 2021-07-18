import axios from 'axios'

export const updateTask = async (task) =>{
    const resp = await axios({
        method: 'PUT',
        baseURL: 'https://todos-go.herokuapp.com/api',
        url: `/todos/${task.id}`,
        data: task
    })
    return resp.data;
}