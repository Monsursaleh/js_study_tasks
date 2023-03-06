// alert("Monsur");
let btn = document.querySelector(".btn-footer");
const header = document.querySelector("header");
let btnMobile = document.querySelector(".mobile");
let nav = document.querySelector("nav ul");
let menueItems = document.querySelectorAll("nav ul li a");
let btnModal = document.querySelector(".modal");
let modalOpenBtn = document.querySelector(".modal-open-btn");
let closeBtn = document.querySelector(".modal-close-btn");
let overlay = document.querySelector(".overlay");

let modalView = () => {
  console.log("Modal");
  overlay.classList.toggle("visible");
};

modalOpenBtn.addEventListener("click", modalView);

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  console.log("scroll");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
    // header.classList.add("bg");
    header.style.backgroundColor = "white";
    // header.style.color = "green";

    // header.style.padding = "100px";
  } else {
    btn.style.display = "none";
    header.style.background = "yellow";
  }
};

const getTotop = () => {
  console.log("hello");
  //scrolTop  2 times ..for every broser
  //compatability
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenue = () => {
  for (const link of menueItems) {
    link.addEventListener("click", mobMenue);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

let closeOverlay = () => {
  console.log("close overlay");
};

btn.addEventListener("click", getTotop);
btnMobile.addEventListener("click", mobMenue);
// modalBtn.addEventListener("click", modalView);

// closeBtn.addEventListener("click", closeOverlay);
