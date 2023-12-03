"use strict";

let btnOpen = document.querySelector(".ham-menu");
let btnClose = document.querySelector(".close-menu");
let nav = document.querySelector(".mobile");
// let formBtn = document.querySelector(".form-btn");
// let form = document.querySelector(".basic-form");
// let formValue = document.querySelector(".basic-form").value;

btnOpen.addEventListener("click", toggleMenu);
btnClose.addEventListener("click", toggleMenu);
// formBtn.addEventListener("click", manageForm);

function toggleMenu() {
  if (nav.classList.contains("hide")) {
    nav.classList.remove("hide");
    document.body.classList.add("shade");
    btnOpen.classList.add("hide");
    btnClose.classList.remove("hide");
  } else {
    nav.classList.add("hide");
    document.body.classList.remove("shade");
    btnOpen.classList.remove("hide");
    btnClose.classList.add("hide");
  }
}

// function manageForm() {
//   if (form.classList.contains("basic-form")) {
//     console.log("Click");
//     // console.log(formValue);
//   }
// }
