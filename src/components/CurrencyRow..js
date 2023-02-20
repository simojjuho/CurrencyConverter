const CurrencyRow = ({ currencyInfo, currencyRate, isInverted }) => {

    const showRate = (rate) => {
        return !isInverted
            ? rate
            : `${1 / rate}`
    }

    return (
        <tr>
            <td>{currencyInfo.currencyCode}</td>
            <td>{ currencyRate }</td>
            <td>{currencyInfo.currencyName}</td>
        </tr>
    )
}

export default CurrencyRow