import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.68.61:9090/'
})

export default api
