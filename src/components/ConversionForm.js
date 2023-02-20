import SelectCurrenciesMenu from "./DropdownMenu"

const ConversionForm = ({ currencies }) => {

    const handleConversion = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handleConversion()}>
                <SelectCurrenciesMenu currencies={ currencies }/>
            </form>
        </div>
    )
}

export default ConversionForm