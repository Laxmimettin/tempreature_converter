const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const message = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");

// Celsius → Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Celsius → Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Fahrenheit → Celsius
function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Fahrenheit → Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9 + 273.15;
}

// Kelvin → Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Kelvin → Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 9) / 5 + 32;
}

// Format decimal values
function formatValue(value) {
  return Number(value.toFixed(2));
}

// Show error
function showError(text) {
  message.textContent = text;
}

// Clear error
function clearError() {
  message.textContent = "";
}

// Celsius input
celsiusInput.addEventListener("input", () => {
  const celsius = parseFloat(celsiusInput.value);

  if (Number.isNaN(celsius)) {
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    clearError();
    return;
  }

  if (celsius < -273.15) {
    showError("⚠️ Celsius cannot be below absolute zero (-273.15°C).");
    fahrenheitInput.value = "";
    kelvinInput.value = "";
    return;
  }

  clearError();

  fahrenheitInput.value = formatValue(celsiusToFahrenheit(celsius));

  kelvinInput.value = formatValue(celsiusToKelvin(celsius));
});

// Fahrenheit input
fahrenheitInput.addEventListener("input", () => {
  const fahrenheit = parseFloat(fahrenheitInput.value);

  if (Number.isNaN(fahrenheit)) {
    celsiusInput.value = "";
    kelvinInput.value = "";
    clearError();
    return;
  }

  if (fahrenheit < -459.67) {
    showError("⚠️ Fahrenheit cannot be below absolute zero (-459.67°F).");
    celsiusInput.value = "";
    kelvinInput.value = "";
    return;
  }

  clearError();

  const celsius = fahrenheitToCelsius(fahrenheit);

  celsiusInput.value = formatValue(celsius);

  kelvinInput.value = formatValue(fahrenheitToKelvin(fahrenheit));
});

// Kelvin input
kelvinInput.addEventListener("input", () => {
  const kelvin = parseFloat(kelvinInput.value);

  if (Number.isNaN(kelvin)) {
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    clearError();
    return;
  }

  if (kelvin < 0) {
    showError("⚠️ Kelvin cannot be below 0 K.");
    celsiusInput.value = "";
    fahrenheitInput.value = "";
    return;
  }

  clearError();

  const celsius = kelvinToCelsius(kelvin);

  celsiusInput.value = formatValue(celsius);

  fahrenheitInput.value = formatValue(kelvinToFahrenheit(kelvin));
});

// Clear button
clearBtn.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";

  clearError();

  celsiusInput.focus();
});
