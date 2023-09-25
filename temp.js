// temp.js

document.getElementById('inputCelsius').addEventListener('input', convertCelsiusToFahrenheit);

function convertCelsiusToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById('inputCelsius').value);

    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9/5) + 32;
        document.getElementById('outputFahrenheit').value = fahrenheit.toFixed(2);
    } else {
        document.getElementById('outputFahrenheit').value = ''; // Clear the output if input is not a valid number
    }
}

document.getElementById('clearButton').addEventListener('click', clearInput);

function clearInput() {
    document.getElementById('inputCelsius').value = '';
    document.getElementById('outputFahrenheit').value = '';
}
