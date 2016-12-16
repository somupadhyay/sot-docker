//base config
portalModule
.config(function($stateProvider, $urlRouterProvider, $mdIconProvider){

	// Default rout.
	$urlRouterProvider.otherwise("/portal");
	
	// State and Route configuration.

	  $stateProvider.
	  	state({
	  		name:'portal',
	  		url: '/portal',
	  		templateUrl: 'view/app/home.html'
	  	})
	  	.state( 'newrequest', {
	        url: '/new-request',
	        templateUrl: 'view/app/request-form.html',
	        controller: 'requestCtrl'
	    });
	
	 $mdIconProvider
     .defaultIconSet("assets/svg/avatars.svg", 128)
     .icon("menu"       , "assets/svg/menu.svg"        , 24)
     .icon("share"      , "assets/svg/share.svg"       , 24)
     .icon("google_plus", "assets/svg/google_plus.svg" , 512)
     .icon("hangouts"   , "assets/svg/hangouts.svg"    , 512)
     .icon("twitter"    , "assets/svg/twitter.svg"     , 512)
     .icon("phone"      , "assets/svg/phone.svg"       , 512)
	 .icon("add"        , "assets/svg/ic_add_box_48px.svg"   , 512)
	 .icon("remove"     , "assets/svg/ic_remove_48px.svg" , 512)
	 .icon("home"       , "assets/svg/ic_home_black_48px.svg", 512);
	 
	
});
