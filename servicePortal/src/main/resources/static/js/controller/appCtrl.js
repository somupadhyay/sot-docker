angular.module("controllers").controller('appCtrl',
		[ '$scope','$mdSidenav', function($scope, $mdSidenav) {
			var app = $scope;
			
			console.log('app controller');
			
			app.user = {
					name:'Somnath Upadhyay',
					email: 'somnath.upadhyay2@emc.com'
			};
			
			/**
			 * Hide or Show the 'left' sideNav area
			 */
			app.toggleSideBarLeft = function() {
			  $mdSidenav('left').toggle();
			}
			
		} ]);
