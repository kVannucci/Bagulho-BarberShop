const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const navLinks = document.querySelectorAll(".nav a");
const header = document.getElementById("header");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

let lastScrollY = window.scrollY;

const handleHeaderState = () => {
  const currentScrollY = window.scrollY;

  header.classList.remove("header-top", "header-scrolled", "header-hidden", "header-up", "header-down");

  if (currentScrollY <= 20) {
    header.classList.add("header-top");
  } else {
    header.classList.add("header-scrolled");
  }

  if (currentScrollY > lastScrollY && currentScrollY > 120) {
    header.classList.add("header-down", "header-hidden");
  } else if (currentScrollY < lastScrollY && currentScrollY > 120) {
    header.classList.add("header-up");
  }

  lastScrollY = currentScrollY;
};

window.addEventListener("scroll", handleHeaderState);
window.addEventListener("load", handleHeaderState);