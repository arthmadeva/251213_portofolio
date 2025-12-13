/* =========================
   DARK MODE TOGGLE
========================= */
const toggleBtn = document.getElementById("darkModeToggle");

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

toggleBtn.addEventListener("click", () => {
  toggleBtn.style.transform = "scale(0.9)";

  setTimeout(() => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
      document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    toggleBtn.style.transform = "scale(1)";
  }, 120);
});


window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger pas load
