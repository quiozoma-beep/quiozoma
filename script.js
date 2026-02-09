// Theme toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll animation
const items = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

items.forEach(i => observer.observe(i));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Click ripple feel
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.boxShadow = "0 0 0 6px rgba(79,70,229,.3)";
    setTimeout(() => btn.style.boxShadow = "none", 200);
  });
});
