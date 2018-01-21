


// some global variables
let pageHeight, ticking, screenHeight, currentEl, pageSectionArr

// reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// reference for above reference: http://www.html5rocks.com/en/tutorials/speed/animations/
function checkElement(scroll_pos) {

  // how many times does pageHeight go into scrollPos
  let x = Math.floor(scroll_pos / (screenHeight/2));

  // set appropriate element if not already
  if(currentEl !== x){
  	applyElement(x);
  }
}

function checkScroll(){

	last_known_scroll_position = window.scrollY;

	if (!ticking) {

	  window.requestAnimationFrame(function() {
	    checkElement(last_known_scroll_position);
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

  // Get all page-sections on page and populate arrays
  pageSectionArr = document.getElementsByClassName('page-section');

  // set total page height depending on number of projects
  pageHeight = screenHeight * pageSectionArr.length;

  document.getElementById('body').style.height = pageHeight/2+"px";

  // Check the scroll position, show appropriate project
  checkScroll();

});


function applyElement(x){

	// Set currentEl
	currentEl = x;

	// for each project and project-img
	// hide all
	for (var i = pageSectionArr.length - 1; i >= 0; i--) {
		// projectImgArr[i].style.display = "none"
		pageSectionArr[i].classList.add("hidden");
	}

	// Set background color on body
	// get data-bgcolor attribute from .project-text element, white as fallback
	document.getElementById('body').style.background = pageSectionArr[x].dataset.bgcolor || "white";

	// Set text color on body, get it from data attribute, black as fallback
	document.getElementById('body').style.color = pageSectionArr[x].dataset.textcolor || "black";

	// Show appropriate project
	pageSectionArr[x].classList.remove('hidden');
	pageSectionArr[x].classList.add("shown");

}

// Function for handling smooth scrolling when user clicks down arrow
document.getElementById("down-arrow").addEventListener("click", function(el){
	window.scroll({
	  top: (screenHeight/2)+100, 
	  left: 0, 
	  behavior: 'smooth' 
	});
}); 









