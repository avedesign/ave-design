document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitText === "undefined") {
    console.warn("GSAP, ScrollTrigger or SplitText is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll(".display-1.second").forEach(function (element) {
    element.style.visibility = "visible";

    const split = new SplitText(element, {
      type: "chars"
    });

    gsap.set(split.chars, {
      color: "rgba(0,0,0,0.15)"
    });

    gsap.to(split.chars, {
      color: "#181818",
      stagger: 0.03,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top 130%",
        end: "top 20%",
        scrub: 1.2
      }
    });
  });

  ScrollTrigger.refresh();
});