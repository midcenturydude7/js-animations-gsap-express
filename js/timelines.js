document.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    event.target.focus();
  }
});

const animation = gsap
  .timeline()
  .from("#demo", { duration: 1, opacity: 0 })
  .from("#title", { opacity: 0, scale: 0, ease: "back" })
  .from(
    "#freds img",
    { y: 160, stagger: 0.25, duration: 0.8, ease: "back" },
    "+=0.5"
  )
  .add("#test")
  .from("#time", { xPercent: 100, duration: 1 });

document.getElementById("play").onclick = () => animation.play();
document.getElementById("pause").onclick = () => animation.pause();
document.getElementById("reverse").onclick = () => animation.reverse();
document.getElementById("restart").onclick = () => animation.restart();
document.getElementById("test").onclick = () => animation.play("test");
