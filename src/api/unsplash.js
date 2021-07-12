import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID wZXqjVUFE2Bz5QS7ex934pootFsXqAjrfXuS8RVKubY',
  },
})
