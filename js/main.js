$(function() {
  setTypeAction();
  setBindings();
  setGoToTop();
});

function setTypeAction() {
  var typed = new Typed('.element', {
    stringsElement: '#typed-strings',
    typeSpeed: 110,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });
}

function setBindings() {
  $("nav a, a#scroll-more",).click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "-section";

    $("html, body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
}

function setGoToTop() {
      var offset = 300;
      var duration = 800;

      $(window).scroll(function() {
        if($(this).scrollTop() > offset){
          $('#go-top').fadeIn(duration);
        }
        else {
          $('#go-top').fadeOut(duration);
        }
      });

  // Click event to scroll to top
    	$('#go-top').click(function(){
    		$("html, body").animate({scrollTop : 0}, 800);
    		return false;
    	});
}
