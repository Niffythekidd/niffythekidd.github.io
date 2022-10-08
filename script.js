
const toggleBtn = document.querySelector(".toggle-btn");
const falseNav = document.querySelector(".false-nav");
const falseLinks = document.querySelector(".false-links");

// toggleBtn.addEventListener("click", () => {
//   toggleBtn.classList.toggle("active");
//   falseNav.classList.toggle("active");
// })

// document.querySelectorAll(".false-links").forEach(n => n.
//   addEventListener("click", () => {
//     toggleBtn.classList.remove("active");
//     falseNav.classList.remove("active");
//   })
// );

toggleBtn.addEventListener("click", () => {
  falseNav.style.display = "block";
});

falseLinks.addEventListener("click", () => {
   falseNav.style.display = "none";
});