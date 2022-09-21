import { mainAnim } from "./js/animations/main.js";
import { details } from "./js/animations/details.js";
import { typing } from "./js/animations/typing.js";

window.addEventListener("load", (event) => {
  mainAnim();
});

details();
typing();