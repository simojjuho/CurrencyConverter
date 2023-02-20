import { useEffect, useState } from "react";
import currencyService from './services/currencyService'
import CurrencyTable from './components/CurrencyTable'
import ConversionForm from "./components/ConversionForm"
import { logger } from "./services/logger";

const App = () => {
  const [ currencyRates, setCurrencyRates ] = useState({})
  const [ currencies, setCurrencies ] = useState([])



  useEffect(() => {
    currencyService.getCurrencyRates()
      .then(rates => {
        setCurrencyRates(rates)

        currencyService.getCurrencies()
          .then(currencyInfo => {
            setCurrencies(currencyInfo)
          })
      })
  }, [])


  /* This was previously an arrow function. I just couldn't get this app working because and error occured that couldn't solve a property name currencyCode.
  
  The solution was to change this filteredCurrencies into a variable. It was run just when needed and even though I tried using promise (async / await), it
  just didn't work. After long time I finally realized to try variable instead of functiono so it will be ready when needed.
  
  We'll see, what kind of problems this produces...*/
  const filteredCurrencies = currencies.reduce((acc, current) => {
      if ( current.currencyCode === 'EUR' || current.currencyCode === 'GBP' || current.currencyCode === 'USD' || current.currencyCode === 'ZAR') {
        return acc.concat(current)
      } else return acc
    }, []) 

  if(!currencies[0]) {
    return (
      <p>loading ...</p>
    )
  }

  return (
    <div>
    <div>
      <h1>Currency rates app v0.1</h1>
    </div>
    <article>
      <h2>The most common currencies</h2>
    <CurrencyTable  filteredCurrencies={filteredCurrencies} currencyRates={currencyRates.rates} />
    </article>
    <article>
      <h2>Convert</h2>
      <ConversionForm />
    </article>
    </div>
  )
  }

  export default App;
