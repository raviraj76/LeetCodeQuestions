// -----------------------------
// Dark/Light Mode Toggle
// -----------------------------
const toggleBtn = document.createElement("button");
toggleBtn.id = "toggleMode";
toggleBtn.textContent = "🌙 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.padding = "10px 15px";
toggleBtn.style.cursor = "pointer";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// -----------------------------
// Collapsible Sections
// -----------------------------
document.querySelectorAll("h2").forEach(header => {
  // Only collapse if the next element is UL
  const next = header.nextElementSibling;
  if (next && next.tagName === "UL") {
    next.style.display = "block"; // start expanded
    header.style.cursor = "pointer"; // show pointer

    header.addEventListener("click", () => {
      next.style.display = next.style.display === "block" ? "none" : "block";
    });
  }
});
