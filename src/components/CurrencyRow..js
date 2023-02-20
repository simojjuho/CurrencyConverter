const CurrencyRow = ({ currencyInfo, currencyRate, isInverted }) => {

    const showRate = () => {
        return !isInverted
            ? currencyRate
            : `${1 / currencyRate}`
    }

    /* This could be clearer. The aim is to give more information to the user about
    in which currency the rate is shown. */
    const showCurrency = () => {
        return !isInverted
            ? currencyInfo.currencyCode
            : 'USD'
    }

    return (
        <tr>
            <td>{currencyInfo.currencyCode}</td>
            <td>{ showRate() }</td>
            <td>{ showCurrency() }</td>
            <td>{currencyInfo.currencyName}</td>
        </tr>
    )
}

export default CurrencyRow