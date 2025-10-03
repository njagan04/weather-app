async function getWeather() {
    const city = document.getElementById("city").value;
    const response = await fetch(`http://127.0.0.1:8000/weather/${city}`);
    const data = await response.json();

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");

    if (data.error) {
        resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
    } else {
        resultDiv.innerHTML = `
            <h2>${data.city}</h2>
            <p><b>🌡️ Temperature:</b> ${data.temperature}°C</p>
            <p><b>☁️ Condition:</b> ${data.description}</p>
        `;
    }
}
