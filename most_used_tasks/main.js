// selectors
const header = document.querySelector("header");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");
const overlay = document.querySelector(".overlay");

//*********All buttons************

// for scrolling up to the header
const backButton = document.querySelector("#backToTop");
// will appear mobile screen size then
//click of nav items
const mobButton = document.querySelector(".mobile");
//modal opener button
const modButton = document.querySelector("#modalButton");
// modal close button
const closeBtn = document.querySelector("#close");

// 1.fucntions work: if you scroll then from less then 200 then it will
//back button will appear and header class bg classList willl add change header apperence
// backButton display to none beforeHand

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  /*  document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? 
        backButton.style.display='block'
        : backButton.style.display='none' */
  /* The same as IF statment, but add '?' after statment and ':' else  (condition ? true : false)*/
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backButton.style.display = "block";
    header.classList.add("bg");
  } else {
    backButton.style.display = "none";
    header.classList.remove("bg");
  }
};
// 2.Function if you click this It will reach you top of the page

const getToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

backButton.addEventListener("click", getToTop);
//3. fucntion/ when mobile view appear
// click it will check if the
// nav ul contains calss call responsive that will add by clicking
// another click it will remove it
const mobMenu = () => {
  // this for loop will remove
  // help to remove the responsive class
  // or after when u click the sanwitch button then  - a component show then
  // click it it scoll it but the all li component still showing-- so  the loop can help any a link we clik it add or romve the responsive class
  for (const link of menuItems) {
    link.addEventListener("click", mobMenu);
    console.log(link);
  }
  if (nav.classList.contains("responsive")) {
    // toggle  responsive is there means it showing so another clcik will remove it ..
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};
mobButton.addEventListener("click", mobMenu);
//4. it will modal will show  after clicking the modal button ..then overlay will show ..overlay has class  display none in css > modal > mondal content > has close button to close the overlay
const modalShow = () => {
  overlay.classList.toggle("visible");
};

modButton.addEventListener("click", modalShow);
closeBtn.addEventListener("click", modalShow);
