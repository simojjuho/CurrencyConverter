const CurrencyTable = ({ filteredCurrencies, currencyRates }) => {

    

    return(
    <table>
        <tbody>
            <tr>
                <td></td>
                <td>Amount</td>
                <td>Send</td>
            </tr>
            <tr>
                <td>USD</td>
                <td>1</td>
            </tr>
            <tr>
                <td>EUR</td>
                <td>{currencyRates.rates.EUR}</td>
            </tr>
            <tr>
                <td>ZAR</td>
                <td>{ currencyRates.rates.ZAR }</td>
            </tr>
            <tr>
                <td>GBP</td>
                <td>{ currencyRates.rates.GBP }</td>
            </tr>
      </tbody>
    </table>
    )
}

export default CurrencyTable