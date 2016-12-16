(function() {
	
	// Attaching the angular module to window.
	window.controllers = angular.module("controllers", []);
/*	window.services = angular.module("services", []);
	window.directives = angular.module("directives", []);
	window.filters = angular.module("filters", []);*/
	//window.portalModule = angular.module('servicePortal', ['ngMaterial','ui.router','services','controllers','filters','directives']);
	window.portalModule = angular.module('servicePortal', ['ngMaterial','ui.router','controllers']);

	// global variable.
	var users, isAuthenticated = false, isAuthorized = false;
	
	angular.element(document).ready(function() {
		$.get('/users/auth', function(data) {
			users = $.parseJSON(data);
			if (users.authorized === true) {
				isAuthorized = true;
			}
			isAuthenticated = true;
			angular.bootstrap(document, [ 'servicePortal' ]);
		}).fail(function(error) {
			users = [];
			angular.bootstrap(document, [ 'servicePortal' ]);
		});
	});
	
})();
