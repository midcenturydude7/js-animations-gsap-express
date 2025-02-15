const button = document.querySelector(".button");
const bg = document.querySelector(".bg");

button.addEventListener("mouseenter", () => {
  gsap.from(bg, { scale: 0, duration: 1, ease: "circ" });
});
