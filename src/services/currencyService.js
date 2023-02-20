import axios from 'axios'
import { logger } from './logger'
const baseUrl = 'http://localhost:3001'

const getCurrencyRates = async () => {
    const response = await axios.get(`${baseUrl}/currencyRates`)
    return response.data
}

const getCurrencies = async () => {
    const response = await axios.get(`${baseUrl}/currencies`)
    return response.data
}

const currencyService = { getCurrencyRates, getCurrencies }

export default currencyService