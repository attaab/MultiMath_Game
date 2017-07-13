/*jslint plusplus: true*/
var game = (function () {
	'use strict';
	/*==private members==*/
	var factorElement = document.getElementById('factor'),
		problemsPerGame = 3; //set default value
	
	function printGame() {
		player.logPlayer();
		
		/*==determine the number of problems to show==*/
		setProblemCount(document.getElementById('problemCount').value);
		
		/*==create the html for the current game==*/
		var gameForm = '', i;
		for (i = 1; i <= problemsPerGame; i++) {
			gameForm += '<div class="form-group">';
			gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
			gameForm += factorElement.value + ' x ' + i + ' = </label>';
			gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer">';
			gameForm += '</div>';
			
			/*==add the new game to the page==*/
			var gameElement = document.getElementbyId('game');
			gameElement.innerHtml = gameForm;
			
			/*==enable the calculate score button==*/
			document.geetElementById('calculate').removeAttribute('disabled');
		}
		
		function calculateScore() {
			var problemsInGame = getProblemCount(),
			    score = 0, i, answer, result;
			/*=loop through the text boxes and calculate the number that are correct=*/
			for (i = 1; <= problemsInGame; i++) {
				answer = document.getElementById('answer' + i).value;
				if(i * factorElement.value == answer) {
					score++;
				}
			}
			
			/*create a new result object to pass to the scoreboard*/
			result = {
				name: player.getName(),
				score: score,
				problems: problemsInGame,
				factor: factorElement.value
			};
			
			/*add the result and update the scoreboard*/
			scoreboard.addResult(result);
			scoreboard.updateScoreboard();
			
			/*disable the calsulate score button*/
			document.getElementById('calculate').setAttribute('disabled', 'true');
			}
		function setProblemCount(newProblemCount) {
			problemsPerGame = newProbleCount;
		}
		function getProblemCount() {
			return problemsPerGame;
		}
		
		
		}
			/*public members*/
		return {
			printGame: printGame,
			calculateScore: calculateScore,
			setProblemCount: setProblemCount,
			getProblemCount: getproblemCount
		};
	}());