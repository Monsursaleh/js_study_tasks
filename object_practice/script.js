const car = {
  mark: "Dodge RAM",
  year: "2020",
  owner: "Toni Nissinen",
  city: "Espoo",
  about: function () {
    return `${this.mark} is owned by ${this.owner}`;
  },
  calcAge: function () {
    return 2022 - this.year;
  },
};

console.log(car);

car.color = "Metal Grey";

delete car.city;

console.log(car);

console.log(car.about());

console.log(car.calcAge());
