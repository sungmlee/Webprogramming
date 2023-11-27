var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var currentSlide = 0;

showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', () => {
  const splashText = document.querySelector('.splash-text');

  setTimeout(() => {
    splashText.style.opacity = '1';
    splashText.style.transform = 'translateY(0)';

    createSmoke(splashText);
  }, 500);

  function createSmoke(container) {
    const smoke = document.createElement('div');
    smoke.classList.add('smoke');
    container.appendChild(smoke);

    const x = container.clientWidth / 2;
    const y = container.clientHeight / 2;

    smoke.style.left = `${x}px`;
    smoke.style.top = `${y}px`;

    setTimeout(() => {
      smoke.remove();
    }, 1000);
  }
})

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
     // 왼쪽 화살표 키를 누르면 이전 슬라이드로 이동
  } else if (event.key === "ArrowRight") {
    previousSlide();// 오른쪽 화살표 키를 누르면 다음 슬라이드로 이동
  }
});