// Typing.js

let typewriter = document.querySelector("#typewriter");

const text = [
  "interactions",
  "activity",
  "marketing",
  "followers",
  "business",
  "analytics",
];

const typing = function () {
  let tl = gsap.timeline({ repeat: -1 });
  text.forEach((word) => {
    tl.to(typewriter, {
      duration: 1,
      text: {
        value: word,
      },
      ease: "none",
      delay: 2,
    });
  });

  // Do not animate if not in viewport. Prevents page jumping.
  ScrollTrigger.addEventListener("scrollEnd", () => {
    if (!ScrollTrigger.isInViewport(".main")) {
      tl.pause(0);
    } else {
      tl.play();
    }
  });
};

export { typing };
