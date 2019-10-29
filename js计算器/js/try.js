
function myFunction() {
	    document.getElementById("demo").innerHTML = "段落被更改。";
	}

function shiadd() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	a = parseInt(a);
	b = parseInt(b);
	var sum = a + b;
	document.getElementById("s").innerHTML = sum;
}

function de() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	a = parseInt(a);
	b = parseInt(b);
	var sum = a - b;
	document.getElementById("s").innerHTML = sum;
}

function c() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	a = parseInt(a);
	b = parseInt(b);
	var sum = a * b;
	document.getElementById("s").innerHTML = sum;
}

function chu() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	a = parseInt(a);
	b = parseInt(b);
	var sum = a / b;
	document.getElementById("s").innerHTML = sum;
}