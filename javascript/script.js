// Get DOM elements
let overlay = document.querySelector(".overlay");
let hamburgerIcon = document.querySelector(".hamburger-icon");
let closeBtn = document.querySelector(".closebtn");

// Open menu
function openNav() {
  overlay.style.height = "100%";
  hamburgerIcon.style.display = "none";
  closeBtn.style.display = "block";
}

// Close menu
function closeNav() {
  overlay.style.height = "0%";
  hamburgerIcon.style.display = "block";
  closeBtn.style.display = "none";
}

// Close button starts hidden
closeBtn.style.display = "none";

