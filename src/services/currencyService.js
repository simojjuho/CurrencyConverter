import axios from 'axios'
const { REACT_APP_CURRENCY_API_KEY } = process.env

const getCurrencyRates = async () => {
    const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=${REACT_APP_CURRENCY_API_KEY}`)
    return response.data
}

const getCurrencies = async () => {
    const response = await axios.get('https://api.currencyfreaks.com/supported-currencies')
    return response.data
}

const currencyService = { getCurrencyRates, getCurrencies }

export default currencyService