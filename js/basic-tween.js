// gsap.fromTo(
//   ".fred",
//   { x: 700, y: 400, opacity: 0 },
//   { x: 400, y: 200, opacity: 1, scale: 3, duration: 3 }
// );

gsap.to(".fred1", { duration: 3, x: 600, ease: "back" });
gsap.to(".fred2", { duration: 3, x: 600, ease: "linear" });
