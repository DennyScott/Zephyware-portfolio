Meteor.publish('projects', function() {
  return Projects.find({});
});

Meteor.publish('profiles', function() {
  return Profiles.find({});
});