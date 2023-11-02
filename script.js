// Actual year in footer

document.getElementById('year').innerHTML = new Date().getFullYear();


// Toggle navbar


function toggleNav() {
  let x = document.getElementById("mobilelinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}