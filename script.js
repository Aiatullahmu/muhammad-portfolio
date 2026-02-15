// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.style.display === "block";
  navMobile.style.display = isOpen ? "none" : "block";
});
