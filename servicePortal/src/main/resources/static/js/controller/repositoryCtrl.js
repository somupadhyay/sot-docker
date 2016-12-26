angular.module("controllers").controller('repositoryCtrl',
		[ '$scope','$http', function($scope, $http) {
			var repo = $scope;
			
			console.log('repository controller');
			repo.message = 'This is repository controller.';
			repo.repositories = [];
			repo.listRepository = function(){
				console.log('received request');
				  $http({
				        contentType: "application/json",
				        method: "GET",
				        url: 'registry/v2/_catalog'
				       }).success( function (response) {
				    	   console.log(response);
				    	   repo.repositories = response.repositories;
				       }).error(function(data, status, headers, config){
				    	  console.log('error.');
					  });
			};
			repo.listRepository();
			  
		} ]);