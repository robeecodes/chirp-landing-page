// mainToDetails.js

const mainToDetails = {
  start: function () {
    gsap.to(".details .container-lg", {
      scrollTrigger: ".details",
      scale: 0.9,
    });
    gsap.to(".main .container-lg", {
      scrollTrigger: ".details",
      scale: 0.9,
    });
  },
  end: function () {
    gsap.to(".details .container-lg", {
      scale: 1,
    });
    gsap.to(".main .container-lg", {
      scale: 1,
      delay: 0.2,
    });
  },
};

export { mainToDetails };
