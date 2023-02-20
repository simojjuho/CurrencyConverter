const SelectCurrenciesMenu = ({ currencies }) => {

    return (
        <select>
            { currencies.map(currency => <option key={currency.currencyCode}>{ currency.currencyCode }</option>) }
        </select>
    )
}

export default SelectCurrenciesMenu