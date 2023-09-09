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
  fadeElems.forEach(function (element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
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

//property container

const imgs = document.getElementById("imgs");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

function run() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(run, 2000);
