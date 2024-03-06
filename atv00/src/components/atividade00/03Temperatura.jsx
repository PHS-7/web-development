const Temperatura = ({c,f,k}) => {
    const celsiusPraFahrenheit = (c) => ((9 * c / 5) + 32)
    const fahrenheitPraCelsius = (f) => ((5 * (f - 32)) / 9)
    const kelvinPraCelsius = (k) => k - 273
    const kelvin = (k) => {
        return {
            "celsius": kelvinPraCelsius(k),
            "faharenheit": celsiusPraFahrenheit(kelvinPraCelsius(k))
        }
    }
    const celsiusToFahrenheitTemp = celsiusPraFahrenheit(c);
    const FahrenheitToCelsiusTemp = fahrenheitPraCelsius(f);
    const kelvinTemp = kelvin(k);

    return (
        <div>
            <h1 style={{color: 'red'}}>Converter Temperaturas</h1>
            <p>{c} celsius para Fahrenheit: {celsiusToFahrenheitTemp.toFixed(2)}</p>
            <p>{f} fahrenheits para celsius: {FahrenheitToCelsiusTemp.toFixed(2)}</p>
            <p>{k} kelvin para celsius: {kelvinTemp.celsius.toFixed(2)}</p>
            <p>{k} kelvin para Fahrenheit: {kelvinTemp.faharenheit.toFixed(2)}</p>
        </div>
    )

}


export default Temperatura;