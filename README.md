# 🌡️ Temperature Converter

A simple and responsive **Temperature Converter** web application that converts temperatures between **Celsius, Fahrenheit, and Kelvin** in real time.

This project was developed as **Task 5 – Laxmi Web Development Track**.

## ✨ Features

* 🌡️ Convert between Celsius, Fahrenheit, and Kelvin
* ⚡ Live conversion while typing
* ✅ Input validation
* 🚫 Prevents temperatures below absolute zero
* 🔄 Convert from any of the three units
* 🧹 Clear All button
* 📱 Responsive design
* 🎨 Modern glassmorphism UI
* ✨ Smooth animations and hover effects

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

## 📁 Project Structure

```text
temperature-converter/
│
├── index.html
├── style.css
└── script.js
```

## 🧮 Conversion Formulas

```text
Celsius → Fahrenheit
F = (C × 9/5) + 32

Celsius → Kelvin
K = C + 273.15

Fahrenheit → Celsius
C = (F - 32) × 5/9

Fahrenheit → Kelvin
K = ((F - 32) × 5/9) + 273.15

Kelvin → Celsius
C = K - 273.15

Kelvin → Fahrenheit
F = ((K - 273.15) × 9/5) + 32
```

## 🚀 How to Run

1. Download or clone this repository.

2. Open the project folder.

3. Open `index.html` in any modern web browser.

No additional installation or dependencies are required.

## 💡 How It Works

The user enters a temperature in any one of the input fields.

JavaScript detects the input using the `input` event and automatically calculates the corresponding values for the other temperature units.

For example:

```text
100°C
↓
212°F
373.15 K
```

## ✅ Validation

The application checks for temperatures below absolute zero.

```text
Celsius     → Minimum -273.15°C
Fahrenheit  → Minimum -459.67°F
Kelvin      → Minimum 0 K
```

Invalid values display an appropriate error message.

## 🎯 Learning Outcomes

Through this project, I practiced:

* HTML form inputs
* JavaScript functions
* JavaScript calculations
* DOM manipulation
* Input events
* Input validation
* Responsive CSS
* UI animations

## 🔮 Future Scope

The project can be improved by adding:

* Conversion history
* More temperature units
* Light/Dark mode
* Voice input
* Copy result option
* Temperature charts


