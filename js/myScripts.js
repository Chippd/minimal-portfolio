


// some global variables
let pageHeight, ticking, screenHeight, currentEl, projectTextArr, projectImgArr, colorArr;

// as the user scrolls, poll the .main-row element for its .scrollTop position
// reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// reference for above reference (lol): http://www.html5rocks.com/en/tutorials/speed/animations/
function doSomething(scroll_pos) {

  // how many times does pageHeight go into scrollPos
  let x = Math.round(scroll_pos / screenHeight);

  // set appropriate element if not already
  if(currentEl !== x){
  	applyElement(x);
  }
}

function checkScroll(){

	last_known_scroll_position = window.scrollY;

	if (!ticking) {

	  window.requestAnimationFrame(function() {
	    doSomething(last_known_scroll_position);
	    ticking = false;
	  });
	   
	  ticking = true;

	}
}

// every time user scrolls, check if we need to change element visibility
// seperating as we need to call checkScroll on page load too
window.addEventListener('scroll', function(e) {

  checkScroll()
  
});



// When the page is loaded
document.addEventListener("DOMContentLoaded", function(event) {

  // Get height of screen
  screenHeight = screen.height

  // Get all projects on page and populate arrays
  projectTextArr = document.getElementsByClassName('project-text');
  projectImgArr = document.getElementsByClassName('project-img');

  // set total page height depending on number of projects
  pageHeight = screenHeight * projectTextArr.length;
  document.getElementById('body').style.height = pageHeight+"px";

  // Check the scroll position, show appropriate project
  checkScroll();

});


function applyElement(x){

	// for each project and project-img
	// hide all
	for (var i = projectImgArr.length - 1; i >= 0; i--) {
		// projectImgArr[i].style.display = "none"
		projectImgArr[i].classList.add("hidden")
		projectImgArr[i].classList.remove("shown")
	}

	for (var i = projectTextArr.length - 1; i >= 0; i--) {
		projectTextArr[i].classList.add("hidden")
		projectTextArr[i].classList.remove("shown")
	}

	// Show appropriate project
	projectTextArr[x].classList.remove("hidden");
	projectImgArr[x].classList.remove("hidden");

	projectTextArr[x].classList.add("shown");
	projectImgArr[x].classList.add("shown");

	// Set background color on body
	// get data-bgcolor attribute from .project-text element, white as fallback
	document.getElementById('body').style.background = projectTextArr[x].dataset.bgcolor || "white";

	// Set text color on body, get it from data attribute, black as fallback
	document.getElementById('body').style.color = projectTextArr[x].dataset.textcolor || "black";


}









