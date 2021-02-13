let numbers = document.getElementsByClassName('btn-num');
let operations = document.getElementsByClassName('btn-operation');
let result = document.getElementsByClassName('result-btn');
let des = document.querySelectorAll('.btn-desimal');
let clearBtn = document.getElementsByClassName('clearBtn');
// let ce = document.getElementById('clearCE');
// let c = document.getElementById("clearC");


for (let i = 0; i < result.length; i++) {
	result[i].addEventListener("click", function (e) {
		console.log('click result');
	});
}

for (let i = 0; i < operations.length; i++) {
	operations[i].addEventListener("click", operation);
};

for (let i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", numberPress);
};


for (let i = 0; i < des.length; i++) {
	des[i].addEventListener("click", function (e) {
		console.log('click des');
	});
}

for (let i = 0; i < clearBtn.length; i++) {
	clearBtn[i].addEventListener('click', function (e) {
		clear(e.srcElement.id);
	});
};


// ce.addEventListener('click', function (e) {
// 	console.log(e);
// 	console.log('click CE');
// });

// c.addEventListener('click', function () {
// 	console.log('click C');
// });




function numberPress() {
	console.log('click num');
};

function operation(params) {
	console.log('click operations');
};

function desimal(params) {

};

function clear(id) {
	console.log('click ' + id + '!');

};

