let form = document.querySelector("form");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let result = document.querySelector(".code");

let directions = document.querySelectorAll('input[name="direction"]');

const setGradient = () => {
  let selectedDirection;
  for (const direction of directions) {
    if (direction.checked) {
      selectedDirection = direction.value;
      break;
    }
  }
  result.textContent = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;
  document.body.style.backgroundImage = `linear-gradient(${selectedDirection}, ${color1.value}, ${color2.value})`;
};

form.addEventListener("change", setGradient);
