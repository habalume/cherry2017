var numbers = [];

while (numbers.length < 5) {
	var randNum = Math.ceil(Math.random() * 69);

	if(numbers.includes(randNum) === false) {
		numbers.push(randNum);
	}
}

numbers = numbers.sort();

numbers.push(Math.ceil(Math.random() * 26));

console.log(numbers.join(", "));

