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
                    <tr>
                        <td>USD</td>
                        <td>1</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>EUR</td>
                        <td>{ showRate() }</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>ZAR</td>
                        <td> {currencyRates.ZAR} </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>GBP</td>
                        <td>{currencyRates.GBP}</td>
                        <td></td>
                    </tr>
                    <CurrencyRow currencyInfo={filteredCurrencies[0]} />
                </tbody>
            </table>
            )
            
        
    }
}

export default CurrencyTable