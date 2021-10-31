// THEME
let themeLightBtn = document.querySelector('.calculator__theme__light');
let themeDarkBtn = document.querySelector('.calculator__theme__dark');

themeLightBtn.onclick = function () {
	let theme = document.getElementById('theme');

	if (theme.getAttribute("href") == "css/dark.css") {
		theme.href = "css/light.css";
	}
}
themeDarkBtn.onclick = function () {
	let theme = document.getElementById('theme');

	if (theme.getAttribute("href") == "css/light.css") {
		theme.href = "css/dark.css";
	}
}


// CALCULATOR
let decision = document.querySelector('.calculator__decision');
let decisionNum1 = document.querySelector('.number1');
let decisionNum2 = document.querySelector('.number2');
let decisionSymbol = document.querySelector('.symbol');
let answer = document.querySelector('.calculator__answer'); 

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const comma = document.querySelector('.comma');
const allClear = document.querySelector('.clearAll');		
const percent = document.querySelector('.percent');
const division = document.querySelector('.division');
const multiplication = document.querySelector('.multiplication');
const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const equally = document.querySelector('.equally')





equally.addEventListener('click', function(){
	if (decisionNum1.innerHTML !== '' && decisionNum2.innerHTML !== '') {
		let answerDecisionNum1 = Number(decisionNum1.innerHTML);
		let answerDecisionNum2 = Number(decisionNum2.innerHTML);

		if (decisionSymbol.innerHTML == '+') {
			let answerDecision = answerDecisionNum1 + answerDecisionNum2;
			answer.innerHTML = answerDecision;
		} else if (decisionSymbol.innerHTML == '-') {
			let answerDecision = answerDecisionNum1 - answerDecisionNum2;
			answer.innerHTML = answerDecision;
		} else if (decisionSymbol.innerHTML == '×') {
			let answerDecision = answerDecisionNum1 * answerDecisionNum2;
			answer.innerHTML = answerDecision;
		} else if (decisionSymbol.innerHTML == '÷') {
			let answerDecision = answerDecisionNum1 / answerDecisionNum2;
			answer.innerHTML = answerDecision;
		} else if (decisionSymbol.innerHTML == '%') {
			let answerDecision = answerDecisionNum1 % answerDecisionNum2;
			answer.innerHTML = answerDecision;
		}

		if (answer.innerHTML !== '') {
			decision.classList.add('active');
			answer.classList.add('active');
		}
	}
})

// NUMBER 1 
one.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 1;
	}
})
two.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 2;
	}
})
three.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 3;
	}
})
four.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 4;
	}
})
five.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 5;
	}
})
six.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 6;
	}
})
seven.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 7;
	}
})
eight.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 8;
	}
})
nine.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 9;
	}
})
zero.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += 0;
	}
})		
comma.addEventListener('click', function (e) {
	if (decisionNum2.innerHTML == '' && decisionSymbol.innerHTML == '') {
		decisionNum1.innerHTML += ',';
	}
})


// NUMBER 2
one.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 1;
	}
})
two.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 2;
	}
})
three.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 3;
	}
})
four.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 4;
	}
})
five.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 5;
	}
})
six.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 6;
	}
})
seven.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 7;
	}
})
eight.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 8;
	}
})
nine.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 9;
	}
})
zero.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += 0;
	}
})		
comma.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '' && decisionSymbol.innerHTML !== '' && answer.innerHTML == '') {
		decisionNum2.innerHTML += ',';
	}
})	


// SYMBOL
percent.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '') {
		decisionSymbol.innerHTML = '%';
	}	
})
division.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '') {
		decisionSymbol.innerHTML = '÷';
	}	
})
multiplication.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '') {
		decisionSymbol.innerHTML = '×'
	}	
})
minus.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '') {
		decisionSymbol.innerHTML = '-';
	}	
})
plus.addEventListener('click', function (e) {
	if (decisionNum1.innerHTML !== '') {
		decisionSymbol.innerHTML = '+';
	}	
})



// CLEAR ALL
allClear.addEventListener('click', function (e) {
	decisionNum1.innerHTML = '';
	decisionNum2.innerHTML = '';
	decisionSymbol.innerHTML = '';
	answer.innerHTML = '';
	decision.classList.remove('active');
	answer.classList.remove('active');
})


// PREVENT DEFAULT
var allBtn = document.querySelectorAll('button');
allBtn.forEach(function (btn, key){
		btn.addEventListener('click', function (e) {
		e.preventDefault();
	})
})
