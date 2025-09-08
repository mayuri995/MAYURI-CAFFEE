const menuOpenBtn = document.getElementById("menu-open-button");
const menuCloseBtn = document.getElementById("menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});
menuCloseBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // show 1 testimonial at a time
  spaceBetween: 30,
  loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    768: { slidesPerView: 2 },   // 2 per row on tablets
    1024: { slidesPerView: 3 }   // 3 per row on desktop
  }
});
