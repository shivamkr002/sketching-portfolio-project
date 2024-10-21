function toggle() {
  document.getElementById("Mobile-menu").classList.add("show");
}
function toggleout() {
  document.getElementById("Mobile-menu").classList.remove("show");
}
function gototop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;
