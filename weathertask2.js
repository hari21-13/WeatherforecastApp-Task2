async function getWeather() {
  const city = document.getElementById("citySelect").value.trim();
  const apiKey = "659ba5a037d035b539e3e99dec04ca9f"; // ✅ Your OpenWeatherMap API key

  if (!city) {
    document.getElementById("weatherResult").innerHTML = "Please select a city.";
    return;
  }

  // ✅ Correct dynamic URL
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found or API key issue");

    const data = await response.json();

    const resultHTML = `
      <p><strong>City:</strong> ${data.name}</p>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon">
    `;

    document.getElementById("weatherResult").innerHTML = resultHTML;

  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
  }
}
