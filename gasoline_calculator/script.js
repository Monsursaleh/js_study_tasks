const calculate = () => {
  let price = Number(document.querySelector("#price").value);
  let money = Number(document.querySelector("#money").value);
  let answer = document.querySelector("#answer");

  let amount = Math.floor(money / price);

  let text;

  amount >= 10
    ? (text = "good, now you can escape")
    : (text = "ups, you have to stay here");

  answer.textContent = text;
};

// event listern after the button  no call ()
document.querySelector(".calculateBtn").addEventListener("click", calculate);

// for temparature converter

// const tempCoverter = (id, value) => {
//   console.log(id, value);
//   const val = parseFloat(value);

//   let celInput = document.querySelector("#celcius");
//   let farInput = document.querySelector("#farhenhite");
//   let kelvinInput = document.querySelector("#kelvin");
//   if (id === "celcius") {
//     farInput.val = val * 1.8 + 32;
//     kelvinInput.val = val + 273.15;
//   }
//   if (id === "farhenhite") {
//     celInput.val = (val - 32) / 1.8;
//     kelvinInput.val = (val - 32) / 1.8 + 273.15;
//   }
//   if (id === "kelvin") {
//     celInput.val = val - 273.15;
//     farInput.val = ((val - 273.15) * 1.8 + 32).toFixed(2);
//   }
// };
