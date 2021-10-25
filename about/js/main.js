const navBtn = document.getElementById("nav-btn");
const navList = document.getElementById("nav-list");

navBtn.addEventListener("click", () => {
  console.log("click");
  navBtn.classList.toggle("active-btn");
  navList.classList.toggle("active-nav-list");
});
