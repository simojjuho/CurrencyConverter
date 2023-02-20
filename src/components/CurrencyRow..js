const CurrencyRow = ({ currencyInfo, currencyRate, isInverted }) => {

    const showRate = (rate) => {
        return !isInverted
            ? rate
            : `${1 / rate}`
    }

    console.log(currencyInfo)

    return (
        <tr>
            <td>{currencyInfo.currencyCode}</td>
            <td>1</td>
            <td>{currencyInfo.currencyName}</td>
        </tr>
    )
}

export default CurrencyRow