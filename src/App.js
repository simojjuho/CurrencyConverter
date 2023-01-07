import { useEffect, useState } from "react";
import currencyService from './services/currencyService'
import CurrencyTable from './components/CurrencyTable'

const App = () => {
const [currencyRates, setCurrencyRates] = useState([])
const [ currencies, setCurrencies] = useState({})

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

const filterCurrencies = () => {
  const filteredCurrencies = currencies.reduce((acc, current) => {
    if ( current.currencyCode === 'EUR' || current.currencyCode === 'GBP' || current.currencyCode === 'USD' || current.currencyCode === 'ZAR') {
      return acc.concat(current)
    } else return acc
  }, []) 

  return filteredCurrencies
}


return (
  <div>
  <div>
    <h1>Currency rates app v0.1</h1>
  </div>
  <article>
    <h2>The most common currencies</h2>
    <CurrencyTable filteredCurrencies={filterCurrencies} currencyRates={currencyRates} />
  </article>
  <article>
    <h2>Convert</h2>
  </article>
  </div>
)
}

export default App;
