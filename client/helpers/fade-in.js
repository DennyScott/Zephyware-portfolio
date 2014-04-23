fadeIn = function($content) {
		$($content).delay(1000).animate({opacity:1},2000);
};

removeFade = function(){
	Session.set("observing",false);
}