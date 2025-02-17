const hole = document.querySelector(".hole");
const herman = document.querySelector(".herman");
const shadow = document.querySelector(".shadow");
const tl = gsap.timeline();

tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
  .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
  .to(herman, { y: 0, ease: "power1.in" }, ">")
  .to(herman, {
    scaleY: 0.5,
    scaleX: 1.3,
    duration: 0.2,
    transformOrigin: "50% 100%",
    repeat: 1,
    yoyo: true,
  })
  .to(shadow, { opacity: 1, duration: 0.2 }, 0.7)
  .to(shadow, { scaleX: 0.7, ease: "power1.in" }, ">");

// const init = () => {
//   tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
//     .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
//     .to(herman, { y: 0, ease: "power1.in" }, ">")
//     .to(herman, {
//       scaleY: 0.5,
//       scaleX: 1.3,
//       duration: 0.2,
//       transformOrigin: "50% 100%",
//       repeat: 1,
//       yoyo: true,
//     });
// };

// window.addEventListener("load", init);
