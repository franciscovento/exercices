import axios from 'axios'

export const read = async () => {
    const resp = await axios({
        method: 'GET',
        baseURL:'https://todos-go.herokuapp.com/api',
        url:'/todos',
    })
return resp.data;
    
}