/*jslint plusplus: true*/
var scoreboard = (function () {
	'use strict';
	/*==private members==*/
	var results = [];//array to store results of every game
	
	function addResult(newResult) {
		results.push(newResult);
	}
	
	function updateScoreboard() {
		var output = '<h2>Scoreboard</h2>', index, result, scoresElement;
		
		/*==Loop over all results and create the html for the scoreboard==*/
		for (index = 0; index < results.length; index++) {
			result = results[index];
			output += '<h4>';
			output += result.name + ': ' + result.score + '/' + result.problems + ' for factor ';
			output += '</h4>';
		}
		
		/*==add the updated scoreboard to the page==*/
		scoresElement = document.getElementById('scores');
		scoresElement.innerHTML = output;
		
	}
	
	/*==return public members==*/
	return {
		addresult: addResult,
		updateScoreboard: updateScoreboard
	};
}());