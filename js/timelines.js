gsap.set("#demo", { scale: 0.7 });

gsap
  .timeline()
  .from("#demo", { duration: 1, opacity: 0 })
  .from("#title", { opacity: 0, scale: 0, ease: "back" })
  .from(
    "#freds img",
    { y: 160, stagger: 0.25, duration: 0.8, ease: "back" },
    "+=2"
  )
  .from("#time", { xPercent: 100, duration: 0.8 }, 1);
