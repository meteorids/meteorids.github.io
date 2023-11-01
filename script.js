// Actual year in footer

document.getElementById('year').innerHTML = new Date().getFullYear();


// Changing button's text by hovering on contact site


let emailButton = document.getElementById('email');

function changeEmailText() {
    emailButton.innerHTML = 'milostipanov@gmail.com';
}

function backEmailText() {
    emailButton.innerHTML = 'e-mail'; 
} 

emailButton.addEventListener('mouseover', changeEmailText);

emailButton.addEventListener('mouseout', backEmailText);


let githubButton = document.getElementById('github');

function changeGithubText() {
    githubButton.innerHTML = 'github.com/meteorids';
}

function backGithubText() {
    githubButton.innerHTML = 'github'; 
} 

githubButton.addEventListener('mouseover', changeGithubText);

githubButton.addEventListener('mouseout', backGithubText);


let linkedinButton = document.getElementById('linkedin');

function changeLinkedinText() {
    linkedinButton.innerHTML = 'Dr. Milos Stipanov';
}

function backLinkedinText() {
    linkedinButton.innerHTML = 'linkedin'; 
} 

linkedinButton.addEventListener('mouseover', changeLinkedinText);

linkedinButton.addEventListener('mouseout', backLinkedinText);


let researchgateButton = document.getElementById('researchgate');

function changeResearchgateText() {
    researchgateButton.innerHTML = 'Dr. Milos Stipanov';
}

function backResearchgateText() {
    researchgateButton.innerHTML = 'Research Gate'; 
} 

researchgateButton.addEventListener('mouseover', changeResearchgateText);

researchgateButton.addEventListener('mouseout', backResearchgateText);


// Toggle navbar


function toggleNav() {
  let x = document.getElementById("mobilelinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}