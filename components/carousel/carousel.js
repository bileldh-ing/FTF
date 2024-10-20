let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(
    ".carousel-slide img, .carousel-slide video"
  );
  const dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].className += " active";
}

function redirectToVideo(button) {
  const videoElement = button.previousElementSibling;
  const videoSrc = videoElement.src;
  window.open(videoSrc, "_blank");
}
