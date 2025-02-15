gsap.to("#freds img", {
  y: -50,
  stagger: {
    each: 0.2,
    from: "end",
  },
  onComplete: () => {
    console.log("Animation completed!");
  },
});
