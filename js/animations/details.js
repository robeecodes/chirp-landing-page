// details.js

const cards = Array.from(document.querySelectorAll(".features__card"));

const details = function () {
  let i = 1;
  cards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        scrub: i,
        start: "top bottom",
        end: "center center",
      },
      opacity: 0,
      y: -20,
    });
    i += 0.5;
  });
};

export { details };
