const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const wrapper = document.querySelector(".wrapper");

gsap.from(wrapper, { autoAlpha: 0, duration: 1, delay: 0.25 });

items.forEach((item, index) => {
  // console.log(item, index);
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector(".text"), {
      color: "white",
      scale: 1.3,
      transformOrigin: "left center",
      opacity: 1,
      x: 10,
    })
    .to(item.querySelector(".dot"), { backgroundColor: "#F93", scale: 1.5 }, 0);

  item.addEventListener("mouseenter", () => {
    tl.play();
  });

  item.addEventListener("mouseleave", () => {
    tl.reverse();
  });
});
