Template.home.created = function () {

	WebFontConfig = {
    google: { families: [ 'Oleo+Script::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
};

function setAsFixed() {
  console.log("here");
  fadeIn($('.OurBlog'));
  $('.OurBlog').show();
}

Template.home.rendered = function () {
		// waypoints();
	new WOW().init();
fadeIn($('#content-wrapper'));

$('#blog-hook').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', setAsFixed);
};


Template.home.events({
  'click #games': function () {
    $('#web-content').css("display","none");
    $('#game-content').css("display","inline");
    $('#games').addClass("selected");
    $('#web').removeClass("selected");
  },

  'click #web': function () {
    $('#web-content').css("display","inline");
    $('#game-content').css("display","none");
    $('#web').addClass("selected");
    $('#games').removeClass("selected");
  },

  'click #x_button' : function() {
      $('#OurBlog').hide();
  }
});