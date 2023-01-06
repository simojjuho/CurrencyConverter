import axios from 'axios'

async function getAllCurrencies() {
    const currencies = await axios.get('https://api.currencyfreaks.com/latest?apikey=')
    return currencies
}