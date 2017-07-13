var player = (function () {
	'use strict';
	/*==private members==*/
	var console, playerName = "";
	
	function logPlayer() {
		console.log('the current player is ' + playerName + '.');
	}
	function setName(newName) {
		playerName = newName;
	}
	
	function getName() {
		return playerName;
	}
	
	return {
		logPlayer: logPlayer,
		setName: setName,
		getName: getName
		
	};
	
}());