async function fetchWeather(apiKey, city) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            console.error('Failed to retrieve weather data:', response.status);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    document.getElementById('temp').textContent = `${data.current.temp_c}°C / ${data.current.temp_f}°F`;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('humidity').textContent = `${data.current.humidity}%`;
    document.getElementById('wind').textContent = `${data.current.wind_kph} kph / ${data.current.wind_mph} mph`;
}

document.getElementById('city-select').addEventListener('change', function() {
    const apiKey = '44fefefcfbaf4c0681e71604242404'; 
    const city = this.value;
    fetchWeather(apiKey, city);
});

window.onload = () => {
    const apiKey = 'your_api_key'; 
    const city = document.getElementById('city-select').value;
    fetchWeather(apiKey, city);
};