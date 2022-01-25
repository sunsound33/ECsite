import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost/api/laravel',
    headers: {
       'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});

export default axios;