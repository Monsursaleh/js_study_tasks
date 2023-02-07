// collecting form events
const form = document.querySelector("form");
//body slecting for output to change the color
let bodyBG = document.querySelector("body");
//outpout variable code as text
let text = document.querySelector("#cssCode");

let code, directionValue;
// selectiing all input node list for event targeting
let directions = document.querySelectorAll('input[type="radio"]');
//
const bgGenerator = () => {
  //color input variable
  // variable  has to be inside to colecting once user change the value
  let color_1 = document.querySelector("#color1").value;
  let color_2 = document.querySelector("#color2").value;
  console.log(directions);
  for (const item of directions) {
    if (item.checked) {
      console.log(item);
      directionValue = item.value;
      console.log(directionValue);
    }
  }

  code = `linear-gradient(${directionValue}, ${color_1}, ${color_2})`;
  bodyBG.style.backgroundImage = code;
  text.textContent = code;
  console.log(code);
};

// chang event listener
form.addEventListener("change", bgGenerator);
