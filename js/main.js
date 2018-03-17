$(function() {
  setTypeAction();
  setBindings();
  setGoToTop();
  setFadeScroll();
  setDropNav();
});

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

function setFadeScroll() {
  var documentEl = $(document),
      fadeElem = $('.fade-scroll');

  documentEl.on('scroll', function() {
    var currScrollPos = document.scrollTop();

    fadeElem.each(function() {
      var $this = $this,
          elemOffsetTop = $this.offset().top;
        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 -(currScrollPos-elemOffsetTop)/ 400);
    });
  });
}
