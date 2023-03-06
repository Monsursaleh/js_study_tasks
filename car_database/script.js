const form = document.querySelector("#carDetails");
const search = document.querySelector("#search");
let resultTable = document.querySelector(".result");

const button = document.querySelector("#submit");

class Car {
  constructor(plate, maker, model, owner, price, color) {
    this.plate = plate;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

//
const carArray = [{ licence: "", maker: "", model: "", owner: "", price: "", color: "" }];

// funtion to add a car to table and present the table in html
const addCar = (event) => {
  event.preventDefault();
  const plate = document.querySelector("#plate").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;

  let newCar = new Car(plate, maker, model, owner, price, color);

  carArray.push(newCar);

  makeTable();
};

const searchData = (event) => {
  event.preventDefault();
  let searchResult;
  const filter = document.querySelector("#search-param").value;
  const answer = document.querySelector("#search-result");
  carArray.forEach((car) => {
    if (car.plate == filter) {
      searchResult = car;
    }
  });
  if (searchResult !== undefined) {
    answer.textContent = `Car license ${searchResult.plate} is owned by ${searchResult.owner}`;
  } else if (filter === "") {
    answer.textContent = "Please enter license number";
  } else {
    answer.textContent = "No car was found";
  }
};

const makeTable = () => {
  let result = "<table>";
  result += "<tr>";
  for (const key in carArray[0]) {
    result += "<th>" + key + "</th>";
  }
  result += "</tr>";
  for (let i = 1; i < carArray.length; i++) {
    result += "<tr>";
    for (const key in carArray[i]) {
      result += "<td>" + carArray[i][key] + "</td>";
    }
    result += "</tr>";
  }
  result += "</table>";
  resultTable.innerHTML = result;
};

makeTable();

form.addEventListener("submit", addCar);
search.addEventListener("submit", searchData);
