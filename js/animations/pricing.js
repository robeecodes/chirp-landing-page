// pricing.js

const p = document.querySelector(".pricing > p");
const card = document.querySelector(".pricing__card");

const pricing = function () {
  gsap.from(p, {
    scrollTrigger: {
      trigger: p,
      scrub: 2,
      start: "top bottom",
      end: "center center",
    },
    opacity: 0,
    x: -500,
  });

  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      scrub: 2,
      start: "top bottom",
      end: "center center",
    },
    opacity: 0,
    y: -100,
  });
};

export { pricing };
