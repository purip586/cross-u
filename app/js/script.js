const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

//cta
const cta1 = document.getElementById("cta1");

cta1.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

const cta2 = document.getElementById("cta2");

cta2.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

const cta3 = document.getElementById("cta3");

cta3.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

const cta4 = document.getElementById("cta4");

cta4.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

const closeIcon = document.getElementById("closeIcon");

closeIcon.addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

// document.getElementById("nextStep1").addEventListener("click", function () {
//   const name = document.getElementById("nameInput").value;
//   console.log(name);
//   document.getElementById("email").textContent =
//     "Hi " + name + ", What is your email?";
//   document.getElementById("step1").style.display = "none";
//   document.getElementById("step2").style.display = "block";
// });

// document.getElementById("nextStep2").addEventListener("click", function () {
//   const email = document.getElementById("emailInput").value;
//   console.log(email);

//   document.getElementById("step2").style.display = "none";
//   document.getElementById("step3").style.display = "block";
// });
// document.getElementById("nextStep3").addEventListener("click", function () {
//   const subject = document.getElementById("subjectInput").value;
//   console.log(subject);

//   document.getElementById("step3").style.display = "none";
//   document.getElementById("step4").style.display = "block";
// });
