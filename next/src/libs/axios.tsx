import Axios from 'axios'

const axios = Axios.create({
    baseURL:  'http://localhost',
    headers: {
       'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export default axios;