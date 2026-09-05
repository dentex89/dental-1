// Import our custom CSS
import "../scss/styles.scss";

// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";

const navbarCollapse = document.querySelector("#mainNavbar");

if (navbarCollapse) {
  const navLinks = navbarCollapse.querySelectorAll(".nav-link, .navbar-cta");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const collapseInstance = bootstrap.Collapse.getOrCreateInstance(
        navbarCollapse,
        {
          toggle: false,
        },
      );

      if (navbarCollapse.classList.contains("show")) {
        collapseInstance.hide();
      }
    });
  });
}
