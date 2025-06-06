document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".scroll-element-left", {
    origin: "left",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, // si quieres que se vuelva a activar al hacer scroll
  });
  ScrollReveal().reveal(".scroll-element-right", {
    origin: "rigth",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, // si quieres que se vuelva a activar al hacer scroll
  });
  ScrollReveal().reveal(".scroll-element-top", {
    origin: "top",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, // si quieres que se vuelva a activar al hacer scroll
  });
  ScrollReveal().reveal(".scroll-element-bottom", {
    origin: "bottom",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, // si quieres que se vuelva a activar al hacer scroll
  });
});
