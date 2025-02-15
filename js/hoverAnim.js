const button = document.querySelector(".button");
const bg = document.querySelector(".bg");

const tweenInFull = gsap.fromTo(
  bg,
  { scale: 0, duration: 1 },
  { scale: 1, ease: "circ", paused: true }
);

button.addEventListener("mouseenter", () => {
  tweenInFull.restart();
});

button.addEventListener("mouseleave", () => {
  tweenInFull.reverse();
});
