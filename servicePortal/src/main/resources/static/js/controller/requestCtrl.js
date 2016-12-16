angular.module("controllers").controller('requestCtrl',
		[ '$scope', function($scope) {
			var req = $scope;
			
			console.log('request controller');
			req.message = 'This is request controller.';
		} ]);
