document.addEventListener("DOMContentLoaded", function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || typeof SplitText === "undefined") {
    console.warn("GSAP, ScrollTrigger or SplitText is not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll(".display-1.second").forEach(function (element) {
    element.style.visibility = "visible";

    const split = new SplitText(element, {
      type: "lines,words",
      linesClass: "split-line",
      wordsClass: "split-word"
    });

    /* Start: first line black, all other lines grey */
    split.lines.forEach(function (line, index) {
      gsap.set(line, {
        color: index === 0 ? "#181818" : "rgba(0,0,0,0.15)"
      });
    });

    /* Scroll: grey lines slowly become black */
    gsap.to(split.lines.slice(1), {
      color: "#181818",
      stagger: 0.15,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "top 20%",
        scrub: 1.2
      }
    });
  });

  ScrollTrigger.refresh();
});