const buttons_div = document.querySelector('.buttons');
const digits_div = document.createElement('div');
buttons_div.appendChild(digits_div);

const input_div = document.querySelector(".input");
const input = document.createElement("input");
input.classList.add("input");
input_div.appendChild(input);

for (let i = 0; i < 10; i ++){
	const button = document.createElement("button");
	let button_value = button.innerText = i;
	digits_div.appendChild(button);
	button.addEventListener('click', function () {
		input.value += String(button_value);
	})
}

const add_button = document.createElement("button");
add_button.classList.add("adding");
add_button.innerText = '+';

const subtractor_button = document.createElement("button");
subtractor_button.classList.add('substracting');
subtractor_button.innerText = '-';

const divide_button = document.createElement("button");
divide_button.classList.add("division")
divide_button.innerText = '/';

const multiply_button = document.createElement("button");
multiply_button.classList.add("multiplication");
multiply_button.innerText = '*';

// const square_root = document.createElement("button");
// square_root.classList.add("root_out");
// square_root.innerText = '√';

const degree = document.createElement("button");
degree.classList.add("raise_to_degree");
degree.innerText = '^';

const equality_button = document.createElement('button');
equality_button.classList.add('equality');
equality_button.innerText = '=';

const delete_button = document.createElement('button');
delete_button.classList.add('delete_digit');
delete_button.innerText = '←';

const operation_buttons = [add_button, subtractor_button, divide_button, multiply_button];
const operations_div = document.querySelector('.operation_buttons_div');
operation_buttons.forEach(function (button){
	operations_div.appendChild(button);
	button.addEventListener('click', function (){
		input.value += button.innerText;
	})
})
operations_div.appendChild(equality_button);
operations_div.appendChild(delete_button);
operations_div.appendChild(degree);
buttons_div.appendChild(operations_div);

delete_button.addEventListener('click', function () {
	input.value = String(input.value).slice(0, input.value.length - 1);
})

// operations_div.appendChild(degree);
// degree.addEventListener('click', function () {
// 	input.value += degree.innerText;
// })


equality_button.addEventListener('click', function () {
	input.value = eval(String(input.value));
})




