$(function() {
  setTypeAction();
  setBindings();
  setGoToTop();
  setDropNav();
});

// Mobile Dropdown Navigation
function setDropNav() {
  $('#burger-icon').click(function(){
    $('#dropbar').toggleClass('visible');
  });

  $('main').click(function(){
    $('#dropbar').removeClass('visible');
  });

  $(window).resize(function() {
  $('#dropbar').removeClass('visible');
});
}

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

// Navigation Scroll Smooth
function setBindings() {
  $("#about-me, #contact-me, a#latest-work",).click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "-section";

    $("html, body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000)
  })
}

// Got to top Button
function setGoToTop() {
      var offset = 320;
      var duration = 800;

      $(window).scroll(function() {
        if($(this).scrollTop() > offset){
          $('#go-top').fadeIn(duration);
          $('.fade-me').fadeIn(duration);

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
