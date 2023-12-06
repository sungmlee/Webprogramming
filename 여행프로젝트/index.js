var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

showSlide(currentSlide);

function showSlide(n) {
  if (n >= slides.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }

  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentSlide].style.opacity = 1;
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    nextSlide();
     
  } else if (event.key === "ArrowRight") {
    previousSlide();
  }
});
