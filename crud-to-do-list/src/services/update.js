import axios from 'axios'

const updateTask = async (id, isCompleted) =>{
    const resp = await axios({
        method: 'PUT',
        baseURL: 'https://todos-go.herokuapp.com/api',
        url: `/todos/${id}`,
        data: isCompleted
    })
    console.log(resp)
    return resp.data;
}