let result = document.getElementById('result');

function append(value) {
	result.innerText += value;
}

function clearScreen() {
	result.innerText = '0';
}

function backspace() {
	result.innerText = result.innerText.slice(0, -1);
	if (result.innerText === '') {
		result.innerText = '0';
	}
}

function calculate() {
	try {
		result.innerText = eval(result.innerText);
	} catch (error) {
		result.innerText = 'Error';
	}
}
