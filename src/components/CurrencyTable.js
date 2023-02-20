import { useState } from 'react'
import { logger } from '../services/logger'
import CurrencyRow from './CurrencyRow.'

const CurrencyTable = ({ filteredCurrencies, currencyRates }) => {
    const [isInverted, setInverted] = useState(false)


    const handleInvert = () => {
        setInverted(!isInverted)
    }

    const showRate = (currency) => {
        return !isInverted
            ? currencyRates.EUR
            : `${1 / currencyRates.EUR}`
    }
        
    if (!currencyRates) {
        return (
            <div>
                No currencies to show
            </div>
        )
    } else {
        return(
            <table>
                <tbody>
                    <tr>
                        <td><button onClick={() => handleInvert() }>Invert</button></td>
                        <td>Amount</td>
                        <td>Currency full name</td>
                    </tr>
                    { filteredCurrencies.map(currency => {
                        return <CurrencyRow key={currency.currencyCode} currencyInfo={currency} currencyRate={ currencyRates[currency.currencyCode] } />
                    }) }
                </tbody>
            </table>
            )
            
        
    }
}

export default CurrencyTable