


// some global variables
let pageHeight, ticking, screenHeight, currentEl;



// as the user scrolls, poll the .main-row element for its .scrollTop position
// reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// reference for above reference (lol): http://www.html5rocks.com/en/tutorials/speed/animations/
function doSomething(scroll_pos) {

  // calculate where in page user is relative to projects in elements array

  // how many times does pageHeight go into scrollPos
  let x = Math.round(scroll_pos / screenHeight);
  console.log('screenHeight goes into scroll_pos this many times:', x);

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

window.addEventListener('scroll', function(e) {

  checkScroll()
  
});

// do stuff on page load
document.addEventListener("DOMContentLoaded", function(event) {
  
  console.log("DOM fully loaded and parsed");

  checkScroll();

  // when content is fully loaded, get height of screen
  screenHeight = screen.height
  console.log('screenHeight:', screenHeight);

  // set total page height depending on number of elements in elements[]
  pageHeight = screenHeight * elements.length
  console.log("pageHeight is:", pageHeight);
  document.getElementById('body').style.height = pageHeight+"px";

});

let elements = [
	{
		"text1": "Chris Dermody",
		"text2": "Developer, element 0",
		"img-src": "./img/profiler.png",
		"bg-color": "#d8dcff"
	},
	{
		"text1": "Jobb.ie",
		"text2": "A quick description of jobbie..., element 1",
		"img-src": "./img/jobbie1.png",
		"bg-color": "#aeadf0"
	},
	{
		"text1": "Element2",
		"text2": "",
		"img-src": "./img/profiler.png",
		"bg-color": "#d8dcff"
	},
	{
		"text1": "Element3",
		"text2": "A quick description of jobbie...",
		"img-src": "./img/jobbie1.png",
		"bg-color": "#aeadf0"
	}
]


function applyElement(i){

	console.log('setting element:', i)

	// set the element of the appropraite element index
	document.getElementById('text1').innerHTML = elements[i].text1;

	document.getElementById('text2').innerHTML = elements[i].text2;

	document.getElementById("project-img").src = elements[i]['img-src'];

	currentEl = i

}









