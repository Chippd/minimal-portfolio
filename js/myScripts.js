

// as the user scrolls, poll the .main-row element for its .scrollTop position
// reference: https://developer.mozilla.org/en-US/docs/Web/Events/scroll
// reference for above reference (lol): http://www.html5rocks.com/en/tutorials/speed/animations/



function doSomething(scroll_pos) {
  // do something with the scroll position
  console.log('scroll_pos:', scroll_pos);
}

let ticking;

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {

    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
     
    ticking = true;

  }
  
});


document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");

  // when content is fully loaded, get height of screen
  let screenHeight = screen.height

  console.log('screenHeight:', screenHeight);

});