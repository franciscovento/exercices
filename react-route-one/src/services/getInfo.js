import axios from 'axios';

const getInfo = async () => {
    const data = await axios({
        method: 'GET',
        baseURL: 'https://bender-blog.herokuapp.com/',
        url: '/posts'
    })

    return data.data;
}

export default getInfo
