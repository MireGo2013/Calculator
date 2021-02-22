let numbers = document.getElementsByClassName('btn-num');
let operations = document.getElementsByClassName('btn-operation');
let dec = document.querySelectorAll('.btn-decimal');
let clearBtn = document.getElementsByClassName('clearBtn');
let display = document.getElementById('display');
let MemoryNumberCurrent = 0;
let MemoryNumberNew = false;
let MemoryPendingOperation = '';

for (let i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", function (e) {
		operation(e.target.textContent);
	});
};

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", function (e) {
		numberPress(e.target.textContent);
	});
};

for (let i = 0; i < dec.length; i++) {
	dec[i].addEventListener("click", decimal);
};

for (let i = 0; i < clearBtn.length; i++) {
	clearBtn[i].addEventListener('click', function (e) {
		clear(e.srcElement.id);
	});
};

function numberPress(number) {
	if (MemoryNumberNew) {
		display.value = number;
		MemoryNumberNew = false;
	} else {
		if (display.value === '0') {
			display.value = number;
		} else {
			display.value += number;
		};
	};
};

function operation(oper) {

	let localOperationMemory = display.value;

	if (MemoryNumberNew && MemoryPendingOperation !== '=') {
		display.value = MemoryNumberCurrent;
	} else {
		MemoryNumberNew = true;
		if (MemoryPendingOperation === '+') {
			MemoryNumberCurrent += parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '-') {
			MemoryNumberCurrent -= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '*') {
			MemoryNumberCurrent *= parseFloat(localOperationMemory);
		} else if (MemoryPendingOperation === '/') {
			MemoryNumberCurrent /= parseFloat(localOperationMemory);
		} else {
			MemoryNumberCurrent = parseFloat(localOperationMemory);
		};
		display.value = MemoryNumberCurrent;
		MemoryPendingOperation = oper;
	};
};

function decimal(arguments) {
	let localDecimalMemory = display.value;

	if (MemoryNumberNew) {
		localDecimalMemory = '0.';
		MemoryNumberNew = false;
	} else {
		if (localDecimalMemory.indexOf('.') === -1) {
			localDecimalMemory += '.';
		};
	};

	display.value = localDecimalMemory;
};

function clear(id) {
	if (id === 'clearCE') {
		display.value = '0';
		MemoryNumberNew = true;
	} else if (id === 'clearC') {
		display.value = '0';
		MemoryNumberNew = true;
		MemoryNumberCurrent = '0';
		MemoryPendingOperation = '';
	};
};