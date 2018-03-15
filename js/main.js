$(function() {
  // type action
  var typed = new Typed('.element', {
    stringsElement: '#typed-strings',
    typeSpeed: 110,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });
  // scroll to latest-work id
  setBindings();
});

function setBindings() {
  $("nav a").click(function(e) {
    alert('button id ' + e.currentTarget)
  });
}
// https://www.youtube.com/watch?v=gZudXREGviM
