async function getWeather() {
    const city = document.getElementById("city").value;
    const response = await fetch(`http://127.0.0.1:8000/weather/${city}`);
    const data = await response.json();

    const resultDiv = document.getElementById("result");

    if (data.error) {
        resultDiv.innerHTML = `<p>${data.error}</p>`;
    } else {
        resultDiv.innerHTML = `
            <h2>${data.city}</h2>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Condition: ${data.description}</p>
        `;
    }
}
