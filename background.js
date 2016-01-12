(function(chrome) {
	'use strict';
	chrome.app.runtime.onLaunched.addListener(onLaunched);

	function onLaunched() {
		var url = './app/index.html',
			options = {
				id: 'mySite',
				focused: true
			};
		// see documentation at https://developer.chrome.com/apps/app_window#method-create
		chrome.app.window.create(url, options, onWindowCreated);

		function onWindowCreated(createdWindow) {
			console.log(`Chrome app launched with window id: ${createdWindow.id}`);
		}
	}
}(window.chrome));