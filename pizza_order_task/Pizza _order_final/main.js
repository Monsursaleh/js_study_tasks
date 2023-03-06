// listening to form and sumCal call back func on change
document.querySelector("form").addEventListener("change", sumCal);

// global Veriabals
let total_price = 0;
let prizza_price = 0;
let topp_price = 0;
let deli_price = 0;
let topp_list = [];

function sumCal(e) {
  e.preventDefault();

  // veriables
  const input_name = document.querySelector("#order_name_id").value;
  const sum_name = document.querySelector("#sum_name_id");
  const sum_size = document.querySelector("#sum_size_id");
  const input_topp_options = document.querySelectorAll(".toppings input");
  const sum_topp = document.querySelector("#sum_topp_id");
  const input_deli = document.querySelector("#deli");
  const sum_deli = document.querySelector("#sum_deli_id");
  const sum_total = document.querySelector("#sum_total_id");
  const sum_size_price_id = document.querySelector("#sum_size_price_id");
  const sum_topp_price_id = document.querySelector("#sum_topp_price_id");
  const sum_deli_price_id = document.querySelector("#sum_deli_price_id");

  // coustomar name update
  sum_name.textContent = input_name;

  // pizza size update
  if (e.target.id === "size_2") {
    sum_size.textContent = "Size 2";
    prizza_price = 7.5;
  } else if (e.target.id === "size_4") {
    sum_size.textContent = "Size 4";
    prizza_price = 10.5;
  } else if (e.target.id === "size_6") {
    sum_size.textContent = "Size 6";
    prizza_price = 12.5;
  } else if (e.target.id === "size_8") {
    sum_size.textContent = "Size 8";
    prizza_price = 15.5;
  }

  // pizza size price update
  sum_size_price_id.textContent = `${prizza_price}€`;

  //toppings update
  if (e.target.type === "checkbox") {
    topp_list = [];
    input_topp_options.forEach((item) => {
      if (item.checked) {
        const char_1 = item.id.slice(0, 1).toUpperCase();
        const char_2 = item.id.slice(1, item.length);
        topp_list.push(char_1 + char_2);
      }
    });
  }

  // topping price update
  let topp_num = topp_list.length;
  if (topp_num > 4) {
    topp_price = (topp_num - 4) * 0.5;
  } else {
    topp_price = 0;
  }
  sum_topp_price_id.textContent = `${topp_price}€`;
  const topp_text = topp_list.join(", ");
  sum_topp.textContent = topp_text;

  // delivery method
  if (e.target.id === "deli") {
    sum_deli.textContent = e.target.value;
    if (e.target.value === "Home delivery") {
      deli_price = 5;
    } else {
      deli_price = 0;
    }
  }

  // delivery price update
  sum_deli_price_id.textContent = `${deli_price}€`;

  // total price calculation
  total_price = prizza_price + topp_price + deli_price;
  sum_total.textContent = `${total_price.toFixed(2)}€`;
}
