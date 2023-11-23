gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.5,
  });

  // Start both .line and [animation=loading] animations at the same point in the timeline
  tl.from(
    ".line",
    {
      width: "0%",
      opacity: "0",
      stagger: { each: 0.4, from: "start" },
      ease: "Quint.easeOut",
      duration: 1,
    },
    "startAnimations"
  ) // Label to mark the start of simultaneous animations
    .from(
      "[animation=loading]",
      {
        y: "100%",
        opacity: "0",
        stagger: { each: 0.1, from: "start" },
        ease: "Quint.easeOut",
        duration: 1,
      },
      "startAnimations"
    ); // Use the same label to ensure both animations start at the same time
}
pageLoad();

var inputFields = document.querySelectorAll(".text-field, .text-area");
var fieldLabels = document.querySelectorAll(".field-label");

function addEventListeners(elements, eventType) {
  elements.forEach(function (element, index) {
    element.addEventListener(eventType, function () {
      fieldLabels[index].classList.add("focused");
    });

    element.addEventListener("blur", function () {
      fieldLabels[index].classList.remove("focused");
    });
  });
}

addEventListeners(inputFields, "focus");
addEventListeners(inputFields, "blur");
