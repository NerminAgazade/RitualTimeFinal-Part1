const btn1 = document.querySelector('input[id="1"]');
const btn2 = document.querySelector('input[id="2"]');
const btn3 = document.querySelector('input[id="3"]');
const carousel = document.querySelector(".carousel");

btn1.addEventListener("click", () => {
  carousel.style.transform = "translateX(0)";
});

btn2.addEventListener("click", () => {
  carousel.style.transform = "translateX(-100%)";
});

btn3.addEventListener("click", () => {
  carousel.style.transform = "translateX(-200%)";
});
