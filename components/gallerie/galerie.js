let slideIndex = 0;
let itemsToShow = getItemsToShow();
const totalItems = document.querySelectorAll(".carousel-item").length;

showSlides();

function getItemsToShow() {
  return window.innerWidth <= 768 ? 1 : 3;
}

// Next/previous controls
function moveSlide(n) {
  slideIndex += n;

  const maxIndex = totalItems - itemsToShow;

  if (slideIndex < 0) {
    slideIndex = 0;
  } else if (slideIndex > maxIndex) {
    slideIndex = maxIndex;
  }
  showSlides();
}

function showSlides() {
  const slideContainer = document.querySelector(".carousel-slide");
  const itemWidth = document.querySelector(".carousel-item").offsetWidth;
  const offset = -slideIndex * itemWidth;

  slideContainer.style.transform = `translateX(${offset}px)`;
}

window.addEventListener("resize", function () {
  itemsToShow = getItemsToShow();
  showSlides();
});
