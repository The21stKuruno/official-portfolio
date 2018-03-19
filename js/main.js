$(function() {
  setBindings();
  setGoToTop();
  setDropNav();
});
function setDropNav() {
  $('.drop-the-nav').click(function(){    $('.icon').toggleClass('active');
    $('#dropbar').toggleClass('visible');
  });

  $('main').click(function(){
    $('.icon').toggleClass('active');
    $('#dropbar').removeClass('visible');
  });

  $(window).resize(function() {
  $('.icon').toggleClass('active');
  $('#dropbar').removeClass('visible');
});
}

// Navigation Scroll Smooth
function setBindings() {
  $(".smooth-scroll").click(function(e) {
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
