document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal(".scroll-element-left", {
    origin: "left",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, 
  });
  ScrollReveal().reveal(".scroll-element-right", {
    origin: "rigth",
    distance: "100px",
    duration: 800,
    delay: 200,
    easing: "ease-in-out",
    reset: true, 
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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarCollapse = document.getElementById("navbarSupportedContent");

  if (menuToggle && navbarCollapse) {
    menuToggle.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !isExpanded);
      navbarCollapse.classList.toggle("active");
    });
  }

  // ScrollReveal animations (keep your existing setup)
  ScrollReveal().reveal(".scroll-element-left", {
    origin: "left",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    interval: 100,
  });

  ScrollReveal().reveal(".scroll-element-right", {
    origin: "right",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    interval: 100,
  });

  ScrollReveal().reveal(".scroll-element-bottom", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
    easing: "ease-in-out",
    interval: 100,
  });

  // Optional: Close menu when a nav link is clicked (for single-page navigation)
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("active")) {
        menuToggle.click(); // Simulate a click on the toggle button
      }
    });
  });
});
