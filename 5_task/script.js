const calculate = () => {
  let height = Number(document.querySelector("#height").value) / 100;
  let weight = Number(document.querySelector("#weight").value);
  let result = document.querySelector("#result");
  let text = "";
  let color;

  let bmi = (weight / (height * height)).toFixed(1);

  if (bmi < 18.5) {
    text = " - Underweight.";
    color = "warning";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    text = " - Normal or healthy weight.";
    color = "normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    text = " - Pre-obesity.";
    color = "warning";
  } else if (bmi >= 30) {
    text = " - Obesity.";
    color = "danger";
  }
  console.log(bmi);
  if (Number.isNaN(bmi)) {
    result.textContent = "Check your numbers.";
  } else {
    result.textContent = "BMI is " + bmi + text;
    result.classList.add(color);
  }
};
