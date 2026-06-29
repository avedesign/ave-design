document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitText === "undefined") {
    console.warn("GSAP, ScrollTrigger or SplitText is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll(".display-1.second").forEach(function (element) {
    const split = new SplitText(element, {
      type: "chars"
    });

    gsap.fromTo(
      split.chars,
      { color: "rgba(0,0,0,0.15)" },
      {
        color: "#181818",
        stagger: 0.02,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top 130%",
          end: "top 10%",
          scrub: true
        }
      }
    );
  });
});