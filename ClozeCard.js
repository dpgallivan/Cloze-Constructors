var fs = require('fs');
var inquirer = require('inquirer');

function ClozeFlashcard(text, cloze){
	this.cloze = cloze;
	this.partial = partial;
	this.clozeDeleted = cloze + ' ' + partial;
}

ClozeFlashcard.prototype.printInfo = function(){
	console.log('Text: ' + this.text + 'Partial: ' + this.partial + 'Cloze Deleted: ' + this.clozeDeleted);
};

var answersRight = 0;
var answersWrong = 0;
var carArr = [];

var clozeFlashcard = function(){
	if(answersRight < 1){
		inquirer.prompt([
		{
			name: 'Cloze',
			message: '....is the first president of the United States.'
		},{
			name: 'partial',
			message: 'George Washington'
		}]).then(function(answers){
			var firstPres = new clozeFlashcard(answers.cloze, answers.partial, answers.clozeDeleted);
			carArr.push(firstPres);
			answersRight++
		});
	}
};

clozeFlashcard();

module.exports = ClozeFlashcard;

