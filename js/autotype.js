$(function() {
  setTypeAction();
});

// Auto Typing Action
function setTypeAction() {
  var typed = new Typed('.element', {
    stringsElement: '#typed-strings',
    typeSpeed: 110,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });
}
