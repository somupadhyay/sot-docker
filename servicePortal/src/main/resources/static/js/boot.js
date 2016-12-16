head.load(
		/* JQuery */
		{ file: 'library/vendors/bower_components/jquery/dist/jquery.min.js'},
		
		/*Angular  */
        { file: 'library/vendors/bower_components/angular/angular.min.js'},
        { file: 'library/vendors/bower_components/angular-animate/angular-animate.min.js'},
        
        /* Angular Modules  */
        { file: 'library/vendors/bower_components/angular-ui-router/release/angular-ui-router.min.js'},
        { file: 'library/vendors/bower_components/angular-aria/angular-aria.js'},
        { file: 'library/vendors/bower_components/angular-material/angular-material.js'},
        { file: 'library/vendors/bower_components/angular-messages/angular-messages.min.js'},
        { file: 'library/vendors/bower_components/angular-material-icons/angular-material-icons.js'},
        
        /* Common Vendors */
               
        /* Using below library/vendors in order to avoid misloading on resolve */
        
        /* D3 js for chart*/
        
        /* App level */
        { file: 'js/app.js'},
        { file: 'js/controller/config.js'},
        { file: 'js/controller/appCtrl.js'},
        { file: 'js/controller/requestCtrl.js'}
);