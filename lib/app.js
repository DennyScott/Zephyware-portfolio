Router.configure({
  layoutTemplate: 'default',
});

Router.map(function() {

	this.route('home',{
		path: '/',
		template:'home'
	});
});

//Force all pages to load at the top of the page, and remove any styles to body
var loadAtTop = function() {
	window.scrollTo(0,0);
	var body = $('body');
	body.removeAttr('style'); //Static pages were being made larger by height attr.
};

Router.onRun(loadAtTop); //Load all pages from the top of the page.
