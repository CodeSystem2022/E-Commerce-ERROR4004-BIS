import axios from 'axios'

const ohlalaApi = axios.create({
  baseURL: '/api'
})

export default ohlalaApi