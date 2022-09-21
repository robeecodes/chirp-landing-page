import { mainAnim } from "./js/animations/main.js";
import { details } from "./js/animations/details.js";
import { typing } from "./js/animations/typing.js";
import { testimonials } from "./js/animations/testimonials.js";
import { pricing } from "./js/animations/pricing.js";

window.addEventListener("load", (event) => {
  mainAnim();
});

details();
typing();
testimonials();
pricing();
