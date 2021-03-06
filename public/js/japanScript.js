/*  window.addEventListener('scroll', function(){
        console.log("Scrooling")
 }); */

var scroll = window.resquestAnimationFrame || function(callback){window.setTimeout(callback,100/60)};

function loop(){
  var elementsToShow = document.querySelectorAll('.show-on-scroll');
  elementsToShow.forEach(function(element){
      if (isElementInViewport(element)){
          element.classList.add('is-visible');
      } else {
          element.classList.remove('is-visible');
      }
  });
  scroll(loop);
}

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

loop();
