import { useEffect, useState } from "react";
import currencyService from './services/currencyService'

const App = () => {
const [currencyRates, setCurrencyRates] = useState([])
const [ currencies, setCurrencies] = useState([])

useEffect(() => {
  currencyService.getCurrencyRates()
    .then(rates => {
      setCurrencyRates(rates)
    })

  currencyService.getCurrencies()
    .then(currencies => {
      setCurrencies(currencies)
    })
}, [])
 

return (
  <div>
    <h1>Currency rates app v0.1</h1>
  </div>
)
}

export default App;
