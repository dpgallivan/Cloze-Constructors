var fs = require('fs');
var inquirer = require('inquirer');

function BasicCard(front, back){
	this.front = front;
	this.back = back;
}

BasicCard.prototype.printInfo = function(){
	console.log('Front: ' + this.front + 'Back: ' + this.back);
};

var answersRight = 0;
var answersWrong = 0;

var basicQuestions = function(){
	if(answersRight < 3){
		inquirer.prompt([
		{
			name: 'front',
			message: 'Who is the first president of the United States?'
		},{
			name: 'back',
			message: 'George Washington'
		}]).then(function(answers){
			if(answers.message === 'George Washington'){
				answersRight++;
				console.log("Correct!");
			} else {
				answersWrong++;
			}
		});
	}
};
basicQuestions();

module.exports = BasicCard;
