let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .picture');
const controls = document.querySelectorAll('.carousel .control');

document.addEventListener('DOMContentLoaded', () => {
  updateCarousel();
  setInterval(nextSlide, 600000);
});

function setCurrentSlide(index) {
  currentSlide = index;
  updateCarousel();
}

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    controls[index].classList.remove('active');
  });

  slides[currentSlide].classList.add('active');
  controls[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

document.addEventListener("DOMContentLoaded", function () {
  const slides2 = document.querySelectorAll(".carousel-slide2");
  const indicators2 = document.querySelectorAll(".indicator2");
  let currentSlide2 = 0;

  const activateSlide2 = (index) => {
    slides2.forEach((slide, idx) => {
      slide.classList.toggle("active2", idx === index);
      indicators2[idx].classList.toggle("active2", idx === index);
    });
  };

  const nextSlide2 = () => {
    currentSlide2 = (currentSlide2 + 1) % slides2.length;
    activateSlide2(currentSlide2);
  };

  indicators2.forEach((indicator, idx) => {
    indicator.addEventListener("click", () => {
      activateSlide2(idx);
      currentSlide2 = idx;
      resetInterval2();
    });
  });

  let slideInterval2 = setInterval(nextSlide2, 5000);

  const resetInterval2 = () => {
    clearInterval(slideInterval2);
    slideInterval2 = setInterval(nextSlide2, 5000);
  };
});

document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicators .indicator");
  let currentSlide = 0;

  function activateSlide(n) {
    slides.forEach((slide, index) => {
      slide.classList.remove("active");
      indicators[index].classList.remove("active");
    });
    slides[n].classList.add("active");
    indicators[n].classList.add("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    activateSlide(currentSlide);
  }

  setInterval(nextSlide, 5000);
});

