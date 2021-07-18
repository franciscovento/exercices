import axios from 'axios'

export const updateQuote = async (body) => {
    const promise = await axios({
        method: 'PUT',
        baseURL: 'https://prof-quotes.herokuapp.com/api',
        url: `/quotes/${id}`,
        data: body
    })
    return promise;
}
