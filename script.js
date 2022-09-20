import { mainToDetails } from "./js/animations/mainToDetails.js";

ScrollTrigger.addEventListener("scrollStart", function start() {
  mainToDetails.start();
  ScrollTrigger.removeEventListener("scrollStart", start);
});

ScrollTrigger.addEventListener("scrollEnd", function end() {
  mainToDetails.end();
  ScrollTrigger.removeEventListener("scrollEnd", end);
});
