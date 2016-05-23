$(document).ready(function() {
	for (var i=1; i <=100; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			$("p").append("FizzBuzz ");
		}
		else if (i % 3 === 0) {
			$("p").append("Fizz ");
		}
		else if (i % 5 === 0) {
			$("p").append("Buzz ");
		}
		else {
			$("p").append(i + " ");
		}
	}
});