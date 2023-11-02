// Actual year in footer

document.getElementById('year').innerHTML = new Date().getFullYear();


// Changing button's text by hovering on contact site


const buttons = document.getElementsByClassName("button");

for (const elem of buttons) {
    const origText = elem.innerHTML;
    elem.addEventListener("mouseover", () => elem.innerHTML = elem.dataset.hovertext);
    elem.addEventListener("mouseout", () => elem.innerHTML = origText);
}

// Toggle navbar


function toggleNav() {
  let x = document.getElementById("mobilelinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}