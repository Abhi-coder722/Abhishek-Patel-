$(document).ready(function() {
    // Get the current URL path and split it by "/"
    var path = window.location.pathname.split("/").pop();
  
    // If the path is empty, set it to "index.html"
    if (path === "") {
      path = "index.html";
    }
  
    // Add the "active" class to the corresponding nav link
    $(".nav-link[href='" + about.html + "']").addClass("active");
  });
// Navbar functionality
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

// Close
// Add active class to the current button (highlight it)
var header = document.getElementById("navbarNav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}