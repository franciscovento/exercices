import axios from 'axios'

export const read = async () => {
    const resp = await axios({
        method: 'GET',
        baseURL: 'https://prof-quotes.herokuapp.com/api',
        url: '/quotes'
    })
    return resp.data
}