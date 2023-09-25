const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const btns = document.querySelectorAll('.more')
const services = document.querySelectorAll('.service')
// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});
// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
// set year
date.innerHTML = new Date().getFullYear();

// show service text
// btns.forEach(function(btn){
//   btn.addEventListener('click', function(evt){
//     const service = evt.currentTarget.parentElement;
//     service.classList.toggle('show-text')
//   })
// })
// so the idea behind this is to loop over all the service articles and then by using the forEach method, we can decide what happens to each individual service article class
// then once we have access to this individual item  amongst  our services, we can select an element without using the document. since the element we are looking for is within the service so we replace the document with service, since we are looking for the item within the service article.
services.forEach(function(service){
 const btn = service.querySelector('.more')
 btn.addEventListener('click', function(){
  // so when we click on this btn within the service article, the individual service should toggle the class show-text i.e remove the class show-text if it exists already or add it if it doesnt exist already.
services.forEach(function(item){
  if(item !== service){
    item.classList.remove('show-text')
  }
})

service.classList.toggle('show-text')

 })
})


// typing animation

const textDisplay = document.getElementById("text");
const phrases = ["a web developer", "a web designer."];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;

function loop() {
  isEnd = false;
  textDisplay.innerHTML = currentPhrase.join("");

  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }

    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }

    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 1500 : isDeleting ? spedUp : normalSpeed;
  setTimeout(loop, time);
}

loop();
