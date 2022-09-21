// main.js

const article = document.querySelector(".intro");
const images = Array.from(document.querySelectorAll(".demo"));

console.log(images);

const mainAnim = function () {
  images.forEach((image) => {
    gsap.from(image, {
      autoAlpha: 0,
      duration: 1,
      y: 50,
      delay: 0.5,
    });
  });
  gsap.from(article, {
    autoAlpha: 0,
    duration: 1,
    x: 50,
  });
};

export { mainAnim };
