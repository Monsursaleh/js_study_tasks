// // All License data input seletor
// const license = document.querySelector("#license");
// const maker = document.querySelector("#maker");
// const model = document.querySelector("#model");
// const owner = document.querySelector("#owner");
// const price = document.querySelector("#price");
// const color = document.querySelector("#color");
// selecting the form itself
const carForm = document.getElementById("car-form");
// selecting the button for eventlister
const btnSubmit = document.querySelector("#btn-submit");
const btnReset = document.querySelector("#btn-reset");
const carTable = document.querySelector("#car-table");

// for Findling license plate selector
const btnSearch = document.querySelector("#search_btn");
const searchResult = document.querySelector("#result_txt");
// Assigning varaible for storing the carObj data
const cars = [];
//car object Construrctor
// let carObjdata;
function carObj(license, maker, model, owner, price, color) {
  this.license = license;
  this.maker = maker;
  this.model = model;
  this.owner = owner;
  this.price = price;
  this.color = color;
}

//  sample data for checking  carobject
const newcar1 = new carObj("123456", "Toyota", "Camry", "John", "10000", "red");
console.log(newcar1);

function add_car() {
  // license.value,
  // maker.value,
  // model.value,
  // owner.value,
  // price.value,
  // color.value

  // All License data input seletor
  const license = document.querySelector("#license").value;
  const maker = document.querySelector("#maker").value;
  const model = document.querySelector("#model").value;
  const owner = document.querySelector("#owner").value;
  const price = document.querySelector("#price").value;
  const color = document.querySelector("#color").value;
  const newcar = new carObj(license, maker, model, owner, price, color);
  //pushing carObj into cars arry
  cars.push(newcar);
  //new car object data in new arry
  // carObjdata = [...cars];
  //calling display table
  displayTable(cars);
}

/// careting table cells only need to check ??
let displayTable = function (carArr) {
  let table = carArr.forEach(function (car) {
    carTable.innerHTML += `
            <tr>
                <td>${car.license}</td>
                <td>${car.maker}</td>
                <td>${car.model}</td>
                <td>${car.owner}</td>
                <td>${car.price}</td>
                <td>${car.color}</td>
            </tr>
            `;
  });
  return table;
};

btnSubmit.addEventListener("click", add_car);
function reset() {
  carTable.innerHTML = "";
}
btnReset.addEventListener("click", reset);

function findCarByLicence() {
  const search_licence = document.querySelector("#search-license").value;
  console.log(search_licence);
  console.log(cars);
  for (const car of cars) {
    console.log(car["license"]);
    if (car["license"] === search_licence) {
      const text = `Car Maker is : ${car.maker}, and car Model: ${car.model}, Owner: ${car.owner}`;
      searchResult.textContent = text;
      return;
    } else {
      searchResult.textContent = `Car not found now, try later!`;
    }
  }
}

btnSearch.addEventListener("click", findCarByLicence);

// function renderCar(car) {
//   const html = `
//   <tr>
//   <td>${car.carLicence}</td>
//   <td>${car.carMaker}</td>
//   <td>${car.carModel}</td>
//   <td>${car.carOwner}</td>
//   <td>${car.carPrice}</td>
//   <td>${car.carColor}</td>
//   </tr>`
//   table.insertAdjacentHTML('beforeend', html)
//   }
///finding car lincese plate

// const findLicense = (event) => {
//   event.preventDefault();

//   carObjdata.forEach((car) => {
//     let searchOut;
//     if (car.license == inputLicense) {
//       searchOut = car;
//     }
//   });
//   if (searchOut != undefined) {
//     licenceOutput.textContent = `Car license ${searchOut.plate} is owned by ${searchOut.owner}`;
//   } else if (filter === "") {
//     searchOut.textContent = "Please enter license number";
//   } else {
//     searchOut.textContent = "No car was found";
//   }
// };

// searchForm.addEventListener("submit", findLicense);
