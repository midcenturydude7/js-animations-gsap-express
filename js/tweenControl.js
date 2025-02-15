let tween = gsap.to(".green", {
  duration: 3,
  x: 600,
  ease: "linear",
  paused: true,
});

document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();
