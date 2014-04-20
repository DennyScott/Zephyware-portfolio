Meteor.subscribe('projects');
Meteor.subscribe('profiles');

/**
 * [rendered description]
 * @return {[type]} [description]
 */
Template.projects.rendered = function () {
	waypoints();
	new WOW().init();

		$('#test').waypoint(function(direction){
			$('#test').waypoint('destroy');
		}, {offset: '75%'});

		fadeIn($('#projects-content'));
};

Template.projects.destroyed = function () {
	removeFade();
};

Template.projects.events({
	'click #games': function () {
		$('#web-content').css("display","none");
		$('#media-content').css("display","none");
		$('#game-content').css("display","inline");
		$('#games').addClass("selected");
		$('#web').removeClass("selected");
		$('#media').removeClass("selected");
	},

	'click #web': function () {
		$('#web-content').css("display","inline");
		$('#game-content').css("display","none");
		$('#media-content').css("display","none");
		$('#web').addClass("selected");
		$('#games').removeClass("selected");
		$('#media').removeClass("selected");
	},

	'click #media': function () {
		$('#web-content').css("display","none");
		$('#game-content').css("display","none");
		$('#media-content').css("display","inline");
		$('#media').addClass("selected");
		$('#games').removeClass("selected");
		$('#web').removeClass("selected");
	}
});

Template.projects.helpers({
	game: function() {
		return Projects.find({$or: [{type: 'Game'}, {type: 'Web Game'}, {type: 'Web Game Media'}]});
	},
	web: function() {
		return Projects.find({$or: [{type: 'Web'}, {type: 'Web Game'}, {type: 'Web Game Media'}]}, {sort: {'rank': -1}});
	},
	media: function() {
		return Projects.find({$or: [{type: 'Media'}, {type: 'Web Media'}]});
	}
});