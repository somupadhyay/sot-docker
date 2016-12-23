angular.module("controllers").controller('requestCtrl',
		[ '$scope','$http', function($scope, $http) {
			var req = $scope;
			
			console.log('request controller');
			req.message = 'This is request controller.';
			
			req.submit = function(build){
				console.log('received request');
				console.log(build);
				  $http({
				        contentType: "application/json",
				        method: "GET",
				        url: '/jenkinssot/buildWithParameters?token=sotdockerdemo&GIT_REPO='+build.gitRepo+'&PROJECT='+build.projectName
				       }).success( function (response) {
				    	  console.log('success.');
				       }).error(function(data, status, headers, config){
				    	  console.log('error.');
					  });
			}
			  
		} ]);
