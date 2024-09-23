// top page button

const topBtn = document.querySelector(".top-page");
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 150) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

// smooth scroll
const links = document.querySelectorAll("a:link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const href = link.getAttribute("href");

    // scroll to top

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// mobile-navigation

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".nav-bar");
  const navLinks = document.querySelector(".menu-lists");
  const alllinks = document.querySelectorAll(".menu-link");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open-nav");
  });

  alllinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open-nav");
    });
  });
});
