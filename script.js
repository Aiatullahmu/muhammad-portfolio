document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.style.display === "block";
  navMobile.style.display = isOpen ? "none" : "block";
});

navMobile.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => (navMobile.style.display = "none"));
});
