// testimonials.js

const cards = Array.from(document.querySelectorAll(".testimonial__card"));

const testimonials = function () {
  let i = 1;
  cards.forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        scrub: i,
        start: "top bottom",
        end: "center center",
      },
      scale: 0.85,
    });
    i += 1.5;
  });
};

export { testimonials };