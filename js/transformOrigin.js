const t = gsap.to(".truck", {
  transformOrigin: "62px 155px",
  rotation: -40,
  repeat: 1,
  yoyo: true,
});

demo.addEventListener("click", () => t.restart());

// x/y axis of click event
document.querySelector(".truck").addEventListener("click", (e) => {
  const rect = e.target.getBoundingClientRect();
  const x = Math.floor(e.clientX - rect.left);
  const y = Math.floor(e.clientY - rect.top);
  console.log(`X: ${x}, Y: ${y}`);
});
