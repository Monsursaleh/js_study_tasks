// Customer information
// within this form text is not working

//input variable

//Output Varaible

// ////--------///
// / Customer information

let inputName = document.querySelector("#customer_name");

let customerName;
function naming() {
  customerName = this.value;
  document.querySelector(".name-output").textContent = customerName;
  console.log(customerName);
}
inputName.addEventListener("change", naming);

///  for order input Aize
//  selecting the radio input for order input --Name of element shoould be same

let radioBtns = document.querySelectorAll('input[type="radio"]'); // this is a node list

console.log(radioBtns);
/// call back fucntion e.target.value--e.target.id to comapare with condition
let pizzaPrice;
let outputPizza;
function makeOrder(e) {
  e.preventDefault(); //
  // prevent you page refresh
  // const tempConventer = (this.id, this.value) => { need to check later with arguments
  //this is a call back fucntion we can here use this.id and this.value as
  // console.log(e.target.id);
  // console.log(this.id);
  // console.log(e.target.value);
  pizzaPrice = +e.target.value;
  console.log(pizzaPrice);

  let id = e.target.id;
  if (id === "for_2") outputPizza = `Pizza Size: For 2, the price is 07.50`;
  if (id === "for_4") outputPizza = `Pizza Size: For 4, the price is 10.50`;
  if (id === "for_6") outputPizza = `Pizza Size: For 6, the price is 12.50`;
  if (id === "for_8") outputPizza = `Pizza Size: For 8, the price is 15.50`;
  document.querySelector(".size-output").textContent = outputPizza;
  console.log(outputPizza);
  document.querySelector(".total-output").textContent = pizzaPrice;
}

/// here looing the btns to fire the specific events

for (let btn of radioBtns) {
  ///looping eaach events beacuse user can fire any events .
  btn.addEventListener("change", makeOrder);
}

/// *****check box item with multiple selection******
//this not working ???????????

let toppings = [];
let sumToppings = 0;
let addFill = (e) => {
  e.preventDefault();
  // console.log(typeof e.target.id);
  toppings.push(e.target.id);
  console.log(toppings);

  toppings.length < 5 ? 0 : (sumToppings += 0.5);
  toppings.forEach((el) => {
    document.querySelector(".toppings-output").textContent = [...toppings];
    document.querySelector(".total-top").textContent = ` + ${sumToppings}`;
    /// will use join ---??
    console.log(sumToppings);
  });
};

document.querySelectorAll('input[type="checkbox"]').forEach((e) => {
  e.addEventListener("change", addFill);
});

// // delivery method  output
let deliveryMod = document.querySelector(".delivery-output");
let deliveryResult;
function chooseDelivery(e) {
  console.log(this.value);
  let value = e.target.value;
  if ((value = "eat_here")) deliveryResult = "Eat Here";
  if ((value = "home_delivery")) deliveryResult = "Home Delivery";
  if ((value = "take_away ")) deliveryResult = "Take Away";
  deliveryMod.textContent = deliveryResult;
}

var inputDlivery = document.querySelectorAll("#delivery_method");
inputDlivery.forEach((e) => {
  e.addEventListener("change", chooseDelivery);
});

// let totalPrice = document.querySelector(".total-output");
// totalPrice.value = pizzaPrice + sumToppings;

// ****** for text input for name

// const input = document.querySelector("input");
// const log = document.getElementById("log");

// input.addEventListener("change", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }

/// for checkbox filling

/// will checekedby e.targt.value
// function deliveringMethod(e) {
//   var x = document.getElementById("delivery_method").value;
//   document.getElementById("result").innerHTML = "You selected: " + x;
// } this.value e.target.value diffrence
