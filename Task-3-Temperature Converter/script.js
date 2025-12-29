function convertTemp() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number";
    result.style.color = "red";
    return;
  }

  let output = "";

  if (unit === "celsius") {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    output = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  }

  else if (unit === "fahrenheit") {
    const c = (temp - 32) * 5/9;
    const k = c + 273.15;
    output = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
  }

  else if (unit === "kelvin") {
    const c = temp - 273.15;
    const f = (c * 9/5) + 32;
    output = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
  }

  result.textContent = output;
  result.style.color = "green";
}
