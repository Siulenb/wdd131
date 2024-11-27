document.addEventListener('DOMContentLoaded', () => {

    // Use the static data from the example image
    const temperature = 30;
    const windSpeed = 5;
    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById('temperature').textContent = temperature;
    document.getElementById('wind').textContent = windSpeed;
    document.getElementById('windchill').textContent = windChill;
});


function calculateWindChill(temp, windSpeed) {
    if (temp <= 30 && windSpeed > 4.8) {
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(1); //Round to one decimal place
    } else {
        return "N/A";
    }
}