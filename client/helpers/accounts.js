Meteor.startup(function(){
	Accounts.ui.config({
		passwordSignupFields: 'EMAIL_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
	});

	AccountsEntry.config({
		logo: 'logo.png',
		privacyUrl: '/privacy-policy',
		termsUrl: '/terms-of-use',
		homeRoute: '/',
		dashboardRoute: '/',
		profileRoute: 'profile',
		showSignupCode: true
	});
});